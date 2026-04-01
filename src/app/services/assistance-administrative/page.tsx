import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistance Administrative à Domicile | Youdom Care",
  description: "Aide administrative pour seniors et personnes handicapées. Gestion courrier, dossiers aides, démarches. Paris & IDF.",
};

export default function AssistanceAdministrativePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Assistance administrative à domicile
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Fini le stress des papiers. Nous vous aidons dans toutes vos démarches administratives.
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
                  src="/images/services/assistance-administrative.png"
                  alt="Assistance administrative à domicile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Pourquoi une aide administrative ?</h2>
          <p className="text-text-light text-center mb-12 text-lg">Les démarches administratives sont souvent un casse-tête, surtout pour les personnes âgées ou en situation de handicap.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "📄", title: "Paperasse complexe", desc: "Formulaires incompréhensibles, délais à respecter, documents à retrouver." },
              { icon: "💻", title: "Dématérialisation", desc: "De plus en plus de démarches en ligne, difficiles pour les personnes peu connectées." },
              { icon: "💰", title: "Aides non demandées", desc: "Beaucoup de personnes ne demandent pas les aides auxquelles elles ont droit." },
              { icon: "😰", title: "Source de stress", desc: "L'accumulation de courrier non traité génère anxiété et problèmes." },
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services d&apos;aide administrative</h2>
          <div className="space-y-6">
            {[
              "Tri et classement du courrier et des documents importants",
              "Aide à la rédaction de courriers administratifs",
              "Constitution de dossiers d'aides (APA, PCH, AEEH, CSS)",
              "Accompagnement dans les démarches en ligne",
              "Gestion des factures et suivi des paiements",
              "Prise de rendez-vous (médecins, administrations)",
              "Aide aux déclarations (impôts, aides sociales)",
              "Relations avec les organismes (CPAM, CAF, mutuelles)",
              "Classement et archivage des documents",
              "Veille sur les droits et nouvelles aides disponibles",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Service réalisé à domicile, en toute confidentialité.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Ce que vous y gagnez</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "😌", title: "Sérénité", desc: "Plus de stress face aux papiers et aux délais." },
              { icon: "💰", title: "Économies", desc: "Toutes les aides auxquelles vous avez droit, obtenues." },
              { icon: "⏰", title: "Temps gagné", desc: "Concentrez-vous sur l'essentiel, on gère le reste." },
              { icon: "🔒", title: "Confidentialité", desc: "Vos documents traités avec le plus grand respect." },
              { icon: "📱", title: "Numérique maîtrisé", desc: "Fini l'angoisse des démarches en ligne." },
              { icon: "🤝", title: "Accompagnement", desc: "Un interlocuteur dédié qui connaît votre situation." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/20 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: "Est-ce que l'intervenant aura accès à mes documents personnels ?", a: "Oui, mais dans un cadre strict de confidentialité. Nos intervenants sont tenus au secret professionnel et manipulent vos documents avec le plus grand soin." },
              { q: "Peut-on m'aider à constituer un dossier APA ?", a: "C'est l'une de nos missions principales ! Nous vous guidons de A à Z dans la constitution du dossier, le suivi et les relances si nécessaire." },
              { q: "À quelle fréquence intervient l'aide administrative ?", a: "Selon vos besoins : une fois par semaine pour le courrier courant, ou ponctuellement pour des dossiers spécifiques. Tout est adapté." },
              { q: "Ce service est-il éligible au crédit d'impôt ?", a: "Oui, l'assistance administrative à domicile fait partie des services à la personne éligibles au crédit d'impôt de 50%." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text text-lg mb-2">Q: {item.q}</h3>
                <p className="text-text-light">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Simplifiez votre quotidien administratif</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Ne laissez plus les papiers s&apos;accumuler. Notre équipe est là pour vous aider.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demander-devis" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">Demander un devis gratuit</Link>
            <a href="tel:0667224507" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all text-lg">Appeler maintenant</a>
          </div>
          <p className="text-white/70 mt-6">Réponse sous 2 heures • Sans engagement • Conseil gratuit</p>
        </div>
      </section>
    </div>
  );
}
