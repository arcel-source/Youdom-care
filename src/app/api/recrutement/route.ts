import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, position, experience, availability, motivation } = body ?? {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!firstName || !lastName) {
      return NextResponse.json({ error: "Nom et prénom requis." }, { status: 400 });
    }

    await notifyTeam("Nouvelle candidature", {
      reçu_le: new Date().toISOString(),
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      availability,
      motivation,
    });

    await sendClientConfirmation(
      email,
      "Votre candidature a bien été reçue",
      `
        <p>Bonjour ${firstName ?? ""},</p>
        <p>Nous avons bien reçu votre candidature chez ${siteConfig.name}.</p>
        <p>Notre équipe RH étudie votre profil et vous recontacte sous <strong>5 jours ouvrés</strong>.</p>
        <p>Pour toute question : <a href="mailto:${siteConfig.emailRecruitment}">${siteConfig.emailRecruitment}</a></p>
        <p>À très vite,<br/>L'équipe ${siteConfig.name}</p>
      `,
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /recrutement error:", err);
    return NextResponse.json({ error: "Erreur de traitement." }, { status: 500 });
  }
}
