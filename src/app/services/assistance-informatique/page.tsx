import { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ServicePainPoints from "@/components/service/ServicePainPoints";
import ServiceIncluded from "@/components/service/ServiceIncluded";
import ServiceMethod from "@/components/service/ServiceMethod";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceProvider from "@/components/service/ServiceProvider";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCrossSell from "@/components/service/ServiceCrossSell";
import EngagementsBlock from "@/components/sections/EngagementsBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Assistance informatique senior à domicile — ordinateur, smartphone | Youdom Care",
  description:
    "Aide informatique à domicile pour seniors : ordinateur, tablette, smartphone, internet, démarches en ligne, visioconférence. Cours patients, dépannages. Crédit d'impôt 50 %.",
};

const painPoints = [
  {
    icon: "🌐",
    title: "Tout passe par internet",
    description:
      "Impôts, banque, médecin, courses : se passer du numérique en 2026 = exclusion progressive de la société.",
  },
  {
    icon: "😰",
    title: "Peur de mal faire",
    description:
      "« Je vais tout casser », « je ne comprends rien » : la peur empêche d'apprendre. Il faut un cadre rassurant.",
  },
  {
    icon: "📱",
    title: "Smartphone non maîtrisé",
    description:
      "WhatsApp, photos, appels vidéo : autant d'outils précieux pour le lien social, intimidants quand on ne sait pas s'en servir.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Petits-enfants distants",
    description:
      "Les petits-enfants vivent loin, ne décrochent plus le téléphone fixe. La visioconférence est le seul lien quotidien possible.",
  },
  {
    icon: "🔒",
    title: "Arnaques & cybersécurité",
    description:
      "Faux mails impôts, faux SMS Ameli, fake support technique : les seniors sont les cibles n°1 de la cybercriminalité.",
  },
  {
    icon: "💔",
    title: "Sentiment de relégation",
    description:
      "« Je suis trop vieux pour ces choses-là » — ce renoncement progressif érode l'estime de soi et accélère le déclin.",
  },
];

const includedServices = [
  {
    icon: "💻",
    title: "Cours d'initiation patients",
    description:
      "Souris, clavier, fichiers, dossiers, internet, mail. À votre rythme, jusqu'à ce que ce soit acquis. Pas de jargon.",
  },
  {
    icon: "📱",
    title: "Maîtrise du smartphone",
    description:
      "Appels, SMS, WhatsApp, appel vidéo (FaceTime, WhatsApp), photos, GPS, applications utiles (Doctolib, SNCF, etc.).",
  },
  {
    icon: "🛠️",
    title: "Dépannage informatique",
    description:
      "Ordinateur lent, imprimante qui ne marche pas, wifi en panne, programme bloqué : nous résolvons sur place.",
  },
  {
    icon: "🛒",
    title: "Configuration matériel neuf",
    description:
      "Nouveau smartphone, ordinateur, tablette, box internet : déballage, configuration, transfert des données, premier usage.",
  },
  {
    icon: "🏛️",
    title: "Démarches administratives en ligne",
    description:
      "Création FranceConnect, Ameli, impôts, ANTS, CAF. Nous configurons une fois, vous utilisez ensuite (avec aide-mémoire papier).",
  },
  {
    icon: "📷",
    title: "Photos & souvenirs numériques",
    description:
      "Récupérer ses vieilles photos, les organiser, les imprimer. Apprendre à prendre des photos avec le smartphone.",
  },
  {
    icon: "🔐",
    title: "Sécurité & anti-arnaques",
    description:
      "Reconnaissance des arnaques courantes, gestion des mots de passe, antivirus, sécurisation des comptes bancaires en ligne.",
  },
  {
    icon: "📞",
    title: "Visioconférence familiale",
    description:
      "FaceTime, WhatsApp vidéo, Zoom, Skype : configuration, premier appel avec un proche, prise en main complète.",
  },
];

const methodPoints = [
  {
    title: "Évaluation du niveau initial",
    description:
      "1 séance pour évaluer ce que vous savez déjà, ce que vous voulez apprendre en priorité, votre rythme préféré.",
  },
  {
    title: "Plan d'apprentissage personnalisé",
    description:
      "Pas de programme standard : votre besoin (rester en contact avec petits-enfants ? gérer impôts ?) guide ce qu'on apprend en premier.",
  },
  {
    title: "Mémo papier après chaque séance",
    description:
      "Étape par étape, avec captures d'écran. Vous gardez un cahier de référence consultable seul ensuite.",
  },
  {
    title: "Pratique encadrée puis seul",
    description:
      "On fait ensemble plusieurs fois, puis vous faites seul, on vérifie. Apprentissage progressif, pas de prise en main à votre place.",
  },
  {
    title: "Disponibilité par téléphone",
    description:
      "Entre les séances, possibilité d'un coup de fil de 5 min pour débloquer un point précis. Inclus dans l'abonnement.",
  },
];

const aides = [
  {
    code: "Crédit d'impôt 50 %",
    description:
      "Notre service est éligible au crédit d'impôt SAP. Coût horaire net divisé par deux automatiquement.",
  },
  {
    code: "Pass Numérique (CAF)",
    description:
      "Chéquiers de 10 ou 20 € pour financer des accompagnements numériques, distribués par CAF, mairies, MDS.",
  },
  {
    code: "Aides Caisses retraite",
    description:
      "Plusieurs caisses (CARSAT, AGIRC-ARRCO) financent l'inclusion numérique des seniors dans le cadre de la prévention.",
  },
  {
    code: "Conseiller Numérique France Services",
    description:
      "Le réseau public propose des accompagnements gratuits dans les MDS. Nous le complémentons à domicile pour les personnes peu mobiles.",
  },
];

const faq = [
  {
    question: "Je ne sais rien faire en informatique. Vous êtes patients ?",
    answer:
      "C'est notre cœur de métier. Nous accompagnons des personnes qui partent de zéro, qui ont peur, qui ont déjà été humiliées par un proche pressé. Notre rythme : le vôtre. Notre seul jugement : « Que vous voulez apprendre aujourd'hui ? ». Aucune question n'est bête.",
  },
  {
    question: "Vous travaillez sur Mac et Windows ?",
    answer:
      "Oui, sur les deux univers, ainsi que sur tablettes (iPad, Samsung), smartphones (iPhone, Android), TV connectées, box internet. Si vous avez du matériel spécifique, mentionnez-le à la réservation.",
  },
  {
    question: "Pouvez-vous m'aider à choisir un nouveau smartphone ?",
    answer:
      "Oui, nous offrons un service de conseil avant achat (1 h gratuite) pour vous orienter vers le matériel adapté à vos besoins et votre budget. Pas de partenariat commercial : conseils 100 % indépendants.",
  },
  {
    question: "Combien de séances pour devenir autonome ?",
    answer:
      "Pour les bases (mail, internet, WhatsApp, démarches simples) : 4 à 8 séances de 1-2 h, étalées sur 2-3 mois. Pour des compétences avancées (photos, cloud, comptabilité simple) : selon votre objectif. Notre but : vous rendre autonome, pas vous abonner à vie.",
  },
  {
    question: "Et si après les cours, j'ai oublié ce qu'on a vu ?",
    answer:
      "C'est normal ! Le mémo papier qu'on vous laisse couvre les étapes. Si malgré ça vous bloquez, un coup de fil suffit (inclus). Et en cas de besoin, une séance « rappel » à tarif réduit pour rafraîchir.",
  },
  {
    question: "Vous gérez l'achat & la réception du matériel ?",
    answer:
      "Sur demande : sélection avec vous, achat avec votre carte, livraison à votre domicile, configuration complète, transfert de données depuis l'ancien matériel, formation initiale. Service complet « clé en main ».",
  },
];

export default function AssistanceInformatiquePage() {
  return (
    <>
      <ServiceHero
        category="Assistance informatique"
        title="Le numérique sans peur, ni jugement, ni jargon."
        subtitle="Cours d'informatique patients à domicile pour seniors : ordinateur, smartphone, démarches en ligne, visioconférence familiale, sécurité. À votre rythme."
        highlights={[
          "Cours sur Mac, Windows, iPhone, Android, tablettes",
          "Mémos papier après chaque séance",
          "Démarches en ligne (impôts, Ameli, CAF) accompagnées",
          "Sécurité & anti-arnaques expliquées clairement",
        ]}
        image="/images/curated/service-assistance-informatique.jpg"
        imageAlt="Cours d'informatique pour senior à domicile"
      />

      <ServicePainPoints
        eyebrow="L'illectronisme, fléau silencieux"
        title="13 millions de Français sont en difficulté avec le numérique"
        description="L'illectronisme isole, exclut, fait perdre des droits. Apprendre à 70 ou 80 ans est non seulement possible — c'est libérateur."
        items={painPoints}
      />

      <ServiceIncluded
        eyebrow="Tout ce qu'on enseigne"
        title="8 domaines couverts pour devenir vraiment autonome"
        description="Du mail aux visios familiales, en passant par les arnaques : un programme complet et pratique."
        items={includedServices}
      />

      <ServiceMethod
        eyebrow="Notre méthode"
        title="L'apprentissage qui colle, pas la tutorielle qu'on oublie"
        description="Mémo papier, rythme libre, pratique encadrée : voilà ce qui fait la différence avec un tuto YouTube."
        points={methodPoints}
        image="/images/curated/service-assistance-informatique.jpg"
        imageAlt="Apprentissage informatique patient"
      />

      <ServiceProvider
        title="Des intervenants formés à la pédagogie senior"
        description="Patience, vocabulaire accessible, capacité à expliquer 10 fois sans s'agacer. Beaucoup viennent de la médiation numérique ou ont enseigné."
        specialization="Pédagogie adulte, médiation numérique, vulgarisation, écoute"
        image="/images/curated/service-assistance-informatique.jpg"
        imageAlt="Pédagogue informatique senior"
      />

      <ServicePricing
        hourlyRange={{ min: 30, max: 40 }}
        aides={aides}
        exampleNet="Exemple : pack initiation 6 séances de 2 h = ~390 € brut. Avec crédit d'impôt 50 %, ~195 € net. Cumulable avec Pass Numérique CAF (jusqu'à 200 € de chéquiers)."
      />

      <EngagementsBlock />

      <ServiceFAQ
        title="Vos questions sur les cours d'informatique"
        items={faq}
      />

      <ServiceCrossSell
        currentSlug="assistance-informatique"
        recommendedSlugs={[
          "assistance-administrative",
          "aide-personnes-agees",
          "accompagnement-sorties",
          "teleassistance",
        ]}
      />

      <FinalCTA />
    </>
  );
}
