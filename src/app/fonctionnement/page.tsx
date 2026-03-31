import type { Metadata } from "next";
import FonctionnementContent from "./FonctionnementContent";

export const metadata: Metadata = {
  title: "Comment Ça Marche — Notre Fonctionnement",
  description:
    "Découvrez comment Youdom Care met en place votre aide à domicile en 4 étapes simples : contact, évaluation gratuite, sélection de votre auxiliaire, accompagnement continu.",
};

export default function FonctionnementPage() {
  return <FonctionnementContent />;
}
