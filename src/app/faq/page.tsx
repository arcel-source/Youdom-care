import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Questions Fréquentes",
  description:
    "Retrouvez les réponses à toutes vos questions sur l'aide à domicile : crédit d'impôt, qualifications, délais, week-ends, aides financières. Youdom Care répond.",
};

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
            Questions <span className="text-secondary">fréquentes</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services d&apos;aide à domicile.
          </p>
        </div>
      </section>
      <FAQSection />
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Vous avez une autre question ?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-3 rounded-full transition-all cta-glow">
              Contactez-nous →
            </Link>
            <a href="tel:+33667224507" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-3 rounded-full transition-all">
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
