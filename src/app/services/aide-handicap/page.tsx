import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide à domicile pour personnes handicapées | Youdom Care",
  description: "Aide à domicile adaptée handicap. Accompagnement personnalisé, coordiné, flexible. Expertise PCH. Devis gratuit.",
};

export default function AideHandicapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Aide à domicile adaptée pour personnes en situation de handicap
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Accompagnement personnalisé, flexible et bienveillant. Chaque handicap est unique.
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
      </section>

      {/* ENJEUX */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Vivre avec un handicap : défis et besoins</h2>
          <p className="text-text-light text-center mb-12 text-lg max-w-3xl mx-auto">
            Chaque handicap est unique. Paralysie cérébrale, autisme, surdité, malvoyance, troubles psychiques — chacun exige une réponse spécifique.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🎯", title: "Limitations quotidiennes", desc: "Mobilité, coordination, communication — chaque tâche peut devenir complexe ou impossible." },
              { icon: "🏥", title: "Coordination médicale", desc: "Kinés, médecins, psychologues. Gérer tout ça seul = impossible sans aide." },
              { icon: "🤝", title: "Isolement social", desc: "Handicap = souvent exclusion. Sortie compliquée, aidants épuisés, résultat : isolement." },
              { icon: "👨‍👩‍👧", title: "Aidants à la limite", desc: "Parents ou conjoints : culpabilité, épuisement physique et psychologique." },
              { icon: "💼", title: "Inclusion professionnelle", desc: "Emploi difficile. Besoin aide adaptée pour préserver autonomie et dignité." },
              { icon: "🎓", title: "Soutien éducatif", desc: "École compliquée. Aide spécialisée peut faire la différence." },
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

      {/* SERVICES HANDICAP */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Services adaptés au handicap</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Aide à la mobilité (transferts, déplacements)",
              "Hygiène personnelle (toilette, habillage, intimité)",
              "Aide nutritionnelle et gestion santé",
              "Aide administrative et démarches",
              "Communication adaptée au handicap",
              "Activités adaptées et stimulation",
              "Coordination avec professionnels santé",
              "Gestion comportements et émotions",
              "Aide école et accompagnement pédagogique",
              "Sorties et intégration sociale",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-accent">
                <div className="text-accent text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Service personnalisé selon situation spécifique.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Notre expertise du handicap</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Formations spécialisées</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Transferts et manutention sécurisée</li>
                <li>✓ Communication adaptée (sourds, autisme, déficits)</li>
                <li>✓ Gestion comportements et émotions</li>
                <li>✓ Handicaps spécifiques (autisme, paralyzie cérébrale)</li>
                <li>✓ Premiers secours et urgences</li>
                <li>✓ Respect confiden tialité et RGPD</li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Approche Youdom Care</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Sélection stricte intervenants</li>
                <li>✓ Supervision régulière et continue</li>
                <li>✓ Respect absolu et secret professionnel</li>
                <li>✓ Coordination médicale et sociale</li>
                <li>✓ Flexibilité et adaptation permanente</li>
                <li>✓ Accompagnement aides (PCH, AEEH)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Avantages concrets</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏠", title: "Maintien à domicile", desc: "Plutôt qu'établissement spécialisé, vivre chez soi ou en communauté." },
              { icon: "🎯", title: "Autonomie préservée", desc: "Aide ne remplace pas, elle soutient l'autonomie restante." },
              { icon: "🤲", title: "Dignité respectée", desc: "Aidé, mais pas infantilisé. Vos choix respectés." },
              { icon: "👥", title: "Lien social actif", desc: "Sorties, activités, intervenant comme relation = réduction isolement." },
              { icon: "🛡️", title: "Sécurité", desc: "Quelqu'un veille. Gestes adaptés. Urgence gérée rapidement." },
              { icon: "✨", title: "Vie riche", desc: "Pas juste survie. Activités, plaisirs, sens préservés." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Débuter accompagnement adapté</h2>

          <div className="space-y-6">
            {[
              { step: "1", title: "Appel conseil détaillé", desc: "Vous décrivez handicap, situation actuelle, besoins spécifiques." },
              { step: "2", title: "Évaluation approfondie", desc: "Visite à domicile. Observation. Discussion détaillée avec famille." },
              { step: "3", title: "Rencontre équipe médicale", desc: "Si besoin, contact kinés, médecins pour comprendre protocoles." },
              { step: "4", title: "Plan d'aide détaillé", desc: "Services, planning, formation intervenant, tarif transparent." },
              { step: "5", title: "Formation intervenant", desc: "Briefing complet sur situation particulière et protocoles." },
              { step: "6", title: "Rencontres progressives", desc: "Premier contact calme. Progression adaptée. Building confiance." },
              { step: "7", title: "Démarrage accompagné", desc: "Aide commence avec supervision renforcée semaine 1." },
              { step: "8", title: "Suivi continu", desc: "Feedback hebdomadaire. Réunions suivi mensuelles. Ajustements permanents." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-warm rounded-xl border-l-4 border-primary">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-bold flex-shrink-0 text-sm">
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

      {/* AIDES FINANCIÈRES */}
      <section className="py-16 bg-gradient-to-br from-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">PCH, AEEH, crédit d'impôt</h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-3">PCH (Prestation Compensation Handicap)</h3>
              <p className="text-text-light">
                Pour adultes handicapés. Peut couvrir part importante aide à domicile. Youdom Care aide dossier MDPH.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-3">Crédit d'impôt 50%</h3>
              <p className="text-text-light">
                Service à personne = réduction automatique 50% impôts + TVA 5.5%. Cumulable avec PCH.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/aides-financieres" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors">
              Guide aides financières complet →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Vos questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Comment adaptez-vous l'aide à mon handicap spécifique ?",
                a: "Évaluation approfondie + formation intervenant sur votre situation + plan détaillé + ajustements continus.",
              },
              {
                q: "Travaillez-vous avec l'équipe médicale ?",
                a: "Oui. Avec accord, on communique avec médecins, kinés, éducateurs. Respect protocoles. Rapports réguliers.",
              },
              {
                q: "Peut-on avoir même intervenant à chaque fois ?",
                a: "Oui, c'est notre politique. Continuité = important pour personne handicapée.",
              },
              {
                q: "Comment garantir confidentialité sur état santé ?",
                a: "Contrat secret professionnel. Formation légale. Violation = licenciement + poursuites. C'est très sérieux.",
              },
              {
                q: "Peut-on avoir présence de nuit si besoin ?",
                a: "Oui. Veille passive ou active selon situation. Pour certains handicaps (épilepsie, déambulation), c'est crucial.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text mb-2">Q: {item.q}</h3>
                <p className="text-text-light">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Vivre pleinement malgré handicap</h2>
          <p className="text-white/80 text-lg mb-8">C'est possible avec aide adaptée. Youdom Care : 8 ans expérience, 150+ intervenants formés, 98% satisfaction.</p>
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
