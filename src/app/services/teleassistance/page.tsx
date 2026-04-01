import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Téléassistance à Domicile | Youdom Care",
  description: "Service de téléassistance 24h/24. Détection de chute, GPS, médaillon d'alerte. Sécurité maximale pour vos proches. Paris & IDF.",
};

export default function TeleassistancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Téléassistance : sécurité 24h/24 pour vos proches
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Un système d&apos;alerte intelligent pour rester autonome chez soi en toute sécurité.
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
                  src="/images/services/tele-assistance.png"
                  alt="Service de téléassistance"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Pourquoi la téléassistance est essentielle</h2>
          <p className="text-text-light text-center mb-12 text-lg">Chaque année, des milliers de seniors sont victimes de chutes à domicile. La téléassistance sauve des vies.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "⚠️", title: "Chutes à domicile", desc: "1 personne âgée sur 3 chute chaque année. Sans aide rapide, les conséquences peuvent être graves." },
              { icon: "🏠", title: "Isolement", desc: "Vivre seul augmente les risques. La téléassistance compense l'absence de présence permanente." },
              { icon: "💊", title: "Malaises soudains", desc: "Hypoglycémie, AVC, malaise cardiaque : chaque minute compte pour alerter les secours." },
              { icon: "😰", title: "Angoisse des familles", desc: "Savoir que votre proche est protégé 24h/24 change tout pour la tranquillité d'esprit." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos solutions de téléassistance</h2>
          <div className="space-y-6">
            {[
              "Médaillon ou bracelet d'alerte étanche avec bouton SOS",
              "Détecteur de chute automatique (sans action nécessaire)",
              "Haut-parleur intégré pour communication mains-libres",
              "Géolocalisation GPS pour les sorties extérieures",
              "Plateforme d'écoute 24h/24, 7j/7 avec opérateurs formés",
              "Alerte automatique des proches et des secours",
              "Rappels de prise de médicaments programmables",
              "Détecteurs de fumée et de gaz connectés",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Technologie fiable, installation simple, assistance immédiate.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Les avantages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour le senior</h3>
              <ul className="space-y-3">
                {["Autonomie préservée au quotidien", "Sécurité permanente, jour et nuit", "Pas de contrainte ni d'intrusivité", "Contact humain en un clic", "Confiance pour vivre seul"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pour la famille</h3>
              <ul className="space-y-3">
                {["Tranquillité d'esprit totale", "Alertes en temps réel sur votre mobile", "Moins de stress au quotidien", "Solution économique et éligible au crédit d'impôt", "Complémentaire à l'aide à domicile"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/90"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Mise en place simple</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "1", title: "Évaluation des besoins", desc: "Analyse de la situation et choix de l'équipement adapté." },
              { step: "2", title: "Installation à domicile", desc: "Un technicien installe et configure tout en 30 minutes." },
              { step: "3", title: "Test et formation", desc: "Démonstration complète avec la personne et ses proches." },
              { step: "4", title: "Suivi continu", desc: "Maintenance préventive et assistance technique incluses." },
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
              { q: "Le médaillon est-il étanche ?", a: "Oui, nos médaillons et bracelets sont étanches. Vous pouvez les porter sous la douche, là où les risques de chute sont les plus élevés." },
              { q: "Que se passe-t-il quand j'appuie sur le bouton ?", a: "Un opérateur formé répond en moins de 60 secondes via le haut-parleur. Il évalue la situation et alerte les proches ou les secours si nécessaire." },
              { q: "La téléassistance fonctionne-t-elle en cas de coupure de courant ?", a: "Oui, nos équipements disposent d'une batterie de secours qui assure plusieurs heures d'autonomie." },
              { q: "Est-ce éligible au crédit d'impôt ?", a: "Oui, la téléassistance est éligible au crédit d'impôt de 50% au titre des services à la personne." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Protégez votre proche dès aujourd&apos;hui</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">La téléassistance, c&apos;est la liberté de vivre chez soi avec la sécurité en plus.</p>
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
