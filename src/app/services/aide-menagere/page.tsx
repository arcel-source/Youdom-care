import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aide ménagère à domicile | Youdom Care",
  description: "Aide ménagère à domicile. Ménage, linge, repassage. Confiance, qualité, tarifs transparents. Devis gratuit.",
};

export default function AideMenagerePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/services/aide-menagere.jpg"
            alt="Service d'aide ménagère à domicile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-primary-light/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Aide ménagère à domicile : confort et bien-être</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">Services réguliers de ménage. Confiance et qualité garanties.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0184807297" className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl border border-white text-lg">
              Appeler : 01 84 80 72 97
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Pourquoi une aide ménagère à domicile ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🧓", title: "Mobilité réduite", desc: "Personnes âgées, handicap — escalier impossible." },
              { icon: "⏰", title: "Manque de temps", desc: "Travail, enfants, santé — pas d'énergie pour ménage." },
              { icon: "😢", title: "Dépression/isolement", desc: "Énergie manquante. Besoin aide simple." },
              { icon: "🛡️", title: "Prévention chutes", desc: "Domicile propre/rangé = moins de risques." },
              { icon: "🏥", title: "Hygiène sanitaire", desc: "Acariens, moisissure — impact santé." },
              { icon: "😊", title: "Bien-être psycho", desc: "Intérieur propre = moral meilleur." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-text mb-1">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services de ménage détaillés</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Nettoyage courant (balai, serpillière, chiffons)",
                "Dépoussiérage",
                "Nettoyage salle de bain",
                "Toilette W.C.",
                "Nettoyage cuisine",
                "Vaisselle",
                "Entretien sols",
                "Lessive et repassage",
                "Rangement basic",
                "Changement literie",
                "Aération",
                "Petits rangements",
              ].map((service, idx) => (
                <div key={idx} className="p-4 bg-warm rounded-lg flex items-center gap-3">
                  <span className="text-secondary text-lg font-bold">✓</span>
                  <p className="text-text font-medium text-sm">{service}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/assistant-menager.jpg"
                  alt="Assistante ménagère professionnelle à domicile"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Bénéfices</h2>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour la personne aidée</h3>
              <p className="text-sm text-white/80">Cadre sain, prévention chutes, bien-être psy, autonomie conservée.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour les aidants</h3>
              <p className="text-sm text-white/80">Soulagement tâches lourdes, plus de temps qualité ensemble.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
              <h3 className="font-bold mb-3">Pour le domicile</h3>
              <p className="text-sm text-white/80">Durée mobilier, hygiène, prévention dégradations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Flexibilité et régularité</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-text mb-3">Fréquences possibles</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• 1x semaine</li>
                <li>• 2-3x semaine</li>
                <li>• 4x semaine</li>
                <li>• Demi-journée, journée</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-text mb-3">Avantages régularité</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• Same intervenant = confiance</li>
                <li>• Même jour/horaire = repères</li>
                <li>• Ajustements faciles</li>
                <li>• Continuité garantie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 text-center">Coûts et aides</h2>
          <div className="bg-warm p-8 rounded-2xl border-l-4 border-secondary">
            <h3 className="font-bold text-text mb-3">Crédit d&apos;impôt 50% automatique</h3>
            <p className="text-text-light text-sm mb-4">Service à personne = réduction d&apos;impôts automatique 50%.</p>
            <h3 className="font-bold text-text mb-3">TVA réduite 5.5%</h3>
            <p className="text-text-light text-sm">Au lieu 20% pour autres services. Youdom Care applique directement.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Un intérieur propre et confortable</h2>
          <p className="text-white/80 mb-8">Régularité, confiance, qualité. Youdom Care : même intervenant, tarifs transparents.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-xl text-lg">
              Demander un devis gratuit
            </a>
            <a href="tel:0667224507" className="px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
