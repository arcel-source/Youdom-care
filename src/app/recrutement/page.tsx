import { Metadata } from "next";
import Image from "next/image";
import RecruitmentForm from "./RecruitmentForm";

export const metadata: Metadata = {
  title: "Recrutement - Rejoignez Youdom Care | Auxiliaires de Vie",
  description:
    "Postulez pour devenir auxiliaire de vie chez Youdom Care. Formation continue, équipe bienveillante, clients stables, CDI/CDD disponibles. Rejoignez-nous !",
};

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Rejoignez notre équipe
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6">
                Devenez auxiliaire de vie chez Youdom Care et faites la différence dans la vie de nos clients. 
                Nous cherchons des personnes bienveillantes, motivées et engagées.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">✅ CDI/CDD</span>
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">📚 Formation continue</span>
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">🤝 Équipe bienveillante</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                <Image
                  src="/images/about/aide-personnes-agees.jpg"
                  alt="Équipe Youdom Care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4 text-center">Pourquoi travailler chez Youdom Care ?</h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Au-delà d'un job, c'est une vocation. Voici ce que nous offrons à nos équipes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "❤️",
                title: "Faire la différence",
                desc: "Accompagnez nos clients au quotidien. Apportez du bien-être, de la dignité, et du sourire dans leur vie.",
              },
              {
                icon: "🎓",
                title: "Formation continue",
                desc: "Accès à des formations régulières : gestes techniques, maladies neurodégénératives, premiers secours, communication.",
              },
              {
                icon: "🏢",
                title: "Stabilité d'emploi",
                desc: "Clients stables et réguliers. Pas de recherche constante. Plannings connus à l'avance.",
              },
              {
                icon: "👥",
                title: "Équipe bienveillante",
                desc: "Manager à l'écoute, collègues sympas, ambiance sans stress. Vraiment.",
              },
              {
                icon: "💰",
                title: "Salaire & avantages",
                desc: "Salaire au-dessus du marché local, congés, avantages sociaux, tickets restaurant.",
              },
              {
                icon: "🌍",
                title: "Développement professionnel",
                desc: "Évolutions possibles : responsable de secteur, formatrice, coordinatrice. Nous croyons en nos talents.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFIL RECHERCHÉ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4 text-center">Quel profil recherchons-nous ?</h2>
          <p className="text-text-light text-center mb-10 max-w-2xl mx-auto">
            Pas besoin d'avoir tout. L'essentiel, c'est l'envie, le cœur et la bienveillance.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Compétences requises */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                <span className="text-2xl">✅</span> Compétences clés
              </h3>
              <ul className="space-y-3">
                {[
                  "Diplôme DEAVS, ADVF, ou équivalent (ou expérience prouvée)",
                  "Bonne hygiène et rigueur dans les tâches",
                  "Sens du service client et bienveillance",
                  "Autonomie et responsabilité",
                  "Adaptabilité (différents clients, besoins variés)",
                  "Permis B et véhicule (pour se déplacer entre les clients)",
                  "Français courant, compréhension écrite et orale",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-light">
                    <span className="text-secondary mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualités personnelles */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                <span className="text-2xl">💪</span> Qualités essentielles
              </h3>
              <ul className="space-y-3">
                {[
                  "Empathie et capacité d'écoute",
                  "Patience et calme",
                  "Discrétion et confidentialité",
                  "Ponctualité et fiabilité",
                  "Respect du cadre professionnel",
                  "Capacité à travailler en autonomie",
                  "Motivation pour accompagner au long terme",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-light">
                    <span className="text-secondary mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
            <p className="text-text font-medium">
              ℹ️ <strong>Important :</strong> Nous valorisons la diversité. Pas besoin d'être parfait(e). 
              Ce qui compte, c'est votre envie d'apporter du soin, votre fiabilité et votre respect pour les gens.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSUS DE CANDIDATURE */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-10 text-center">Comment ça se passe ?</h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Vous postulez en ligne",
                desc: "Remplissez le formulaire ci-dessous. On vous demande l'essentiel : infos de contact, CV, motivations, disponibilités.",
              },
              {
                num: "2",
                title: "Sélection de votre candidature",
                desc: "Notre RH examine votre profil. Si ça match, on vous appelle dans les 48h.",
              },
              {
                num: "3",
                title: "Entretien téléphonique",
                desc: "Rendez-vous 15-20 min avec notre coordinatrice pour parler de vos expériences, vos attentes, nos besoins.",
              },
              {
                num: "4",
                title: "Entretien en face à face",
                desc: "Visite à nos bureaux (ou en visio). On fait connaissance, on vous explique notre philosophie, nos équipes.",
              },
              {
                num: "5",
                title: "Vérification des références",
                desc: "On contacte vos anciens employeurs pour valider vos expériences et votre fiabilité.",
              },
              {
                num: "6",
                title: "Offre & contrat",
                desc: "Proposition CDI/CDD selon les besoins. Signature et c'est parti !",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shrink-0">
                  {step.num}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-text mb-1">{step.title}</h3>
                  <p className="text-text-light text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-2 text-center">Postulez maintenant</h2>
          <p className="text-text-light text-center mb-10">
            Remplissez le formulaire ci-dessous. On vous contactera rapidement.
          </p>
          <RecruitmentForm />
        </div>
      </section>

      {/* CONTACT DIRECT */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Des questions ?</h2>
          <p className="text-white/80 mb-8">
            Contactez directement notre responsable RH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rh@youdomcare.fr"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 text-lg min-h-[44px] text-center"
            >
              📧 rh@youdomcare.fr
            </a>
            <a
              href="tel:0184807297"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg min-h-[44px] text-center"
            >
              📞 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
