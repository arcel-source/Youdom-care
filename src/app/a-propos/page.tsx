import type { Metadata } from "next";
import AProposContent from "./AProposContent";

export const metadata: Metadata = {
  title: "À Propos — Qui Sommes-Nous",
  description:
    "Youdom Care, spécialiste de l'aide à domicile à Paris et en Île-de-France. Découvrez notre mission, nos valeurs et notre engagement pour le bien-être de vos proches.",
};

export default function AProposPage() {
  return <AProposContent />;
}
