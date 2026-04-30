import Container from "@/components/ui/Container";
import { brandStats, siteConfig } from "@/lib/site-config";

const items = [
  { value: `${brandStats.satisfactionRate}%`, label: "de satisfaction client" },
  { value: `${brandStats.familiesAccompanied}+`, label: "familles accompagnées" },
  { value: `${brandStats.yearsOfExperience}+`, label: "ans d'expertise" },
  { value: `< ${brandStats.responseTimeHours} h`, label: "de délai de réponse" },
];

const trustChips = [
  { icon: "🏛️", label: "Agrément SAP" },
  { icon: "🛡️", label: "Autorisation SAAD" },
  { icon: "💰", label: "Crédit d'impôt 50 %" },
  { icon: "⭐", label: "4,9 / 5 sur Google" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-border-light py-8 sm:py-10">
      <Container size="wide">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-dark mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-text-light leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bandeau agréments */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-border-light">
          <span className="text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-wider">
            Une entreprise reconnue
          </span>
          {trustChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-warm rounded-full text-xs sm:text-sm font-semibold text-primary-dark"
            >
              <span aria-hidden="true">{chip.icon}</span>
              {chip.label}
            </span>
          ))}
          <span className="hidden md:inline text-xs text-text-muted">
            Service basé à {siteConfig.address.city} • {siteConfig.zone}
          </span>
        </div>
      </Container>
    </section>
  );
}
