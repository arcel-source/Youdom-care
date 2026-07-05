import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { agencies } from "@/lib/agencies";

const departments = [
  { code: "75", name: "Paris" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
];

export default function LocalPresence() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-white py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full mix-blend-screen blur-3xl opacity-25 animate-blob"
        style={{ background: "var(--color-accent)" }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <span className="eyebrow !text-secondary">Près de chez vous</span>
              <h2 className="text-white">
                Une équipe locale,
                <span className="text-secondary"> pas un centre d&apos;appel.</span>
              </h2>
              <p className="lead !text-white/85 mt-5">
                {agencies.length} communes desservies à Paris et en petite couronne. Nos
                auxiliaires connaissent votre quartier, vos hôpitaux, vos commerces — et
                interviennent vite, sans dépendre des embouteillages.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Button href="/agence" variant="primary" size="lg" glow>
                  Trouver ma ville
                </Button>
                <Button href="/demander-devis" variant="white" size="lg">
                  Devis gratuit
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div className="grid sm:grid-cols-2 gap-4">
                {departments.map((dept) => {
                  const cities = agencies.filter((a) => a.department.code === dept.code);
                  if (cities.length === 0) return null;
                  return (
                    <div
                      key={dept.code}
                      className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15"
                    >
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="font-bold text-white">
                          {dept.name}{" "}
                          <span className="text-white/50 font-normal text-sm">({dept.code})</span>
                        </div>
                        <span className="text-xs text-white/60">{cities.length} villes</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cities.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/agence/${c.slug}`}
                            className="inline-block px-3 py-1 bg-white/10 hover:bg-secondary hover:text-primary-dark rounded-full text-xs text-white transition-colors"
                          >
                            {c.shortName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
