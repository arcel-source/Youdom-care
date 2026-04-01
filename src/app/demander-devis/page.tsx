import { Metadata } from "next";
import DevisForm from "./DevisForm";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit | Youdom Care",
  description:
    "Devis gratuit et personnalisé en 2 minutes. Sans engagement. Réponse sous 2 heures. Crédit d'impôt 50%.",
};

export default function DevisPage() {
  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Votre devis <span className="text-secondary">gratuit</span> en 2
            minutes
          </h1>
          <p className="text-white/70 text-sm sm:text-base">
            Sans engagement • Réponse sous 2h • Crédit d&apos;impôt 50%
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-warm min-h-[60vh]">
        <div className="max-w-3xl lg:max-w-xl mx-auto px-4">
          <DevisForm />
        </div>
      </section>
    </>
  );
}
