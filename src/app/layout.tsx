import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Youdom Care — Aide à Domicile sur Mesure à Paris et Île-de-France",
    template: "%s | Youdom Care",
  },
  description:
    "Service d'aide à domicile premium pour personnes âgées, en situation de handicap ou en perte d'autonomie. Auxiliaires de vie qualifiées, disponibles 24h/24. Crédit d'impôt 50%. Devis gratuit sous 2h.",
  keywords: [
    "aide à domicile",
    "aide personnes âgées",
    "aide handicap",
    "maintien à domicile",
    "auxiliaire de vie",
    "garde de nuit",
    "aide à domicile Paris",
    "aide à domicile Île-de-France",
  ],
  openGraph: {
    title: "Youdom Care — Aide à Domicile sur Mesure",
    description: "Service premium d'aide à domicile. Devis gratuit sous 2h.",
    url: "https://www.youdom-care.com",
    siteName: "Youdom Care",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Youdom Care",
              description: "Service d'aide à domicile sur mesure pour personnes âgées et en situation de handicap",
              url: "https://www.youdom-care.com",
              telephone: ["+33184807297", "+33667224507"],
              email: "contact@youdom-care.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "61 rue de Lyon",
                addressLocality: "Paris",
                postalCode: "75012",
                addressCountry: "FR",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "€€",
              areaServed: { "@type": "City", name: "Paris" },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
