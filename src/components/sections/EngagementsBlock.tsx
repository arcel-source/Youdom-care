import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { engagements } from "@/lib/site-config";

export default function EngagementsBlock() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-lifted">
                <Image
                  src="/images/home/pourquoi-choisir.png"
                  alt="Auxiliaire de vie Youdom Care en intervention"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              {/* Carte flottante "charte signée" */}
              <div className="hidden md:flex absolute -right-6 -bottom-6 bg-white rounded-2xl p-5 shadow-lifted border border-border max-w-xs items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-success-50 flex items-center justify-center text-2xl shrink-0">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-primary-dark text-sm">Charte qualité signée</div>
                  <p className="text-xs text-text-light leading-snug mt-0.5">
                    Engagements opposables, contrôlés trimestriellement par notre cellule qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Engagements */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Nos 6 engagements"
              title="Ce que nous nous engageons à tenir, à chaque visite"
              description="Pas de promesses creuses. Des engagements concrets, signés, mesurés."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {engagements.map((e) => (
                <div
                  key={e.title}
                  className="flex gap-4 p-5 rounded-2xl bg-warm border border-transparent hover:border-primary hover:bg-white transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0 shadow-card" aria-hidden="true">
                    {e.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-base mb-1">{e.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/qui-sommes-nous" variant="outline" size="md">
                Découvrir notre démarche qualité →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
