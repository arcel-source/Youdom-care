import Link from "next/link";
import { siteConfig, services, personas, agrements } from "@/lib/site-config";

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Bandeau pré-footer : engagement de réponse */}
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">📞</span>
            <div>
              <div className="font-bold text-white">
                Une question ? On vous répond en moins de 2 h.
              </div>
              <div className="text-sm text-white/70">{siteConfig.phone.hours}</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${siteConfig.phone.mainE164}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary-dark font-bold rounded-xl hover:bg-warm transition-colors"
            >
              <span aria-hidden="true">📞</span>
              {siteConfig.phone.main}
            </a>
            <Link
              href="/demander-devis"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-primary-dark font-bold rounded-xl hover:bg-secondary-light transition-colors cta-glow"
            >
              Devis en ligne
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Colonne 1 : marque + description + agréments */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                }}
                aria-hidden="true"
              >
                <span className="text-primary-dark font-bold text-xl font-display">Y</span>
              </div>
              <div className="leading-none">
                <div className="font-bold text-xl font-display">
                  Youdom <span className="text-secondary">Care</span>
                </div>
                <div className="text-[10px] text-white/60 tracking-wider uppercase">
                  Aide à domicile
                </div>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteConfig.tagline} Une équipe d&apos;auxiliaires de vie en CDI, formées,
              fidèles à votre famille. {siteConfig.zone}.
            </p>

            <div className="space-y-2 text-sm">
              {agrements.slice(0, 4).map((a) => (
                <div key={a.short} className="flex items-start gap-2 text-white/70">
                  <span className="text-success shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <span className="font-semibold text-white">{a.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 2 : services */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-base mb-5 text-white">Nos services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services"
                  className="text-secondary hover:text-secondary-light text-sm font-semibold transition-colors"
                >
                  Voir tous les services →
                </Link>
              </li>
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-secondary text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : ressources */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-base mb-5 text-white">Ressources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/aides-financieres" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Aides financières
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Notre méthode
                </Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/recrutement" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Recrutement
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : publics */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-base mb-5 text-white">Nos publics</h3>
            <ul className="space-y-2.5">
              {personas.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-white/70 hover:text-secondary text-sm transition-colors"
                  >
                    <span aria-hidden="true">{p.icon}</span> {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-base mt-8 mb-4 text-white">Nous contacter</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span aria-hidden="true">📍</span>
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <a
                  href={`tel:${siteConfig.phone.mainE164}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.phone.main}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📱</span>
                <a
                  href={`tel:${siteConfig.phone.mobileE164}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.phone.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-secondary transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bandeau bas */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.legalForm}.
            Tous droits réservés. Service à la personne agréé.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="text-white/50 hover:text-white text-xs transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-white/50 hover:text-white text-xs transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgu" className="text-white/50 hover:text-white text-xs transition-colors">
              CGU
            </Link>
            <Link href="/cookies" className="text-white/50 hover:text-white text-xs transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-white/50 hover:text-white text-xs transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
