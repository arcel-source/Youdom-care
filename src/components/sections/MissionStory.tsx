import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brandStats } from "@/lib/site-config";

export default function MissionStory() {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Notre raison d&apos;être</span>
            <h2>
              Vieillir chez soi est un droit.
              <br />
              <span className="text-gradient">Pas un privilège.</span>
            </h2>

            <div className="mt-6 space-y-4 text-text-light">
              <p className="text-lg leading-relaxed">
                Il y a {brandStats.yearsOfExperience} ans, nous avons vu trop de personnes
                quitter leur maison pour une chambre d&apos;EHPAD parce qu&apos;elles n&apos;avaient
                pas les bonnes mains à leurs côtés.
              </p>
              <p className="leading-relaxed">
                Trop d&apos;aidants épuisés. Trop de familles seules face à la complexité
                des aides. Trop d&apos;intervenants qui changent toutes les semaines, sans
                écoute, sans suivi.
              </p>
              <p className="leading-relaxed">
                <strong className="text-primary-dark">
                  Nous avons créé Youdom Care pour faire autrement.
                </strong>{" "}
                Le même intervenant. Une coordinatrice qui connaît votre dossier. Des
                tarifs transparents. Une charte qualité signée. Et surtout : du temps
                humain pour chaque personne.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pb-2">
              <Stat value={`${brandStats.familiesAccompanied}+`} label="familles" />
              <Stat
                value={`${brandStats.interventionsPerMonth.toLocaleString("fr-FR")}`}
                label="interventions/mois"
              />
              <Stat value={`${brandStats.caregiversCount}`} label="auxiliaires CDI" />
            </div>

            <div className="mt-8">
              <Button href="/qui-sommes-nous" variant="outline" size="md">
                Découvrir notre histoire
              </Button>
            </div>
          </div>

          {/* Mosaïque images */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src="/images/home/mission-home.png"
                    alt="Auxiliaire de vie partage un repas avec une personne âgée"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="relative h-32 sm:h-44 rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src="/images/about/autonomie.jpg"
                    alt="Personne autonome chez elle"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 sm:h-44 rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src="/images/services/aide-menagere.jpg"
                    alt="Aide ménagère en intervention"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src="/images/about/assistant-menager.jpg"
                    alt="Moment de complicité entre intervenant et bénéficiaire"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Badge note Google flottant */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 shadow-lifted border border-border flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">⭐</span>
              <div className="text-sm">
                <div className="font-bold text-primary-dark">{brandStats.satisfactionRate}% de satisfaction</div>
                <div className="text-xs text-text-light">Sondage clients 2025</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-bold text-primary-dark">{value}</div>
      <div className="text-xs sm:text-sm text-text-light leading-tight mt-1">{label}</div>
    </div>
  );
}
