import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous Contacter | Youdom Care",
  description: "Contact Youdom Care. Demandez un devis gratuit ou appelez. Réponse en moins de 2 heures.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nous contacter</h1>
          <p className="text-xl text-white/80">Réponse en moins de 2 heures. Consultation gratuite.</p>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-text mb-2">Appel direct</h3>
              <p className="text-text-light text-sm mb-4">Lundi-samedi, 8h-20h</p>
              <a href="tel:0184807297" className="font-bold text-secondary hover:text-secondary-light">
                01 84 80 72 97
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-text mb-2">WhatsApp / SMS</h3>
              <p className="text-text-light text-sm mb-4">Réponse rapide</p>
              <a href="tel:0667224507" className="font-bold text-secondary hover:text-secondary-light">
                06 67 22 45 07
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-bold text-text mb-2">Email</h3>
              <p className="text-text-light text-sm mb-4">Réponse 24h</p>
              <a href="mailto:contact@youdom-care.com" className="font-bold text-secondary hover:text-secondary-light">
                contact@youdom-care.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Demander un devis gratuit</h2>
          
          <form className="space-y-6 bg-warm p-8 rounded-2xl">
            <div>
              <label className="block text-sm font-bold text-text mb-2">Votre nom</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-text mb-2">Téléphone</label>
              <input 
                type="tel" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-text mb-2">Email</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="jean@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-text mb-2">Type d'aide recherchée</label>
              <select 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez...</option>
                <option value="aide-personnes-agees">Aide aux personnes âgées</option>
                <option value="aide-handicap">Aide handicap</option>
                <option value="garde-enfants">Garde d'enfants</option>
                <option value="aide-menagere">Aide ménagère</option>
                <option value="garde-nuit">Présence de nuit</option>
                <option value="accompagnement">Accompagnement/sorties</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-text mb-2">Situation / Besoins</label>
              <textarea 
                required 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Décrivez votre situation et besoins..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-3 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-lg transition-colors"
            >
              Envoyer ma demande
            </button>

            <p className="text-text-light text-xs text-center">
              Nous traiterons votre demande sous 2 heures (jours ouvrables).
            </p>
          </form>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Nos coordonnées</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-text mb-4">Siège social</h3>
              <p className="text-text-light text-sm">
                61 rue de Lyon<br/>
                75012 Paris<br/>
                France
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-text mb-4">Zone d'intervention</h3>
              <p className="text-text-light text-sm">
                Paris & Île-de-France<br/>
                Intervention rapide possible<br/>
                Déplacements gratuits consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
