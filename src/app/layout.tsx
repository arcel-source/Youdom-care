import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://youdom-care.com"),
  title: "Youdom Care - Aide à Domicile Paris & Île-de-France",
  description: "Aide à domicile de qualité pour personnes âgées et handicapées. Services personnalisés, intervenants formés, crédit d'impôt 50%.",
  openGraph: {
    type: "website",
    url: "https://youdom-care.com",
    title: "Youdom Care - Aide à Domicile",
    description: "Aide à domicile de confiance. Pour vivre dignement chez soi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white">
        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <span className="font-bold text-text hidden sm:inline">Youdom Care</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-text-light hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
                <div className="relative group">
                  <button className="text-text-light hover:text-primary transition-colors text-sm">
                    Services ▼
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/services/aide-personnes-agees" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Aide personnes âgées
                    </Link>
                    <Link href="/services/aide-handicap" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Aide handicap
                    </Link>
                    <Link href="/services/garde-enfants-handicap" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Garde d'enfants
                    </Link>
                    <Link href="/services/aide-menagere" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Aide ménagère
                    </Link>
                    <Link href="/services/garde-nuit" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Présence de nuit
                    </Link>
                    <Link href="/services/accompagnement-sorties" className="block px-4 py-2 hover:bg-warm text-sm text-text">
                      Accompagnement
                    </Link>
                  </div>
                </div>
                <Link href="/aides-financieres" className="text-text-light hover:text-primary transition-colors text-sm">
                  Aides financières
                </Link>
                <Link href="/contact" className="text-text-light hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </div>

              <a href="tel:0184807297" className="px-6 py-2 bg-primary hover:bg-primary-light text-white font-bold rounded-lg text-sm transition-colors">
                01 84 80 72 97
              </a>
            </div>
          </div>
        </nav>

        {/* MAIN */}
        {children}

        {/* FOOTER */}
        <footer className="bg-primary-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-bold mb-4">Youdom Care</h3>
                <p className="text-white/70 text-sm">
                  Aide à domicile de confiance pour personnes âgées et handicapées. Paris & Île-de-France.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><Link href="/services/aide-personnes-agees" className="hover:text-white">Aide personnes âgées</Link></li>
                  <li><Link href="/services/aide-handicap" className="hover:text-white">Aide handicap</Link></li>
                  <li><Link href="/services/aide-menagere" className="hover:text-white">Aide ménagère</Link></li>
                  <li><Link href="/services/garde-nuit" className="hover:text-white">Présence de nuit</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Informations</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><Link href="/aides-financieres" className="hover:text-white">Aides financières</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><a href="tel:0184807297" className="hover:text-white">01 84 80 72 97</a></li>
                  <li><a href="mailto:contact@youdom-care.com" className="hover:text-white">contact@youdom-care.com</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Localisation</h3>
                <p className="text-white/70 text-sm">
                  61 rue de Lyon<br/>
                  75012 Paris<br/>
                  <strong>Zone :</strong> Paris & Île-de-France
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-xs">
                <p>&copy; 2026 Youdom Care. Tous droits réservés.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="hover:text-white">Mentions légales</a>
                  <a href="#" className="hover:text-white">Politique confidentialité</a>
                  <a href="#" className="hover:text-white">CGU</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
