import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body ?? {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    await notifyTeam("Nouvelle inscription newsletter", {
      reçu_le: new Date().toISOString(),
      email,
      source: source ?? "inconnu",
    });

    await sendClientConfirmation(
      email,
      "Bienvenue dans la newsletter Youdom Care",
      `
        <p>Bonjour,</p>
        <p>Merci pour votre inscription à la newsletter ${siteConfig.name}.</p>
        <p>Vous recevrez 1 email par mois maximum, avec :</p>
        <ul>
          <li>Nos articles et guides récents</li>
          <li>Les évolutions des aides (APA, PCH, crédit d'impôt)</li>
          <li>Des ressources pour aidants familiaux</li>
        </ul>
        <p>Désinscription en 1 clic à tout moment depuis n'importe quel email.</p>
        <p>À bientôt,<br/>L'équipe ${siteConfig.name}</p>
      `,
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /newsletter error:", err);
    return NextResponse.json(
      { error: "Erreur d'inscription." },
      { status: 500 },
    );
  }
}
