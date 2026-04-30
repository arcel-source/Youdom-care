import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import FinalCTA from "@/components/sections/FinalCTA";
import { guides, getGuideBySlug } from "@/lib/guides";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide introuvable" };

  return {
    title: `${guide.title} — Guide gratuit | Youdom Care`,
    description: guide.subtitle,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="relative bg-hero-gradient text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <Container size="wide" className="relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/guides" className="hover:text-secondary transition-colors">Guides</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/50 truncate">{guide.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  <span aria-hidden="true">{guide.emoji}</span> {guide.category}
                </span>
                <span className="text-white/70 text-sm">
                  PDF · {guide.pages} pages
                </span>
              </div>

              <h1 className="text-white">{guide.title}</h1>

              <p className="lead !text-white/90 mt-5">{guide.subtitle}</p>

              <p className="text-sm text-white/70 mt-3">
                <span aria-hidden="true">👥</span> Pour : {guide.audience}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src={guide.cover}
                  alt={guide.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Contenu */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Présentation</span>
              <h2>De quoi parle ce guide ?</h2>
              <p className="lead mt-3">{guide.intro}</p>

              <div className="mt-10">
                <h3 className="text-primary-dark mb-5">Au sommaire</h3>
                <ol className="space-y-2.5">
                  {guide.toc.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text">
                      <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10">
                <h3 className="text-primary-dark mb-5">Ce que vous gagnez</h3>
                <ul className="space-y-3">
                  {guide.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-text leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulaire de capture sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <LeadCaptureForm
                  guideSlug={guide.slug}
                  guideTitle={guide.title}
                  pdfPath={guide.pdfPath}
                />
                <p className="text-xs text-text-muted text-center mt-4">
                  🔒 Conformité RGPD · Désinscription 1 clic · Pas de revente
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AUTRES GUIDES */}
      <section className="bg-warm-grain py-16 sm:py-20">
        <Container size="wide">
          <h2 className="mb-8 text-primary-dark">Les autres guides Youdom Care</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides
              .filter((g) => g.slug !== guide.slug)
              .slice(0, 3)
              .map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
                >
                  <div className="relative h-40">
                    <Image
                      src={g.cover}
                      alt={g.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {g.emoji} {g.category}
                    </div>
                    <h3 className="text-base font-bold text-primary-dark group-hover:text-primary transition-colors">
                      {g.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
