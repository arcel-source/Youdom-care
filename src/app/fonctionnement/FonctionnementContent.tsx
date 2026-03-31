"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Prenez contact",
    description: "Remplissez notre formulaire en 2 minutes ou appelez-nous directement. Un conseiller dédié prend en charge votre demande et vous rappelle sous 2 heures.",
    highlight: "Gratuit et sans engagement",
  },
  {
    number: "02",
    icon: "🏠",
    title: "Évaluation à domicile",
    description: "Un conseiller Youdom Care se déplace gratuitement chez vous ou votre proche. Il identifie les besoins, les envies, et vous présente les aides financières disponibles (APA, PCH, crédit d'impôt).",
    highlight: "Visite gratuite",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Votre auxiliaire dédiée",
    description: "Nous sélectionnons l'auxiliaire de vie idéale en fonction de votre situation, vos préférences et votre personnalité. Rencontre à domicile avant le début des prestations.",
    highlight: "Intervenante unique et adaptée",
  },
  {
    number: "04",
    icon: "📋",
    title: "Plan de soins personnalisé",
    description: "Ensemble, nous déterminons la durée, la fréquence, les jours, les horaires et le contenu des interventions. Tout est adapté à votre rythme de vie.",
    highlight: "100% sur mesure",
  },
  {
    number: "05",
    icon: "⭐",
    title: "Démarrage & accompagnement",
    description: "Les prestations commencent avec la même personne à chaque visite. Suivi qualité régulier, enquêtes de satisfaction, ajustement continu selon l'évolution de vos besoins.",
    highlight: "Suivi qualité permanent",
  },
  {
    number: "06",
    icon: "🔒",
    title: "Protection & confidentialité",
    description: "Toutes vos données sont protégées conformément au RGPD. Les données médicales sont soumises au secret professionnel. Vous êtes entre de bonnes mains.",
    highlight: "RGPD & Secret professionnel",
  },
];

const guarantees = [
  { icon: "✅", text: "Même auxiliaire de vie à chaque intervention" },
  { icon: "⚡", text: "Réponse garantie sous 2 heures" },
  { icon: "📞", text: "Disponible 24h/24, 7j/7" },
  { icon: "💰", text: "Crédit d'impôt de 50%" },
  { icon: "🎓", text: "Personnel diplômé et formé" },
  { icon: "📊", text: "Suivi qualité régulier" },
];

export default function FonctionnementContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Notre fonctionnement</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Simple, humain et{" "}
              <span className="text-secondary">efficace</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              De votre premier appel à l&apos;accompagnement quotidien, nous simplifions tout.
              Pas de paperasse interminable, juste de l&apos;écoute et du professionnalisme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-secondary font-bold text-sm">ÉTAPE {step.number}</span>
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {step.highlight}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-text mb-2">{step.title}</h2>
                  <p className="text-text-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text">Nos engagements</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 flex items-center gap-3 shadow-sm"
              >
                <span className="text-2xl">{g.icon}</span>
                <span className="font-medium text-text">{g.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
          <p className="text-white/70 text-lg mb-8">
            La première étape est gratuite et sans engagement.
          </p>
          <Link href="/devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            Demander mon Devis Gratuit →
          </Link>
        </div>
      </section>
    </>
  );
}
