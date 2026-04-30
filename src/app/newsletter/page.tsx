import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterCapture from "@/components/forms/NewsletterCapture";

export const metadata: Metadata = {
  title: "Newsletter — guides, conseils, droits | Youdom Care",
  description:
    "Inscrivez-vous à la newsletter Youdom Care : 1 email par mois maximum avec nos guides, articles et l'actualité des aides (APA, PCH, crédit d'impôt).",
};

const benefits = [
  {
    icon: "📚",
    title: "Articles & guides exclusifs",
    description: "Nos meilleurs contenus en avant-première : checklist, retours d'expérience, conseils pratiques.",
  },
  {
    icon: "💰",
    title: "L'actu des aides",
    description: "APA, PCH, crédit d'impôt, MaPrimeAdapt' : on vous tient au courant des évolutions et opportunités.",
  },
  {
    icon: "🫂",
    title: "Ressources pour aidants",
    description: "Conseils pratiques pour tenir dans la durée : répit, droits, santé physique et psychologique.",
  },
  {
    icon: "🎁",
    title: "Offres ponctuelles",
    description: "Webinaires gratuits, ateliers en ligne, événements locaux dédiés à nos abonnés.",
  },
];

const issues = [
  { date: "Mai 2026", title: "MaPrimeAdapt' : ce qui change vraiment cette année" },
  { date: "Avril 2026", title: "Aidant familial : connaissez-vous l'AJPA ?" },
  { date: "Mars 2026", title: "Sortie d'hôpital : les 7 jours qui changent tout" },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Newsletter</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">1 email/mois max — sans spam</span>
            <h1 className="text-white">
              La newsletter Youdom Care.
              <br />
              <span className="text-secondary">Utile, claire, mensuelle.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Recevez chaque mois nos meilleurs guides, l&apos;actualité des aides et
              les ressources qui changent vraiment la vie des aidants et des
              bénéficiaires. Désinscription en 1 clic, données respectées.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Ce que vous recevrez"
                title="4 raisons de vous abonner"
                align="left"
              />
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4 p-5 rounded-2xl bg-warm">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0 shadow-card" aria-hidden="true">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary-dark mb-1">{b.title}</h3>
                      <p className="text-sm text-text-light leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <NewsletterCapture variant="page" source="page-newsletter" />

              <div className="mt-8">
                <h3 className="text-primary-dark text-base mb-4">Les 3 derniers numéros</h3>
                <div className="space-y-3">
                  {issues.map((iss) => (
                    <div
                      key={iss.title}
                      className="bg-warm rounded-xl p-4 border border-border"
                    >
                      <div className="text-xs uppercase tracking-wider font-bold text-primary mb-1">
                        📬 {iss.date}
                      </div>
                      <p className="text-sm text-primary-dark font-semibold">
                        {iss.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="narrow">
          <div className="text-center">
            <span className="eyebrow">Notre engagement</span>
            <h2 className="text-primary-dark">Pas de spam. Jamais.</h2>
            <p className="lead mt-4">
              <strong>1 email par mois maximum</strong> — souvent moins. Pas de
              revente de vos données. Désinscription possible en 1 clic depuis
              n&apos;importe quel email reçu. Conforme RGPD.
            </p>
            <p className="text-sm text-text-light mt-4">
              <Link href="/confidentialite" className="text-primary hover:underline">
                Lire notre politique de confidentialité →
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
