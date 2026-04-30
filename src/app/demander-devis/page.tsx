import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import DevisFormV2 from "./DevisFormV2";
import { siteConfig, brandStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Demander un devis gratuit — aide à domicile | Youdom Care",
  description:
    "Devis personnalisé en 3 minutes pour votre aide à domicile : services adaptés, tarif transparent, aides estimées (APA, PCH, crédit d'impôt 50 %). Réponse en 2 h.",
};

const reassurance = [
  { icon: "⏱️", title: "Réponse en 2 h", description: "Coordinatrice rappelle dans les 2 h ouvrées" },
  { icon: "🏠", title: "Visite gratuite", description: "Évaluation à domicile sans engagement" },
  { icon: "💰", title: "Tarif clair", description: "Devis détaillé + simulation des aides" },
  { icon: "🛡️", title: "Sans engagement", description: "Vous décidez après la visite, pas avant" },
];

export default function DemanderDevisPage() {
  return (
    <>
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-10 sm:pb-14 overflow-hidden">
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Demander un devis</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Devis gratuit · sans engagement</span>
            <h1 className="text-white">
              3 minutes pour démarrer.
              <br />
              <span className="text-secondary">Une réponse en 2 heures.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Renseignez votre situation. Nous calculons une estimation tarifaire en
              direct (avec les aides), puis une coordinatrice vous rappelle pour
              affiner et organiser une visite à domicile gratuite.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-8">
              <DevisFormV2 />
            </div>

            {/* Side bar : rassurance + contact direct */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="bg-warm rounded-2xl p-5 border border-border">
                  <h3 className="text-base font-bold text-primary-dark mb-4">
                    Pourquoi 3 minutes suffisent
                  </h3>
                  <ul className="space-y-3">
                    {reassurance.map((r) => (
                      <li key={r.title} className="flex items-start gap-3 text-sm">
                        <span className="text-xl shrink-0" aria-hidden="true">{r.icon}</span>
                        <div>
                          <div className="font-bold text-primary-dark">{r.title}</div>
                          <div className="text-text-light text-xs leading-snug">{r.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary text-white rounded-2xl p-5">
                  <h3 className="font-bold text-base mb-2">Vous préférez le téléphone ?</h3>
                  <p className="text-sm text-white/80 mb-4 leading-snug">
                    Notre équipe vous écoute du lundi au samedi de 8h à 20h.
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.mainE164}`}
                    className="block w-full px-4 py-3 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-xl text-center"
                  >
                    📞 {siteConfig.phone.main}
                  </a>
                </div>

                <div className="text-center text-xs text-text-muted px-4">
                  <strong className="text-primary-dark">{brandStats.familiesAccompanied}+ familles</strong> nous font confiance — note Google {brandStats.satisfactionRate / 20} ⭐ sur {brandStats.satisfactionRate} %
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
