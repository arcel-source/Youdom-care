import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide Retour d'Hospitalisation | Youdom Care",
  description: "Accompagnement retour d'hospitalisation à domicile. Suivi post-opératoire, aide aux soins, coordination médicale. Paris & IDF.",
};

export default function RetourHospitalisationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Aide au retour d&apos;hospitalisation
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                La convalescence à domicile en toute sérénité. Un accompagnement professionnel pour bien récupérer.
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
                  src="/images/services/service-retour-hospitalisation.png"
                  alt="Retour d'hospitalisation à domicile"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Les enjeux du retour à domicile</h2>
          <p className="text-text-light text-center mb-12 text-lg">Après une hospitalisation, le retour à la maison est un moment délicat qui nécessite un accompagnement adapté.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🏥", title: "Sortie précoce", desc: "Les séjours hospitaliers raccourcissent. Le patient rentre souvent encore fragile." },
              { icon: "💊", title: "Traitements complexes", desc: "Nouveaux médicaments, pansements, suivi post-opératoire rigoureux à respecter." },
              { icon: "🚶", title: "Mobilité réduite", desc: "Après une opération, les gestes quotidiens deviennent difficiles et risqués." },
              { icon: "😰", title: "Risque de réhospitalisation", desc: "Sans suivi adapté, le risque de complications et de retour à l'hôpital augmente." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Notre accompagnement post-hospitalisation</h2>
          <div className="space-y-6">
            {[
              "Aide à la toilette et aux soins d'hygiène post-opératoires",
              "Aide à la prise de médicaments et suivi des prescriptions",
              "Préparation de repas adaptés à la convalescence",
              "Aide à la mobilité et prévention des chutes",
              "Coordination avec l'équipe médicale (infirmiers, kiné)",
              "Entretien du domicile pendant la convalescence",
              "Accompagnement aux rendez-vous de suivi",
              "Soutien moral et présence rassurante",
              "Courses et gestion du quotidien",
              "Adaptation progressive vers l'autonomie retrouvée",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Accompagnement professionnel pour une convalescence sereine.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Les bénéfices d&apos;un bon accompagnement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour le patient</h3>
              <ul className="space-y-3">
                {["Récupération plus rapide à domicile", "Moins de stress que prolongation hospitalière", "Confort du domicile familier", "Suivi personnalisé et attentif", "Retour progressif à l'autonomie"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la famille</h3>
              <ul className="space-y-3">
                {["Moins de charge sur les proches", "Professionnels compétents à la maison", "Risque de réhospitalisation réduit", "Coordination médicale assurée", "Tranquillité d'esprit"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Mise en place rapide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "1", title: "Contact avant la sortie", desc: "Idéalement, contactez-nous avant la sortie d'hôpital pour préparer le retour." },
              { step: "2", title: "Évaluation des besoins", desc: "Bilan des soins nécessaires et du niveau d'aide requis." },
              { step: "3", title: "Démarrage immédiat", desc: "Intervention possible dès le jour du retour à domicile." },
              { step: "4", title: "Suivi évolutif", desc: "Adaptation du plan d'aide selon la progression de la récupération." },
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: "Quand contacter Youdom Care pour un retour d'hospitalisation ?", a: "Idéalement 48h avant la sortie, mais nous pouvons aussi intervenir en urgence le jour même. Appelez-nous dès que la date de sortie est connue." },
              { q: "L'aide est-elle temporaire ou permanente ?", a: "Le service est entièrement flexible. Il peut durer quelques jours, quelques semaines ou se prolonger si nécessaire. Nous adaptons au fur et à mesure." },
              { q: "Vos intervenants peuvent-ils aider aux pansements ?", a: "Nos auxiliaires aident à la toilette et au confort. Les actes médicaux (pansements complexes) sont assurés par les infirmiers avec qui nous coordonnons." },
              { q: "Est-ce pris en charge financièrement ?", a: "Oui, selon votre situation : APA, PCH, mutuelle, crédit d'impôt 50%. Nous vous aidons à identifier toutes les aides possibles." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Préparez un retour serein</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Ne laissez pas la convalescence au hasard. Notre équipe est prête à vous accompagner.</p>
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
