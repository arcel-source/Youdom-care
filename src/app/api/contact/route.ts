import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body ?? {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length < 5) {
      return NextResponse.json({ error: "Message trop court." }, { status: 400 });
    }

    await notifyTeam("Nouveau message contact", {
      reçu_le: new Date().toISOString(),
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    });

    await sendClientConfirmation(
      email,
      "Votre message a bien été reçu",
      `
        <p>Bonjour ${firstName || ""},</p>
        <p>Nous avons bien reçu votre message chez ${siteConfig.name}.</p>
        <p>Notre équipe vous répond dans les 2 heures ouvrées.</p>
        <p>Pour toute urgence : <a href="tel:${siteConfig.phone.mainE164}">${siteConfig.phone.main}</a></p>
        <p>À très vite,<br/>L'équipe ${siteConfig.name}</p>
      `,
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /contact error:", err);
    return NextResponse.json(
      { error: "Erreur de traitement." },
      { status: 500 },
    );
  }
}
