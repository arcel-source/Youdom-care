import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";

/**
 * Réception d'une demande de devis.
 * Body attendu (souple, on stocke tout ce qui arrive) :
 *   { profile, services, planning, contact, consent }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation minimale : email obligatoire pour pouvoir répondre
    const email: string | undefined = body?.contact?.email;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide ou manquant." },
        { status: 400 },
      );
    }

    // Notification équipe
    await notifyTeam("Nouvelle demande de devis", {
      reçu_le: new Date().toISOString(),
      ...body,
    });

    // Confirmation client
    const firstName = body?.contact?.firstName || "";
    await sendClientConfirmation(
      email,
      "Votre demande de devis a bien été reçue",
      `
        <p>Bonjour ${firstName || ""},</p>
        <p>Nous venons de recevoir votre demande de devis chez ${siteConfig.name}.</p>
        <p>Une coordinatrice vous rappelle dans les <strong>2 heures ouvrées</strong> qui suivent
        pour qualifier votre besoin et organiser une visite à domicile gratuite.</p>
        <p>Pour toute urgence : <a href="tel:${siteConfig.phone.mainE164}">${siteConfig.phone.main}</a></p>
        <p>À très vite,<br/>L'équipe ${siteConfig.name}</p>
      `,
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /devis error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande." },
      { status: 500 },
    );
  }
}
