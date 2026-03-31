"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie D.",
    role: "Fille d'une bénéficiaire",
    text: "Grâce à Youdom Care, ma mère peut rester chez elle en toute sécurité. Son auxiliaire de vie, Sophie, est devenue comme une membre de la famille. Je travaille l'esprit tranquille.",
    rating: 5,
  },
  {
    name: "Jean-Pierre L.",
    role: "Bénéficiaire, 78 ans",
    text: "Après mon hospitalisation, j'avais peur de ne plus pouvoir vivre seul. L'équipe Youdom Care m'a accompagné avec une gentillesse et un professionnalisme remarquables.",
    rating: 5,
  },
  {
    name: "Fatima K.",
    role: "Mère d'un enfant handicapé",
    text: "Trouver une aide adaptée pour mon fils était un parcours du combattant. Youdom Care a compris nos besoins dès le premier rendez-vous. Un vrai soulagement pour toute la famille.",
    rating: 5,
  },
  {
    name: "Philippe M.",
    role: "Fils d'un bénéficiaire",
    text: "Mon père atteint d'Alzheimer nécessite une attention permanente. L'auxiliaire de vie envoyée par Youdom Care fait preuve d'une patience et d'une humanité exceptionnelles.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            Ils nous font{" "}
            <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-text-light text-lg">
            Plus de 500 familles accompagnées. Découvrez ce qu&apos;elles disent de nous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-text leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-text">{t.name}</div>
                  <div className="text-text-light text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-text-light">Google Avis</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-text-light">Familles</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-text-light">Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-text-light">Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
}
