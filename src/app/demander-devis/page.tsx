import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit | Youdom Care",
  description: "Devis gratuit et personnalisé en 2 minutes. Sans engagement. Réponse sous 2 heures. Crédit d'impôt 50%.",
};

export default function DevisPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Votre devis <span className="text-secondary">gratuit</span> en 2 minutes
          </h1>
          <p className="text-white/70">Sans engagement • Réponse sous 2h • Crédit d'impôt 50%</p>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-text mb-2 text-center">Formulaire de devis</h2>
            <p className="text-text-light text-sm text-center mb-6">
              Remplissez ce formulaire simple et on vous appellera sous 2 heures.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Prénom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" required />
                <input type="text" placeholder="Nom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" required />
              </div>

              <input type="tel" placeholder="Téléphone *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" required />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" required />

              <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-text-light" required>
                <option value="">Type de situation *</option>
                <option>Personne âgée</option>
                <option>Situation de handicap</option>
                <option>Perte d'autonomie</option>
                <option>Retour d'hospitalisation</option>
                <option>Enfant handicapé/malade</option>
                <option>Autre</option>
              </select>

              <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-text-light" required>
                <option value="">Service souhaité *</option>
                <option>Aide à l'autonomie</option>
                <option>Garde de nuit</option>
                <option>Aide ménagère</option>
                <option>Accompagnement</option>
                <option>Transport PMR</option>
                <option>Aide au handicap</option>
                <option>Autre</option>
              </select>

              <input type="text" placeholder="Code postal *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" required />

              <textarea placeholder="Détails supplémentaires..." rows={4} className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none" />

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-xs text-text-light">
                  J'accepte les conditions générales et la politique de confidentialité. 
                  Youdom Care protège mes données conformément au RGPD.
                </label>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl text-lg transition-all">
                Recevoir mon Devis Gratuit ✨
              </button>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-text-light">
                <span>🔒 Données protégées</span>
                <span>⚡ Réponse sous 2h</span>
                <span>💯 Sans engagement</span>
                <span>💰 Crédit d'impôt 50%</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
