import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Youdom Care",
  description: "Contactez Youdom Care pour aide à domicile. Formulaire, téléphone, email. 61 rue de Lyon, 75012 Paris. Réponse sous 2h.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Une question ? Un besoin ? Nous sommes à votre écoute.
            Réponse garantie sous 2 heures.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-text mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Prénom" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                    <input type="text" placeholder="Nom" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-text-light">
                    <option value="">Sujet de votre demande</option>
                    <option>Demande de devis</option>
                    <option>Information sur un service</option>
                    <option>Recrutement</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                  <textarea placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none" />
                  <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl text-lg transition-all">
                    Envoyer le message →
                  </button>
                  <p className="text-xs text-text-light text-center">
                    🔒 Vos données sont protégées • Réponse sous 2h en jours ouvrables
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: "📍", title: "Adresse", lines: ["61 rue de Lyon", "75012 Paris, France"] },
                { icon: "📞", title: "Téléphone", lines: ["01 84 80 72 97", "06 67 22 45 07"] },
                { icon: "✉️", title: "Email", lines: ["contact@youdom-care.com"] },
                { icon: "🕐", title: "Horaires", lines: ["Disponible 24h/24", "7 jours sur 7"] },
              ].map((info) => (
                <div key={info.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <h3 className="font-bold text-text mb-1">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-text-light text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Besoin d'aide rapidement ?</h2>
          <p className="text-white/70 text-lg mb-8">
            Appelez-nous directement — on répond immédiatement.
          </p>
          <a href="tel:+33667224507" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            📞 06 67 22 45 07
          </a>
        </div>
      </section>
    </>
  );
}
