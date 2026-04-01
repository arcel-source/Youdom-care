"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { href: "/services/aide-personnes-agees", label: "Aide personnes âgées" },
  { href: "/services/aide-handicap", label: "Aide handicap" },
  { href: "/services/garde-enfants-handicap", label: "Garde d'enfants" },
  { href: "/services/aide-menagere", label: "Aide ménagère" },
  { href: "/services/garde-nuit", label: "Présence de nuit" },
  { href: "/services/accompagnement-sorties", label: "Accompagnement" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (resize as proxy)
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-text hidden sm:inline">Youdom Care</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-light hover:text-primary transition-colors text-sm">
              Accueil
            </Link>
            <div className="relative group">
              <button className="text-text-light hover:text-primary transition-colors text-sm flex items-center gap-1 h-16">
                Services <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-1 pt-1">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2.5 hover:bg-warm text-sm text-text font-medium border-b border-gray-100">
                    Tous les services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 hover:bg-warm text-sm text-text">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/comment-ca-marche" className="text-text-light hover:text-primary transition-colors text-sm">
              Comment ça marche
            </Link>
            <Link href="/aides-financieres" className="text-text-light hover:text-primary transition-colors text-sm">
              Aides financières
            </Link>
            <Link href="/contact" className="text-text-light hover:text-primary transition-colors text-sm">
              Contact
            </Link>
          </nav>

          {/* Phone CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0184807297"
              className="px-4 py-2 sm:px-6 bg-primary hover:bg-primary-light text-white font-bold rounded-lg text-sm transition-colors min-h-[44px] flex items-center"
            >
              <span className="hidden sm:inline">01 84 80 72 97</span>
              <span className="sm:hidden text-lg">📞</span>
            </a>

            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1 overflow-y-auto max-h-[75vh]">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Accueil
          </Link>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
            >
              <span>Services</span>
              <span
                className={`text-primary transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block pl-8 pr-4 py-2.5 text-sm font-medium text-primary hover:bg-warm rounded-lg transition-colors"
              >
                Tous les services
              </Link>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-8 pr-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-warm rounded-lg transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/comment-ca-marche"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Comment ça marche
          </Link>
          <Link
            href="/aides-financieres"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Aides financières
          </Link>
          <Link
            href="/qui-sommes-nous"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Qui sommes-nous
          </Link>
          <Link
            href="/temoignages"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Témoignages
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
          >
            Contact
          </Link>

          {/* Mobile CTA buttons */}
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <Link
              href="/demander-devis"
              onClick={() => setMobileOpen(false)}
              className="block w-full px-6 py-3 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-lg text-center text-base transition-colors min-h-[44px]"
            >
              Devis Gratuit →
            </Link>
            <div className="flex gap-3">
              <a
                href="tel:0184807297"
                className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded-lg text-center text-sm transition-colors min-h-[44px] flex items-center justify-center"
              >
                📞 01 84 80 72 97
              </a>
              <a
                href="tel:0667224507"
                className="flex-1 px-4 py-3 border-2 border-primary text-primary font-bold rounded-lg text-center text-sm transition-colors min-h-[44px] flex items-center justify-center"
              >
                📱 06 67 22 45 07
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
