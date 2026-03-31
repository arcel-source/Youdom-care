"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🤝",
    title: "Aide à l'autonomie",
    slug: "aide-autonomie",
    description: "Accompagnement bienveillant pour les gestes essentiels du quotidien : lever, coucher, toilette, habillage, préparation et aide aux repas.",
    details: ["Aide au lever et au coucher", "Aide à la toilette et à l'hygiène", "Habillage et déshabillage", "Préparation et aide à la prise des repas", "Rappel de la prise de médicaments"],
  },
  {
    icon: "🌙",
    title: "Garde de nuit",
    slug: "garde-de-nuit",
    description: "Présence rassurante et sécurisante pendant toute la nuit. Nos auxiliaires veillent sur votre proche pour des nuits sereines.",
    details: ["Présence de nuit à domicile", "Surveillance et assistance nocturne", "Aide aux levers nocturnes", "Garde de jour également disponible", "Intervention auprès des enfants malades"],
  },
  {
    icon: "♿",
    title: "Aide au handicap",
    slug: "aide-handicap",
    description: "Accompagnement spécialisé et adapté pour adultes et enfants en situation de handicap, dans le respect de la dignité de chacun.",
    details: ["Accompagnement quotidien personnalisé", "Aide aux actes de la vie courante", "Soutien à la vie sociale", "Stimulation et activités adaptées", "Accompagnement des familles"],
  },
  {
    icon: "🚗",
    title: "Transport PMR",
    slug: "transport-pmr",
    description: "Véhicules adaptés aux personnes à mobilité réduite avec chauffeur qualifié pour tous vos déplacements.",
    details: ["Véhicules TPMR adaptés", "Chauffeur qualifié et bienveillant", "Rendez-vous médicaux", "Courses et sorties culturelles", "Location de véhicules adaptés"],
  },
  {
    icon: "🏠",
    title: "Aide ménagère",
    slug: "aide-menagere",
    description: "Un domicile propre et ordonné pour votre bien-être. Nos aides ménagères prennent soin de votre intérieur.",
    details: ["Ménage et nettoyage complet", "Lessive et repassage", "Entretien du logement", "Rangement et organisation", "Courses alimentaires"],
  },
  {
    icon: "🏥",
    title: "Retour d'hospitalisation",
    slug: "retour-hospitalisation",
    description: "Accompagnement post-hospitalisation pour un retour à domicile en toute sécurité, dès la sortie de l'hôpital.",
    details: ["Aide au retour à domicile", "Accompagnement quotidien temporaire", "Soins à domicile", "Aide aux courses et repas", "Coordination avec l'équipe médicale"],
  },
  {
    icon: "📡",
    title: "Téléassistance",
    slug: "teleassistance",
    description: "Dispositifs de sécurité connectés pour vivre sereinement chez soi : détection de chute, géolocalisation, médaillon d'alerte.",
    details: ["Détecteur de chute automatique", "Géolocalisation GPS", "Médaillon avec haut-parleur", "Livré configuré et prêt à l'emploi", "Assistance 24h/24 7j/7"],
  },
  {
    icon: "👶",
    title: "Enfants handicapés ou malades",
    slug: "enfants-handicapes",
    description: "Aide spécialisée à domicile pour les enfants en situation de handicap ou malades, et soutien aux parents.",
    details: ["Aide à l'enfant malade", "Accompagnement au handicap infantile", "Soutien scolaire adapté", "Aide à la vie sociale", "Accompagnement et répit des parents"],
  },
  {
    icon: "🧠",
    title: "Aide Alzheimer & Parkinson",
    slug: "aide-alzheimer-parkinson",
    description: "Accompagnement spécialisé pour les personnes atteintes de maladies neurodégénératives et leurs aidants.",
    details: ["Stimulation cognitive adaptée", "Aide aux gestes du quotidien", "Surveillance et sécurisation", "Soutien aux aidants familiaux", "Personnel formé aux pathologies"],
  },
  {
    icon: "📋",
    title: "Assistance administrative",
    slug: "assistance-administrative",
    description: "Gestion du courrier, classement de documents, prise de rendez-vous — nous simplifions vos démarches.",
    details: ["Gestion du courrier", "Classement des documents", "Prise de rendez-vous", "Aide aux démarches administratives", "Montage de dossiers d'aides"],
  },
  {
    icon: "💻",
    title: "Assistance informatique",
    slug: "assistance-informatique",
    description: "Aide à l'utilisation des outils numériques pour rester connecté avec vos proches et le monde.",
    details: ["Initiation aux outils numériques", "Aide aux visioconférences", "Configuration d'appareils", "Dépannage informatique", "Utilisation des réseaux sociaux"],
  },
  {
    icon: "🚶",
    title: "Accompagnement & sorties",
    slug: "accompagnement-sorties",
    description: "Accompagnement pour les courses, les promenades, les sorties culturelles et le maintien du lien social.",
    details: ["Accompagnement aux courses", "Promenades et sorties", "Activités culturelles", "Compagnie et stimulation", "Maintien du lien social"],
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nos services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Des services d&apos;aide à domicile{" "}
              <span className="text-secondary">sur mesure</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              12 services adaptés à chaque situation. De l&apos;aide quotidienne à la téléassistance,
              nous avons la solution pour vous et vos proches.
            </p>
            <Link
              href="/devis"
              className="inline-flex bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow"
            >
              Devis Gratuit — Réponse sous 2h →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 group h-full border border-gray-100 hover:border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/10 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-text group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.details.map((d) => (
                      <li key={d} className="text-sm text-text-light flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/devis"
                    className="text-primary font-semibold text-sm hover:text-primary-light transition-colors flex items-center gap-1"
                  >
                    Demander un devis <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d&apos;un service sur mesure ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Chaque situation est unique. Contactez-nous pour un devis personnalisé et gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow">
              Demander un Devis Gratuit →
            </Link>
            <a href="tel:+33667224507" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
