import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultCriteria = [
  {
    icon: "🎓",
    title: "Diplôme & expérience vérifiés",
    description: "DEAES, DEAVS, ou équivalent. Minimum 2 ans d'expérience auprès du public visé.",
  },
  {
    icon: "🛡️",
    title: "Casier judiciaire B3 vierge",
    description: "Vérification systématique avant tout démarrage de mission. Renouvelée chaque année.",
  },
  {
    icon: "💬",
    title: "Test relationnel",
    description: "Mise en situation en entretien : empathie, écoute, gestion de l'imprévu.",
  },
  {
    icon: "🏠",
    title: "Période d'observation",
    description: "Accompagnement sur les 3 premières missions par notre coordinateur qualité.",
  },
];

type Props = {
  title?: string;
  description?: string;
  specialization?: string;
  image?: string;
  imageAlt?: string;
  criteria?: typeof defaultCriteria;
};

export default function ServiceProvider({
  title = "Qui sont vos intervenants ?",
  description = "Nos auxiliaires de vie sont en CDI, formées en continu, et sélectionnées sur des critères stricts. Pas d'auto-entrepreneurs, pas de turnover.",
  specialization,
  image = "/images/curated/public-aidants-knitting-granddaughter.jpg",
  imageAlt = "Auxiliaire de vie en intervention",
  criteria = defaultCriteria,
}: Props) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image + carte */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              {specialization ? (
                <div className="hidden md:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lifted border border-border max-w-[260px]">
                  <div className="text-xs uppercase tracking-wider font-bold text-accent-dark mb-1">
                    Spécialisation
                  </div>
                  <p className="text-sm text-primary-dark font-semibold leading-snug">
                    {specialization}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Critères */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Notre équipe"
              title={title}
              description={description}
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {criteria.map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 p-5 rounded-2xl bg-warm border border-transparent hover:border-primary hover:bg-white transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0 shadow-card"
                    aria-hidden="true"
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-sm mb-1">{c.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
