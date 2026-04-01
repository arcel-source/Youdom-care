"use client";

import { useState } from "react";

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

interface Suggestion {
  properties: {
    name: string;
    postcode?: string;
    city?: string;
  };
  geometry: {
    coordinates: [number, number];
  };
}

export default function AddressInput({
  value,
  onChange,
  placeholder = "Adresse *",
  error,
}: AddressInputProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async (newValue: string) => {
    onChange(newValue);

    if (newValue.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(newValue)}&limit=5`
      );
      const data = await response.json();
      setSuggestions(data.features || []);
      setShowSuggestions(true);
    } catch (err) {
      console.error("Erreur recherche adresse:", err);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSuggestion = (suggestion: Suggestion) => {
    const fullAddress = suggestion.properties.name;
    onChange(fullAddress);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => value.length >= 3 && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className={`w-full px-4 py-3 lg:py-2 rounded-xl bg-warm border transition-all outline-none text-sm ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSuggestion(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-warm transition-colors border-b border-gray-100 last:border-0 text-sm"
            >
              <div className="font-medium text-text">{suggestion.properties.name}</div>
              {suggestion.properties.postcode && (
                <div className="text-xs text-text-light">
                  {suggestion.properties.postcode} {suggestion.properties.city}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <span className="text-xs text-text-light">Recherche...</span>
        </div>
      )}
    </div>
  );
}
