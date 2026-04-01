import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services d'Aide à Domicile | Youdom Care",
  description: "Aide à l'autonomie, garde de nuit, handicap, ménage, transport, téléassistance. 12 services adaptés. Devis gratuit.",
};

const services = [
  {
    slug: "aide-personnes-agees",
    title: "Aide à l'autonomie",
    image: "/images/services/aide-autonomie.png",
    description: "Levée et coucher • Toilette et hygiène • Habillage • Repas • Rappel médicaments • Stimulation mémoire",
  },
  {
    slug: "garde-nuit",
    title: "Garde de nuit",
    image: "/images/services/garde-presence.png",
    description: "Présence nocturne • Aide levers nuit • Surveillance sécurité • Disponibilité 24h/24",
  },
  {
    slug: "aide-handicap",
    title: "Aide au handicap",
    image: "/images/services/aide-handicap-domicile.png",
    description: "Accompagnement spécialisé • Aide mobilité • Soutien psychique • Transport adapté • Enfants handicapés",
  },
  {
    slug: "aide-menagere",
    title: "Aide ménagère",
    image: "/images/services/aide-menagere.jpg",
    description: "Ménage complet • Lessive et repassage • Cuisine • Rangement • Entretien",
  },
  {
    slug: "teleassistance",
    title: "Téléassistance",
    image: "/images/services/tele-assistance.png",
    description: "Détecteur chute auto • Géolocalisation GPS • Médaillon + haut-parleur • Assistance immédiate",
  },
  {
    slug: "transport-pmr",
    title: "Transport PMR",
    image: "/images/services/transport-handicapes.png",
    description: "Véhicules adaptés • Chauffeur formé • Rendez-vous médicaux • Sorties loisir",
  },
  {
    slug: "retour-hospitalisation",
    title: "Retour d'hospitalisation",
    image: "/images/services/service-retour-hospitalisation.png",
    description: "Suivi post-op • Aide soins • Prise médicaments • Coordination médicale",
  },
  {
    slug: "accompagnement-sorties",
    title: "Accompagnement & sorties",
    image: "/images/services/service-accompagnements.png",
    description: "Courses • Rendez-vous médicaux • Sorties culturelles • Compagnie • Lien social",
  },
  {
    slug: "alzheimer-parkinson",
    title: "Aide Alzheimer & Parkinson",
    image: "/images/services/old-people.png",
    description: "Stimulation cognitive • Aides gestes quotidiens • Surveillance • Soutien aidants • Personnel formé",
  },
  {
    slug: "garde-enfants-handicap",
    title: "Garde enfants handicapés",
    image: "/images/services/aide-enfant.png",
    description: "Aide quotidienne • Soutien scolaire • Vie sociale • Répit parents",
  },
  {
    slug: "assistance-administrative",
    title: "Assistance administrative",
    image: "/images/services/assistance-administrative.png",
    description: "Gestion courrier • Classement docs • Rendez-vous • Démarches • Dossiers aides",
  },
  {
    slug: "assistance-informatique",
    title: "Assistance informatique",
    image: "/images/services/assistance-informatique.png",
    description: "Initiation outils • Vidéoconférence • Configuration appareils • Dépannage",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/slide-service-2.jpg"
            alt="Services d'aide à domicile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
            Nos Services d&apos;Aide à Domicile
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            12 services adaptés à chaque situation. De l&apos;aide quotidienne à la téléassistance,
            nous avons la solution pour vous.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">{service.title}</h2>
                    <p className="text-text-light text-sm leading-relaxed">{service.description}</p>
                    <span className="text-primary font-semibold text-sm flex items-center gap-1 mt-4 group-hover:translate-x-2 transition-transform">
                      En savoir plus <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
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
            <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all">
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
