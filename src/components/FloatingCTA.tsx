"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${siteConfig.phone.mobileE164.replace("+", "")}?text=Bonjour%20Youdom%20Care%2C%20je%20souhaite%20des%20informations.`;

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-lifted transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href={`tel:${siteConfig.phone.mainE164}`}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-xl text-sm min-h-[48px]"
          >
            <span aria-hidden="true">📞</span> Appeler
          </a>
          <Link
            href="/demander-devis"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-primary-dark font-bold rounded-xl text-sm min-h-[48px] cta-glow"
          >
            Devis gratuit
          </Link>
        </div>
      </div>

      {/* Desktop : bouton flottant + actions élargies */}
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-40 flex-col-reverse gap-3 items-end transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-14 h-14 bg-primary hover:bg-primary-light rounded-full flex items-center justify-center shadow-lifted text-white text-2xl transition-all hover:scale-110"
          aria-label={expanded ? "Fermer les options de contact" : "Options de contact"}
          aria-expanded={expanded}
        >
          <span aria-hidden="true">{expanded ? "×" : "💬"}</span>
        </button>

        <div
          className={`flex flex-col gap-3 items-end transition-all duration-300 ${
            expanded
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-warm rounded-full pl-2 pr-5 py-2 shadow-lifted text-primary-dark font-semibold text-sm transition-colors"
            aria-label="Discuter sur WhatsApp"
          >
            <span className="w-9 h-9 rounded-full bg-success flex items-center justify-center text-white" aria-hidden="true">
              💬
            </span>
            WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phone.mainE164}`}
            className="flex items-center gap-3 bg-white hover:bg-warm rounded-full pl-2 pr-5 py-2 shadow-lifted text-primary-dark font-semibold text-sm transition-colors"
            aria-label={`Appeler ${siteConfig.phone.main}`}
          >
            <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white" aria-hidden="true">
              📞
            </span>
            {siteConfig.phone.main}
          </a>
          <Link
            href="/demander-devis"
            className="flex items-center gap-3 bg-secondary hover:bg-secondary-light rounded-full pl-2 pr-5 py-2 shadow-lifted text-primary-dark font-bold text-sm transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-primary-dark flex items-center justify-center text-secondary" aria-hidden="true">
              ✨
            </span>
            Devis gratuit
          </Link>
        </div>
      </div>
    </>
  );
}
