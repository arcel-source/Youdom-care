"use client";

import { useMemo, useState } from "react";
import { faqCategories } from "@/lib/faq-data";

export default function FAQAccordion() {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const matchesSearch =
            !q ||
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q);
          return matchesSearch;
        }),
      }))
      .filter((cat) => {
        if (cat.items.length === 0) return false;
        if (activeCategory && cat.id !== activeCategory) return false;
        return true;
      });
  }, [search, activeCategory]);

  const totalCount = useMemo(
    () => visible.reduce((sum, c) => sum + c.items.length, 0),
    [visible],
  );

  return (
    <div>
      {/* Recherche */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Rechercher dans la FAQ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-4 pl-12 rounded-2xl border-2 border-border bg-white focus:border-primary outline-none transition-colors text-base"
          />
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg"
            aria-hidden="true"
          >
            🔍
          </span>
          {search ? (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary text-lg"
              aria-label="Effacer la recherche"
            >
              ×
            </button>
          ) : null}
        </div>
        {search ? (
          <p className="text-sm text-text-light mt-3 text-center">
            {totalCount} résultat{totalCount > 1 ? "s" : ""} pour « {search} »
          </p>
        ) : null}
      </div>

      {/* Filtres catégories */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            activeCategory === null
              ? "bg-primary text-white"
              : "bg-warm text-text-light hover:bg-primary-50 hover:text-primary"
          }`}
        >
          Toutes
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() =>
              setActiveCategory(activeCategory === cat.id ? null : cat.id)
            }
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-white"
                : "bg-warm text-text-light hover:bg-primary-50 hover:text-primary"
            }`}
          >
            <span aria-hidden="true">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Liste */}
      <div className="space-y-10 max-w-3xl mx-auto">
        {visible.map((cat) => (
          <div key={cat.id}>
            <h2 className="text-primary-dark mb-5 inline-flex items-center gap-3 text-2xl">
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item, idx) => {
                const id = `${cat.id}-${idx}`;
                const isOpen = openId === id;
                return (
                  <article
                    key={id}
                    className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                      isOpen ? "border-primary shadow-card" : "border-border"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-primary-dark pr-4 m-0">
                        {item.question}
                      </h3>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ${
                          isOpen
                            ? "bg-primary text-white rotate-45"
                            : "bg-primary-50 text-primary"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-text-light leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {totalCount === 0 ? (
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="text-5xl mb-3" aria-hidden="true">🤔</div>
          <h3 className="text-primary-dark mb-2">Aucun résultat</h3>
          <p className="text-text-light text-sm">
            Votre question n&apos;est pas dans la FAQ ? Posez-la-nous directement.
          </p>
        </div>
      ) : null}
    </div>
  );
}
