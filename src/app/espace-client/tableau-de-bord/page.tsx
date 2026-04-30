import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aperçu de l'espace client — Youdom Care",
  description: "Découvrez ce que vous trouverez dans votre espace personnel Youdom Care : planning, factures, messagerie.",
  robots: { index: false, follow: false },
};

const upcomingInterventions = [
  {
    date: "Lun. 4 mai",
    time: "8h30 – 11h30",
    auxiliaire: "Aïcha M.",
    type: "Aide à la toilette + petit-déjeuner",
    status: "confirmed" as const,
  },
  {
    date: "Mer. 6 mai",
    time: "8h30 – 11h30",
    auxiliaire: "Aïcha M.",
    type: "Aide à la toilette + courses",
    status: "confirmed" as const,
  },
  {
    date: "Ven. 8 mai",
    time: "8h30 – 11h30",
    auxiliaire: "Aïcha M.",
    type: "Aide à la toilette + RDV kiné",
    status: "confirmed" as const,
  },
  {
    date: "Sam. 9 mai",
    time: "14h – 17h",
    auxiliaire: "Christine D. (binôme)",
    type: "Sortie au marché + accompagnement",
    status: "tentative" as const,
  },
];

const pastInterventions = [
  { date: "Ven. 1ᵉʳ mai", duration: "3 h", auxiliaire: "Aïcha M.", note: "RAS, bénéficiaire en forme" },
  { date: "Mer. 29 avril", duration: "3 h", auxiliaire: "Aïcha M.", note: "Petite chute évitée dans la salle de bain — barre installée" },
  { date: "Lun. 27 avril", duration: "3 h", auxiliaire: "Aïcha M.", note: "Bonne humeur, visite voisine" },
];

const invoices = [
  { id: "F-2026-0042", date: "30 avr. 2026", amount: "768 €", status: "paid" as const, period: "Avril 2026" },
  { id: "F-2026-0028", date: "31 mars 2026", amount: "768 €", status: "paid" as const, period: "Mars 2026" },
  { id: "F-2026-0014", date: "29 fév. 2026", amount: "768 €", status: "paid" as const, period: "Février 2026" },
];

const messages = [
  {
    from: "Sandrine R.",
    role: "Coordinatrice dédiée",
    when: "il y a 2 h",
    preview: "Bonjour, je confirme la mise en place du nouveau planning à partir du 6 mai. La nouvelle auxiliaire de remplacement Christine sera présentée samedi…",
  },
  {
    from: "Aïcha M.",
    role: "Auxiliaire",
    when: "hier",
    preview: "Bonjour Madame, je voulais vous prévenir que votre maman a très bien dormi et a pris son petit déjeuner avec appétit ce matin.",
  },
];

export default function DashboardDemoPage() {
  return (
    <>
      {/* Bannière démo */}
      <div className="bg-secondary-50 border-b border-secondary/30">
        <Container>
          <div className="py-3 flex items-center justify-between gap-4 flex-wrap text-sm">
            <p className="text-primary-dark">
              <span className="font-bold">🎯 Aperçu démo</span> — toutes les
              données affichées sont fictives. La connexion réelle est en cours
              de déploiement.
            </p>
            <Link href="/espace-client" className="text-primary font-bold hover:underline">
              ← Retour à la connexion
            </Link>
          </div>
        </Container>
      </div>

      <section className="bg-warm-grain py-10 sm:py-14">
        <Container size="wide">
          {/* Header dashboard */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow">Tableau de bord</span>
              <h1 className="m-0">Bonjour Marie 👋</h1>
              <p className="text-text-light mt-1">
                Aperçu de l&apos;accompagnement de votre maman, Mme T.
              </p>
            </div>
            <div className="flex gap-2">
              <Button href="/espace-client/tableau-de-bord" variant="outline" size="sm">
                Tableau de bord
              </Button>
              <Button href="#" variant="ghost" size="sm">
                Mon profil
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Heures ce mois" value="48 h" hint="vs. plan : 48 h" tone="primary" />
            <StatCard label="Interventions" value="12" hint="restantes ce mois" tone="accent" />
            <StatCard label="Reste à charge" value="384 €" hint="sur 768 € brut" tone="success" />
            <StatCard label="Score qualité" value="9,7/10" hint="basé sur 11 évaluations" tone="warm" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Colonne 1 — planning */}
            <div className="lg:col-span-2 space-y-6">
              <Panel title="Prochaines interventions" action="Voir le planning complet →">
                <div className="space-y-3">
                  {upcomingInterventions.map((i, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary transition-colors"
                    >
                      <div className="text-center shrink-0 px-3 py-2 bg-primary-50 rounded-lg">
                        <div className="text-xs uppercase tracking-wider font-bold text-primary">
                          {i.date.split(" ")[0]}
                        </div>
                        <div className="text-lg font-bold text-primary-dark">
                          {i.date.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap mb-1">
                          <span className="text-sm font-semibold text-primary-dark">{i.time}</span>
                          {i.status === "tentative" ? (
                            <span className="inline-block px-2 py-0.5 bg-warm text-text-muted text-xs rounded-full">
                              À confirmer
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-0.5 bg-success-50 text-success text-xs rounded-full">
                              Confirmé
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-text">{i.type}</div>
                        <div className="text-xs text-text-light mt-1">
                          👤 {i.auxiliaire}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel title="Historique récent" action="Voir tout l'historique →">
                <div className="space-y-3">
                  {pastInterventions.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-3 rounded-lg bg-warm"
                    >
                      <div className="text-xs text-text-muted shrink-0 w-24">{p.date}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-primary-dark">
                          {p.duration} · {p.auxiliaire}
                        </div>
                        <div className="text-xs text-text-light">{p.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Colonne 2 — messagerie + factures */}
            <div className="space-y-6">
              <Panel title="Messagerie" action="Tous les messages →">
                <div className="space-y-3">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border hover:border-primary transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <div className="text-sm font-bold text-primary-dark">{m.from}</div>
                          <div className="text-xs text-text-muted">{m.role}</div>
                        </div>
                        <span className="text-xs text-text-muted shrink-0">{m.when}</span>
                      </div>
                      <p className="text-xs text-text-light line-clamp-3 mt-2">{m.preview}</p>
                    </div>
                  ))}
                </div>
                <Button href="#" variant="outline" size="sm" fullWidth className="mt-4">
                  ✉️ Nouveau message
                </Button>
              </Panel>

              <Panel title="Factures" action="Toutes les factures →">
                <div className="space-y-2">
                  {invoices.map((inv) => (
                    <div
                      key={inv.id}
                      className="flex items-center justify-between gap-2 p-3 rounded-lg bg-warm hover:bg-white border border-transparent hover:border-border transition-all"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-primary-dark">
                          {inv.period}
                        </div>
                        <div className="text-xs text-text-muted truncate">
                          {inv.id} · {inv.date}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-bold text-primary-dark text-sm">{inv.amount}</div>
                        <span className="inline-block px-2 py-0.5 bg-success-50 text-success text-xs rounded-full">
                          Payée
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button href="#" variant="ghost" size="sm" fullWidth className="mt-3">
                  📥 Télécharger l&apos;attestation fiscale 2025
                </Button>
              </Panel>

              <div className="bg-primary text-white rounded-2xl p-5">
                <div className="text-2xl mb-2" aria-hidden="true">📞</div>
                <h3 className="font-bold text-base mb-1">Une question ?</h3>
                <p className="text-sm text-white/80 mb-4 leading-snug">
                  Votre coordinatrice Sandrine est joignable du lundi au samedi.
                </p>
                <a
                  href={`tel:${siteConfig.phone.mainE164}`}
                  className="block w-full px-4 py-2.5 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-xl text-center text-sm"
                >
                  {siteConfig.phone.main}
                </a>
              </div>
            </div>
          </div>

          {/* CTA bas de page : démo */}
          <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border-2 border-secondary/30 text-center">
            <h3 className="text-primary-dark mb-2">Vous n&apos;êtes pas encore client ?</h3>
            <p className="text-text-light mb-5 max-w-xl mx-auto">
              Cet espace personnel sera disponible dès la mise en place de votre
              accompagnement. Démarrez par un devis gratuit en 3 minutes.
            </p>
            <Button href="/demander-devis" variant="primary" size="md" glow>
              Demander un devis
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function StatCard({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  tone: "primary" | "accent" | "success" | "warm";
}) {
  const map = {
    primary: "bg-primary-50 border-primary/15",
    accent: "bg-accent-50 border-accent/15",
    success: "bg-success-50 border-success/15",
    warm: "bg-secondary-50 border-secondary/20",
  };
  return (
    <div className={`rounded-2xl p-5 border ${map[tone]}`}>
      <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold text-primary-dark">{value}</div>
      <div className="text-xs text-text-light mt-1">{hint}</div>
    </div>
  );
}

function Panel({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-card p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base text-primary-dark m-0">{title}</h2>
        {action ? (
          <Link href="#" className="text-xs font-bold text-primary hover:underline">
            {action}
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
}
