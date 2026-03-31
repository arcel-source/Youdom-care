"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    icon: "👤",
    title: "Un interlocuteur unique",
    description: "La même auxiliaire de vie intervient chez vous à chaque fois. Un lien de confiance se crée naturellement.",
  },
  {
    icon: "🎓",
    title: "Personnel qualifié et formé",
    description: "Nos intervenants sont diplômés, leurs références sont vérifiées et ils bénéficient d'une formation continue.",
  },
  {
    icon: "⚡",
    title: "Réponse sous 2 heures",
    description: "Urgence ou planification : nous nous engageons à vous rappeler dans les 2 heures suivant votre demande.",
  },
  {
    icon: "💰",
    title: "50% de crédit d'impôt",
    description: "Bénéficiez d'un crédit d'impôt de 50% sur les sommes versées. Nous vous aidons dans vos démarches.",
  },
  {
    icon: "📋",
    title: "Plan de soins personnalisé",
    description: "Chaque situation est unique. Nous élaborons un programme sur mesure adapté à l'évolution de vos besoins.",
  },
  {
    icon: "🛡️",
    title: "Suivi qualité rigoureux",
    description: "Enquêtes de satisfaction, visites régulières, et ajustement continu pour garantir le meilleur service.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Pourquoi Youdom Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
              La tranquillité d&apos;esprit que{" "}
              <span className="text-gradient">vous méritez</span>
            </h2>
            <p className="text-text-light text-lg mb-8 leading-relaxed">
              Confier un proche à un service d&apos;aide à domicile est une décision importante.
              Chez Youdom Care, nous traitons chaque bénéficiaire comme un membre de notre famille.
              Votre satisfaction est notre priorité absolue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full transition-all cta-glow text-center"
              >
                Demander un Devis →
              </Link>
              <Link
                href="/a-propos"
                className="border-2 border-primary/20 hover:border-primary text-primary font-semibold px-8 py-4 rounded-full transition-all text-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Right — Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-warm rounded-2xl p-5 hover:shadow-lg transition-all"
              >
                <div className="text-2xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-text mb-1">{reason.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
