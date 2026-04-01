import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comment Ça Marche | Youdom Care",
  description: "Notre processus en 5 étapes simples : contact, évaluation, sélection, plan d'aide, démarrage. Transparent et humain.",
};

const steps = [
  {
    num: "01",
    icon: "📞",
    title: "Prenez contact",
    desc: "Par téléphone ou formulaire. Gratuit et sans engagement. Un conseiller prend en charge votre demande et vous rappelle sous 2 heures.",
    highlight: "Gratuit & sans engagement",
    image: "/images/steps/1.png",
    imageAlt: "Étape 1 : Prise de contact avec Youdom Care",
  },
  {
    num: "02",
    icon: "🏠",
    title: "Évaluation à domicile",
    desc: "Un conseiller Youdom Care se déplace gratuitement chez vous. Il identifie les besoins, présente les aides financières (APA, PCH, crédit d'impôt).",
    highlight: "Visite gratuite",
    image: "/images/steps/2.png",
    imageAlt: "Étape 2 : Évaluation gratuite à domicile",
  },
  {
    num: "03",
    icon: "🤝",
    title: "Votre auxiliaire dédiée",
    desc: "Nous sélectionnons l'auxiliaire idéale en fonction de votre situation et vos préférences. Rencontre à domicile avant démarrage.",
    highlight: "Intervenante unique",
    image: "/images/steps/3.png",
    imageAlt: "Étape 3 : Sélection de votre auxiliaire dédiée",
  },
  {
    num: "04",
    icon: "📋",
    title: "Plan d'aide personnalisé",
    desc: "Ensemble, nous déterminons durée, fréquence, jours, horaires et services. Tout est clair, écrit et adapté à votre rythme.",
    highlight: "100% sur mesure",
    image: "/images/steps/4.png",
    imageAlt: "Étape 4 : Plan d'aide personnalisé sur mesure",
  },
  {
    num: "05",
    icon: "⭐",
    title: "Démarrage & suivi",
    desc: "Les prestations commencent avec la même personne. Suivi qualité régulier, enquêtes de satisfaction, ajustements selon l'évolution.",
    highlight: "Suivi permanent",
    image: null,
    imageAlt: "",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/functioning/intro.jpeg"
            alt="Comment fonctionne l'aide à domicile Youdom Care"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-primary-light/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
            Comment Ça Marche
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Simple, humain et efficace. De votre premier appel à l&apos;accompagnement quotidien.
          </p>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.num} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                {/* Text content */}
                <div className="flex-1">
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-secondary font-bold text-sm">ÉTAPE {step.num}</span>
                        <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                          {step.highlight}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-text mb-2">{step.title}</h2>
                      <p className="text-text-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                {step.image && (
                  <div className="flex-1 hidden lg:block">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNEMENT ADDITIONNEL */}
      <section className="py-16 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/our-functionning-2.png"
                alt="Notre fonctionnement détaillé chez Youdom Care"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8">Nos engagements</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "✅", text: "Même auxiliaire à chaque intervention" },
                  { icon: "⚡", text: "Réponse garantie sous 2 heures" },
                  { icon: "📞", text: "Disponible 24h/24, 7j/7" },
                  { icon: "💰", text: "Crédit d'impôt de 50%" },
                  { icon: "🎓", text: "Personnel diplômé et formé" },
                  { icon: "📊", text: "Suivi qualité régulier" },
                ].map((eng) => (
                  <div key={eng.text} className="bg-white rounded-xl p-5 flex items-center gap-3 shadow-sm">
                    <span className="text-2xl">{eng.icon}</span>
                    <span className="font-medium text-text">{eng.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
          <p className="text-white/70 text-lg mb-8">
            La première étape est gratuite et sans engagement.
          </p>
          <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            Demander mon Devis Gratuit →
          </a>
        </div>
      </section>
    </>
  );
}
