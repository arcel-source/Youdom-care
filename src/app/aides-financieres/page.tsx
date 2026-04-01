import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aides Financières & Démarches | APA, PCH, Crédit d'Impôt 50% | Youdom Care",
  description: "APA, PCH, crédit d'impôt 50%, AEEH. Youdom Care vous accompagne dans démarches. Financement accessible aide à domicile.",
  openGraph: {
    title: "Aides Financières : APA, PCH, Crédit d'Impôt 50%",
    description: "Guide complet aides. Youdom Care aide dossiers et démarches.",
  },
};

export default function AidesFinanciairesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Financer votre aide à domicile : APA, PCH, crédit d'impôt 50%</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">Les aides existent. Vous en avez le droit. Youdom Care vous accompagne dans démarches.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander aide accompagnement
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl border border-white text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Les aides existent. Vous en avez le droit.</h2>
          <p className="text-text-light text-center text-lg mb-12 max-w-2xl mx-auto">
            L'aide à domicile coûte de l'argent. Mais ne vous découragez pas : des aides gouvernementales, régionales et fiscales existent pour financer ou réduire le coût réel.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "💰", label: "APA" },
              { icon: "🏥", label: "PCH" },
              { icon: "👶", label: "AEEH" },
              { icon: "📊", label: "Crédit 50%" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-bold text-text text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">L'APA (Allocation Personnalisée d'Autonomie)</h2>

          <div className="space-y-8">
            <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Qu'est-ce que l'APA ?</h3>
              <p className="text-text-light mb-4">
                L'APA est une aide financière versée par le département pour les personnes âgées en perte d'autonomie. C'est pas un prêt : c'est une allocation. Vous la recevez sans la rembourser.
              </p>
              <p className="text-text-light">
                Contrairement à beaucoup d'aides, l'APA n'est pas soumise à condition de ressources. Que vous soyez riche ou pauvre, si vous remplissez critères d'autonomie, vous avez droit.
              </p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-accent">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Qui peut demander l'APA ?</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Âge minimum 60 ans</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Réside en France</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> En perte d'autonomie (évaluée selon grille AGGIR)</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Groupes de ressources AGGIR 1 à 4 seulement</li>
              </ul>
              <p className="text-text-light text-sm mt-4 italic">Note : AGGIR 5 et 6 = refusé automatiquement.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Montants de l'APA</h3>
              <p className="text-text-light mb-4">
                <strong>Montant moyen national :</strong> 600€ à 1200€/mois selon niveau perte d'autonomie. Varie selon département (+ chère Paris que province).
              </p>
              <p className="text-text-light">
                Calcul : montant APA possible × pourcentage participation département = montant réel.
              </p>
              <p className="text-text-light text-sm mt-4">Peut couvrir 50% à 80% de l'aide à domicile selon situation.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Comment obtenir l'APA ?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Demande auprès département", desc: "CCAS local ou directement direction solidarité département." },
                  { step: "2", title: "Évaluation à domicile", desc: "Équipe département vient observer, poser questions." },
                  { step: "3", title: "Décision APA", desc: "Accord + montant mensuel décidé." },
                  { step: "4", title: "Plan d'aide", desc: "Services DÉTAILLÉS établis avec assistant social." },
                  { step: "5", title: "Mise en place", desc: "Youdom Care reçoit validation APA et facture département direct." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-warm rounded-lg">
                    <div className="flex-shrink-0 h-8 w-8 rounded bg-secondary text-primary font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-text text-sm">{item.title}</h4>
                      <p className="text-text-light text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCH */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">La PCH (Prestation Compensation Handicap)</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border-l-4 border-secondary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Qu'est-ce que la PCH ?</h3>
              <p className="text-text-light">
                La PCH est aide financière État pour personnes handicapées. Versée par département. Couvre besoin d'aide spécifique (gestes, déplacements, accompagnement). Très complète et souvent + élevée que APA.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-accent">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Qui peut demander la PCH ?</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Personnes avec handicap (moteur, sensoriel, cognitif, mental, etc)</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Âge limite : avant 75 ans (sauf exceptions)</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Résidence France</li>
                <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Certains critères incapacité</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Montants possibles</h3>
              <p className="text-text-light">
                Très variables selon type handicap et besoins. Peut couvrir jusqu'à 100% aide à domicile pour handicap grave. Moyenne : 1000€ à 3000€/mois dans cas importants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Comment obtenir la PCH ?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Demande MDPH", desc: "Maison Départementale Personne Handicapée. Formulaire CERFA téléchargeable." },
                  { step: "2", title: "Dossier projet de vie", desc: "Description détaillée : vie quotidienne, besoins spécifiques, objectifs." },
                  { step: "3", title: "Évaluation pluridisciplinaire", desc: "Médecin, travailleur social, autres spécialistes selon situation." },
                  { step: "4", title: "Décision", desc: "4-6 mois d'attente. Plan d'aide adapté si accord." },
                  { step: "5", title: "Mise en place", desc: "Youdom Care facture MDPH. Vous payez reste/franchises si applicable." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-warm rounded-lg">
                    <div className="flex-shrink-0 h-8 w-8 rounded bg-secondary text-primary font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-text text-sm">{item.title}</h4>
                      <p className="text-text-light text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES AIDES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Autres aides financières</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">AEEH (Allocation Éducation Enfant Handicapé)</h3>
              <p className="text-text-light text-sm mb-4">
                Pour enfants handicapés 0-20 ans. Montant de base 135€/mois + compléments si situation grave. Peut financer aide à domicile ou garde.
              </p>
              <p className="text-text-light text-sm">Demande CAF. Pas condition ressources stricte.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-accent">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Crédit d'Impôt 50% (Service à Personne)</h3>
              <p className="text-text-light text-sm mb-4">
                Réduction fiscale automatique pour aide à domicile, ménage, etc. Vous déduisez 50% du coût de vos impôts (ou crédit de 50% si vous ne payez pas impôt).
              </p>
              <p className="text-text-light text-sm">S'applique automatiquement si Youdom Care agréée.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">TVA Réduite 5.5%</h3>
              <p className="text-text-light text-sm mb-4">
                Au lieu 20% pour autres services. Youdom Care applique TVA 5.5% automatiquement pour service à domicile.
              </p>
              <p className="text-text-light text-sm">Incluse dans tarif Youdom Care.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">CESU (Chèques Emploi Service Universel)</h3>
              <p className="text-text-light text-sm mb-4">
                Chèques spécialisés pour services à personne. Simplifient paiement et déclaration charges sociales. Acceptés par Youdom Care.
              </p>
              <p className="text-text-light text-sm">Demande auprès banque ou Caisse Allocations Familiales.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-accent">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Aides Mutuelles</h3>
              <p className="text-text-light text-sm mb-4">
                Certaines mutuelles complémentaires santé proposent aides ou remboursements partiels pour aide à domicile.
              </p>
              <p className="text-text-light text-sm">Renseignez-vous auprès votre mutuelle.</p>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Aides Locales & Régionales</h3>
              <p className="text-text-light text-sm mb-4">
                Certains conseils régionaux/départementaux, mairies, proposent complément aides nationales. Très variable selon localisation.
              </p>
              <p className="text-text-light text-sm">Youdom Care peut vous aider identifier disponibilités.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT YOUDOM CARE */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Youdom Care vous accompagne dans démarches</h2>

          <div className="space-y-6">
            {[
              "Identification aides possibles selon votre situation",
              "Aide constitution dossier (formulaires CERFA, justificatifs)",
              "Rédaction projet de vie convaincant (PCH)",
              "Communication avec département/MDPH",
              "Suivi instruction (relances, clarifications)",
              "Mise en place post-accord (facturation directe)",
              "Rapports d'activité pour renouvellement aides",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-lg backdrop-blur border border-white/20">
                <span className="text-secondary text-lg font-bold flex-shrink-0">✓</span>
                <p className="text-white text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-center mt-8 text-sm">
            <strong>Gratuit :</strong> l'accompagnement Youdom Care pour dossiers aides n'a aucun coût supplémentaire.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Vos questions sur les aides</h2>

          <div className="space-y-6">
            {[
              {
                q: "Ai-je le droit à l'APA ?",
                a: "Si vous avez 60+, résidez France, et êtes en perte d'autonomie (AGGIR 1-4), probablement oui. Seule réponse : appeler département ou Youdom Care pour évaluation.",
              },
              {
                q: "Combien de temps pour obtenir une aide ?",
                a: "APA : 2-4 semaines généralement. PCH : 4-6 mois. Youdom Care peut aider accélérer processus.",
              },
              {
                q: "Que faire si aide refusée ?",
                a: "Droit recours. Youdom Care peut aider constituer dossier appel ou contacter assistant social pour clarifier.",
              },
              {
                q: "Peut-on cumuler APA et PCH ?",
                a: "Non. Vous recevez l'une ou l'autre. Mais si situation change, vous pouvez demander révision.",
              },
              {
                q: "Comment fonctionne crédit d'impôt 50% ?",
                a: "Youdom Care facture montant brut. Vous déduisez 50% vos impôts l'année suivante. Si vous ne payez pas impôt : crédit versé.",
              },
              {
                q: "Youdom Care aide-t-elle gratuitement pour dossiers ?",
                a: "Oui. Aucun coût supplémentaire pour aide administrative et dossiers. C'est inclus service Youdom Care.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text mb-2">Q: {item.q}</h3>
                <p className="text-text-light text-sm">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Commençons ensemble les démarches</h2>
          <p className="text-white/80 mb-8">Youdom Care : expert accompagnement aides. Zéro bureaucratie pesante. On fait simple.</p>
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
