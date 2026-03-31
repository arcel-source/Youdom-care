"use client";

import { motion } from "framer-motion";

const positions = [
  { title: "Auxiliaire de vie", type: "CDI / CDD", description: "Accompagnez les personnes en perte d'autonomie dans leur quotidien." },
  { title: "Aide ménagère", type: "CDI / CDD", description: "Assurez l'entretien du domicile de nos bénéficiaires." },
  { title: "Garde de nuit", type: "CDI / CDD", description: "Veillez sur nos bénéficiaires pendant la nuit pour des nuits sereines." },
  { title: "Aide médico-psychologique", type: "CDI", description: "Accompagnez les personnes atteintes de pathologies neurodégénératives." },
  { title: "Responsable de secteur", type: "CDI", description: "Coordonnez les intervenants et assurez le suivi qualité des prestations." },
];

const benefits = [
  { icon: "📚", text: "Formation continue sur mesure" },
  { icon: "📈", text: "Évolution de carrière" },
  { icon: "🤝", text: "Ambiance familiale" },
  { icon: "📋", text: "CDI privilégié" },
  { icon: "💰", text: "Rémunération attractive" },
  { icon: "🏠", text: "Missions près de chez vous" },
];

export default function RecrutementContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Recrutement</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Rejoignez l&apos;aventure{" "}
              <span className="text-secondary">Youdom Care</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Vous avez le sens du service et l&apos;envie d&apos;aider ? Rejoignez une équipe humaine
              où chaque jour fait la différence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-text text-center mb-10">Pourquoi nous rejoindre ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-warm rounded-xl p-5 flex items-center gap-3"
              >
                <span className="text-2xl">{b.icon}</span>
                <span className="font-medium text-text">{b.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-text text-center mb-10">Nos postes ouverts</h2>
          <div className="space-y-4">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-text">{p.title}</h3>
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">{p.type}</span>
                  </div>
                  <p className="text-text-light text-sm">{p.description}</p>
                </div>
                <a href="mailto:recrutement@youdom-care.com" className="shrink-0 bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-full text-sm transition-all text-center">
                  Postuler →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Envie de nous rejoindre ?</h2>
          <p className="text-white/70 text-lg mb-8">
            Envoyez votre CV et lettre de motivation à :
          </p>
          <a href="mailto:recrutement@youdom-care.com" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            recrutement@youdom-care.com
          </a>
        </div>
      </section>
    </>
  );
}
