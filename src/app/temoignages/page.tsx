import type { Metadata } from "next";
import TemoignagesContent from "./TemoignagesContent";

export const metadata: Metadata = {
  title: "Témoignages — Ce Que Disent Nos Clients",
  description:
    "Découvrez les avis et témoignages des familles accompagnées par Youdom Care. 98% de satisfaction. Plus de 500 familles nous font confiance.",
};

export default function TemoignagesPage() {
  return <TemoignagesContent />;
}
