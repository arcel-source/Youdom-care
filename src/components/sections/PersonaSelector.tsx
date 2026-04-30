import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { personas } from "@/lib/site-config";

const colorMap: Record<string, { bg: string; text: string; ring: string; hoverBg: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary",
    ring: "group-hover:ring-primary",
    hoverBg: "group-hover:bg-primary",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-dark",
    ring: "group-hover:ring-accent",
    hoverBg: "group-hover:bg-accent",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-dark",
    ring: "group-hover:ring-secondary",
    hoverBg: "group-hover:bg-secondary",
  },
};

export default function PersonaSelector() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Une réponse adaptée à votre situation"
          title="Qui voulez-vous accompagner ?"
          description="Quatre parcours pensés pour vous guider vers les services, aides et ressources qui vous correspondent vraiment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {personas.map((persona) => {
            const c = colorMap[persona.color] ?? colorMap.primary;
            return (
              <Link
                key={persona.id}
                href={persona.href}
                className="group relative block bg-white rounded-2xl border border-border p-6 card-interactive overflow-hidden"
              >
                {/* Halo coloré au survol */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${c.bg} opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    {persona.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                    {persona.label}
                  </h3>
                  <p className="text-sm text-text-light mb-4 leading-relaxed">
                    {persona.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.text} link-underline`}>
                    Voir le parcours
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
