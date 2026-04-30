import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Aide à domicile handicap — accompagnement adulte et enfant | Youdom Care",
  description:
    "Accompagnement à domicile pour personnes en situation de handicap, adultes et enfants. Approche autodétermination, PCH, MDPH. Auxiliaires formées spécialisées.",
};

const handicapServices = services.filter((s) =>
  (s.audience as readonly string[]).includes("handicap"),
);

const principles = [
  {
    icon: "🎯",
    title: "Autodétermination",
    description:
      "Vous décidez. Nous accompagnons. Pas de cadre imposé : votre projet de vie guide nos interventions.",
  },
  {
    icon: "🤝",
    title: "Respect & dignité",
    description:
      "Le handicap n'efface pas la personne. Aucune infantilisation, aucune mise à distance — du soin humain.",
  },
  {
    icon: "🎓",
    title: "Compétence spécialisée",
    description:
      "Nos auxiliaires sont formées au type de handicap qu'elles accompagnent : moteur, psychique, cognitif, sensoriel.",
  },
  {
    icon: "🔄",
    title: "Continuité absolue",
    description:
      "La même auxiliaire à chaque visite. Le lien construit dans la durée. Changement possible si vous le souhaitez.",
  },
  {
    icon: "📋",
    title: "Coordination MDPH",
    description:
      "Nous montons et défendons les dossiers PCH, AAH, RQTH, AEEH. Service inclus dans l'accompagnement.",
  },
  {
    icon: "👥",
    title: "Coopération SAAD/SAVS",
    description:
      "Nous travaillons en réseau avec les SAAD, SAVS, ESAT, associations. Cohérence garantie.",
  },
];

const aides = [
  { code: "PCH", desc: "Aide humaine prestataire (~14,98 €/h), aides techniques, aménagement domicile." },
  { code: "AAH", desc: "Allocation Adulte Handicapé, cumulable avec autres aides." },
  { code: "AEEH", desc: "Pour les enfants : base + complément 1 à 6, cumul PCH enfant." },
  { code: "Crédit d'impôt 50 %", desc: "Automatique. Coût horaire net divisé par deux." },
];

export default function HandicapPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
          style={{ background: "var(--color-accent)" }}
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Handicap</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow !text-secondary">Pour les personnes en situation de handicap & leurs familles</span>
              <h1 className="text-white">
                Votre projet de vie.
                <br />
                <span className="text-secondary">Vos conditions. Votre rythme.</span>
              </h1>
              <p className="lead !text-white/90 mt-5">
                L&apos;accompagnement à domicile pour personnes en situation de handicap qui
                respecte d&apos;abord ce que vous voulez vivre, ce que vous savez faire, ce
                que vous aimeriez pouvoir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button href="/demander-devis" variant="primary" size="lg" glow>
                  Demander un devis
                </Button>
                <Button
                  href={`tel:${siteConfig.phone.mainE164}`}
                  variant="white"
                  size="lg"
                  icon={<span aria-hidden="true">📞</span>}
                >
                  {siteConfig.phone.main}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/services/aide-handicap-domicile.png"
                  alt="Accompagnement à domicile personne en situation de handicap"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPES */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Notre approche"
            title="6 principes non-négociables pour notre travail"
            description="Le handicap mérite mieux que des prestations standardisées. Voici ce qui guide chacune de nos interventions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-warm rounded-2xl p-6 border border-transparent hover:border-accent hover:bg-white transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{p.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TYPES DE HANDICAP */}
      <section className="bg-warm-grain py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Notre expertise"
            title="Quels handicaps accompagnons-nous ?"
            description="Nos équipes sont formées à la diversité des handicaps. Pour chaque profil, des compétences spécifiques."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-primary-dark mb-3">Handicap moteur</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>• Paraplégie, tétraplégie</li>
                <li>• Infirmité motrice cérébrale (IMC)</li>
                <li>• Sclérose en plaques (SEP)</li>
                <li>• Dystrophies musculaires</li>
                <li>• Suites d&apos;AVC ou de traumatisme</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-primary-dark mb-3">Handicap sensoriel</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>• Déficience visuelle (cécité, malvoyance)</li>
                <li>• Déficience auditive (surdité, malentendance)</li>
                <li>• Sourd-aveugle</li>
                <li>• Aphasie post-AVC</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-primary-dark mb-3">Handicap psychique</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>• Schizophrénie stabilisée</li>
                <li>• Trouble bipolaire</li>
                <li>• Troubles anxieux sévères</li>
                <li>• Dépression chronique</li>
                <li>• Stress post-traumatique</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-primary-dark mb-3">Handicap cognitif & TND</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>• Trouble du spectre autistique (TSA)</li>
                <li>• Déficience intellectuelle</li>
                <li>• TDAH</li>
                <li>• Troubles dys (dyslexie, dyspraxie...)</li>
                <li>• Syndromes génétiques (Down, X fragile, etc.)</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Nos services handicap"
            title="Une palette adaptée à toutes les situations"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {handicapServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-warm rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
              >
                <div className="relative h-44">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light line-clamp-2 mb-3 flex-1">
                    {service.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* AIDES */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Financement"
            title="4 aides cumulables pour rendre l'accompagnement accessible"
            description="Nous montons les dossiers à votre place. Service inclus, gratuit."
            invert
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {aides.map((a) => (
              <div
                key={a.code}
                className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15"
              >
                <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">
                  {a.code}
                </div>
                <p className="text-sm text-white/85 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/aides-financieres" variant="primary" size="lg" glow>
              Tout savoir sur les aides handicap
            </Button>
          </div>
        </Container>
      </section>

      <EngagementsBlock />

      <FinalCTA />
    </>
  );
}
