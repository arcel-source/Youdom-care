import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, sendClientConfirmation } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";
import { getGuideBySlug } from "@/lib/guides";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, guideSlug, guideTitle } = body ?? {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!guideSlug || typeof guideSlug !== "string") {
      return NextResponse.json({ error: "Guide non spécifié." }, { status: 400 });
    }

    const guide = getGuideBySlug(guideSlug);
    const downloadUrl = guide
      ? `${siteConfig.url}${guide.pdfPath}`
      : `${siteConfig.url}/guides`;

    await notifyTeam(`Demande de guide : ${guideTitle ?? guideSlug}`, {
      reçu_le: new Date().toISOString(),
      firstName,
      email,
      guideSlug,
      guideTitle,
    });

    await sendClientConfirmation(
      email,
      `Votre guide « ${guideTitle ?? guide?.title ?? "Youdom Care"} »`,
      `
        <p>Bonjour ${firstName || ""},</p>
        <p>Voici le guide que vous avez demandé : <strong>${guideTitle ?? guide?.title ?? ""}</strong>.</p>
        <p><a href="${downloadUrl}" style="background:#1B4D7A;color:white;padding:12px 20px;border-radius:8px;text-decoration:none;display:inline-block">📥 Télécharger le guide (PDF)</a></p>
        <p>Si vous avez des questions, notre équipe est joignable :</p>
        <ul>
          <li>📞 <a href="tel:${siteConfig.phone.mainE164}">${siteConfig.phone.main}</a></li>
          <li>✉️ <a href="mailto:${siteConfig.email}">${siteConfig.email}</a></li>
        </ul>
        <p>À très vite,<br/>L'équipe ${siteConfig.name}</p>
      `,
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
