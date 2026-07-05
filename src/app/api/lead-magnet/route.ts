import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";
import { getGuideBySlug } from "@/lib/guides";
import {
  checkRateLimit,
  escapeHtml,
  isHoneypotTriggered,
  isValidEmail,
} from "@/lib/api-helpers";

export async function POST(request: NextRequest) {
  try {
    const limited = checkRateLimit(request, "lead-magnet");
    if (limited) return limited;

    const body = await request.json();
    const { firstName, email, guideSlug } = body ?? {};

    if (isHoneypotTriggered(body)) return NextResponse.json({ ok: true });

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!guideSlug || typeof guideSlug !== "string") {
      return NextResponse.json({ error: "Guide non spécifié." }, { status: 400 });
    }

    // Le guide (et donc son titre) est résolu côté serveur : on n'injecte
    // jamais le `guideTitle` fourni par le client dans le sujet/HTML de l'email.
    const guide = getGuideBySlug(guideSlug);
    if (!guide) {
      return NextResponse.json({ error: "Guide introuvable." }, { status: 404 });
    }
    const guideTitle = guide.title;
    const downloadUrl = `${siteConfig.url}${guide.pdfPath}`;

    await notifyTeam(`Demande de guide : ${guideTitle}`, {
      reçu_le: new Date().toISOString(),
      firstName,
      email,
      guideSlug,
      guideTitle,
    });

    await sendClientConfirmation(
      email,
      `Votre guide « ${guideTitle} »`,
      `
        <p>Bonjour ${escapeHtml(firstName)},</p>
        <p>Voici le guide que vous avez demandé : <strong>${escapeHtml(guideTitle)}</strong>.</p>
        <p><a href="${downloadUrl}" style="background:#1B4D7A;color:white;padding:12px 20px;border-radius:8px;text-decoration:none;display:inline-block">📥 Télécharger le guide (PDF)</a></p>
        <p>Si vous avez des questions, notre équipe est joignable :</p>
        <ul>
          <li>📞 <a href="tel:${siteConfig.phone.mainE164}">${siteConfig.phone.main}</a></li>
          <li>✉️ <a href="mailto:${siteConfig.email}">${siteConfig.email}</a></li>
        </ul>
        <p>À très vite,<br/>L'équipe ${siteConfig.name}</p>
      `,
      // Le PDF est joint à l'email : le client reçoit directement son document.
      [{ filename: guide.pdfPath.split("/").pop() ?? "guide.pdf", path: downloadUrl }],
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /lead-magnet error:", err);
    return NextResponse.json(
      { error: "Erreur de traitement." },
      { status: 500 },
    );
  }
}
