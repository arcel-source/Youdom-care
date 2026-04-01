import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Youdom Care",
  description: "Youdom Care — 10+ ans d'expertise en aide à domicile. 500+ familles. Valeurs : bienveillance, sur mesure, confiance, excellence.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
            Qui Sommes-Nous
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            L&apos;humain au cœur de chaque action. 10+ ans d'expertise, 500+ familles, 98% de satisfaction.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mt-3 mb-6">
                Notre mission
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Chez Youdom Care, nous croyons que vivre chez soi le plus longtemps possible 
                  est la solution privilégiée par les personnes âgées et leurs familles.
                </p>
                <p>
                  Quitter son domicile, c'est perdre son autonomie, ses souvenirs, ses repères. 
                  Notre approche repose sur une conviction forte : l'aide à domicile doit être 
                  humaine, professionnelle et sur mesure.
                </p>
                <p>
                  Nous évaluons vos besoins, sélectionnons l'intervenant idéal, et construisons 
                  un plan d'accompagnement qui évolue avec vous.
                </p>
              </div>
            </div>

            <div className="bg-warm rounded-3xl p-8">
              <h3 className="text-xl font-bold text-text mb-6">Ce que nous faisons pour vous</h3>
              <ul className="space-y-4">
                {[
                  "Accompagner les personnes en perte d'autonomie dans leur quotidien",
                  "Évaluer vos besoins avec soin et sans jugement",
                  "Sélectionner des intervenants uniques et adaptés",
                  "Vous permettre de bénéficier d'un crédit d'impôt 50%",
                  "Coordonner avec les professionnels de santé",
                  "Accompagner les familles dans leurs démarches administratives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent text-lg mt-0.5">✓</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">Youdom Care en chiffres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { value: "500+", label: "Familles" },
              { value: "150+", label: "Intervenants" },
              { value: "98%", label: "Satisfaction" },
              { value: "24/7", label: "Disponibilité" },
              { value: "50%", label: "Crédit d'impôt" },
              { value: "2h", label: "Délai réponse" },
            ].map((n) => (
              <div key={n.label} className="text-center">
                <div className="text-3xl font-bold text-secondary">{n.value}</div>
                <div className="text-white/60 text-sm mt-1">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-text mb-16">Nos valeurs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "❤️", title: "Bienveillance", desc: "Chaque personne est traitée comme un membre de notre famille." },
              { icon: "🎯", title: "Sur mesure", desc: "Pas de service standardisé. Chaque plan est unique." },
              { icon: "🤝", title: "Confiance", desc: "Transparence totale, intervenants vérifiés, suivi rigoureux." },
              { icon: "🏆", title: "Excellence", desc: "Personnel diplômé, formé en continu, sélectionné pour ses qualités." },
              { icon: "👂", title: "Écoute", desc: "On prend le temps de vraiment comprendre vos besoins." },
              { icon: "🔄", title: "Adaptabilité", desc: "Nos services évoluent avec vos besoins. Rien n'est figé." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-lg text-text mb-2">{v.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Faites connaissance avec nous</h2>
          <p className="text-white/70 text-lg mb-8">
            La première étape, c'est simplement de se parler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow">
              Demander un Devis →
            </a>
            <a href="/contact" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
