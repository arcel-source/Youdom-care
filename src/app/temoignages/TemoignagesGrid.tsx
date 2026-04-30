"use client";

import { useMemo, useState } from "react";
import { extendedTestimonials } from "@/lib/testimonials-extended";

const filters = [
  { id: "all", label: "Tous" },
  { id: "aide-personnes-agees", label: "Seniors" },
  { id: "alzheimer-parkinson", label: "Alzheimer/Parkinson" },
  { id: "aide-handicap", label: "Handicap" },
  { id: "garde-enfants-handicap", label: "Enfant handicap" },
  { id: "retour-hospitalisation", label: "Post-hospi" },
  { id: "garde-nuit", label: "Nuit" },
  { id: "teleassistance", label: "Téléassistance" },
];

export default function TemoignagesGrid() {
  const [active, setActive] = useState("all");

  const visible = useMemo(() => {
    if (active === "all") return extendedTestimonials;
    return extendedTestimonials.filter((t) => t.serviceSlug === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => {
          const count =
            f.id === "all"
              ? extendedTestimonials.length
              : extendedTestimonials.filter((t) => t.serviceSlug === f.id).length;
          if (f.id !== "all" && count === 0) return null;
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-warm text-text-light hover:bg-primary-50 hover:text-primary"
              }`}
            >
              {f.label}
              <span
                className={`ml-2 text-xs ${
                  isActive ? "text-white/80" : "text-text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {visible.map((t, idx) => (
          <article
            key={`${t.name}-${idx}`}
            className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-border hover:shadow-lifted transition-shadow flex flex-col"
          >
            <div
              className="absolute top-3 right-4 text-7xl font-display text-secondary/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div
              className="flex gap-1 mb-3 text-secondary text-lg"
              aria-label={`${t.rating} sur 5`}
            >
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>

            <blockquote className="text-text leading-relaxed mb-5 flex-1 relative z-10 text-sm sm:text-base">
              &ldquo;{t.longQuote ?? t.quote}&rdquo;
            </blockquote>

            <div className="flex items-start gap-3 pt-4 border-t border-border-light">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                {t.name.charAt(0)}
              </div>
              <div className="text-sm">
                <div className="font-bold text-primary-dark">{t.name}</div>
                <div className="text-text-light text-xs">{t.relation}</div>
                <div className="text-text-muted text-xs mt-0.5">
                  📍 {t.city} • {t.duration}
                </div>
              </div>
            </div>

            <div className="absolute -top-2 left-6 inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
              {t.service}
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-text-light mt-8">
          Aucun témoignage pour ce service pour le moment.
        </p>
      ) : null}
    </div>
  );
}
