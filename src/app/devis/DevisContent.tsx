"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Aide à l'autonomie",
  "Garde de nuit",
  "Aide au handicap",
  "Transport PMR",
  "Aide ménagère",
  "Retour d'hospitalisation",
  "Téléassistance",
  "Enfants handicapés ou malades",
  "Aide Alzheimer & Parkinson",
  "Assistance administrative",
  "Accompagnement & sorties",
];

const dayOptions = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Tous les jours"];
const timeOptions = ["Matin", "Midi", "Après-midi", "Soir", "Journée entière", "Nuit", "24h/24"];
const startOptions = ["Immédiatement", "Dans 1 mois", "Dans 2 mois", "Dans 3 mois", "Plus tard"];

export default function DevisContent() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const toggleItem = (item: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Votre devis <span className="text-secondary">gratuit</span> en 2 minutes
            </h1>
            <p className="text-white/70">Sans engagement • Réponse sous 2h • Crédit d&apos;impôt 50%</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-warm">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-text-light mb-2">
              <span>Étape {step} sur {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <AnimatePresence mode="wait">
              {/* Step 1: Services */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h2 className="text-xl font-bold text-text mb-2">De quels services avez-vous besoin ?</h2>
                  <p className="text-text-light text-sm mb-6">Sélectionnez un ou plusieurs services</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleItem(s, selectedServices, setSelectedServices)}
                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                          selectedServices.includes(s)
                            ? "bg-primary text-white border-primary"
                            : "bg-warm text-text-light border-transparent hover:border-primary/30"
                        }`}
                      >
                        {selectedServices.includes(s) ? "✓ " : ""}{s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Planning */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h2 className="text-xl font-bold text-text mb-2">Quand avez-vous besoin de nous ?</h2>
                  <p className="text-text-light text-sm mb-6">Sélectionnez les jours et horaires</p>

                  <div className="mb-6">
                    <label className="text-sm font-semibold text-text block mb-3">Quand commencer ?</label>
                    <div className="flex flex-wrap gap-2">
                      {startOptions.map((s) => (
                        <button key={s} type="button" className="px-4 py-2 rounded-full text-sm border bg-warm text-text-light hover:border-primary/30 transition-all">
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-semibold text-text block mb-3">Jours souhaités</label>
                    <div className="flex flex-wrap gap-2">
                      {dayOptions.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleItem(d, selectedDays, setSelectedDays)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                            selectedDays.includes(d)
                              ? "bg-primary text-white border-primary"
                              : "bg-warm text-text-light border-transparent hover:border-primary/30"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-text block mb-3">Horaires préférés</label>
                    <div className="flex flex-wrap gap-2">
                      {timeOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleItem(t, selectedTimes, setSelectedTimes)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                            selectedTimes.includes(t)
                              ? "bg-primary text-white border-primary"
                              : "bg-warm text-text-light border-transparent hover:border-primary/30"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Who */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h2 className="text-xl font-bold text-text mb-2">Pour qui est cette aide ?</h2>
                  <p className="text-text-light text-sm mb-6">Informations sur le bénéficiaire</p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <button type="button" className="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-warm border border-transparent hover:border-primary/30 transition-all">
                        Pour moi-même
                      </button>
                      <button type="button" className="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-warm border border-transparent hover:border-primary/30 transition-all">
                        Pour un proche
                      </button>
                    </div>
                    <select className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm text-text-light">
                      <option value="">Civilité</option>
                      <option>Monsieur</option>
                      <option>Madame</option>
                    </select>
                    <input type="text" placeholder="Code postal du bénéficiaire" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm" />
                    <textarea placeholder="Décrivez brièvement la situation et les besoins..." rows={4} className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm resize-none" />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Coordinates */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h2 className="text-xl font-bold text-text mb-2">Vos coordonnées</h2>
                  <p className="text-text-light text-sm mb-6">Pour vous envoyer le devis et vous rappeler</p>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Prénom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm" />
                      <input type="text" placeholder="Nom *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm" />
                    </div>
                    <input type="tel" placeholder="Téléphone *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm" />
                    <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary outline-none text-sm" />
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="consent" className="mt-1" />
                      <label htmlFor="consent" className="text-xs text-text-light">
                        J&apos;accepte les conditions générales d&apos;utilisation et la politique de confidentialité. Youdom Care s&apos;engage à protéger vos données conformément au RGPD.
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-text-light font-medium hover:text-primary transition-colors"
                >
                  ← Précédent
                </button>
              ) : <div />}

              {step < totalSteps ? (
                <motion.button
                  onClick={() => setStep(step + 1)}
                  className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-3 rounded-full transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Suivant →
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-3 rounded-full transition-all cta-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Recevoir mon Devis Gratuit ✨
                </motion.button>
              )}
            </div>
          </div>

          {/* Trust */}
          <div className="flex justify-center gap-6 mt-6 text-xs text-text-light">
            <span>🔒 Données protégées</span>
            <span>⚡ Réponse sous 2h</span>
            <span>💯 Sans engagement</span>
            <span>💰 Crédit d&apos;impôt 50%</span>
          </div>
        </div>
      </section>
    </>
  );
}
