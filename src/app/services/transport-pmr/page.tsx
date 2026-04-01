import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transport PMR - Véhicules Adaptés | Youdom Care",
  description: "Transport adapté personnes à mobilité réduite. Véhicules PMR, chauffeurs formés, rendez-vous médicaux, sorties. Paris & IDF.",
};

export default function TransportPMRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Transport adapté pour personnes à mobilité réduite
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Véhicules adaptés, chauffeurs formés, service porte-à-porte. Pour que la mobilité ne soit plus un obstacle.
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
                  src="/images/services/transport-handicapes.png"
                  alt="Transport PMR adapté"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Les obstacles à la mobilité</h2>
          <p className="text-text-light text-center mb-12 text-lg">Se déplacer ne devrait jamais être un luxe. Pourtant, pour les personnes à mobilité réduite, chaque trajet est un défi.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🦽", title: "Accessibilité limitée", desc: "Transports en commun souvent inadaptés aux fauteuils roulants et déambulateurs." },
              { icon: "🏥", title: "Rendez-vous médicaux", desc: "Consultations régulières impossibles sans transport adapté fiable." },
              { icon: "🔒", title: "Isolement forcé", desc: "Sans moyen de transport, les sorties deviennent rares et le lien social se brise." },
              { icon: "😓", title: "Fatigue des aidants", desc: "Organiser chaque déplacement pèse lourdement sur les proches." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services de transport</h2>
          <div className="space-y-6">
            {[
              "Véhicules adaptés fauteuil roulant avec rampe d'accès",
              "Chauffeurs formés à l'accompagnement des personnes fragiles",
              "Service porte-à-porte (du domicile à la destination)",
              "Transport vers les rendez-vous médicaux et spécialisés",
              "Accompagnement pour les courses et démarches administratives",
              "Sorties loisirs, culturelles et familiales",
              "Service régulier ou ponctuel selon vos besoins",
              "Véhicules confortables et climatisés",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Service professionnel, ponctuel et bienveillant.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Les avantages du transport Youdom Care</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🕐", title: "Ponctualité", desc: "Horaires respectés, jamais d'attente inutile." },
              { icon: "🛡️", title: "Sécurité", desc: "Véhicules entretenus, chauffeurs certifiés." },
              { icon: "❤️", title: "Bienveillance", desc: "Aide à la montée/descente, patience, respect." },
              { icon: "📱", title: "Réservation simple", desc: "Par téléphone, en ligne ou via votre conseiller." },
              { icon: "💰", title: "Éligible aides", desc: "PCH, APA, crédit d'impôt selon votre situation." },
              { icon: "🔄", title: "Flexibilité", desc: "Ponctuel ou régulier, adapté à votre rythme." },
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
              { q: "Les véhicules acceptent-ils les fauteuils roulants électriques ?", a: "Oui, nos véhicules sont équipés de rampes et d'espaces adaptés pour tous types de fauteuils, y compris électriques." },
              { q: "Peut-on réserver un transport régulier ?", a: "Absolument. Nous proposons des abonnements pour les trajets récurrents (dialyse, kiné, etc.) avec le même chauffeur." },
              { q: "Le chauffeur aide-t-il à monter/descendre du véhicule ?", a: "Oui, nos chauffeurs sont formés pour accompagner physiquement les personnes dans leurs transferts en toute sécurité." },
              { q: "Quelle est la zone de couverture ?", a: "Paris et toute l'Île-de-France. Pour les trajets plus longs, contactez-nous pour un devis spécifique." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Retrouvez votre liberté de mouvement</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Le transport adapté, c&apos;est la clé de l&apos;autonomie et du lien social.</p>
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
