"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

/**
 * Enveloppe le chrome marketing (header, footer, CTA flottant) autour des pages.
 *
 * L'espace client dispose de sa propre interface applicative (topbar + sidebar)
 * via son layout dédié : on y masque donc le chrome marketing pour éviter la
 * double navigation et obtenir une expérience « app » pleine page.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppArea = pathname?.startsWith("/espace-client");

  if (isAppArea) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
