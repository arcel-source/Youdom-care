import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment Ça Marche | Youdom Care - Aide à Domicile Paris & IDF",
  description:
    "Découvrez notre processus simple et transparent en 5 étapes : premier contact, évaluation gratuite, sélection de l'auxiliaire, plan d'aide, démarrage et suivi.",
};

const steps = [
  {
    num: "01",
    title: "Premier contact",
    subtitle: "Gratuit & sans engagement",
    desc: "Appelez-nous ou remplissez notre formulaire de devis en ligne. Un conseiller dédié prend en charge votre demande et vous rappelle sous 2 heures pour comprendre votre situation.",
    details: [
      "Écoute attentive de votre situation",
      "Premiers conseils personnalisés",
      "Information sur les aides financières disponibles",
      "Prise de rendez-vous pour l'évaluation à domicile",
    ],
    image: "/images/steps/1.png",
    imageAlt: "Premier contact avec Youdom Care",
  },
  {
    num: "02",
    title: "Évaluation gratuite à domicile",
    subtitle: "Visite sans engagement",
    desc: "Un responsable de secteur se déplace chez vous gratuitement. Il évalue les besoins réels, observe l'environnement et discute avec vous et votre proche pour construire la meilleure solution.",
    details: [
      "Évaluation complète des besoins physiques et psychologiques",
      "Observation du domicile et conseils d'aménagement",
      "Estimation du niveau de dépendance (GIR)",
      "Présentation détaillée des aides financières (APA, PCH, crédit d'impôt)",
    ],
    image: "/images/steps/2.png",
    imageAlt: "Évaluation gratuite à domicile Youdom Care",
  },
  {
    num: "03",
    title: "Sélection de votre auxiliaire",
    subtitle: "Intervenante unique et dédiée",
    desc: "Nous sélectionnons l'auxiliaire de vie idéale en fonction de votre situation, vos préférences et votre personnalité. Une rencontre est organisée à domicile avant le démarrage.",
    details: [
      "Matching sur les compétences et la compatibilité humaine",
      "Personnel diplômé, formé et expérimenté",
      "Rencontre préalable pour valider le feeling",
      "Possibilité de changer si le courant ne passe pas",
    ],
    image: "/images/steps/3.png",
    imageAlt: "Sélection de votre auxiliaire de vie dédiée",
  },
  {
    num: "04",
    title: "Plan d'aide sur mesure",
    subtitle: "100% personnalisé",
    desc: "Ensemble, nous définissons précisément les services, la fréquence, les jours, les horaires et le budget. Tout est transparent, écrit noir sur blanc, sans surprise.",
    details: [
      "Planning détaillé adapté à votre rythme",
      "Tarification claire et transparente",
      "Aide aux démarches administratives (APA, MDPH...)",
      "Contrat simple et sans engagement longue durée",
    ],
    image: "/images/steps/4.png",
    imageAlt: "Plan d'aide personnalisé et transparent",
  },
  {
    num: "05",
    title: "Démarrage & suivi qualité",
    subtitle: "Accompagnement permanent",
    desc: "Les prestations démarrent avec votre auxiliaire dédiée. Nous assurons un suivi qualité rigoureux avec des points réguliers, des enquêtes de satisfaction et des ajustements si besoin.",
    details: [
      "Même auxiliaire à chaque intervention",
      "Points qualité réguliers avec la famille",
      "Ajustements du plan d'aide selon l'évolution",
      "Remplacement assuré en cas d'absence",
    ],
    image: "/images/functioning/intro.jpeg",
    imageAlt: "Suivi qualité et accompagnement permanent",
  },
];

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Comment ça marche ?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4">
                Un processus simple, humain et transparent.
                De votre premier appel à l&apos;accompagnement quotidien, tout est pensé pour vous faciliter la vie.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">✅ 100% gratuit</span>
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">⚡ Réponse sous 2h</span>
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">🔒 Sans engagement</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/demander-devis" className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Demander un devis gratuit
                </Link>
                <a href="tel:0184807297" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-base sm:text-lg min-h-[44px] text-center">
                  Appeler : 01 84 80 72 97
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[400px]">
                <Image
                  src="/images/functioning/intro.jpeg"
                  alt="Notre fonctionnement - Youdom Care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSUMÉ RAPIDE */}
      <section className="py-10 sm:py-14 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {["Premier contact", "Évaluation", "Sélection", "Plan d'aide", "Démarrage"].map((label, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base mx-auto mb-2">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-text">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES DÉTAILLÉES */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 text-center">
            Les 5 étapes de votre accompagnement
          </h2>
          <p className="text-text-light text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            Chaque étape est conçue pour vous rassurer, vous informer et vous accompagner avec bienveillance.
          </p>

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                {/* Texte */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-secondary text-primary-dark rounded-full flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </span>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-text-light mb-5 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span className="text-primary mt-0.5 shrink-0">✓</span>
                        <span className="text-text-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[300px]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS ENGAGEMENTS */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Nos engagements qualité</h2>
          <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto">
            Ce qui fait la différence Youdom Care, c&apos;est notre exigence à chaque étape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔄", title: "Continuité garantie", desc: "Toujours la même auxiliaire. Pas de turnover, pas de surprise. La confiance se construit dans la durée." },
              { icon: "⚡", title: "Réactivité", desc: "Réponse sous 2 heures. Remplacement sous 24h en cas d'absence. Vous n'êtes jamais laissé sans solution." },
              { icon: "🎓", title: "Personnel qualifié", desc: "Auxiliaires diplômées, formées en continu. Compétences techniques et humaines vérifiées." },
              { icon: "💰", title: "Transparence totale", desc: "Tarifs clairs, devis détaillé, pas de frais cachés. Accompagnement pour les aides financières." },
              { icon: "📊", title: "Suivi rigoureux", desc: "Points qualité réguliers, enquêtes de satisfaction, ajustements selon l'évolution des besoins." },
              { icon: "📞", title: "Disponibilité", desc: "Joignable du lundi au samedi 8h-20h. Une permanence pour les urgences." },
            ].map((eng, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
                <div className="text-3xl mb-3">{eng.icon}</div>
                <h3 className="font-bold text-white mb-2">{eng.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{eng.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-12 sm:py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-10 text-center">Youdom Care en chiffres</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { chiffre: "500+", label: "Familles accompagnées" },
              { chiffre: "98%", label: "Taux de satisfaction" },
              { chiffre: "< 2h", label: "Délai de réponse" },
              { chiffre: "10+", label: "Années d'expérience" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{item.chiffre}</div>
                <p className="text-text-light text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien de temps entre le premier appel et le démarrage ?",
                a: "En général, entre 48h et 1 semaine selon la complexité de la situation. En cas d'urgence (retour d'hospitalisation), nous pouvons intervenir sous 24h.",
              },
              {
                q: "L'évaluation à domicile est-elle vraiment gratuite ?",
                a: "Oui, totalement gratuite et sans aucun engagement. C'est l'occasion de se rencontrer, d'évaluer les besoins et de vous présenter nos solutions.",
              },
              {
                q: "Puis-je changer d'auxiliaire si ça ne convient pas ?",
                a: "Absolument. Le feeling humain est essentiel. Si le courant ne passe pas, nous proposons un nouvel intervenant sans délai ni frais supplémentaire.",
              },
              {
                q: "Y a-t-il un nombre minimum d'heures ?",
                a: "Nous proposons des formules à partir de 2h par intervention. Le plan d'aide est 100% flexible et s'adapte à vos besoins réels.",
              },
              {
                q: "Comment sont formés vos intervenants ?",
                a: "Nos auxiliaires sont diplômées (DEAVS, ADVF ou équivalent) et suivent des formations continues : gestes techniques, maladies neurodégénératives, premiers secours.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-warm p-5 sm:p-6 rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text mb-2 text-sm sm:text-base">{item.q}</h3>
                <p className="text-text-light text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            La première étape est gratuite et sans engagement.
            Contactez-nous, on s&apos;occupe du reste.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demander-devis"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg min-h-[44px] text-center"
            >
              Demander un devis gratuit →
            </Link>
            <a
              href="tel:0184807297"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 text-lg min-h-[44px] text-center"
            >
              📞 01 84 80 72 97
            </a>
          </div>
          <p className="text-white/60 mt-4 text-sm">Réponse sous 2 heures • Sans engagement • Conseil gratuit</p>
        </div>
      </section>
    </div>
  );
}
