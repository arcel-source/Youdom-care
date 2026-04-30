import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nous Contacter | Youdom Care",
  description:
    "Contact Youdom Care. Demandez un devis gratuit ou appelez. Réponse en moins de 2 heures.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Nous contacter
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80">
            Réponse en moins de 2 heures. Consultation gratuite.
          </p>
        </div>
      </section>

      {/* 3 CARDS */}
      <section className="py-10 sm:py-14 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <a
              href="tel:0184807297"
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-text mb-1">Appel direct</h3>
              <p className="text-text-light text-xs mb-3">Lun-sam, 8h-20h</p>
              <span className="font-bold text-primary group-hover:text-secondary transition-colors">
                01 84 80 72 97
              </span>
            </a>

            <a
              href="tel:0667224507"
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-text mb-1">WhatsApp / SMS</h3>
              <p className="text-text-light text-xs mb-3">Réponse rapide</p>
              <span className="font-bold text-primary group-hover:text-secondary transition-colors">
                06 67 22 45 07
              </span>
            </a>

            <a
              href="mailto:contact@youdom-care.com"
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-bold text-text mb-1">Email</h3>
              <p className="text-text-light text-xs mb-3">Réponse 24h</p>
              <span className="font-bold text-primary group-hover:text-secondary transition-colors text-sm">
                contact@youdom-care.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl lg:max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Envoyer un message
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* FORM (3 cols) */}
            <div className="lg:col-span-3">
              <form className="bg-warm p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-text mb-1.5">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text mb-1.5">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-text mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text mb-1.5">
                    Sujet
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-text-light"
                  >
                    <option value="">Sélectionnez...</option>
                    <option>Demande de devis</option>
                    <option>Renseignement sur un service</option>
                    <option>Aides financières</option>
                    <option>Recrutement / Candidature</option>
                    <option>Réclamation</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-colors min-h-[44px] text-sm"
                >
                  Envoyer mon message →
                </button>

                <p className="text-text-light text-xs text-center">
                  Réponse sous 2 heures (jours ouvrables).
                </p>
              </form>
            </div>

            {/* SIDEBAR (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-48 lg:h-56">
                <Image
                  src="/images/curated/home-hero-couple-warm.jpg"
                  alt="Équipe Youdom Care"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Adresse */}
              <div className="bg-warm p-6 rounded-2xl">
                <h3 className="font-bold text-text mb-3 text-sm">
                  📍 Siège social
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  61 rue de Lyon
                  <br />
                  75012 Paris
                </p>
                <div className="border-t border-gray-200 my-4" />
                <h3 className="font-bold text-text mb-3 text-sm">
                  🕐 Horaires
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Lundi - Samedi : 8h - 20h
                  <br />
                  Dimanche : Urgences uniquement
                </p>
                <div className="border-t border-gray-200 my-4" />
                <h3 className="font-bold text-text mb-3 text-sm">
                  🗺️ Zone d&apos;intervention
                </h3>
                <p className="text-text-light text-sm">
                  Paris & toute l&apos;Île-de-France
                </p>
              </div>

              {/* Devis CTA */}
              <a
                href="/demander-devis"
                className="block bg-secondary hover:bg-secondary-light text-primary-dark font-bold py-4 rounded-2xl text-center transition-colors text-sm"
              >
                Demander un devis gratuit →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
