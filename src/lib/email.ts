/**
 * Service d'envoi d'emails.
 *
 * En production, branchez Resend (ou Sendgrid, Mailgun, Brevo) :
 *   1. npm install resend
 *   2. Définir RESEND_API_KEY + EMAIL_FROM dans .env.local
 *   3. Décommenter le bloc Resend ci-dessous
 *
 * En l'absence de clé API, les emails sont loggés dans la console
 * (utile pour le développement local).
 *
 * NOTE : pour activer Resend, décommentez l'import et le code dans sendEmail.
 */

// import { Resend } from "resend";

export type EmailMessage = {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
};

const FROM = process.env.EMAIL_FROM || "Youdom Care <noreply@youdom-care.com>";
const TEAM_INBOX = process.env.TEAM_INBOX || "contact@youdom-care.com";
const HAS_RESEND = !!process.env.RESEND_API_KEY;

/**
 * Envoie un email. Retourne un identifiant ou null en cas d'erreur.
 */
export async function sendEmail(message: EmailMessage): Promise<string | null> {
  // Mode développement / sans clé API : log uniquement.
  if (!HAS_RESEND) {
    console.log("📧 [EMAIL — mode console]", {
      from: FROM,
      to: message.to,
      subject: message.subject,
      preview: message.text?.slice(0, 200) || "(html only)",
    });
    return `console-${Date.now()}`;
  }

  // Production : décommentez après `npm install resend`
  /*
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: Array.isArray(message.to) ? message.to : [message.to],
      subject: message.subject,
      html: message.html,
      text: message.text,
      replyTo: message.replyTo,
    });
    if (error) {
      console.error("Resend error:", error);
      return null;
    }
    return data?.id ?? null;
  } catch (err) {
    console.error("sendEmail error:", err);
    return null;
  }
  */

  return `resend-not-configured-${Date.now()}`;
}

/**
 * Notifie l'équipe Youdom Care d'un nouveau lead/contact.
 */
export function notifyTeam(subject: string, payload: Record<string, unknown>) {
  const text = Object.entries(payload)
    .map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v, null, 2) : v}`)
    .join("\n");
  return sendEmail({
    to: TEAM_INBOX,
    subject: `[Youdom Care] ${subject}`,
    text,
  });
}

/**
 * Email de confirmation client basique.
 */
export function sendClientConfirmation(
  to: string,
  subject: string,
  bodyHtml: string,
) {
  return sendEmail({
    to,
    subject,
    html: bodyHtml,
    replyTo: TEAM_INBOX,
  });
}
