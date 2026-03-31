import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présence de nuit à domicile | Youdom Care",
  description: "Présence de nuit à domicile pour sécurité. Veille active, supervision. Sérénité pour famille. Devis gratuit.",
};

export default function GardeNuitPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Présence de nuit à domicile : sécurité et sérénité</h1>
          <p className="text-xl text-white/80 mb-8">Veille active ou passive. Évitez l'établissement. Sérénité pour toute la famille.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl border border-white text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Pourquoi une présence la nuit ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🚨", title: "Peur de chute la nuit", desc: "Aller toilettes = risque. Confusion nocturne possible." },
              { icon: "😰", title: "Cauchemars & déambulation", desc: "Alzheimer, Parkinson. Peur être seul. Déambulation risquée." },
              { icon: "🏥", title: "Urgences médicales", desc: "AVC nocturne, dyspnée. Quelqu'un doit intervenir vite." },
              { icon: "💤", title: "Incontinence la nuit", desc: "Gestion discrète, hygiène, confort. Aide nécessaire." },
              { icon: "😊", title: "Sérénité aidant", desc: "Parent/enfant peut enfin dormir. Tranquillité énorme." },
              { icon: "🏠", title: "Maintien à domicile", desc: "Présence nuit = souvent condition pour rester à la maison." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-text mb-1">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Deux types de veille</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm p-8 rounded-2xl border-2 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Veille passive (surveillance)</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Intervenant présent au domicile</li>
                <li>✓ Reste éveillé mais discrétion</li>
                <li>✓ Intervient en cas de besoin</li>
                <li>✓ Idéal : enfants autonomes, seniors stables</li>
                <li>✓ Tarif : plus accessible</li>
              </ul>
            </div>

            <div className="bg-warm p-8 rounded-2xl border-2 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Veille active (accompagnement)</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>✓ Intervenant très attentif</li>
                <li>✓ Aide toilette, change, confort</li>
                <li>✓ Prêt intervenir immédiatement</li>
                <li>✓ Idéal : Alzheimer, perte autonomie, soins</li>
                <li>✓ Tarif : plus élevé mais justifié</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Services spécifiques la nuit</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white text-sm">
            <div>
              <ul className="space-y-2">
                <li>✓ Aide toilette et change</li>
                <li>✓ Gestion incontinence discrète</li>
                <li>✓ Aide lever aux toilettes</li>
                <li>✓ Prévention chutes</li>
                <li>✓ Confort lit (repositionnement)</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>✓ Sécurité domicile (chauffage, portes)</li>
                <li>✓ Gestion demandes eau/médicaments</li>
                <li>✓ Vigilance respiration (si apnée)</li>
                <li>✓ Rassurance en cas d'angoisse</li>
                <li>✓ Urgence identifiée et signalée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Processus mise en place</h2>
          <div className="space-y-4">
            {[
              { s: "1", t: "Appel conseil", d: "Nature besoins, type veille, horaires exacts (21h-7h, 22h-8h, etc)." },
              { s: "2", t: "Évaluation approfondie", d: "Chambre, salle bain, accessibilité nocturne détaillée." },
              { s: "3", t: "Plan veille", d: "Tâches, urgences, protocoles spécifiques." },
              { s: "4", t: "Sélection intervenant", d: "Expérience nuit, patience, psychologie." },
              { s: "5", t: "Rodage", d: "Visite fin de journée, calibrage, clarification." },
              { s: "6", t: "Première vraie nuit", d: "Contact urgence bien visible. Supervision renforcée." },
              { s: "7", t: "Suivi régulier", d: "Feedback hebdomadaire, ajustements continus." },
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
          <h2 className="text-3xl font-bold text-text mb-8 text-center">APA, PCH, crédit d'impôt 50%</h2>
          <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
            <p className="text-text-light text-sm">
              <strong>APA :</strong> Allocation Personnalisée d'Autonomie pour personnes âgées. <strong>PCH :</strong> Prestation Compensation Handicap. 
              <strong className="ml-2">Crédit impôt 50% :</strong> Automatique service à personne. Youdom Care aide dossiers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Enfin dormir tranquille</h2>
          <p className="text-white/80 mb-8">Présence de nuit = sécurité maximale + sérénité pour toute la famille.</p>
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
