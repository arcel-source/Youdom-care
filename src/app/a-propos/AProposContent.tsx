"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  { icon: "❤️", title: "Bienveillance", text: "Chaque personne est traitée comme un membre de notre propre famille." },
  { icon: "🎯", title: "Sur mesure", text: "Pas de service standardisé. Chaque plan est unique, adapté à votre situation." },
  { icon: "🤝", title: "Confiance", text: "Transparence totale, intervenants vérifiés, suivi qualité rigoureux." },
  { icon: "🏆", title: "Excellence", text: "Personnel diplômé, formé en continu, sélectionné pour ses qualités humaines." },
  { icon: "👂", title: "Écoute", text: "Nous prenons le temps de comprendre vos besoins avant d'agir." },
  { icon: "🔄", title: "Adaptabilité", text: "Nos services évoluent avec vos besoins. Rien n'est figé." },
];

const numbers = [
  { value: "500+", label: "Familles accompagnées" },
  { value: "150+", label: "Auxiliaires de vie" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Disponibilité" },
  { value: "50%", label: "Crédit d'impôt" },
  { value: "2h", label: "Délai de réponse" },
];

export default function AProposContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Qui sommes-nous</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              L&apos;humain au cœur de{" "}
              <span className="text-secondary">chaque action</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Spécialisés dans le service à la personne, nous accompagnons les personnes
              en perte d&apos;autonomie avec des services étudiés et personnalisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Notre mission</span>
              <h2 className="text-3xl font-bold text-text mt-3 mb-6">
                Permettre à chacun de vivre sereinement chez soi
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Chez Youdom Care, nous sommes convaincus que le domicile est le lieu où l&apos;on se sent le mieux.
                  Avec ses souvenirs, son confort et ses repères, c&apos;est la solution privilégiée par les personnes
                  âgées et leurs familles.
                </p>
                <p>
                  Notre approche repose sur une conviction forte : le maintien du lien social est essentiel.
                  Nos auxiliaires de vie ne sont pas de simples intervenantes — ce sont des sentinelles bienveillantes
                  qui prennent en compte la personne dans sa globalité.
                </p>
                <p>
                  Nous évaluons vos besoins, sélectionnons l&apos;intervenant idéal, et construisons un plan
                  d&apos;accompagnement sur mesure qui évolue avec vous.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-warm rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-text mb-6">Ce que nous faisons pour vous</h3>
              <ul className="space-y-4">
                {[
                  "Accompagner les personnes en perte d'autonomie dans leurs tâches quotidiennes",
                  "Évaluer vos besoins et vous aider dans votre souhait de maintien à domicile",
                  "Sélectionner des intervenants uniques, adaptés à votre situation",
                  "Vous permettre de bénéficier d'un crédit d'impôt de 50%",
                  "Coordonner avec les intervenants médicaux et paramédicaux",
                  "Accompagner les familles dans leurs démarches administratives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent text-lg mt-0.5">✓</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Youdom Care en chiffres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {numbers.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-secondary">{n.value}</div>
                <div className="text-white/60 text-sm mt-1">{n.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nos valeurs</span>
            <h2 className="text-3xl font-bold text-text mt-3">Ce qui nous guide au quotidien</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-lg text-text mb-2">{v.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Faites connaissance avec nous</h2>
          <p className="text-white/70 text-lg mb-8">
            La première étape, c&apos;est simplement de se parler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow">
              Demander un Devis →
            </Link>
            <Link href="/contact" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
