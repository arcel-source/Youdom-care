import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/site-config";

export default function ServicesShowcase() {
  const featured = services.filter((s) => s.featured).slice(0, 6);

  return (
    <section className="bg-warm-grain py-16 sm:py-24">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Nos services phares</span>
            <h2>Une présence sur-mesure, à chaque étape de la vie</h2>
            <p className="lead mt-4">
              De la simple aide ménagère au suivi spécialisé Alzheimer, nos auxiliaires
              s&apos;adaptent à votre rythme et à vos besoins.
            </p>
          </div>
          <Button href="/services" variant="outline" size="md">
            Voir les 12 services →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-border card-interactive flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur text-primary-dark text-xs font-semibold">
                  {service.short}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4 flex-1">
                  {service.summary}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                  Découvrir
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
