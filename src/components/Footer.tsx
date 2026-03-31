import Link from "next/link";

const services = [
  { href: "/services/aide-autonomie", label: "Aide à l'autonomie" },
  { href: "/services/garde-de-nuit", label: "Garde de nuit" },
  { href: "/services/aide-handicap", label: "Aide au handicap" },
  { href: "/services/transport-pmr", label: "Transport PMR" },
  { href: "/services/aide-menagere", label: "Aide ménagère" },
  { href: "/services/teleassistance", label: "Téléassistance" },
];

const company = [
  { href: "/a-propos", label: "À propos" },
  { href: "/fonctionnement", label: "Comment ça marche" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/blog", label: "Blog" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/faq", label: "FAQ" },
];

const legal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/cgu", label: "CGU" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Banner */}
      <div className="bg-primary py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;une aide à domicile ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Obtenez votre devis personnalisé gratuit en moins de 2 minutes.
            Nous vous rappelons sous 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow"
            >
              Demander un Devis Gratuit →
            </Link>
            <a
              href="tel:+33667224507"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-primary-dark font-bold text-lg">Y</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Youdom</span>
                <span className="font-bold text-xl text-secondary"> Care</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Service d&apos;aide à domicile sur mesure pour personnes âgées,
              en situation de handicap ou en perte d&apos;autonomie.
              Disponible 24h/24, 7j/7 à Paris et en Île-de-France.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/youdomc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="https://www.instagram.com/_u/youdom_care" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <span>📷</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">L&apos;entreprise</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>61 rue de Lyon<br />75012 Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+33184807297" className="hover:text-secondary transition-colors">01 84 80 72 97</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+33667224507" className="hover:text-secondary transition-colors">06 67 22 45 07</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:contact@youdom-care.com" className="hover:text-secondary transition-colors">contact@youdom-care.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Youdom Care. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/50 hover:text-white/80 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
