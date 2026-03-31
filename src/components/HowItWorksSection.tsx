"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Contactez-nous",
    description: "Remplissez le formulaire ou appelez-nous. Un conseiller dédié prend en charge votre demande sous 2 heures.",
    icon: "📞",
  },
  {
    number: "02",
    title: "Évaluation gratuite",
    description: "Visite à domicile gratuite pour identifier vos besoins, vos envies et les aides financières disponibles.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Votre auxiliaire dédiée",
    description: "Nous sélectionnons l'auxiliaire de vie idéale pour votre situation. Rencontre à domicile avant le début.",
    icon: "🤝",
  },
  {
    number: "04",
    title: "Accompagnement & suivi",
    description: "Démarrage des prestations avec suivi qualité régulier. Le planning s'adapte à l'évolution de vos besoins.",
    icon: "⭐",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            En <span className="text-gradient">4 étapes simples</span>,
            nous prenons soin de vous
          </h2>
          <p className="text-text-light text-lg">
            Pas de complexité, pas de paperasse interminable.
            Nous simplifions tout pour vous.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-primary/5 rounded-3xl flex items-center justify-center mb-4 text-3xl">
                  {step.icon}
                </div>
                <div className="text-secondary font-bold text-sm mb-2">
                  ÉTAPE {step.number}
                </div>
                <h3 className="font-bold text-lg text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/devis"
            className="inline-flex bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow"
          >
            Commencer — C&apos;est Gratuit →
          </Link>
          <p className="text-text-light text-sm mt-3">
            Sans engagement • Réponse sous 2h • Crédit d&apos;impôt 50%
          </p>
        </div>
      </div>
    </section>
  );
}
