import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment Ça Marche | Youdom Care",
  description: "Notre processus en 5 étapes simples : contact, évaluation, sélection, plan d'aide, démarrage. Transparent et humain.",
};

export default function CommentCaMarchePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
            Comment Ça Marche
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Simple, humain et efficace. De votre premier appel à l&apos;accompagnement quotidien.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {[
              {
                num: "01",
                icon: "📞",
                title: "Prenez contact",
                desc: "Par téléphone ou formulaire. Gratuit et sans engagement. Un conseiller prend en charge votre demande et vous rappelle sous 2 heures.",
                highlight: "Gratuit & sans engagement",
              },
              {
                num: "02",
                icon: "🏠",
                title: "Évaluation à domicile",
                desc: "Un conseiller Youdom Care se déplace gratuitement chez vous. Il identifie les besoins, présente les aides financières (APA, PCH, crédit d'impôt).",
                highlight: "Visite gratuite",
              },
              {
                num: "03",
                icon: "🤝",
                title: "Votre auxiliaire dédiée",
                desc: "Nous sélectionnons l'auxiliaire idéale en fonction de votre situation et vos préférences. Rencontre à domicile avant démarrage.",
                highlight: "Intervenante unique",
              },
              {
                num: "04",
                icon: "📋",
                title: "Plan d'aide personnalisé",
                desc: "Ensemble, nous déterminons durée, fréquence, jours, horaires et services. Tout est clair, écrit et adapté à votre rythme.",
                highlight: "100% sur mesure",
              },
              {
                num: "05",
                icon: "⭐",
                title: "Démarrage & suivi",
                desc: "Les prestations commencent avec la même personne. Suivi qualité régulier, enquêtes de satisfaction, ajustements selon l'évolution.",
                highlight: "Suivi permanent",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  {step.num !== "05" && <div className="w-0.5 h-16 bg-primary/20 mt-2" />}
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-12">Nos engagements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
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
