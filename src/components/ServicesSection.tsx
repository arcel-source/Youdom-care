"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🤝",
    title: "Aide à l'autonomie",
    description: "Lever, coucher, toilette, habillage, repas — un accompagnement bienveillant pour tous les gestes du quotidien.",
    href: "/services/aide-autonomie",
  },
  {
    icon: "🌙",
    title: "Garde de nuit",
    description: "Présence rassurante 24h/24. Nos auxiliaires veillent sur votre proche pendant toute la nuit.",
    href: "/services/garde-de-nuit",
  },
  {
    icon: "♿",
    title: "Aide au handicap",
    description: "Accompagnement spécialisé pour adultes et enfants en situation de handicap. Dignité et respect au quotidien.",
    href: "/services/aide-handicap",
  },
  {
    icon: "🚗",
    title: "Transport PMR",
    description: "Véhicules adaptés avec chauffeur pour rendez-vous médicaux, courses ou sorties culturelles.",
    href: "/services/transport-pmr",
  },
  {
    icon: "🏠",
    title: "Aide ménagère",
    description: "Ménage, lessive, repassage, entretien — un domicile propre et ordonné pour votre bien-être.",
    href: "/services/aide-menagere",
  },
  {
    icon: "🏥",
    title: "Retour d'hospitalisation",
    description: "Accompagnement post-hospitalisation pour un retour à domicile en toute sécurité et sérénité.",
    href: "/services/retour-hospitalisation",
  },
  {
    icon: "📡",
    title: "Téléassistance",
    description: "Détecteur de chute, géolocalisation, médaillon — une sécurité 24/7 pour vivre sereinement chez soi.",
    href: "/services/teleassistance",
  },
  {
    icon: "👶",
    title: "Enfants malades ou handicapés",
    description: "Aide spécialisée à domicile pour les enfants malades ou en situation de handicap et soutien aux parents.",
    href: "/services/enfants-handicapes",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            Des services sur mesure pour{" "}
            <span className="text-gradient">chaque besoin</span>
          </h2>
          <p className="text-text-light text-lg">
            Quelle que soit votre situation, nous avons la solution.
            Nos auxiliaires de vie qualifiées s&apos;adaptent à vos besoins spécifiques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group h-full border border-gray-100 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/devis"
            className="inline-flex bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full transition-all text-lg"
          >
            Tous nos services — Devis Gratuit →
          </Link>
        </div>
      </div>
    </section>
  );
}
