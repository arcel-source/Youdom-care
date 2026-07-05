/**
 * Helpers partagés pour les routes API (formulaires publics).
 *
 * Objectifs :
 *  - validation stricte des entrées (email, longueurs) ;
 *  - protection anti-spam basique sans dépendance externe :
 *      • rate-limiting en mémoire par IP (fenêtre glissante) ;
 *      • honeypot (champ piège rempli uniquement par les bots) ;
 *  - échappement HTML de toute donnée utilisateur réinjectée dans un email HTML.
 *
 * NOTE : le rate-limit en mémoire est suffisant pour une seule instance. En
 * environnement serverless multi-instances (Vercel), le remplacer par un store
 * partagé (Upstash Redis, Vercel KV) pour une vraie protection.
 */

import { NextRequest, NextResponse } from "next/server";

/* -------------------------------------------------------------------------- */
/*  Validation                                                                 */
/* -------------------------------------------------------------------------- */

// RFC-5322 simplifiée : suffisante pour rejeter les saisies manifestement invalides.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value);
}

export function isNonEmptyString(value: unknown, min = 1, max = 5000): value is string {
  return typeof value === "string" && value.trim().length >= min && value.length <= max;
}

/* -------------------------------------------------------------------------- */
/*  Échappement HTML (anti-injection dans les emails)                          */
/* -------------------------------------------------------------------------- */

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Échappe une valeur destinée à être injectée dans du HTML d'email.
 * Toute entrée non-string est convertie en chaîne vide.
 */
export function escapeHtml(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

/* -------------------------------------------------------------------------- */
/*  Honeypot anti-bot                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Renvoie true si le champ piège est rempli (donc soumission robot).
 * Les formulaires exposent un champ caché nommé `website` que les humains
 * ne voient jamais.
 */
export function isHoneypotTriggered(body: Record<string, unknown> | null | undefined): boolean {
  if (!body) return false;
  const trap = body.website ?? body._gotcha;
  return typeof trap === "string" && trap.trim().length > 0;
}

/* -------------------------------------------------------------------------- */
/*  Rate-limiting en mémoire (fenêtre glissante)                               */
/* -------------------------------------------------------------------------- */

type Hit = { count: number; resetAt: number };
const buckets = new Map<string, Hit>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // 5 soumissions / minute / IP

function clientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Applique le rate-limit. Retourne `null` si la requête est autorisée,
 * ou une NextResponse 429 si la limite est dépassée.
 */
export function checkRateLimit(request: NextRequest, key: string): NextResponse | null {
  const now = Date.now();
  const id = `${key}:${clientIp(request)}`;
  const hit = buckets.get(id);

  // Purge opportuniste des entrées expirées pour éviter la fuite mémoire.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.resetAt < now) buckets.delete(k);
    }
  }

  if (!hit || hit.resetAt < now) {
    buckets.set(id, { count: 1, resetAt: now + WINDOW_MS });
    return null;
  }

  if (hit.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((hit.resetAt - now) / 1000);
    return NextResponse.json(
      { error: "Trop de requêtes. Merci de réessayer dans une minute." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  hit.count += 1;
  return null;
}
