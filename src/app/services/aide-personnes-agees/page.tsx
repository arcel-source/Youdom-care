import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aide à domicile pour personnes âgées | Youdom Care",
  description: "Aide à domicile pour seniors à Paris & IDF. Toilette, repas, sorties. Maintien à domicile sécurisé. Devis gratuit.",
  openGraph: {
    title: "Aide à domicile pour personnes âgées | Youdom Care",
    description: "Services d'aide à domicile de qualité pour personnes âgées. Continuité, sécurité, dignité.",
    type: "website",
  },
};

export default function AidePersonnesAgeesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Aide à domicile pour personnes âgées : maintien à domicile, sécurité et sérénité
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Vieillir chez soi avec dignité. Services sur-mesure, intervenants formés, continuité garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/demander-devis" className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Demander un devis gratuit
                </Link>
                <a href="tel:0184807297" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Appeler : 01 84 80 72 97
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/old-people.png"
                  alt="Aide à domicile pour personnes âgées"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : DÉFIS RÉELS */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Pourquoi l'aide à domicile pour personnes âgées est devenue essentielle</h2>
          <p className="text-text-light text-center mb-12 text-lg">
            Les défis auxquels font face les seniors et leurs familles sont nombreux, souvent invisibles, et de plus en plus complexes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🚶",
                title: "Difficultés physiques",
                desc: "Arthrose, équilibre fragile, fatigue. Les gestes simples deviennent risqués.",
              },
              {
                icon: "⚠️",
                title: "Risques de chute",
                desc: "1 personne âgée sur 3 chute chaque année. Une chute peut être le début d'une spirale.",
              },
              {
                icon: "🏠",
                title: "Isolement social",
                desc: "Quand on ne sort plus, l'isolement s'installe. C'est grave pour la santé physique et mentale.",
              },
              {
                icon: "💊",
                title: "Gestion médicale",
                desc: "Médicaments multiples, rendez-vous fréquents. Seul, c'est facile d'oublier.",
              },
              {
                icon: "😰",
                title: "Aidants épuisés",
                desc: "Enfants supportent 80% de l'aide. C'est l'épuisement total.",
              },
              {
                icon: "🏛️",
                title: "Peur de l'établissement",
                desc: "Maison de retraite : perte d'indépendance et autonomie réduite.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : SERVICES DÉTAILLÉS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services d'aide à domicile pour seniors</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Aide à la toilette et hygiène personnelle",
                "Aide à l'habillage",
                "Aide à la préparation des repas",
                "Aide mobilité et transferts sécurisés",
                "Aide courses et gestion budget",
                "Entretien domicile et lessive",
                "Accompagnements médicaux et sorties",
                "Aide administrative",
                "Stimulation cognitive et loisirs",
                "Présence réassurante et vigilance",
              ].map((service, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                  <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-text text-lg">{service}</h3>
                    <p className="text-text-light text-sm mt-1">
                      Service adapté aux besoins spécifiques de chaque personne. Fait avec respect et dignité.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/aide-personnes-agees.jpg"
                  alt="Accompagnement bienveillant d'une personne âgée à domicile"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : BÉNÉFICES */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Ce que vous gagnez vraiment avec Youdom Care</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la personne âgée</h3>
              <ul className="space-y-3">
                {["Continuité de vie chez soi", "Sécurité améliorée", "Autonomie préservée", "Lien social actif", "Dignité respectée"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90">
                    <span>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la famille / aidants</h3>
              <ul className="space-y-3">
                {["Réduction stress énorme", "Moins d'épuisement", "Meilleure qualité temps", "Tranquillité nocturne", "Culpabilité allégée"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90">
                    <span>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : PROCESSUS */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Mise en place simple et sûre en 6 étapes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "1", title: "Appel conseil gratuit", desc: "Vous décrivez la situation. On vous écoute vraiment." },
              { step: "2", title: "Évaluation à domicile", desc: "Rencontre, observation des besoins réels." },
              { step: "3", title: "Plan d'aide personnalisé", desc: "Détail services, planning, tarif transparent." },
              { step: "4", title: "Matching intervenant", desc: "Sélection de la personne adaptée à vos besoins." },
              { step: "5", title: "Première visite", desc: "Présentation, mise en confiance, rodage." },
              { step: "6", title: "Suivi continu", desc: "Feedback régulier, ajustements si besoin." },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text">{item.title}</h3>
                    <p className="text-text-light mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : POURQUOI YOUDOM CARE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Pourquoi choisir Youdom Care</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔄",
                title: "Continuité garantie",
                desc: "Même intervenant = lien de confiance durable. Pas de rotation.",
              },
              {
                icon: "📚",
                title: "Formation continue",
                desc: "Gestes, handicap, communication. Supervisés régulièrement.",
              },
              {
                icon: "🔒",
                title: "Secret professionnel absolu",
                desc: "Confidentialité légalement protégée. Respect intimité total.",
              },
              {
                icon: "💰",
                title: "Accompagnement aides",
                desc: "APA, PCH, crédit d'impôt 50%. On vous guide dans démarches.",
              },
              {
                icon: "🎯",
                title: "Flexibilité maximale",
                desc: "Horaires, services, urgences. On s'adapte à vos besoins.",
              },
              {
                icon: "📞",
                title: "Disponibilité 24h/24",
                desc: "Question? Urgence? Réponse sous 2h en jours ouvrables.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-warm rounded-xl border border-gray-200">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : AIDES FINANCIÈRES */}
      <section className="py-16 bg-gradient-to-br from-warm to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Financer votre aide à domicile</h2>

          <div className="bg-white p-8 rounded-2xl border-2 border-secondary mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">APA (Allocation Personnalisée d&apos;Autonomie)</h3>
            <p className="text-text-light mb-4">
              Pour personnes âgées 60+ en perte d&apos;autonomie. Versée par département. Moyenne 600-1200€/mois selon perte. Peut couvrir 50-80% aide à domicile.
            </p>
            <p className="text-sm text-text-light">Youdom Care vous aide dans constitution dossier et suivi.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">💰 Crédit d&apos;impôt 50%</h3>
            <p className="text-text-light">
              Service à personne = réduction fiscale automatique 50%. TVA réduite 5.5%. Peut être pris en compte dans calcul APA.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/aides-financieres" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors">
              Page aides financières détaillée →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION : FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Questions fréquentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "Quel est le prix d'une aide à domicile ?",
                a: "Tarif horaire varie selon service et région. Aide à la personne = 18-25€/h brut. Après déduction 50% crédit d'impôt et éventuellement APA, coût réel souvent 50-60% moins cher. Devis gratuit pour chiffre exact.",
              },
              {
                q: "Peut-on avoir la même personne régulièrement ?",
                a: "Oui, c'est notre politique. Youdom Care cherche à assigner même intervenant. Stabilité pour vous, sérénité pour personne aidée.",
              },
              {
                q: "Que se passe-t-il si intervenant est malade ?",
                a: "Youdom Care assure remplacement. Autre intervenant (pas idéal mais mieux que rien) ou remise planning. Service ne s'arrête pas.",
              },
              {
                q: "Comment garantir confiance avec intervenant ?",
                a: "Sélection stricte, première visite rodage, feedback régulier, supervision Youdom Care continue. Si pas bien : on change.",
              },
              {
                q: "Y a-t-il un engagement minimum ?",
                a: "CDI ou CDD selon situation. Engagement court terme possible. À discuter selon besoins.",
              },
              {
                q: "Que faire en cas d'urgence médicale ?",
                a: "Intervenant appelle 15 (SAMU) si urgence. Restera auprès jusqu'arrivée. Youdom Care est notifiée.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text text-lg mb-2">Q: {item.q}</h3>
                <p className="text-text-light">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Prêt à offrir le meilleur à votre proche ?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Rester chez soi, en sécurité, avec de l&apos;aide de qualité — c&apos;est possible. Des centaines de familles l&apos;ont choisi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0667224507" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all text-lg">
              Appeler maintenant
            </a>
          </div>
          <p className="text-white/70 mt-6">Réponse sous 2 heures • Sans engagement • Conseil gratuit</p>
        </div>
      </section>
    </div>
  );
}
