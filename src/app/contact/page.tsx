import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Nous Contacter",
  description:
    "Contactez Youdom Care pour toute demande d'aide à domicile. Formulaire, téléphone, email. 61 rue de Lyon, 75012 Paris. Réponse sous 2h.",
};

export default function ContactPage() {
  return <ContactContent />;
}
