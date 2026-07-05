import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import DevisFormV2 from "./DevisFormV2";
import { faqSchema } from "@/lib/structured-data";
import { siteConfig, brandStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Demander un devis gratuit — aide à domicile | Youdom Care",
  description:
    "Devis personnalisé en 3 minutes pour votre aide à domicile : services adaptés, tarif transparent, aides estimées (APA, PCH, crédit d'impôt 50 %). Réponse en 2 h.",
  alternates: { canonical: "/demander-devis" },
};

const reassurance = [
  { icon: "⏱️", title: "Réponse en 2 h", description: "Coordinatrice rappelle dans les 2 h ouvrées" },
  { icon: "🏠", title: "Visite gratuite", description: "Évaluation à domicile sans engagement" },
  { icon: "💰", title: "Tarif clair", description: "Devis détaillé + simulation des aides" },
  { icon: "🛡️", title: "Sans engagement", description: "Vous décidez après la visite, pas avant" },
];

const afterSteps = [
  {
    step: "1",
    title: "Vous envoyez votre demande",
    description: "3 minutes, sans engagement. Une estimation tarifaire s'affiche en direct pendant que vous remplissez.",
  },
  {
    step: "2",
    title: "Une coordinatrice vous rappelle",
    description: "Sous 2 h ouvrées : elle écoute votre situation, répond à vos questions et vérifie vos droits aux aides.",
  },
  {
    step: "3",
    title: "Visite à domicile gratuite",
    description: "Nous évaluons les besoins chez vous et construisons un plan d'aide détaillé, chiffré et transparent.",
  },
  {
    step: "4",
    title: "Vous décidez, puis on démarre",
    description: "Présentation de votre auxiliaire dédiée. Première intervention toujours encadrée.",
  },
];

const guarantees = [
  { icon: "🤝", title: "Le même intervenant", description: "Vous gardez la même auxiliaire de vie. Continuité, confiance, repères préservés." },
  { icon: "💰", title: "50 % de crédit d'impôt", description: "Votre coût réel divisé par deux, une fois les aides déduites." },
  { icon: "🔄", title: "Remplacement sous 48 h", description: "Si l'intervenant ne convient pas, nous le remplaçons, sans frais ni justification." },
  { icon: "🛡️", title: "Auxiliaires en CDI vérifiées", description: "Sélection en 6 étapes, casier judiciaire B3, formation continue." },
];

const devisFaq = [
  {
    question: "Le devis est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui, à 100 %. La demande en ligne, l'estimation, l'appel de qualification et la visite à domicile sont entièrement gratuits. Vous ne vous engagez qu'après avoir reçu et accepté votre plan d'aide personnalisé.",
  },
  {
    question: "Combien coûte l'aide à domicile, une fois les aides déduites ?",
    answer:
      "Le tarif horaire va de 25 à 32 €. Avec le crédit d'impôt de 50 % et les aides comme l'APA ou la PCH, le reste à charge tombe souvent entre 5 et 12 € de l'heure. Notre coordinatrice chiffre votre situation exacte gratuitement.",
  },
  {
    question: "Sous combien de temps pouvez-vous démarrer ?",
    answer:
      "En cas d'urgence (sortie d'hôpital, perte d'autonomie soudaine), nous démarrons en 48 à 72 h. Pour une mise en place classique, comptez 5 à 7 jours après la visite à domicile.",
  },
  {
    question: "Que deviennent mes données personnelles ?",
    answer:
      "Elles servent uniquement à traiter votre demande. Nous ne les revendons jamais et vous pouvez en demander la suppression à tout moment, conformément au RGPD.",
  },
];

export default function DemanderDevisPage() {
  return (
    <>
      <JsonLd data={faqSchema(devisFaq)} />

      <section className="relative isolate bg-hero-gradient text-white pt-12 sm:pt-16 pb-10 sm:pb-14 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
        />
        <Container className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true" className="text-white/30">›</span>
            <span className="text-white/50">Demander un devis</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">Devis gratuit · sans engagement</span>
            <h1 className="text-white text-balance">
              3 minutes pour démarrer.
              <br />
              <span className="text-secondary">Une réponse en 2 heures.</span>
            </h1>
            <p className="lead !text-white/90 mt-5">
              Renseignez votre situation. Nous calculons une estimation tarifaire en
              direct (aides comprises), puis une coordinatrice vous rappelle pour
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

            {/* Sidebar : réassurance + contact direct */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="bg-warm rounded-2xl p-5 border border-border">
                  <h2 className="text-base font-bold text-primary-dark mb-4">
                    Pourquoi 3 minutes suffisent
                  </h2>
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
                  <h2 className="font-bold text-base mb-2">Vous préférez le téléphone ?</h2>
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
                  <strong className="text-primary-dark">{brandStats.familiesAccompanied}+ familles</strong>{" "}
                  nous font confiance · {brandStats.satisfactionRate} % de satisfaction · note Google 4,9/5
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* APRÈS VOTRE DEMANDE */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Ce qui se passe ensuite</span>
            <h2>Après votre demande, tout est simple</h2>
            <p className="lead mt-3">
              Un parcours clair, gratuit jusqu&apos;à la signature. Aucune surprise, aucune pression.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {afterSteps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 80} className="h-full">
                <div className="bg-white rounded-2xl p-6 border border-border card-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-primary-dark mb-1.5">{s.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* GARANTIES */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Nos engagements</span>
            <h2>Ce que nous vous garantissons</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g, idx) => (
              <Reveal key={g.title} delay={idx * 80} className="h-full">
                <div className="bg-warm rounded-2xl p-6 border border-border h-full">
                  <div className="text-3xl mb-3" aria-hidden="true">{g.icon}</div>
                  <h3 className="text-base font-bold text-primary-dark mb-1.5">{g.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{g.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="bg-primary text-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <figure className="max-w-3xl mx-auto text-center">
              <div className="text-secondary text-5xl leading-none mb-3" aria-hidden="true">&ldquo;</div>
              <blockquote className="text-xl sm:text-2xl font-display leading-snug">
                Processus simple, pas de bureaucratie pesante. Réponse en moins de 2 h,
                devis clair. Très professionnel après l&apos;AVC de mon père.
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/70 font-semibold">
                Sophie L. · Vincennes · Retour d&apos;hospitalisation
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="narrow">
          <div className="text-center mb-8">
            <span className="eyebrow">Vos questions avant de commencer</span>
            <h2>Ce qu&apos;il faut savoir</h2>
          </div>
          <div className="space-y-3">
            {devisFaq.map((f) => (
              <details
                key={f.question}
                className="group bg-white rounded-2xl border border-border p-5 open:shadow-card"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-primary-dark">
                  {f.question}
                  <span className="text-primary shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-sm text-text-light leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-text-light">
            Une autre question ?{" "}
            <Link href="/contact" className="text-primary font-bold hover:underline">
              Contactez-nous →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
