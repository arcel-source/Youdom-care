import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages | Youdom Care",
  description: "Ce que disent les 500+ familles que nous accompagnons. 98% satisfaction. 4.9/5 étoiles.",
};

const testimonials = [
  { name: "Marie D.", role: "Fille", rating: 5, text: "Maman peut rester chez elle en toute sécurité. Son auxiliaire Sophie est devenue comme une amie. Je travaille l'esprit tranquille.", service: "Aide à l'autonomie" },
  { name: "Jean-Pierre L.", role: "Bénéficiaire, 78 ans", rating: 5, text: "Après hospitalisation, j'avais peur de ne plus pouvoir vivre seul. L'équipe m'a accompagné avec gentillesse et professionnalisme remarquables.", service: "Retour d'hospitalisation" },
  { name: "Fatima K.", role: "Mère", rating: 5, text: "Trouver une aide adaptée pour mon fils handicapé était un parcours du combattant. Youdom Care a compris nos besoins dès le premier rendez-vous.", service: "Aide au handicap" },
  { name: "Philippe M.", role: "Fils", rating: 5, text: "Mon père atteint d'Alzheimer. L'auxiliaire fait preuve d'une patience et d'une humanité exceptionnelles. On ne peut pas imaginer meilleur.", service: "Aide Alzheimer" },
  { name: "Isabelle R.", role: "Bénéficiaire, 82 ans", rating: 5, text: "Ce n'est pas juste une aide ménagère, c'est une présence chaleureuse. Ma maison est impeccable et j'ai quelqu'un avec qui discuter.", service: "Aide ménagère" },
  { name: "Ahmed B.", role: "Fils", rating: 5, text: "Le transport PMR nous a changé la vie. Ma mère se rend à ses rendez-vous sans stress. Le chauffeur est adorable avec elle.", service: "Transport PMR" },
];

export default function TemoignagesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
            Témoignages
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Plus de 500 familles nous font confiance. Découvrez leurs histoires.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { v: "4.9/5", l: "Note moyenne" },
            { v: "500+", l: "Familles" },
            { v: "98%", l: "Satisfaction" },
            { v: "100%", l: "Recommandent" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-primary">{s.v}</div>
              <div className="text-sm text-text-light">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-secondary">★</span>
                    ))}
                  </div>
                  <span className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
                <p className="text-text leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-text text-sm">{t.name}</div>
                    <div className="text-text-light text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez les familles qui nous font confiance
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Votre satisfaction est notre priorité.
          </p>
          <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            Demander un Devis Gratuit →
          </a>
        </div>
      </section>
    </>
  );
}
