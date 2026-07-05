import { Metadata } from "next";
import Link from "next/link";
import { brandStats } from "@/lib/site-config";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Espace client — Youdom Care",
  description:
    "Connectez-vous à votre espace client Youdom Care : planning des interventions, factures, attestations fiscales, messagerie avec votre coordinatrice.",
  robots: { index: false, follow: false },
};

const benefits = [
  { icon: "📅", title: "Planning en temps réel", description: "Interventions passées, présentes et à venir." },
  { icon: "💬", title: "Messagerie dédiée", description: "Échangez avec votre coordinatrice et votre auxiliaire." },
  { icon: "🧾", title: "Factures & attestations", description: "Vos justificatifs fiscaux en 1 clic." },
  { icon: "📊", title: "Suivi qualité", description: "Évaluez chaque intervention, suivez votre satisfaction." },
];

export default function EspaceClientPage() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Panneau de marque */}
      <div className="relative overflow-hidden bg-hero-gradient text-white hidden lg:flex flex-col justify-between p-10 xl:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-accent)" }}
        />

        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white text-primary-dark">Y</span>
            Youdom Care
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="eyebrow !text-secondary">Espace client</span>
          <h1 className="text-white text-balance">Votre accompagnement, à portée de main.</h1>
          <p className="lead text-white/85 mt-5">
            Un seul endroit pour tout piloter : planning, factures, messagerie et
            suivi qualité de votre proche.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-lg shrink-0" aria-hidden="true">
                  {b.icon}
                </span>
                <div>
                  <div className="font-bold text-sm">{b.title}</div>
                  <div className="text-sm text-white/70">{b.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-sm text-white/80">
          <div>
            <div className="text-2xl font-bold text-white">{brandStats.familiesAccompanied}+</div>
            familles accompagnées
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div>
            <div className="text-2xl font-bold text-white">{brandStats.satisfactionRate}%</div>
            de satisfaction
          </div>
        </div>
      </div>

      {/* Panneau de connexion */}
      <div className="flex items-center justify-center bg-warm-grain p-6 sm:p-10">
        <div className="w-full max-w-md">
          <nav className="flex items-center gap-2 text-sm text-text-light mb-8 lg:hidden" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-text-muted">Espace client</span>
          </nav>
          <LoginForm />
          <p className="text-sm text-text-light text-center mt-6">
            Pas encore client ?{" "}
            <Link href="/demander-devis" className="text-primary font-bold hover:underline">
              Demandez un devis gratuit →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
