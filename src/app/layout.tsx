import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
