import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youdom Care | Aide à Domicile Paris & Île-de-France | Services Personnalisés",
  description: "Aide à domicile de qualité pour personnes âgées et handicapées. Paris & Île-de-France. Intervenants formés, continus, empathiques. Crédit d'impôt 50%. Devis gratuit.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Aide à domicile de confiance. Pour vivre dignement chez soi.
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Youdom Care : intervenants formés et bienveillants. Paris & Île-de-France. Crédit d'impôt 50%. Réponse en moins de 2 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
                Demander un devis gratuit
              </a>
              <a href="tel:0184807297" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-lg">
                Appeler : 01 84 80 72 97
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI YOUDOM CARE */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text mb-16 text-center">Pourquoi choisir Youdom Care ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🤝", title: "Intervenants de confiance", desc: "Sélection stricte, formations continues, même personne = continuité." },
              { icon: "⏰", title: "Réponse en 2 heures", desc: "Appel conseil immédiat. Pas d'attente administrative." },
              { icon: "💰", title: "50% crédit d'impôt", desc: "Automatique service à personne. TVA réduite 5.5%. Vraiment moins cher." },
              { icon: "🏠", title: "Maintien à domicile", desc: "Vivre chez soi dignement plutôt qu'établissement. Liberté préservée." },
              { icon: "🎯", title: "Service personnalisé", desc: "Pas de modèle unique. Chaque situation, solution adaptée." },
              { icon: "📞", title: "Support continu", desc: "Supervision régulière, feedback, ajustements permanents." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text mb-16 text-center">Nos services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { slug: "aide-personnes-agees", icon: "👴", title: "Aide aux personnes âgées", desc: "Toilette, repas, mobilité, accompagnement. Pour continuer vie chez soi." },
              { slug: "aide-handicap", icon: "🦽", title: "Aide handicap", desc: "Services adaptés à chaque handicap. Continuité, respect, dignité." },
              { slug: "garde-enfants-handicap", icon: "👶", title: "Garde d'enfants", desc: "Garde qualifiée enfants handicapés. Sécurité, bienveillance, confiance." },
              { slug: "aide-menagere", icon: "🧹", title: "Aide ménagère", desc: "Ménage régulier. Domicile propre, prévention chutes, bien-être." },
              { slug: "garde-nuit", icon: "🌙", title: "Présence de nuit", desc: "Veille passive ou active. Sécurité nocturne maximale." },
              { slug: "accompagnement-sorties", icon: "🚶", title: "Accompagnement", desc: "Courses, rdv médecins, loisirs. Autonomie et lien social." },
            ].map((service, idx) => (
              <Link key={idx} href={`/services/${service.slug}`} className="group">
                <div className="bg-warm p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-light text-sm">{service.desc}</p>
                  <div className="mt-4 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text mb-16 text-center">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marie T.", city: "Paris 12ème", quote: "Enfin respirer. Maman en de bonnes mains. Youdom Care c'est sérieux." },
              { name: "Jean-Pierre D.", city: "Boulogne", quote: "Même intervenant depuis 2 ans. On s'est construit confiance vraie. Ça change tout." },
              { name: "Sophie L.", city: "Vincennes", quote: "Processus simple. Pas bureaucratie pesante. Réponse rapide. Très professionnel." },
              { name: "Robert M.", city: "Le Kremlin-Bicêtre", quote: "Garde handicap mon fils : patience, bienveillance, compétence. Exactement ce qu'il fallait." },
              { name: "Valérie N.", city: "Saint-Mandé", quote: "Crédit d'impôt expliqué simplement. Moins cher que prévu. Transparence totale." },
              { name: "Patrick H.", city: "Ivry-sur-Seine", quote: "Présence nuit : enfin dormir tranquille. Sécurité maximale. Recommend vivement." },
            ].map((testi, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">★</span>
                  ))}
                </div>
                <p className="text-text-light mb-4 italic">"{testi.quote}"</p>
                <p className="font-bold text-text text-sm">{testi.name}</p>
                <p className="text-text-light text-xs">{testi.city}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-light mt-12">
            <strong>98% de satisfaction</strong> — Source sondage clients 2025
          </p>
        </div>
      </section>

      {/* AIDES FINANCIÈRES */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Financer votre aide</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "💰", label: "APA", desc: "Allocation Personnalisée d'Autonomie" },
              { icon: "🏥", label: "PCH", desc: "Prestation Compensation Handicap" },
              { icon: "📊", label: "Crédit 50%", desc: "Automatique service à personne" },
              { icon: "👶", label: "AEEH", desc: "Allocation Éducation Enfant Handicapé" },
            ].map((aide, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20 text-center">
                <div className="text-4xl mb-2">{aide.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{aide.label}</h3>
                <p className="text-white/70 text-xs">{aide.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/aides-financieres" className="inline-block px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Guide aides financières complet →
            </Link>
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text mb-16 text-center">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Appel conseil", desc: "Décrivez situation. Conseil gratuit orienté." },
              { step: "2", title: "Visite évaluation", desc: "À domicile. Observation et discussion détaillée." },
              { step: "3", title: "Plan d'aide", desc: "Services, planning, tarif transparent." },
              { step: "4", title: "Débuter", desc: "Intervenant formé commence rapidement." },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-warm p-8 rounded-2xl text-center">
                  <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-text mt-2 mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Commençons ensemble</h2>
          <p className="text-white/80 text-lg mb-10">
            Youdom Care : aide à domicile de qualité. Pour vivre dignement chez soi. Consultation gratuite, réponse en moins de 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
