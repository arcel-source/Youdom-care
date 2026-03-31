import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Nos Services d'Aide à Domicile",
  description:
    "Découvrez tous nos services d'aide à domicile : aide à l'autonomie, garde de nuit, aide au handicap, transport PMR, aide ménagère, téléassistance. Paris et Île-de-France. Devis gratuit.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
