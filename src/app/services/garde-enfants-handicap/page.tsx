import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garde d'enfants en situation de handicap | Youdom Care",
  description: "Garde d'enfants handicapés. Intervenants formés et bienveillants. Sécurité maximale, activités adaptées. Devis gratuit.",
};

export default function GardeEnfantsHandicapPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Garde d'enfants en situation de handicap : sécurité, bienveillance et confiance absolue
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">Intervenants expérimentés et formés. Vos enfants en de bonnes mains.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Les défis des parents d'enfants handicapés</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "😰", title: "L'angoisse de laisser son enfant", desc: "Et s'il a peur ? Et s'il se blesse ? Qui comprendra vraiment ses besoins ?" },
              { icon: "🔍", title: "Trouver une garde adaptée", desc: "Crèches refusent. Écoles manquent ressources. Solution de qualité rarissime." },
              { icon: "🛠️", title: "Compétences nécessaires rares", desc: "Quelqu'un formé, patient, bienveillant, qui comprend le handicap spécifique." },
              { icon: "😩", title: "Épuisement parental", desc: "Travail + soins enfant + rdv méd = burnout. Couple se désunit souvent." },
              { icon: "⚖️", title: "Culpabilité (faux problème)", desc: "\"Je suis mauvaise mère de chercher aide.\" Non. Parent qui respire = meilleur parent." },
              { icon: "📚", title: "Continuité scolaire/médicale", desc: "École + rdv doc + coordination = difficile gérer seul." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Notre approche : expertise, patience, bienveillance</h2>
          <div className="space-y-6">
            <div className="p-8 bg-warm rounded-2xl border-l-4 border-secondary">
              <h3 className="text-2xl font-bold text-text mb-3">Intervenants rigoureusement sélectionnés</h3>
              <p className="text-text-light mb-4">
                Expérience minimum 3-5 ans auprès enfants handicapés. CAP petite enfance ou DEAES idéal. Formations continues : gestes, handicaps spécifiques, communication, comportement.
              </p>
              <p className="text-text-light">Références vérifiées. Sélection très stricte. On refuse beaucoup de candidats.</p>
            </div>

            <div className="p-8 bg-warm rounded-2xl border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-text mb-3">Comprendre chaque enfant comme personne unique</h3>
              <p className="text-text-light">
                Cet enfant a un handicap, mais c'est une personne. Arthur, 7 ans, aime dinosaures. Peur bruit fort. Besoin routine le matin. Notre intervenant observe, écoute, construit relation respectueuse avec Arthur — pas avec "un cas autiste".
              </p>
            </div>

            <div className="p-8 bg-warm rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-text mb-3">Services adaptés et bienveillants</h3>
              <ul className="space-y-2 text-text-light">
                <li>✓ Aide toilette, habillage, repas si besoin</li>
                <li>✓ Communication adaptée au handicap (LSF, gestes, patience)</li>
                <li>✓ Activités loisirs adaptées au niveau et intérêts</li>
                <li>✓ Gestion comportements/crises calmement et bienveillance</li>
                <li>✓ Aide devoirs et stimulation pédagogique</li>
                <li>✓ Coordination école et médecins</li>
                <li>✓ Sorties et accompagnement adaptés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Ce que vous gagnez</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour votre enfant</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Quelqu'un qui comprend vraiment son handicap</li>
                <li>✓ Relation de confiance + lien stable</li>
                <li>✓ Activités adaptées + stimulation + plaisir</li>
                <li>✓ Respect dignité et choix</li>
                <li>✓ Vie "normale" pas isolement</li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour vous (parents)</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Confiance absolue (intervenant compétent)</li>
                <li>✓ Enfin respirer ! Temps travail/couple/soi</li>
                <li>✓ Réduction épuisement parental</li>
                <li>✓ Meilleur rapport enfant (qualité vs corvée)</li>
                <li>✓ Suivi coordonné école/médecins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Débuter la garde : processus progressif et rassurant</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Appel conseil détaillé", desc: "Vous décrivez handicap enfant, fonctionnement jour, besoins spécifiques." },
              { step: "2", title: "Évaluation à domicile", desc: "Rencontre enfant, observation calme, discussion famille." },
              { step: "3", title: "Formation intervenant complète", desc: "Briefing sur handicap enfant, routines, gestes, urgences." },
              { step: "4", title: "Rencontres progressives", desc: "Première visite : parents présents. Puis progressif selon confort enfant." },
              { step: "5", title: "Débriefing et ajustements", desc: "Feedback après chaque visite. \"Comment s'est passé ? Besoin ajuster ?\"" },
              { step: "6", title: "Démarrage progressif", desc: "Semaine 1 : demi-journée. Semaine 2 : journée. Puis augmente selon besoin." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-secondary">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary text-white font-bold flex items-center justify-center text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-text">{item.title}</h3>
                  <p className="text-text-light text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Aides financières (AEEH, PCH, crédit d'impôt 50%)</h2>
          <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary mb-8">
            <h3 className="font-bold text-text mb-2">AEEH (Allocation Éducation Enfant Handicapé)</h3>
            <p className="text-text-light text-sm">Pour enfants handicapés 0-20 ans. Jusqu'à 300-400€/mois. Accessible pour plupart situations.</p>
          </div>

          <div className="bg-warm p-8 rounded-2xl border-l-4 border-accent">
            <h3 className="font-bold text-text mb-2">Crédit d'impôt 50% + TVA 5.5%</h3>
            <p className="text-text-light text-sm">Service à personne automatique. Youdom Care aide démarches.</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/aides-financieres" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light">
              Guide aides financières →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Votre enfant mérite garde de qualité</h2>
          <p className="text-white/80 mb-8">Youdom Care : gardes formées, bienveillantes, 98% satisfaction parents.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0667224507" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all text-lg">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
