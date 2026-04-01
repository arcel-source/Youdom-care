import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="bg-primary py-10 sm:py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;aide à domicile ?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
            Obtenez votre devis gratuit en 2 minutes. Nous vous rappelons sous 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/demander-devis"
              className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all cta-glow min-h-[44px] flex items-center justify-center"
            >
              Demander un Devis →
            </Link>
            <a
              href="tel:+33667224507"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all min-h-[44px] flex items-center justify-center"
            >
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
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
              Service d&apos;aide à domicile sur mesure pour personnes âgées, en situation de handicap ou en perte d&apos;autonomie.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-white/70 hover:text-secondary transition-colors text-sm">Tous les services</Link></li>
              <li><Link href="/services/aide-personnes-agees" className="text-white/70 hover:text-secondary transition-colors text-sm">Aide personnes âgées</Link></li>
              <li><Link href="/services/aide-handicap" className="text-white/70 hover:text-secondary transition-colors text-sm">Aide handicap</Link></li>
              <li><Link href="/services/garde-nuit" className="text-white/70 hover:text-secondary transition-colors text-sm">Garde de nuit</Link></li>
              <li><Link href="/services/aide-menagere" className="text-white/70 hover:text-secondary transition-colors text-sm">Aide ménagère</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link href="/qui-sommes-nous" className="text-white/70 hover:text-secondary transition-colors text-sm">Qui sommes-nous</Link></li>
              <li><Link href="/comment-ca-marche" className="text-white/70 hover:text-secondary transition-colors text-sm">Comment ça marche</Link></li>
              <li><Link href="/temoignages" className="text-white/70 hover:text-secondary transition-colors text-sm">Témoignages</Link></li>
              <li><Link href="/aides-financieres" className="text-white/70 hover:text-secondary transition-colors text-sm">Aides financières</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-secondary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>61 rue de Lyon, 75012 Paris</span>
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
                <a href="mailto:contact@youdom-care.com" className="hover:text-secondary transition-colors break-all">contact@youdom-care.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Youdom Care. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mentions-legales" className="text-white/50 hover:text-white/80 text-xs transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="text-white/50 hover:text-white/80 text-xs transition-colors">Confidentialité</Link>
            <Link href="/cgu" className="text-white/50 hover:text-white/80 text-xs transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
