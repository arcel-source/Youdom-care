"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="tel:+33667224507"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-2xl"
        aria-label="Appeler"
      >
        📞
      </a>
      <Link
        href="/demander-devis"
        className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-5 py-3 rounded-full shadow-xl cta-glow animate-pulse-soft text-sm text-center"
      >
        Devis Gratuit
      </Link>
    </div>
  );
}
