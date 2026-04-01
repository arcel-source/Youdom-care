import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistance Informatique à Domicile | Youdom Care",
  description: "Aide informatique pour seniors. Initiation tablette, smartphone, visioconférence, configuration, dépannage. Paris & IDF.",
};

export default function AssistanceInformatiquePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Assistance informatique à domicile
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
                Apprivoiser la technologie à votre rythme. Pour rester connecté avec le monde et vos proches.
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
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/assistance-informatique.png"
                  alt="Assistance informatique à domicile pour seniors"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 text-center">Le numérique, un enjeu majeur</h2>
          <p className="text-text-light text-center mb-12 text-lg">La fracture numérique isole. Maîtriser les outils de base, c&apos;est garder le lien avec le monde.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "📱", title: "Fracture numérique", desc: "13 millions de Français sont éloignés du numérique. Les seniors sont les plus touchés." },
              { icon: "👨‍👩‍👧", title: "Éloignement familial", desc: "Sans visioconférence, les petits-enfants éloignés deviennent de plus en plus lointains." },
              { icon: "🏛️", title: "Démarches en ligne", desc: "Impôts, CPAM, CAF : de plus en plus de services publics ne sont qu'en ligne." },
              { icon: "🔒", title: "Risques d'arnaque", desc: "Sans formation, les seniors sont vulnérables face aux escroqueries numériques." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-12 text-center">Nos services d&apos;assistance informatique</h2>
          <div className="space-y-6">
            {[
              "Initiation à la tablette et au smartphone (envoi de photos, appels vidéo)",
              "Configuration et paramétrage des appareils (Wi-Fi, comptes email)",
              "Apprentissage de la visioconférence (Zoom, WhatsApp, Skype)",
              "Aide aux démarches administratives en ligne",
              "Installation et utilisation des applications utiles",
              "Formation à la sécurité en ligne (mots de passe, arnaques)",
              "Dépannage informatique simple à domicile",
              "Configuration de la télécommande TV, box internet",
              "Aide à l'utilisation des réseaux sociaux pour rester en contact",
              "Formation progressive et patiente, à votre rythme",
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-warm rounded-xl border-l-4 border-secondary">
                <div className="text-secondary text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-text text-lg">{service}</h3>
                  <p className="text-text-light text-sm mt-1">Formation à domicile, avec patience et pédagogie.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Les bénéfices concrets</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "👨‍👩‍👧‍👦", title: "Lien familial", desc: "Appels vidéo avec les petits-enfants, partage de photos." },
              { icon: "🌐", title: "Autonomie numérique", desc: "Gérer ses démarches en ligne en toute indépendance." },
              { icon: "🛡️", title: "Sécurité", desc: "Reconnaître et éviter les arnaques en ligne." },
              { icon: "🎮", title: "Loisirs", desc: "Jeux, musique, films, actualités en un clic." },
              { icon: "🧠", title: "Stimulation cognitive", desc: "Apprendre de nouvelles choses stimule le cerveau." },
              { icon: "😊", title: "Confiance en soi", desc: "Maîtriser le numérique, c'est regagner confiance." },
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
              { q: "Je n'y connais rien en informatique, est-ce adapté ?", a: "Absolument ! Nos intervenants sont formés à la pédagogie avec les seniors. On part de zéro si nécessaire, à votre rythme, sans jugement." },
              { q: "Faut-il avoir du matériel ?", a: "Nous pouvons vous conseiller dans le choix d'une tablette ou d'un smartphone adapté. Si vous en avez déjà un, nous travaillons avec ce que vous avez." },
              { q: "Combien de séances faut-il ?", a: "Cela dépend de vos objectifs. Certains gagnent en autonomie en 3-4 séances, d'autres préfèrent un accompagnement régulier. Tout est flexible." },
              { q: "Le service est-il éligible au crédit d'impôt ?", a: "Oui, l'assistance informatique à domicile fait partie des services à la personne éligibles au crédit d'impôt de 50%." },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Restez connecté avec le monde</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">La technologie ne doit pas être un obstacle. Nos intervenants vous accompagnent avec patience.</p>
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
