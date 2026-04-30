import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Espace client — Youdom Care",
  description:
    "Connectez-vous à votre espace client Youdom Care : planning des interventions, factures, attestations fiscales, messagerie avec votre coordinatrice.",
  robots: { index: false, follow: false },
};

const benefits = [
  { icon: "📅", title: "Planning en temps réel", description: "Visualisez les interventions passées, présentes et à venir." },
  { icon: "💬", title: "Messagerie coordinatrice", description: "Échangez directement avec votre coordinatrice dédiée." },
  { icon: "🧾", title: "Factures & attestations", description: "Téléchargez vos justificatifs fiscaux en 1 clic." },
  { icon: "📊", title: "Suivi qualité", description: "Évaluez chaque intervention, suivez votre satisfaction." },
];

export default function EspaceClientPage() {
  return (
    <section className="bg-warm-grain py-12 sm:py-20 min-h-[calc(100vh-200px)]">
      <Container>
        <nav className="flex items-center gap-2 text-sm text-text-light mb-8" aria-label="Fil d'ariane">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span className="text-text-muted">Espace client</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Bénéfices */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="eyebrow">Réservé aux clients Youdom Care</span>
            <h1>
              Votre espace personnel.
              <br />
              <span className="text-gradient">Tout suivre, tout retrouver.</span>
            </h1>
            <p className="lead mt-5">
              Un seul endroit pour piloter votre accompagnement : planning,
              factures, messagerie avec votre coordinatrice, suivi qualité.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-5 border border-border">
                  <div className="text-2xl mb-2" aria-hidden="true">{b.icon}</div>
                  <h3 className="text-sm font-bold text-primary-dark mb-1">{b.title}</h3>
                  <p className="text-xs text-text-light leading-snug">{b.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-light mt-6">
              Pas encore client ?{" "}
              <Link href="/demander-devis" className="text-primary font-bold hover:underline">
                Demandez un devis gratuit →
              </Link>
            </p>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <LoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
