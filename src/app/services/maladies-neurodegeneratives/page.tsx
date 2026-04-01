import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide à Domicile Maladies Neurodégénératives | Alzheimer, Parkinson, Sclérose | Youdom Care",
  description:
    "Accompagnement spécialisé à domicile pour personnes atteintes de maladies neurodégénératives : Alzheimer, Parkinson, sclérose en plaques, SLA. Personnel formé, stimulation cognitive, soutien aux aidants. Paris & IDF.",
  openGraph: {
    title: "Aide Maladies Neurodégénératives à Domicile | Youdom Care",
    description:
      "Accompagnement expert pour Alzheimer, Parkinson, sclérose en plaques et autres maladies neurodégénératives. Maintien à domicile dans la dignité.",
    type: "website",
  },
};

const maladies = [
  {
    nom: "Maladie d'Alzheimer",
    icon: "🧠",
    description:
      "Trouble progressif de la mémoire, de l'orientation et du jugement. La personne perd peu à peu ses repères, oublie les visages, les gestes du quotidien.",
    symptomes: [
      "Perte de mémoire récente",
      "Désorientation dans le temps et l'espace",
      "Difficultés de langage",
      "Changements de personnalité",
      "Perte d'autonomie progressive",
    ],
    accompagnement: [
      "Stimulation cognitive quotidienne (jeux, musique, souvenirs)",
      "Aide aux repères temporels et spatiaux",
      "Surveillance bienveillante et sécurisation du domicile",
      "Aide à la toilette, l'habillage, les repas",
      "Soutien émotionnel et maintien du lien social",
    ],
  },
  {
    nom: "Maladie de Parkinson",
    icon: "🤲",
    description:
      "Maladie qui affecte le contrôle des mouvements : tremblements, rigidité musculaire, lenteur. Les gestes simples deviennent des défis quotidiens.",
    symptomes: [
      "Tremblements au repos",
      "Rigidité musculaire et douleurs",
      "Lenteur des mouvements (bradykinésie)",
      "Troubles de l'équilibre et chutes",
      "Difficultés d'élocution et de déglutition",
    ],
    accompagnement: [
      "Aide à la mobilité et prévention des chutes",
      "Assistance aux repas (découpe, positionnement)",
      "Aide à la prise de médicaments aux horaires précis",
      "Accompagnement pour exercices physiques doux",
      "Adaptation du domicile (barres d'appui, antidérapants)",
    ],
  },
  {
    nom: "Sclérose en plaques (SEP)",
    icon: "⚡",
    description:
      "Maladie auto-immune qui attaque le système nerveux. Elle évolue par poussées imprévisibles, alternant périodes de crise et de rémission.",
    symptomes: [
      "Fatigue intense et invalidante",
      "Troubles de la vision",
      "Faiblesse musculaire et spasmes",
      "Troubles de la coordination",
      "Douleurs neuropathiques",
    ],
    accompagnement: [
      "Aide adaptée aux poussées (flexibilité du planning)",
      "Assistance à la mobilité les jours difficiles",
      "Soutien psychologique face à l'imprévisibilité",
      "Aide ménagère et préparation des repas",
      "Accompagnement aux rendez-vous médicaux",
    ],
  },
  {
    nom: "Sclérose latérale amyotrophique (SLA)",
    icon: "💪",
    description:
      "Aussi appelée maladie de Charcot. Dégénérescence progressive des neurones moteurs qui entraîne une paralysie croissante, tout en préservant les facultés intellectuelles.",
    symptomes: [
      "Faiblesse musculaire progressive",
      "Difficultés de déglutition et d'élocution",
      "Crampes et fasciculations",
      "Perte d'autonomie rapide",
      "Difficultés respiratoires",
    ],
    accompagnement: [
      "Aide complète aux gestes quotidiens",
      "Assistance à l'alimentation adaptée",
      "Aide à la communication (outils adaptés)",
      "Coordination avec l'équipe médicale",
      "Présence de nuit si nécessaire",
    ],
  },
  {
    nom: "Démence à corps de Lewy",
    icon: "🔬",
    description:
      "Forme de démence qui combine des symptômes d'Alzheimer et de Parkinson : troubles cognitifs, hallucinations visuelles et fluctuations de l'attention.",
    symptomes: [
      "Hallucinations visuelles récurrentes",
      "Fluctuations cognitives d'un jour à l'autre",
      "Troubles du sommeil paradoxal",
      "Rigidité et lenteur des mouvements",
      "Chutes fréquentes",
    ],
    accompagnement: [
      "Environnement calme et rassurant",
      "Surveillance adaptée aux fluctuations",
      "Aide à la mobilité et prévention des chutes",
      "Stimulation douce et activités apaisantes",
      "Communication avec patience et bienveillance",
    ],
  },
  {
    nom: "Dégénérescence fronto-temporale (DFT)",
    icon: "🧩",
    description:
      "Atteinte des lobes frontaux et temporaux du cerveau. Contrairement à Alzheimer, elle touche d'abord le comportement et le langage avant la mémoire.",
    symptomes: [
      "Changements de personnalité marqués",
      "Perte d'empathie et désinhibition",
      "Troubles du langage progressifs",
      "Comportements compulsifs ou répétitifs",
      "Difficultés de planification",
    ],
    accompagnement: [
      "Gestion bienveillante des troubles du comportement",
      "Routine structurée et prévisible",
      "Stimulation du langage et de la communication",
      "Sécurisation du domicile",
      "Soutien renforcé aux aidants familiaux",
    ],
  },
];

export default function MaladiesNeurodegenerativesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-white/90 text-sm font-medium">🧠 Accompagnement spécialisé</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Maladies neurodégénératives : un accompagnement à domicile digne et humain
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Alzheimer, Parkinson, sclérose en plaques, SLA… Chaque maladie est différente. 
            Notre accompagnement l&apos;est aussi. Des intervenants formés, patients et bienveillants.
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
            <div className="hidden lg:flex items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[400px]">
                <Image
                  src="/images/services/old-people.png"
                  alt="Accompagnement maladies neurodégénératives à domicile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPRENDRE */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
                Qu&apos;est-ce qu&apos;une maladie neurodégénérative ?
              </h2>
              <p className="text-text-light mb-4">
                Les maladies neurodégénératives sont des pathologies qui détruisent progressivement les cellules nerveuses du cerveau. 
                Elles touchent <strong>plus de 2 millions de personnes en France</strong> et leur nombre augmente avec le vieillissement de la population.
              </p>
              <p className="text-text-light mb-4">
                Ces maladies affectent la mémoire, les mouvements, le langage, le comportement ou plusieurs de ces fonctions à la fois. 
                Elles sont chroniques, évolutives, et transforment profondément le quotidien du patient et de ses proches.
              </p>
              <p className="text-text-light">
                <strong>Le maintien à domicile est possible et souhaitable</strong> dans la grande majorité des cas, 
                à condition d&apos;être accompagné par des professionnels formés et empathiques. C&apos;est exactement notre mission.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/aide-personnes-agees.jpg"
                alt="Aide à domicile pour maladies neurodégénératives"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { chiffre: "1,2M", label: "personnes atteintes d'Alzheimer en France" },
              { chiffre: "270K", label: "personnes vivant avec Parkinson" },
              { chiffre: "120K", label: "personnes touchées par la SEP" },
              { chiffre: "85%", label: "souhaitent rester chez eux" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{item.chiffre}</div>
                <p className="text-text-light text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES MALADIES */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 text-center">
            Les maladies que nous accompagnons
          </h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Chaque pathologie a ses spécificités. Notre approche est toujours personnalisée, 
            adaptée au stade de la maladie et aux besoins réels de chaque patient.
          </p>

          <div className="space-y-8">
            {maladies.map((maladie, idx) => (
              <div
                key={idx}
                className="bg-warm rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl shrink-0">{maladie.icon}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">
                        {maladie.nom}
                      </h3>
                      <p className="text-text-light">{maladie.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <h4 className="font-bold text-text mb-3 text-sm flex items-center gap-2">
                        <span className="w-6 h-6 bg-danger/10 text-danger rounded-full flex items-center justify-center text-xs">!</span>
                        Symptômes principaux
                      </h4>
                      <ul className="space-y-2">
                        {maladie.symptomes.map((s, i) => (
                          <li key={i} className="flex gap-2 text-text-light text-sm">
                            <span className="text-danger shrink-0">•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-primary/20">
                      <h4 className="font-bold text-text mb-3 text-sm flex items-center gap-2">
                        <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">✓</span>
                        Notre accompagnement
                      </h4>
                      <ul className="space-y-2">
                        {maladie.accompagnement.map((a, i) => (
                          <li key={i} className="flex gap-2 text-text-light text-sm">
                            <span className="text-primary shrink-0">✓</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            Notre approche spécialisée
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Intervenants formés",
                desc: "Nos auxiliaires de vie suivent des formations spécifiques aux maladies neurodégénératives : communication adaptée, gestion des troubles du comportement, techniques de stimulation.",
              },
              {
                icon: "🔄",
                title: "Continuité et stabilité",
                desc: "Toujours le même intervenant. La stabilité est cruciale pour les personnes dont les repères s'effritent. Un visage familier fait toute la différence.",
              },
              {
                icon: "🧩",
                title: "Stimulation cognitive",
                desc: "Activités adaptées au stade de la maladie : jeux de mémoire, musique, photos, activités manuelles. Ralentir le déclin, pas le subir.",
              },
              {
                icon: "🏠",
                title: "Sécurisation du domicile",
                desc: "Évaluation des risques, conseils d'aménagement, détecteurs, barres d'appui. Prévenir les accidents avant qu'ils n'arrivent.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Soutien aux aidants",
                desc: "L'aidant familial s'épuise souvent en silence. Nous offrons du répit, des conseils, une écoute. Prendre soin de l'aidant, c'est prendre soin du patient.",
              },
              {
                icon: "📋",
                title: "Coordination médicale",
                desc: "Lien constant avec médecin traitant, neurologue, orthophoniste. Remontée d'informations, ajustement des soins, approche globale.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">
            Le parcours d&apos;accompagnement
          </h2>

          <div className="space-y-6">
            {[
              { step: "1", title: "Évaluation spécialisée gratuite", desc: "Un responsable de secteur formé aux maladies neurodégénératives évalue la situation à domicile : stade de la maladie, environnement, besoins du patient et de l'aidant." },
              { step: "2", title: "Plan d'aide personnalisé", desc: "Protocole détaillé : horaires, gestes, stimulation, sécurité. Validé avec la famille et le médecin traitant." },
              { step: "3", title: "Sélection de l'intervenant", desc: "Matching sur les compétences spécifiques à la pathologie, la compatibilité humaine, et la proximité géographique." },
              { step: "4", title: "Mise en place progressive", desc: "Période d'adaptation en douceur. L'intervenant prend ses marques, établit la confiance. Ajustements si nécessaire." },
              { step: "5", title: "Suivi et évolution", desc: "Réévaluation régulière. La maladie évolue, l'accompagnement s'adapte. Coordination continue avec l'équipe médicale." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm sm:text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 flex-1">
                  <h3 className="font-bold text-text text-lg mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCEMENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Financer l&apos;accompagnement
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-warm p-6 rounded-2xl border-l-4 border-secondary">
              <h3 className="font-bold text-text mb-2">APA (60+ ans)</h3>
              <p className="text-text-light text-sm">
                L&apos;Allocation Personnalisée d&apos;Autonomie couvre une partie importante de l&apos;aide à domicile. 
                Les malades neurodégénératives sont souvent classés GIR 1 à 3, ce qui donne droit à un plan d&apos;aide conséquent.
              </p>
            </div>
            <div className="bg-warm p-6 rounded-2xl border-l-4 border-accent">
              <h3 className="font-bold text-text mb-2">PCH (- de 60 ans)</h3>
              <p className="text-text-light text-sm">
                La Prestation de Compensation du Handicap prend en charge les aides humaines 
                pour les personnes de moins de 60 ans atteintes de SEP, SLA ou formes précoces d&apos;Alzheimer.
              </p>
            </div>
            <div className="bg-warm p-6 rounded-2xl border-l-4 border-primary">
              <h3 className="font-bold text-text mb-2">Crédit d&apos;impôt 50%</h3>
              <p className="text-text-light text-sm">
                Tous nos services ouvrent droit au crédit d&apos;impôt de 50%. 
                Sur un reste à charge de 1000€/mois, vous ne payez réellement que 500€.
              </p>
            </div>
            <div className="bg-warm p-6 rounded-2xl border-l-4 border-success">
              <h3 className="font-bold text-text mb-2">Mutuelles et caisses de retraite</h3>
              <p className="text-text-light text-sm">
                De nombreuses mutuelles proposent des aides complémentaires. 
                Les caisses de retraite (CARSAT, MSA) financent aussi des heures d&apos;aide à domicile.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/aides-financieres"
              className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors text-sm"
            >
              Guide complet des aides financières →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "À quel stade faut-il demander de l'aide ?",
                a: "Le plus tôt possible. Dès le diagnostic, une aide légère (ménage, courses, compagnie) permet de préserver l'autonomie et de préparer l'avenir sereinement. Plus on anticipe, mieux on accompagne.",
              },
              {
                q: "Vos intervenants sont-ils formés à ces maladies spécifiques ?",
                a: "Oui. Tous nos auxiliaires intervenant auprès de patients neuro ont suivi des formations certifiées : gestion des troubles cognitifs, communication non-verbale, techniques de stimulation, gestion de l'agressivité.",
              },
              {
                q: "Que faire en cas de crise ou d'agitation ?",
                a: "Nos intervenants sont formés à la gestion des crises : attitude calme, réorientation douce, techniques d'apaisement. En cas d'urgence médicale, ils appellent le 15 (SAMU) et restent auprès du patient.",
              },
              {
                q: "L'aide peut-elle évoluer avec la maladie ?",
                a: "Absolument. C'est même notre principe : réévaluation régulière, ajout d'heures, changement de types de soins. La maladie évolue, notre accompagnement s'adapte en permanence.",
              },
              {
                q: "Proposez-vous aussi une aide aux aidants ?",
                a: "Oui. Nous proposons du relais (l'aidant peut souffler), des conseils pratiques, et une écoute. L'aidant qui s'épuise ne peut plus aider. Prendre soin de lui, c'est prendre soin du patient.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text mb-2">{item.q}</h3>
                <p className="text-text-light text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Votre proche mérite un accompagnement à la hauteur
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            La maladie est déjà assez lourde. L&apos;accompagnement, lui, peut être doux, professionnel et humain. 
            Parlons-en ensemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demander-devis"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg min-h-[44px] text-center"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0184807297"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 text-lg min-h-[44px] text-center"
            >
              📞 01 84 80 72 97
            </a>
          </div>
          <p className="text-white/60 mt-4 text-sm">
            Réponse sous 2 heures • Sans engagement • Conseil gratuit
          </p>
        </div>
      </section>
    </div>
  );
}
