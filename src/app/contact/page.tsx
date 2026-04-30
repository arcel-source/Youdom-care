import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nous contacter | Youdom Care",
  description:
    "Contactez l'équipe Youdom Care : téléphone, email, formulaire en ligne, WhatsApp. Réponse en moins de 2 h ouvrées. Devis gratuit, visite à domicile sans engagement.",
};

const contactChannels = [
  {
    icon: "📞",
    title: "Par téléphone",
    description: "Le plus rapide. Du lundi au samedi de 8h à 20h.",
    primary: siteConfig.phone.main,
    primaryHref: `tel:${siteConfig.phone.mainE164}`,
    secondary: `Mobile : ${siteConfig.phone.mobile}`,
    secondaryHref: `tel:${siteConfig.phone.mobileE164}`,
  },
  {
    icon: "✉️",
    title: "Par email",
    description: "Réponse en moins de 2 h ouvrées. Idéal pour les pièces jointes.",
    primary: siteConfig.email,
    primaryHref: `mailto:${siteConfig.email}`,
    secondary: `Recrutement : ${siteConfig.emailRecruitment}`,
    secondaryHref: `mailto:${siteConfig.emailRecruitment}`,
  },
  {
    icon: "💬",
    title: "Par WhatsApp",
    description: "Pratique pour échanger des photos et messages courts.",
    primary: "Discuter sur WhatsApp",
    primaryHref: `https://wa.me/${siteConfig.phone.mobileE164.replace("+", "")}`,
    secondary: "7j/7, réponse rapide",
  },
  {
    icon: "🏠",
    title: "À nos bureaux",
    description: "Sur rendez-vous uniquement, du lundi au vendredi.",
    primary: siteConfig.address.full,
    secondary: "Métro Bastille (lignes 1, 5, 8) ou Gare de Lyon",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--color-secondary)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <nav
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Fil d'ariane"
          >
            <Link href="/" className="hover:text-secondary transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50">Contact</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow !text-secondary">On vous écoute</span>
            <h1 className="text-white">
              Plusieurs façons de
              <br />
              <span className="text-secondary">nous joindre.</span>
            </h1>
            <p className="lead !text-white/85 mt-5">
              Téléphone, email, WhatsApp ou formulaire en ligne — choisissez ce
              qui vous convient. Notre équipe vous répond dans les 2 heures
              ouvrées, urgence ou pas.
            </p>
          </div>
        </Container>
      </section>

      {/* CANAUX */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="4 canaux de contact"
            title="Joignez-nous comme vous le préférez"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactChannels.map((c) => (
              <div
                key={c.title}
                className="bg-warm rounded-2xl p-6 border border-border hover:border-primary hover:bg-white transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-4"
                  aria-hidden="true"
                >
                  {c.icon}
                </div>
                <h3 className="text-base font-bold text-primary-dark mb-2">{c.title}</h3>
                <p className="text-xs text-text-light leading-snug mb-4">
                  {c.description}
                </p>
                {c.primaryHref ? (
                  <a
                    href={c.primaryHref}
                    target={c.primaryHref.startsWith("http") ? "_blank" : undefined}
                    rel={c.primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block font-bold text-primary hover:text-primary-light transition-colors text-sm break-words"
                  >
                    {c.primary}
                  </a>
                ) : (
                  <div className="font-bold text-primary-dark text-sm break-words">{c.primary}</div>
                )}
                {c.secondary ? (
                  c.secondaryHref ? (
                    <a
                      href={c.secondaryHref}
                      className="block text-text-muted hover:text-primary text-xs mt-1 break-all"
                    >
                      {c.secondary}
                    </a>
                  ) : (
                    <div className="text-text-muted text-xs mt-1">{c.secondary}</div>
                  )
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FORMULAIRE + INFOS */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="eyebrow">Formulaire</span>
              <h2>Écrivez-nous votre message</h2>
              <p className="lead mt-3 mb-8">
                Pour les demandes plus complexes ou avec pièces jointes. Réponse
                garantie en moins de 2 h ouvrées.
              </p>

              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="text-white font-bold text-base mb-3">
                    🚨 Sortie d&apos;hôpital ou urgence ?
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-4">
                    Notre cellule d&apos;astreinte est joignable 7j/7 jusqu&apos;à 22h.
                    Mise en place d&apos;aide en 48 à 72 h, week-end inclus.
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.mainE164}`}
                    className="block w-full px-4 py-3 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-xl text-center"
                  >
                    📞 {siteConfig.phone.main}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-primary-dark font-bold text-base mb-3">
                    Nos horaires
                  </h3>
                  <ul className="space-y-2 text-sm text-text-light">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-semibold text-text">8h - 20h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-semibold text-text">8h - 20h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-text-muted">Astreinte urgences</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Jours fériés</span>
                      <span className="text-text-muted">Astreinte urgences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-primary-dark font-bold text-base mb-3">
                    📍 Adresse du siège
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {siteConfig.address.full}
                    <br />
                    Accès : Métro Bastille (1, 5, 8) ou Gare de Lyon (1, 14, RER A & D)
                  </p>
                  <p className="text-xs text-text-muted mt-3 italic">
                    Sur rendez-vous uniquement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-primary-dark font-bold text-base mb-3">
                    🔒 Confidentialité
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    Vos données restent confidentielles. Nous ne vendons rien à
                    personne. Conformité RGPD totale.
                  </p>
                  <Link
                    href="/confidentialite"
                    className="inline-block text-sm text-primary font-bold mt-2 hover:underline"
                  >
                    Politique de confidentialité →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
