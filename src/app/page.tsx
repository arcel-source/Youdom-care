import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youdom Care | Aide à Domicile Paris & Île-de-France | Services Personnalisés",
  description: "Aide à domicile de qualité pour personnes âgées et handicapées. Paris & Île-de-France. Intervenants formés, continus, empathiques. Crédit d'impôt 50%. Devis gratuit.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/old.png"
            alt="Aide à domicile pour personnes âgées"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/80" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Aide à domicile de confiance. Pour vivre dignement chez soi.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Youdom Care : intervenants formés et bienveillants. Paris & Île-de-France. Crédit d&apos;impôt 50%. Réponse en moins de 2 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/demander-devis" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-base sm:text-lg min-h-[44px] text-center">
                Demander un devis gratuit
              </a>
              <a href="tel:0184807297" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-base sm:text-lg min-h-[44px] text-center">
                Appeler : 01 84 80 72 97
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI YOUDOM CARE */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-12 md:mb-16 text-center">Pourquoi choisir Youdom Care ?</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/pourquoi-choisir.png"
                alt="Pourquoi choisir Youdom Care - Aide à domicile de qualité"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🤝", title: "Intervenants de confiance", desc: "Sélection stricte, formations continues, même personne = continuité." },
                { icon: "⏰", title: "Réponse en 2 heures", desc: "Appel conseil immédiat. Pas d'attente administrative." },
                { icon: "💰", title: "50% crédit d'impôt", desc: "Automatique service à personne. TVA réduite 5.5%." },
                { icon: "🏠", title: "Maintien à domicile", desc: "Vivre chez soi dignement. Liberté préservée." },
                { icon: "🎯", title: "Service personnalisé", desc: "Chaque situation, solution adaptée." },
                { icon: "📞", title: "Support continu", desc: "Supervision régulière, ajustements permanents." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-base font-bold text-text mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">
                Notre mission : permettre à chacun de vivre chez soi
              </h2>
              <p className="text-text-light mb-4">
                Chez Youdom Care, nous croyons que vieillir chez soi est un droit. Quitter son domicile, c&apos;est perdre ses repères, son autonomie, sa dignité.
              </p>
              <p className="text-text-light mb-6">
                Nos intervenants sont sélectionnés pour leurs compétences humaines autant que professionnelles. Ils deviennent un pilier du quotidien, une présence rassurante et bienveillante.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">500+ familles accompagnées</span>
                <span className="bg-secondary/20 text-primary font-semibold px-4 py-2 rounded-full text-sm">98% de satisfaction</span>
                <span className="bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm">10+ ans d&apos;expertise</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/mission-home.png"
                alt="Notre mission - Aide à domicile bienveillante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-12 md:mb-16 text-center">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { slug: "aide-personnes-agees", image: "/images/services/aide-autonomie.png", title: "Aide aux personnes âgées", desc: "Toilette, repas, mobilité, accompagnement. Pour continuer vie chez soi." },
              { slug: "aide-handicap", image: "/images/services/aide-handicap-domicile.png", title: "Aide et accompagnement pour personnes handicapées", desc: "Services adaptés à chaque handicap. Continuité, respect, dignité." },
              { slug: "garde-enfants-handicap", image: "/images/services/aide-enfant.png", title: "Garde d'enfants handicapés", desc: "Garde qualifiée enfants handicapés. Sécurité, bienveillance." },
              { slug: "aide-menagere", image: "/images/services/aide-menagere.jpg", title: "Aide ménagère", desc: "Ménage régulier. Domicile propre, prévention chutes, bien-être." },
              { slug: "garde-nuit", image: "/images/services/garde-presence.png", title: "Présence de nuit", desc: "Veille passive ou active. Sécurité nocturne maximale." },
              { slug: "accompagnement-sorties", image: "/images/services/service-accompagnements.png", title: "Accompagnement & sorties", desc: "Courses, rdv médecins, loisirs. Autonomie et lien social." },
              { slug: "retour-hospitalisation", image: "/images/services/service-retour-hospitalisation.png", title: "Retour d'hospitalisation", desc: "Suivi post-opératoire, aide aux soins, coordination médicale. Retour serein." },
              { slug: "transport-pmr", image: "/images/services/transport-handicapes.png", title: "Transport PMR", desc: "Véhicules adaptés, chauffeurs formés. Rendez-vous médicaux et sorties." },
              { slug: "maladies-neurodegeneratives", image: "/images/services/old-people.png", title: "Maladies neurodégénératives", desc: "Alzheimer, Parkinson, sclérose en plaques. Accompagnement spécialisé et humain." },
            ].map((service, idx) => (
              <Link key={idx} href={`/services/${service.slug}`} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-text-light text-sm">{service.desc}</p>
                    <div className="mt-3 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                      En savoir plus →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all text-lg">
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-12 md:mb-16 text-center">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Marie T.", city: "Paris 12ème", quote: "Enfin respirer. Maman en de bonnes mains. Youdom Care c'est sérieux." },
              { name: "Jean-Pierre D.", city: "Boulogne", quote: "Même intervenant depuis 2 ans. On s'est construit confiance vraie. Ça change tout." },
              { name: "Sophie L.", city: "Vincennes", quote: "Processus simple. Pas bureaucratie pesante. Réponse rapide. Très professionnel." },
              { name: "Robert M.", city: "Le Kremlin-Bicêtre", quote: "Garde handicap mon fils : patience, bienveillance, compétence. Exactement ce qu'il fallait." },
              { name: "Valérie N.", city: "Saint-Mandé", quote: "Crédit d'impôt expliqué simplement. Moins cher que prévu. Transparence totale." },
              { name: "Patrick H.", city: "Ivry-sur-Seine", quote: "Présence nuit : enfin dormir tranquille. Sécurité maximale. Recommend vivement." },
            ].map((testi, idx) => (
              <div key={idx} className="bg-warm p-6 sm:p-8 rounded-2xl border border-gray-200">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">★</span>
                  ))}
                </div>
                <p className="text-text-light mb-3 sm:mb-4 italic text-sm sm:text-base">&ldquo;{testi.quote}&rdquo;</p>
                <p className="font-bold text-text text-sm">{testi.name}</p>
                <p className="text-text-light text-xs">{testi.city}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-light mt-8 sm:mt-12 text-sm sm:text-base">
            <strong>98% de satisfaction</strong> — Source sondage clients 2025
          </p>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8 sm:mb-12 md:mb-16 text-center">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              { step: "1", title: "Appel conseil", desc: "Décrivez situation. Conseil gratuit orienté.", image: "/images/steps/1.png" },
              { step: "2", title: "Visite évaluation", desc: "À domicile. Observation et discussion détaillée.", image: "/images/steps/2.png" },
              { step: "3", title: "Plan d'aide", desc: "Services, planning, tarif transparent.", image: "/images/steps/3.png" },
              { step: "4", title: "Débuter", desc: "Intervenant formé commence rapidement.", image: "/images/steps/4.png" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-2xl text-center shadow-sm">
                  <div className="absolute -top-4 left-4 sm:-top-6 sm:-left-2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-base sm:text-lg z-10">
                    {item.step}
                  </div>
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-text mt-2 sm:mt-2 mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/comment-ca-marche" className="text-primary font-bold hover:text-primary-light transition-colors">
              En savoir plus sur notre processus →
            </Link>
          </div>
        </div>
      </section>

      {/* AIDES FINANCIÈRES */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Financer votre aide</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: "💰", label: "APA", desc: "Allocation Personnalisée d'Autonomie" },
              { icon: "🏥", label: "PCH", desc: "Prestation Compensation Handicap" },
              { icon: "📊", label: "Crédit 50%", desc: "Automatique service à personne" },
              { icon: "👶", label: "AEEH", desc: "Allocation Éducation Enfant Handicapé" },
            ].map((aide, idx) => (
              <div key={idx} className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur border border-white/20 text-center">
                <div className="text-3xl sm:text-4xl mb-2">{aide.icon}</div>
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">{aide.label}</h3>
                <p className="text-white/70 text-xs hidden sm:block">{aide.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/aides-financieres" className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-base sm:text-lg min-h-[44px] text-center">
              Guide aides financières complet →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Commençons ensemble</h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-10">
            Youdom Care : aide à domicile de qualité. Pour vivre dignement chez soi. Consultation gratuite, réponse en moins de 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/demander-devis" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-base sm:text-lg min-h-[44px] text-center">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 text-base sm:text-lg min-h-[44px] text-center">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
