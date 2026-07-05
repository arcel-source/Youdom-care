import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const pains = [
  {
    icon: "😔",
    title: "La culpabilité de ne pas être là",
    text: "Le travail, les enfants, la distance… Vous faites de votre mieux, mais vous avez l'impression que ce n'est jamais assez.",
  },
  {
    icon: "😰",
    title: "La peur de la chute",
    text: "Chaque appel manqué vous serre le ventre. Et s'il était tombé ? Et si personne ne le savait pendant des heures ?",
  },
  {
    icon: "🥱",
    title: "L'épuisement de tout gérer",
    text: "Médicaments, rendez-vous, repas, dossiers, papiers… La charge mentale ne s'arrête jamais. Vous êtes à bout.",
  },
  {
    icon: "🙅",
    title: "Le refus d'être aidé",
    text: "« Je n'ai besoin de personne. » Votre proche refuse « un étranger » chez lui, et vous ne savez plus comment faire.",
  },
];

export default function EmpathyBlock() {
  return (
    <section className="bg-warm-grain py-16 sm:py-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <span className="eyebrow">On vous comprend</span>
              <h2>
                Accompagner un proche,
                <span className="text-gradient"> c&apos;est lourd à porter seul.</span>
              </h2>
              <p className="lead mt-5">
                Vous n&apos;êtes pas un mauvais fils, une mauvaise fille, un mauvais
                conjoint. Vous êtes juste humain, et vous ne pouvez pas être partout.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Notre métier, c&apos;est exactement ça : reprendre une partie de cette
                charge, pour que vous redeveniez simplement un proche — et non une
                infirmière, une secrétaire et un chauffeur à plein temps.
              </p>
              <div className="mt-7">
                <Button href="/publics/aidants-familiaux" variant="outline" size="md">
                  Vous aidez un proche ? →
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {pains.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 90} className="h-full">
                  <div className="bg-white rounded-2xl p-6 border border-border card-lift h-full">
                    <div className="text-3xl mb-3" aria-hidden="true">{p.icon}</div>
                    <h3 className="text-base font-bold text-primary-dark mb-2">{p.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bascule vers la solution */}
        <Reveal>
          <div className="mt-10 relative overflow-hidden rounded-3xl bg-primary text-white p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/30 blur-3xl"
            />
            <div className="relative flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-white/20">
                  <Image
                    src="/images/curated/home-hero-couple-warm.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <p className="text-lg sm:text-xl font-display leading-snug">
                  Vous n&apos;avez plus à porter ça seul.
                  <br className="hidden sm:block" />
                  <span className="text-secondary"> On s&apos;occupe du reste.</span>
                </p>
              </div>
              <Button href="/demander-devis" variant="primary" size="lg" glow>
                Parler de votre situation
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
