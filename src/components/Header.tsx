"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, services, personas } from "@/lib/site-config";

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"services" | "publics" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar avec horaires & téléphone — desktop uniquement */}
      <div className="hidden lg:block bg-primary-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">🕒</span> {siteConfig.phone.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">📍</span> {siteConfig.address.full}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/80 hover:text-secondary transition-colors"
            >
              {siteConfig.email}
            </a>
            <span className="text-white/30">|</span>
            <Link href="/recrutement" className="text-white/80 hover:text-secondary transition-colors">
              Recrutement
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/espace-client" className="text-white/80 hover:text-secondary transition-colors">
              Espace client
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border-light"
            : "bg-white border-b border-border-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={() => setMobileOpen(false)}
              aria-label="Youdom Care - Accueil"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-card"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl font-display">Y</span>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-bold text-primary-dark text-lg font-display">
                  Youdom <span className="text-secondary-dark">Care</span>
                </span>
                <span className="text-[10px] text-text-light tracking-wider uppercase">
                  Aide à domicile
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Mega-menu Services */}
              <DropdownNav label="Services" wide>
                <div className="grid grid-cols-2 gap-1 p-3 w-[560px]">
                  <Link
                    href="/services"
                    className="col-span-2 flex items-center justify-between p-3 rounded-lg bg-warm hover:bg-primary-50 group"
                  >
                    <div>
                      <div className="font-bold text-primary-dark">Tous nos services</div>
                      <div className="text-xs text-text-light">Voir l&apos;ensemble du catalogue</div>
                    </div>
                    <span className="text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </Link>
                  {featuredServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-2.5 rounded-lg hover:bg-warm transition-colors"
                    >
                      <div className="text-sm font-semibold text-primary-dark">{s.title}</div>
                      <div className="text-xs text-text-light line-clamp-1">{s.summary}</div>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              {/* Mega-menu Publics */}
              <DropdownNav label="Nos publics">
                <div className="p-2 w-[280px]">
                  {personas.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-warm transition-colors"
                    >
                      <span className="text-2xl shrink-0" aria-hidden="true">{p.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-primary-dark">{p.label}</div>
                        <div className="text-xs text-text-light line-clamp-1">{p.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </DropdownNav>

              <NavLink href="/aides-financieres">Aides & financement</NavLink>
              <NavLink href="/comment-ca-marche">Notre méthode</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/agence">Agences</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${siteConfig.phone.mainE164}`}
                className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 text-primary-dark hover:text-primary font-bold transition-colors text-sm"
              >
                <span aria-hidden="true">📞</span>
                <span className="hidden lg:inline">{siteConfig.phone.main}</span>
              </a>
              <Link
                href="/demander-devis"
                className="hidden md:inline-flex items-center px-4 lg:px-5 py-2.5 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-lg text-sm transition-all min-h-[44px] cta-glow"
              >
                Devis gratuit
              </Link>

              {/* Mobile : tel + hamburger */}
              <a
                href={`tel:${siteConfig.phone.mainE164}`}
                className="md:hidden flex items-center justify-center w-11 h-11 bg-primary text-white rounded-lg"
                aria-label={`Appeler ${siteConfig.phone.main}`}
              >
                <span className="text-lg" aria-hidden="true">📞</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-warm transition-colors"
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white border-t border-border-light shadow-xl px-4 py-4 space-y-1 overflow-y-auto max-h-[80vh]">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>
              Accueil
            </MobileLink>

            {/* Services accordion */}
            <MobileAccordion
              label="Services"
              isOpen={mobileSection === "services"}
              onToggle={() => setMobileSection(mobileSection === "services" ? null : "services")}
            >
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block pl-8 pr-4 py-2.5 text-sm font-semibold text-primary hover:bg-warm rounded-lg"
              >
                Tous les services →
              </Link>
              {featuredServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block pl-8 pr-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-warm rounded-lg"
                >
                  {s.title}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Nos publics"
              isOpen={mobileSection === "publics"}
              onToggle={() => setMobileSection(mobileSection === "publics" ? null : "publics")}
            >
              {personas.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-warm rounded-lg"
                >
                  <span aria-hidden="true">{p.icon}</span> {p.label}
                </Link>
              ))}
            </MobileAccordion>

            <MobileLink href="/aides-financieres" onClick={() => setMobileOpen(false)}>
              Aides & financement
            </MobileLink>
            <MobileLink href="/comment-ca-marche" onClick={() => setMobileOpen(false)}>
              Notre méthode
            </MobileLink>
            <MobileLink href="/qui-sommes-nous" onClick={() => setMobileOpen(false)}>
              Qui sommes-nous
            </MobileLink>
            <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>
              Blog
            </MobileLink>
            <MobileLink href="/guides" onClick={() => setMobileOpen(false)}>
              Guides gratuits
            </MobileLink>
            <MobileLink href="/agence" onClick={() => setMobileOpen(false)}>
              Nos agences
            </MobileLink>
            <MobileLink href="/temoignages" onClick={() => setMobileOpen(false)}>
              Témoignages
            </MobileLink>
            <MobileLink href="/faq" onClick={() => setMobileOpen(false)}>
              FAQ
            </MobileLink>
            <MobileLink href="/recrutement" onClick={() => setMobileOpen(false)}>
              Recrutement
            </MobileLink>
            <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </MobileLink>

            {/* Mobile CTA */}
            <div className="pt-4 mt-2 border-t border-border-light space-y-3">
              <Link
                href="/demander-devis"
                onClick={() => setMobileOpen(false)}
                className="block w-full px-6 py-3.5 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-xl text-center text-base min-h-[48px] cta-glow"
              >
                Devis gratuit en 3 min →
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.phone.mainE164}`}
                  className="px-4 py-3 bg-primary text-white font-bold rounded-xl text-center text-sm min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <span aria-hidden="true">📞</span> Fixe
                </a>
                <a
                  href={`tel:${siteConfig.phone.mobileE164}`}
                  className="px-4 py-3 border-2 border-primary text-primary font-bold rounded-xl text-center text-sm min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <span aria-hidden="true">📱</span> Mobile
                </a>
              </div>
              <p className="text-xs text-text-muted text-center pt-1">
                {siteConfig.phone.hours}
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-text-light hover:text-primary font-medium transition-colors text-sm rounded-lg hover:bg-warm"
    >
      {children}
    </Link>
  );
}

function DropdownNav({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="px-3 py-2 text-text-light group-hover:text-primary font-medium transition-colors text-sm flex items-center gap-1 h-16 lg:h-20 rounded-lg group-hover:bg-warm"
      >
        {label}
        <span className="text-[10px] group-hover:rotate-180 transition-transform" aria-hidden="true">
          ▼
        </span>
      </button>
      <div
        className={`absolute left-0 top-full bg-white rounded-2xl shadow-lifted border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
          wide ? "" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-base font-semibold text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-text hover:text-primary hover:bg-warm rounded-lg transition-colors"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <span
          className={`text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
}
