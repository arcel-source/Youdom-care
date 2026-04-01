"use client";

import { useState } from "react";
import Link from "next/link";

/* ───── data ───── */
const serviceOptions = [
  { id: "essentiels", label: "Actes essentiels de la vie quotidienne", icon: "🤝" },
  { id: "nuit", label: "Présence ou garde de nuit 24h/24", icon: "🌙" },
  { id: "mobilite", label: "Aide à la mobilité / Accompagnement", icon: "🚶" },
  { id: "medicaments", label: "Rappel de la prise de médicaments", icon: "💊" },
  { id: "hospitalisation", label: "Retour d'hospitalisation", icon: "🏥" },
  { id: "enfants", label: "Enfants handicapés ou malades", icon: "👶" },
  { id: "menage", label: "Tâches ménagères", icon: "🧹" },
  { id: "transport", label: "Transport véhicules (PMR)", icon: "🚗" },
  { id: "administratif", label: "Aide administrative", icon: "📋" },
  { id: "garde-enfants", label: "Garde enfants - 3 ans", icon: "👧" },
];

const timingOptions = [
  "Immédiatement",
  "Dans 1 mois",
  "Dans 2 mois",
  "Dans 3 mois",
  "Dans plus de 3 mois",
];

const dayOptions = [
  "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Tous les jours",
];

const slotOptions = [
  "Matin",
  "Midi",
  "Après-midi",
  "Soir",
  "Journée entière (8h › 20h)",
  "Nuit (20h › 8h)",
  "24h/24",
];

const TOTAL_STEPS = 4;

/* ───── component ───── */
export default function DevisForm() {
  const [step, setStep] = useState(1);

  /* step 1 */
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  /* step 2 */
  const [timing, setTiming] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  /* step 3 */
  const [civilite, setCivilite] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [cp, setCp] = useState("");
  const [destinataire, setDestinataire] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [consent, setConsent] = useState(false);

  /* step 4 */
  const [submitted, setSubmitted] = useState(false);

  /* helpers */
  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string
  ) => {
    setter(
      list.includes(value) ? list.filter((v2) => v2 !== value) : [...list, value]
    );
  };

  const canNext = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return timing !== "" && selectedDays.length > 0 && selectedSlots.length > 0;
    if (step === 3)
      return (
        civilite !== "" &&
        prenom.trim() !== "" &&
        nom.trim() !== "" &&
        tel.trim() !== "" &&
        email.trim() !== "" &&
        cp.trim() !== "" &&
        destinataire !== "" &&
        consent
      );
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setStep(4);
  };

  /* ───── render ───── */
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Progress bar */}
      <div className="px-4 sm:px-8 pt-6 sm:pt-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <button
              key={s}
              onClick={() => s < step && setStep(s)}
              disabled={s > step}
              className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-bold transition-all duration-300 ${
                s === step
                  ? "bg-primary text-white scale-110"
                  : s < step
                  ? "bg-secondary text-primary-dark cursor-pointer hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {s < step ? "✓" : s}
            </button>
          ))}
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
          />
        </div>
        <p className="text-xs text-text-light text-center mb-4">
          Étape {step} sur {TOTAL_STEPS}
        </p>
      </div>

      {/* Steps */}
      <div className="px-4 sm:px-8 pb-6 sm:pb-8">
        {/* ── STEP 1 ── */}
        <div
          className={`transition-all duration-400 ${
            step === 1
              ? "opacity-100 max-h-[2000px]"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold text-text mb-1 text-center">
            De quels services avez-vous besoin ?
          </h2>
          <p className="text-text-light text-sm text-center mb-6">
            Sélectionnez un ou plusieurs services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {serviceOptions.map((s) => {
              const active = selectedServices.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggle(selectedServices, setSelectedServices, s.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    active
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-gray-200 hover:border-primary/40 hover:bg-warm"
                  }`}
                >
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <span className="text-sm font-medium text-text flex-1">{s.label}</span>
                  <span
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                      active
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {active && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── STEP 2 ── */}
        <div
          className={`transition-all duration-400 ${
            step === 2
              ? "opacity-100 max-h-[2000px]"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold text-text mb-6 text-center">
            Quand est-ce que nous commençons ?
          </h2>

          <div className="mb-6">
            <p className="text-sm font-semibold text-text mb-3">Délai souhaité</p>
            <div className="flex flex-wrap gap-2">
              {timingOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setTiming(t)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                    timing === t
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-text-light hover:border-primary/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold text-text mb-3">
              Jours souhaités
            </p>
            <div className="flex flex-wrap gap-2">
              {dayOptions.map((d) => (
                <button
                  key={d}
                  onClick={() => toggle(selectedDays, setSelectedDays, d)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                    selectedDays.includes(d)
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-text-light hover:border-primary/40"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text mb-3">
              Horaires préférés
            </p>
            <div className="flex flex-wrap gap-2">
              {slotOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(selectedSlots, setSelectedSlots, s)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                    selectedSlots.includes(s)
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-text-light hover:border-primary/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── STEP 3 ── */}
        <div
          className={`transition-all duration-400 ${
            step === 3
              ? "opacity-100 max-h-[2000px]"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold text-text mb-1 text-center">
            Vos coordonnées
          </h2>
          <p className="text-text-light text-sm text-center mb-6">
            Nous nous engageons à vous rappeler sous 2 heures (jours ouvrables)
          </p>

          <div className="space-y-4">
            {/* Civilité */}
            <div className="flex gap-3">
              {["Monsieur", "Madame"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCivilite(c)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                    civilite === c
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-text-light hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Prénom *"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Nom *"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Téléphone *"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
            </div>

            <input
              type="text"
              placeholder="Code postal *"
              value={cp}
              onChange={(e) => setCp(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
            />

            {/* Destinataire */}
            <div>
              <p className="text-sm font-semibold text-text mb-2">
                À qui est destinée notre aide ?
              </p>
              <div className="flex gap-3">
                {["Pour vous-même", "Pour un proche"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDestinataire(d)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all ${
                      destinataire === d
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 text-text-light hover:border-primary/40"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Commentaires (optionnel)"
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-warm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 accent-primary"
              />
              <label htmlFor="consent" className="text-xs text-text-light leading-relaxed">
                J&apos;accepte les{" "}
                <Link href="/cgu" className="text-primary underline">
                  Conditions Générales d&apos;Utilisation
                </Link>{" "}
                et la{" "}
                <Link href="/confidentialite" className="text-primary underline">
                  Politique de confidentialité
                </Link>
                . Youdom Care protège mes données conformément au RGPD.
              </label>
            </div>
          </div>
        </div>

        {/* ── STEP 4 (confirmation) ── */}
        <div
          className={`transition-all duration-400 ${
            step === 4
              ? "opacity-100 max-h-[2000px]"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4 animate-bounce">✅</div>
              <h2 className="text-2xl font-bold text-text mb-3">
                Demande envoyée !
              </h2>
              <p className="text-text-light mb-6 max-w-md mx-auto">
                Merci <strong>{prenom}</strong> ! Nous avons bien reçu votre
                demande. Notre équipe vous rappellera au{" "}
                <strong>{tel}</strong> dans les 2 prochaines heures.
              </p>

              <div className="bg-warm rounded-2xl p-6 text-left max-w-md mx-auto mb-6">
                <h3 className="font-bold text-text mb-3 text-sm">Récapitulatif :</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-text-light">Services :</span>{" "}
                    <span className="text-text font-medium">
                      {selectedServices
                        .map(
                          (id) =>
                            serviceOptions.find((s) => s.id === id)?.label
                        )
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="text-text-light">Début :</span>{" "}
                    <span className="text-text font-medium">{timing}</span>
                  </p>
                  <p>
                    <span className="text-text-light">Jours :</span>{" "}
                    <span className="text-text font-medium">
                      {selectedDays.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="text-text-light">Horaires :</span>{" "}
                    <span className="text-text font-medium">
                      {selectedSlots.join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:0184807297"
                  className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors min-h-[44px]"
                >
                  📞 Appeler maintenant
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 border-2 border-gray-200 text-text font-medium rounded-xl hover:bg-warm transition-colors min-h-[44px]"
                >
                  Retour à l&apos;accueil
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        {/* ── Navigation buttons ── */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px] ${
                step === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-text-light hover:text-primary hover:bg-warm"
              }`}
              disabled={step === 1}
            >
              ← Précédent
            </button>

            <button
              onClick={() => {
                if (step === 3) {
                  handleSubmit();
                } else {
                  setStep(step + 1);
                }
              }}
              disabled={!canNext()}
              className={`px-6 sm:px-8 py-3 rounded-xl text-sm font-bold transition-all min-h-[44px] ${
                canNext()
                  ? "bg-primary hover:bg-primary-light text-white shadow-md hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {step === 3 ? "Envoyer ma demande ✨" : "Suivant →"}
            </button>
          </div>
        )}

        {/* trust badges */}
        {step < 4 && (
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-text-light">
            <span>🔒 Données protégées</span>
            <span>⚡ Réponse sous 2h</span>
            <span>💯 Sans engagement</span>
            <span>💰 Crédit d&apos;impôt 50%</span>
          </div>
        )}
      </div>
    </div>
  );
}
