import type { Metadata } from "next";
import DevisContent from "./DevisContent";

export const metadata: Metadata = {
  title: "Devis Gratuit — Aide à Domicile Sur Mesure",
  description:
    "Obtenez votre devis gratuit et personnalisé en 2 minutes. Sans engagement. Réponse sous 2 heures. Crédit d'impôt 50%. Youdom Care, aide à domicile Paris.",
};

export default function DevisPage() {
  return <DevisContent />;
}
