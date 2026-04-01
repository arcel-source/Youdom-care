import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide Alzheimer & Parkinson à Domicile | Youdom Care",
  description: "Accompagnement spécialisé Alzheimer et Parkinson à domicile. Personnel formé, stimulation cognitive, soutien aux aidants. Paris & IDF.",
  openGraph: {
    title: "Aide Alzheimer & Parkinson à Domicile | Youdom Care",
    description: "Accompagnement spécialisé maladies neurodégénératives. Personnel formé, patience, dignité.",
    type: "website",
  },
};

export default function AlzheimerParkinsonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/old-people.png"
            alt="Aide Alzheimer et Parkinson à domicile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Aide à domicile Alzheimer & Parkinson
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Un accompagnement patient et spécialisé pour les maladies neurodégénératives. Maintenir la dignité et le lien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demander-devis" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white transition-all text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>

      {/* DÉFIS */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Les défis des maladies neurodégénératives</h2>
          <p className="text-text-light text-center mb-12 text-lg">
            Alzheimer et Parkinson transforment le quotidien. Un accompagnement adapté fait toute la différence.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🧠", title: "Perte de mémoire progressive", desc: "Oublis fréquents, désorientation, difficulté à reconnaître les proches." },
              { icon: "🤲", title: "Tremblements et rigidité", desc: "Parkinson affecte la motricité fine et l'équilibre au quotidien." },
              { icon: "😰", title: "Anxiété et confusion", desc: "Les changements cognitifs génèrent stress et incompréhension." },
              { icon: "👨‍👩‍👦", title: "Épuisement des aidants", desc: "Les familles s'épuisent face à une charge émotionnelle et physique constante." },
              { icon: "🚶", title: "Risques d'errance", desc: "Les personnes atteintes peuvent se perdre, même dans des lieux familiers." },
              { icon: "💊", title: "Gestion médicamenteuse complexe", desc: "Traitements multiples nécessitant un suivi rigoureux des prises." },
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

      {/* SERVICES DÉTAILLÉS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services spécialisés</h2>
          <div className="space-y-6">
            {[
              "Stimulation cognitive et exercices de mémoire adaptés",
              "Aide aux gestes quotidiens (toilette, habillage, repas)",
              "Surveillance continue et prévention des risques d'errance",
              "Rappel et aide à la prise de médicaments",
              "Activités de loisirs et maintien du lien social",
              "Accompagnement aux rendez-vous médicaux spécialisés",
              "Soutien psychologique et répit pour les aidants familiaux",
              "Communication adaptée et techniques de validation",
              "Adaptation du domicile pour la sécurité",
              "Présence de nuit pour les phases d'agitation nocturne",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Personnel spécifiquement formé aux maladies neurodégénératives.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Les bénéfices de notre accompagnement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la personne malade</h3>
              <ul className="space-y-3">
                {["Maintien à domicile dans un environnement familier", "Ralentissement du déclin grâce à la stimulation", "Dignité et respect préservés", "Sécurité renforcée au quotidien", "Lien social maintenu"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la famille</h3>
              <ul className="space-y-3">
                {["Répit indispensable pour les aidants", "Tranquillité d'esprit au quotidien", "Conseils et formation aux gestes adaptés", "Coordination avec l'équipe médicale", "Soutien émotionnel et écoute"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Mise en place de l&apos;accompagnement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "1", title: "Évaluation spécialisée", desc: "Bilan cognitif et fonctionnel à domicile avec un conseiller formé." },
              { step: "2", title: "Plan d'aide personnalisé", desc: "Programme adapté au stade de la maladie et aux besoins de la famille." },
              { step: "3", title: "Intervenant dédié formé", desc: "Auxiliaire spécialisée en maladies neurodégénératives, même personne." },
              { step: "4", title: "Suivi et ajustements", desc: "Adaptation continue du plan selon l'évolution de la maladie." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">{item.step}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-text-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: "Vos intervenants sont-ils formés à Alzheimer ?", a: "Oui, nos auxiliaires suivent des formations spécifiques sur les maladies neurodégénératives : communication adaptée, gestion de l'agitation, techniques de validation, stimulation cognitive." },
              { q: "Peut-on intervenir en cas d'errance nocturne ?", a: "Absolument. Nous proposons des gardes de nuit spécialisées pour sécuriser les personnes sujettes à l'errance ou l'agitation nocturne." },
              { q: "Comment se passe l'adaptation avec la personne malade ?", a: "Nous prenons le temps d'une période d'adaptation douce. L'intervenant apprend les habitudes, les préférences et établit un lien de confiance progressif." },
              { q: "Les aides financières couvrent-elles ce type d'accompagnement ?", a: "Oui. L'APA (Allocation Personnalisée d'Autonomie) et le crédit d'impôt 50% s'appliquent. Nous vous aidons dans toutes les démarches." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-text text-lg mb-2">Q: {item.q}</h3>
                <p className="text-text-light">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Un accompagnement adapté à votre proche</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Alzheimer ou Parkinson ne doivent pas signifier la fin de la vie à domicile. Nos équipes spécialisées sont là pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demander-devis" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl transition-all text-lg">
              Demander un devis gratuit
            </Link>
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
