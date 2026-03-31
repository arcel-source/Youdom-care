"use client";

import { motion } from "framer-motion";

const infos = [
  { icon: "📍", title: "Adresse", lines: ["61 rue de Lyon", "75012 Paris, France"] },
  { icon: "📞", title: "Téléphone", lines: ["01 84 80 72 97", "06 67 22 45 07"] },
  { icon: "✉️", title: "Email", lines: ["contact@youdom-care.com"] },
  { icon: "🕐", title: "Horaires", lines: ["Disponible 24h/24", "7 jours sur 7"] },
];

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Parlons de vos{" "}
              <span className="text-secondary">besoins</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Une question ? Un besoin ? Nous sommes à votre écoute.
              Réponse garantie sous 2 heures.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-text mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Prénom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                    <input type="text" placeholder="Nom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  <input type="tel" placeholder="Téléphone *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm" />
                  <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-text-light">
                    <option value="">Sujet de votre demande</option>
                    <option>Demande de devis</option>
                    <option>Information sur un service</option>
                    <option>Recrutement</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                  <textarea placeholder="Votre message *" rows={5} className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none" />
                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl text-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer le message →
                  </motion.button>
                  <p className="text-xs text-text-light text-center">
                    🔒 Vos données sont protégées • Réponse sous 2h en jours ouvrables
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {infos.map((info) => (
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

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8!2d2.3725!3d48.8462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUwJzQ2LjMiTiAywrAyMic0NS4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Youdom Care - 61 rue de Lyon, Paris 12e"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
