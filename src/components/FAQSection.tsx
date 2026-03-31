"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Comment fonctionne le crédit d'impôt de 50% ?",
    a: "L'ensemble des sommes versées pour des services d'aide à domicile ouvre droit à un crédit d'impôt de 50%, dans la limite des plafonds légaux. Nous vous fournissons l'attestation fiscale annuelle nécessaire et nous vous accompagnons dans vos démarches.",
  },
  {
    q: "Sous quel délai pouvez-vous intervenir ?",
    a: "Nous nous engageons à vous rappeler sous 2 heures après réception de votre demande. En cas d'urgence (retour d'hospitalisation, besoin immédiat), nous pouvons organiser une intervention dans les 24 à 48 heures.",
  },
  {
    q: "Est-ce toujours la même personne qui intervient ?",
    a: "Oui, c'est un principe fondamental chez Youdom Care. Nous sélectionnons une auxiliaire de vie dédiée, adaptée à votre situation. La même personne intervient à chaque visite, sauf en cas d'absence exceptionnelle où un remplaçant qualifié prend le relais.",
  },
  {
    q: "Quelles sont les qualifications de vos intervenants ?",
    a: "Tous nos auxiliaires de vie sont diplômés (DEAVS, DEAES, ou équivalent), disposent de références vérifiées et bénéficient d'une formation continue. Nous vérifions systématiquement les antécédents et compétences de chaque intervenant.",
  },
  {
    q: "Intervenez-vous le week-end et les jours fériés ?",
    a: "Oui, nous sommes disponibles 24h/24, 7j/7, y compris les week-ends et jours fériés. Nos services s'adaptent entièrement à vos besoins, que ce soit ponctuellement ou de manière permanente.",
  },
  {
    q: "Quelles aides financières existent pour l'aide à domicile ?",
    a: "Plusieurs dispositifs existent : l'APA (Allocation Personnalisée d'Autonomie), la PCH (Prestation de Compensation du Handicap), les aides de la CNAV, de votre mutuelle, et bien sûr le crédit d'impôt de 50%. Nos conseillers vous guident dans toutes ces démarches gratuitement.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-warm/50 transition-colors"
      >
        <span className="font-semibold text-text pr-4">{faq.q}</span>
        <span className={`text-primary text-xl transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-text-light leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
