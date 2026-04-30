import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-config";

type Props = {
  currentSlug: string;
  title?: string;
  description?: string;
  recommendedSlugs?: string[];
};

export default function ServiceCrossSell({
  currentSlug,
  title = "Souvent associés à ce service",
  description = "Nos clients combinent souvent ce service avec ceux-ci pour un accompagnement encore plus complet.",
  recommendedSlugs,
}: Props) {
  // Si pas de liste explicite : on prend 3 services featured différents du courant
  const list = recommendedSlugs
    ? services.filter((s) => recommendedSlugs.includes(s.slug))
    : services.filter((s) => s.featured && s.slug !== currentSlug).slice(0, 3);

  if (list.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="wide">
        <SectionHeading eyebrow="Aller plus loin" title={title} description={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {list.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-warm rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-light line-clamp-2 mb-3 flex-1">
                  {service.summary}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                  Découvrir →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
