import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services d'Aide à Domicile | Youdom Care",
  description: "Aide à l'autonomie, garde de nuit, handicap, ménage, transport, téléassistance. 12 services adaptés. Devis gratuit.",
};

const services = [
  {
    title: "Aide à l'autonomie",
    icon: "🤝",
    description: "Levée et coucher • Toilette et hygiène • Habillage • Repas • Rappel médicaments • Stimulation mémoire",
  },
  {
    title: "Garde de nuit",
    icon: "🌙",
    description: "Présence nocturne • Aide levers nuit • Surveillance sécurité • Disponibilité 24h/24",
  },
  {
    title: "Aide au handicap",
    icon: "♿",
    description: "Accompagnement spécialisé • Aide mobilité • Soutien psychique • Transport adapté • Enfants handicapés",
  },
  {
    title: "Aide ménagère",
    icon: "🏠",
    description: "Ménage complet • Lessive et repassage • Cuisine • Rangement • Entretien",
  },
  {
    title: "Téléassistance",
    icon: "📡",
    description: "Détecteur chute auto • Géolocalisation GPS • Médaillon + haut-parleur • Assistance immédiate",
  },
  {
    title: "Transport PMR",
    icon: "🚗",
    description: "Véhicules adaptés • Chauffeur formé • Rendez-vous médicaux • Sorties loisir",
  },
  {
    title: "Retour d'hospitalisation",
    icon: "🏥",
    description: "Suivi post-op • Aide soins • Prise médicaments • Coordination médicale",
  },
  {
    title: "Accompagnement & sorties",
    icon: "👜",
    description: "Courses • Rendez-vous médicaux • Sorties culturelles • Compagnie • Lien social",
  },
  {
    title: "Aide Alzheimer & Parkinson",
    icon: "🧠",
    description: "Stimulation cognitive • Aides gestes quotidiens • Surveillance • Soutien aidants • Personnel formé",
  },
  {
    title: "Garde enfants handicapés",
    icon: "👶",
    description: "Aide quotidienne • Soutien scolaire • Vie sociale • Répit parents",
  },
  {
    title: "Assistance administrative",
    icon: "📋",
    description: "Gestion courrier • Classement docs • Rendez-vous • Démarches • Dossiers aides",
  },
  {
    title: "Assistance informatique",
    icon: "💻",
    description: "Initiation outils • Vidéoconférence • Configuration appareils • Dépannage",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
            Nos Services d&apos;Aide à Domicile
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            12 services adaptés à chaque situation. De l&apos;aide quotidienne à la téléassistance, 
            nous avons la solution pour vous.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h2 className="font-bold text-lg text-text mb-2">{service.title}</h2>
                <p className="text-text-light text-sm leading-relaxed">{service.description}</p>
                <a href="/demander-devis" className="text-primary font-semibold text-sm hover:text-primary-light transition-colors flex items-center gap-1 mt-4">
                  Demander un devis <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Besoin d&apos;un service sur mesure ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Chaque situation est unique. Contactez-nous pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow">
              Demander un Devis →
            </a>
            <a href="tel:+33667224507" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
