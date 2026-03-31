import type { Metadata } from "next";
import RecrutementContent from "./RecrutementContent";

export const metadata: Metadata = {
  title: "Recrutement — Rejoignez Youdom Care",
  description:
    "Youdom Care recrute des auxiliaires de vie, aides ménagères, gardes de nuit. Rejoignez une équipe humaine et bienveillante. Candidatez maintenant.",
};

export default function RecrutementPage() {
  return <RecrutementContent />;
}
