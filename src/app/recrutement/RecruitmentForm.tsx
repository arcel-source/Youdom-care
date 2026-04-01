"use client";

import { useState } from "react";

export default function RecruitmentForm() {
  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    codePostal: "",
    diplomes: [] as string[],
    experienceAnnees: "",
    permisVehicule: "non",
    disponibilite: "",
    motivations: "",
    cv: null as File | null,
    rgpd: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && name === "rgpd") {
      setFormData((prev) => ({
        ...prev,
        rgpd: (e.target as HTMLInputElement).checked,
      }));
    } else if (name === "diplomes") {
      setFormData((prev) => ({
        ...prev,
        diplomes: (e.target as HTMLInputElement).checked
          ? [...prev.diplomes, value]
          : prev.diplomes.filter((d) => d !== value),
      }));
    } else if (name === "cv" && type === "file") {
      setFormData((prev) => ({
        ...prev,
        cv: (e.target as HTMLInputElement).files?.[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validation
      if (
        !formData.nom ||
        !formData.prenom ||
        !formData.email ||
        !formData.telephone ||
        !formData.codePostal
      ) {
        setError("Veuillez remplir tous les champs obligatoires.");
        setLoading(false);
        return;
      }

      if (!formData.rgpd) {
        setError("Vous devez accepter les conditions de confidentialité.");
        setLoading(false);
        return;
      }

      // Simuler l'envoi (en production, envoyer vers une API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Ici, vous enverriez les données à votre backend ou service d'email
      console.log("Formulaire soumis:", formData);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          civilite: "",
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          adresse: "",
          codePostal: "",
          diplomes: [],
          experienceAnnees: "",
          permisVehicule: "non",
          disponibilite: "",
          motivations: "",
          cv: null,
          rgpd: false,
        });
      }, 3000);
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Candidature reçue !</h3>
        <p className="text-green-700">
          Merci pour votre intérêt. Notre équipe RH vous contactera rapidement pour la suite du processus.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* IDENTITÉ */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text mb-5">Vos informations</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Civilité <span className="text-red-500">*</span>
            </label>
            <select
              name="civilite"
              value={formData.civilite}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
            >
              <option value="">Sélectionner</option>
              <option value="mme">Mme</option>
              <option value="mlle">Mlle</option>
              <option value="mr">Mr</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="Jean"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-text mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="Dupont"
            />
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text mb-5">Contact</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="jean@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="06 12 34 56 78"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-text mb-2">
              Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="123 rue de la Paix"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Code postal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="codePostal"
              value={formData.codePostal}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
              placeholder="75001"
            />
          </div>
        </div>
      </div>

      {/* COMPÉTENCES */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text mb-5">Compétences & expérience</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-text mb-3">Diplômes</label>
          <div className="space-y-2">
            {[
              { id: "deavs", label: "DEAVS" },
              { id: "advf", label: "ADVF" },
              { id: "deaes", label: "DEAES" },
              { id: "autre", label: "Autre diplôme" },
              { id: "aucun", label: "Aucun (expérience)" },
            ].map((diplome) => (
              <label key={diplome.id} className="flex items-center gap-2 cursor-pointer min-h-[44px] px-2">
                <input
                  type="checkbox"
                  name="diplomes"
                  value={diplome.id}
                  checked={formData.diplomes.includes(diplome.id)}
                  onChange={handleChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="text-text-light">{diplome.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Années d'expérience
            </label>
            <select
              name="experienceAnnees"
              value={formData.experienceAnnees}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
            >
              <option value="">Sélectionner</option>
              <option value="0">Moins d'1 an</option>
              <option value="1">1-2 ans</option>
              <option value="3">3-5 ans</option>
              <option value="5">5-10 ans</option>
              <option value="10">10+ ans</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Permis B & Véhicule <span className="text-red-500">*</span>
            </label>
            <select
              name="permisVehicule"
              value={formData.permisVehicule}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
            >
              <option value="non">Non</option>
              <option value="permis-seul">Permis seul</option>
              <option value="permis-et-vehicule">Permis + Véhicule</option>
            </select>
          </div>
        </div>
      </div>

      {/* DISPONIBILITÉ */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text mb-5">Disponibilité & Motivations</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-text mb-2">
            Type de contrat recherché
          </label>
          <div className="space-y-2">
            {[
              { id: "cdi", label: "CDI" },
              { id: "cdd", label: "CDD" },
              { id: "flexible", label: "Flexible (CDI ou CDD)" },
            ].map((type) => (
              <label key={type.id} className="flex items-center gap-2 cursor-pointer min-h-[44px] px-2">
                <input
                  type="radio"
                  name="disponibilite"
                  value={type.id}
                  checked={formData.disponibilite === type.id}
                  onChange={handleChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="text-text-light">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Dites-nous en quelques lignes pourquoi vous souhaitez rejoindre Youdom Care
          </label>
          <textarea
            name="motivations"
            value={formData.motivations}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px]"
            placeholder="Parlez-nous de vos motivations, vos valeurs, ce qui vous pousse à travailler dans le secteur du care..."
          />
        </div>
      </div>

      {/* DOCUMENTS */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text mb-5">Documents</h3>
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Joindre votre CV (facultatif)
          </label>
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
          />
          <p className="text-xs text-text-light mt-1">PDF, DOC ou DOCX (max 5MB)</p>
        </div>
      </div>

      {/* RGPD */}
      <div className="mb-8 p-4 bg-warm rounded-lg">
        <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
          <input
            type="checkbox"
            name="rgpd"
            checked={formData.rgpd}
            onChange={handleChange}
            className="w-5 h-5 mt-2 cursor-pointer shrink-0"
          />
          <span className="text-sm text-text-light">
            J'accepte que mes données soient traitées conformément à la{" "}
            <a href="/politique-confidentialite" className="text-primary font-medium hover:underline">
              politique de confidentialité
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {loading ? "Envoi en cours..." : "Soumettre ma candidature"}
      </button>

      <p className="text-xs text-text-light text-center mt-4">
        Champs obligatoires marqués d'un <span className="text-red-500">*</span>
      </p>
    </form>
  );
}
