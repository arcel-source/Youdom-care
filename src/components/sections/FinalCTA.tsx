import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig, brandStats } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-primary-dark text-white overflow-hidden">
      {/* Décorations */}
      <div
        className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-3xl translate-y-1/2 -translate-x-1/3"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow !text-secondary">Prêt à commencer ?</span>
          <h2 className="text-white">
            Le bon accompagnement,
            <br />
            <span className="text-secondary">commence par un appel.</span>
          </h2>
          <p className="lead !text-white/85 mt-4">
            Notre équipe vous écoute, vous oriente et vous accompagne — sans engagement,
            sans pression, sans frais. Juste de l&apos;humain.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 mb-6">
            <Button href="/demander-devis" variant="primary" size="lg" glow>
              Demander un devis gratuit
            </Button>
            <Button
              href={`tel:${siteConfig.phone.mainE164}`}
              variant="white"
              size="lg"
              icon={<span aria-hidden="true">📞</span>}
            >
              {siteConfig.phone.main}
            </Button>
          </div>

          <p className="text-sm text-white/70">
            <span aria-hidden="true">⏱️</span> Réponse de qualification en moins de{" "}
            {brandStats.responseTimeHours} h •
            <span aria-hidden="true"> 🏠</span> Visite à domicile gratuite •
            <span aria-hidden="true"> 🤝</span> Sans engagement
          </p>

          {/* Mini grid d'options de contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12 max-w-2xl mx-auto">
            <ContactOption
              icon="✉️"
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactOption
              icon="📱"
              label="Mobile"
              value={siteConfig.phone.mobile}
              href={`tel:${siteConfig.phone.mobileE164}`}
            />
            <ContactOption
              icon="💬"
              label="WhatsApp"
              value="Discuter"
              href={`https://wa.me/${siteConfig.phone.mobileE164.replace("+", "")}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactOption({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 backdrop-blur transition-colors group"
    >
      <span className="text-2xl shrink-0" aria-hidden="true">
        {icon}
      </span>
      <div className="text-left text-sm">
        <div className="text-white/60 text-xs uppercase tracking-wider">{label}</div>
        <div className="text-white font-semibold group-hover:text-secondary transition-colors break-all">
          {value}
        </div>
      </div>
    </a>
  );
}
