import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, brandStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Prescripteurs : médecins, MDPH, hôpitaux — Youdom Care, votre partenaire SAAD",
  description:
    "Médecins, assistants sociaux, MDPH, hôpitaux : nous sommes votre partenaire de confiance pour la mise en place rapide d'aide à domicile. Démarrage 48 h, agréments SAP/SAAD.",
};

const audiencePros = [
  { icon: "👨‍⚕️", title: "Médecins traitants & spécialistes", description: "Pour les patients qui sortent de chimio, d'AVC, ou en perte d'autonomie progressive." },
  { icon: "🏥", title: "Services hospitaliers & cadres", description: "Pour préparer les sorties d'hospitalisation : 48 h chrono, week-end inclus, coordination équipe." },
  { icon: "👥", title: "Assistants sociaux & MDS", description: "Partenaire de confiance pour l'orientation des familles. Devis sous 24 h, dossiers d'aide montés." },
  { icon: "🏛️", title: "MDPH & SAAD partenaires", description: "Nous coopérons sur les plans personnalisés, les évaluations conjointes, les plans PCH." },
  { icon: "🤝", title: "Mutuelles & caisses retraite", description: "Conventions de tiers payant, gestion administrative simplifiée pour vos assurés." },
  { icon: "💼", title: "Mandataires judiciaires", description: "Coordination avec les majeurs protégés, factures conformes, traçabilité complète." },
];

const advantages = [
  {
    title: "Démarrage en 48-72 h",
    description: "Sortie d'hôpital, urgence sociale, dégradation rapide : nous mobilisons une auxiliaire sous 48-72 h, week-end compris.",
  },
  {
    title: "Coordination médicale",
    description: "Cahier de liaison à domicile, compte-rendu mensuel partageable, alerte rapide en cas d'évolution. Nous travaillons en équipe.",
  },
  {
    title: "Dossiers d'aide montés",
    description: "APA, PCH, MaPrimeAdapt, mutuelle, PRADO : nous montons les dossiers à votre place. Vos patients en bénéficient gratuitement.",
  },
  {
    title: "Continuité d'intervenant",
    description: "Le même auxiliaire à chaque visite. Pour les patients désorientés (Alzheimer), c'est vital. Pour les familles, c'est rassurant.",
  },
  {
    title: "Auxiliaires en CDI formées",
    description: "Pas d'auto-entrepreneurs. Pas de turnover. Sélection en 6 étapes, formations continues, casier B3 vérifié annuellement.",
  },
  {
    title: "Couverture IDF complète",
    description: "Paris + petite couronne + grande couronne (Yvelines, Essonne, Seine-et-Marne, Hauts-de-Seine, Val-d'Oise, Seine-Saint-Denis).",
  },
];

export default function PrescripteursPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary-dark text-white pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Prescripteurs</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow !text-secondary">Pour les professionnels du soin et du social</span>
              <h1 className="text-white">
                Un partenaire SAAD réactif,
                <br />
                <span className="text-secondary">pour vos patients et vos publics.</span>
              </h1>
              <p className="lead !text-white/90 mt-5">
                Vous êtes médecin, assistant social, MDPH, cadre hospitalier ?
                Nous sommes votre relais terrain pour la mise en place d&apos;aide à
                domicile : démarrage rapide, dossiers d&apos;aide montés, coordination
                médicale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  href={`tel:${siteConfig.phone.mainE164}`}
                  variant="primary"
                  size="lg"
                  glow
                  icon={<span aria-hidden="true">📞</span>}
                >
                  Ligne dédiée pros : {siteConfig.phone.main}
                </Button>
                <Button href="/contact" variant="white" size="lg">
                  Devenir partenaire
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-5">
                <span aria-hidden="true">⏱️</span> Devis sous 24 h •
                <span aria-hidden="true"> 🏥</span> Mise en place 48-72 h •
                <span aria-hidden="true"> 🤝</span> Convention possible
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15 col-span-2">
                <div className="text-3xl font-bold text-secondary mb-1">{brandStats.familiesAccompanied}+</div>
                <p className="text-sm text-white/80">familles accompagnées en IDF</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15">
                <div className="text-3xl font-bold text-secondary mb-1">48 h</div>
                <p className="text-xs text-white/80">délai mise en place urgence</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15">
                <div className="text-3xl font-bold text-secondary mb-1">{brandStats.satisfactionRate}%</div>
                <p className="text-xs text-white/80">satisfaction client</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* À QUI ON PARLE */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre réseau"
            title="Avec qui travaillons-nous au quotidien ?"
            description="Nous sommes le partenaire SAAD régulier de nombreux acteurs du soin et du social en Île-de-France."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {audiencePros.map((p) => (
              <div
                key={p.title}
                className="bg-warm rounded-2xl p-6 border border-transparent hover:border-primary hover:bg-white transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{p.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AVANTAGES PARTENAIRE */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Pourquoi nous orienter vers Youdom Care"
            title="6 garanties pour vos patients et publics"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {advantages.map((a, idx) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border border-border shadow-card">
                <div className="text-secondary text-3xl font-bold mb-3">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{a.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS PARTENARIAT */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comment vous orienter vers nous ?"
            title="3 façons simples de saisir Youdom Care"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-warm rounded-2xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">📞</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Appel direct</h3>
              <p className="text-sm text-text-light leading-relaxed mb-4">
                Pour les urgences (sortie d&apos;hôpital, dégradation rapide) : ligne dédiée pros, réponse sous 1 h ouvrée.
              </p>
              <a
                href={`tel:${siteConfig.phone.mainE164}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
              >
                {siteConfig.phone.main}
              </a>
            </div>

            <div className="bg-warm rounded-2xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Email pro</h3>
              <p className="text-sm text-text-light leading-relaxed mb-4">
                Pour les orientations programmées (PCH, plan d&apos;aide PHV, demande
                d&apos;information) : devis sous 24 h ouvrées.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=Orientation%20professionnelle`}
                className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="bg-warm rounded-2xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">🤝</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Convention</h3>
              <p className="text-sm text-text-light leading-relaxed mb-4">
                Pour les structures (hôpital, MDS, mutuelle) : convention de partenariat
                avec processus dédié, contact unique, reporting.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                Demander une convention →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <Container size="narrow" className="text-center">
          <span className="eyebrow !text-secondary">Devenir partenaire</span>
          <h2 className="text-white">
            Construisons ensemble des parcours fluides pour vos patients.
          </h2>
          <p className="lead !text-white/85 mt-4">
            Notre équipe est joignable pour échanger sur vos besoins, vos
            spécificités, vos volumes attendus. Pas de bureaucratie : du concret.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button
              href={`tel:${siteConfig.phone.mainE164}`}
              variant="primary"
              size="lg"
              glow
            >
              📞 {siteConfig.phone.main}
            </Button>
            <Button
              href={`mailto:${siteConfig.email}?subject=Partenariat%20pro`}
              variant="white"
              size="lg"
            >
              ✉️ {siteConfig.email}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
