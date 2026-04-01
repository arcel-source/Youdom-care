import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accompagnement et sorties | Youdom Care",
  description: "Accompagnement personnes âgées et handicapées. Courses, rendez-vous, loisirs. Autonomie et lien social. Devis gratuit.",
};

export default function AccompagnementSortiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Accompagnement et sorties : autonomie et lien social
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Courses, rendez-vous médicaux, loisirs. Preservez dignité et indépendance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/demander-devis" className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Demander un devis gratuit
                </Link>
                <a href="tel:0184807297" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Appeler : 01 84 80 72 97
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/service-accompagnements.png"
                  alt="Accompagnement et sorties pour personnes âgées et handicapées"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Pourquoi l&apos;accompagnement et les sorties ?</h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Sortir, faire des activités, avoir une vie sociale — c&apos;est pas un luxe. C&apos;est fondamental pour la santé physique ET mentale.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🧠", title: "Santé mentale", desc: "Isolement = dépression accélérée. Lien social = santé cérébrale meilleure." },
              { icon: "💪", title: "Santé physique", desc: "Sorties = exercice + stimulation. Meilleure condition physique globale." },
              { icon: "🤝", title: "Lien social", desc: "Voir amis, participer activités. Dignité et sens à la vie." },
              { icon: "🚶", title: "Autonomie préservée", desc: "Continuer faire choses seul (avec soutien) = autonomie." },
              { icon: "😊", title: "Qualité de vie", desc: "Vivre vraiment, pas juste exister. Plaisir du quotidien." },
              { icon: "👥", title: "Lien famille", desc: "Sorties ensemble = temps qualité. Pas juste tâches." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-text mb-1 text-sm">{item.title}</h3>
                <p className="text-text-light text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Types d&apos;accompagnement possibles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-warm rounded-2xl border-l-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Courses et déplacements essentiels</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Courses supermarché (avec choix si possible)</li>
                <li>✓ Pharmacie</li>
                <li>✓ Boulangerie, marché</li>
                <li>✓ Gestion budget/paiements simples</li>
                <li>✓ Retour sécurisé à la maison</li>
              </ul>
            </div>

            <div className="p-8 bg-warm rounded-2xl border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Rendez-vous médicaux</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Accompagnement chez médecin</li>
                <li>✓ Attendre pour retour</li>
                <li>✓ Noter instructions si besoin</li>
                <li>✓ Pharmacie récupérer ordonnance</li>
                <li>✓ Kinésiologie, spécialistes</li>
              </ul>
            </div>

            <div className="p-8 bg-warm rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">Loisirs et culture</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Promenades parc ou ville</li>
                <li>✓ Musée, exposition</li>
                <li>✓ Cinéma, théâtre</li>
                <li>✓ Café, restaurant</li>
                <li>✓ Activités sociales</li>
              </ul>
            </div>

            <div className="p-8 bg-warm rounded-2xl border-l-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Accompagnement école/activités enfant</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Accompagnement école</li>
                <li>✓ Récupération après classe</li>
                <li>✓ Activités (sport, musique)</li>
                <li>✓ Rendez-vous médico-scolaires</li>
                <li>✓ Aide devoirs si applicable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Bénéfices importants</h2>
          <div className="grid md:grid-cols-3 gap-6 text-white text-sm">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour la personne</h3>
              <p className="text-white/80">Autonomie préservée. Lien social actif. Santé physique et mentale meilleure. Dignité.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour la famille</h3>
              <p className="text-white/80">Moins de stress. Parent peut travailler sans culpabilité. Meilleure qualité temps ensemble.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour la santé</h3>
              <p className="text-white/80">Prévention isolement = meilleure santé cardiaque, moins dépression, moins chute.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Comment ça fonctionne</h2>
          <div className="space-y-4">
            {[
              { s: "1", t: "Appel conseil", d: "Type sorties souhaitées, fréquence, horaires, besoins spécifiques." },
              { s: "2", t: "Évaluation", d: "Discussion détaillée : mobilité, autonomie, préférences, limites." },
              { s: "3", t: "Plan accompagnement", d: "Sorties programmées, tarif, flexibilité." },
              { s: "4", t: "Sélection intervenant", d: "Personne adaptée : patient, bienveillant, bon chauffeur." },
              { s: "5", t: "Premières sorties", d: "Avec supervision. Feedback parent et accompagné." },
              { s: "6", t: "Suivi continu", d: "Feedback régulier, ajustements selon évolution besoins." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-secondary">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {item.s}
                </div>
                <div>
                  <h3 className="font-bold text-text text-sm">{item.t}</h3>
                  <p className="text-text-light text-xs mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6 text-center">Financement</h2>
          <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
            <p className="text-text-light text-sm">
              <strong>APA :</strong> Peut couvrir part accompagnement. <strong>Crédit d&apos;impôt 50% :</strong> Automatique service à personne. 
              <strong className="ml-2">TVA réduite 5.5%.</strong> Youdom Care aide démarches.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Preservez la vie active de votre proche</h2>
          <p className="text-white/80 mb-8">Sorties régulières = santé meilleure + bonheur + dignité préservée.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0667224507" className="px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
