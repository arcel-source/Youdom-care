import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aide à Domicile sur Mesure | Youdom Care",
  description: "Service premium d'aide à domicile pour personnes âgées, handicap, perte d'autonomie. Devis gratuit, auxiliaires qualifiées, crédit d'impôt 50%. 24h/24, Paris & IDF.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              ✨ 500+ familles accompagnées • 98% satisfaction
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              L&apos;aide à domicile <span className="text-secondary">sur mesure</span> qui change tout
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Des auxiliaires de vie d&apos;exception, dédiées au bien-être de vos proches. 
              Vivre chez soi, en toute sécurité et dignité. Paris & Île-de-France, 24h/24.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/demander-devis"
                className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow text-center"
              >
                Obtenir mon Devis Gratuit →
              </a>
              <a
                href="tel:+33667224507"
                className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                📞 Nous Appeler
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "500+", label: "Familles" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Disponibilité" },
                { value: "50%", label: "Crédit d'impôt" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
              Des services adaptés à <span className="text-gradient">chaque besoin</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤝", title: "Aide à l'autonomie", desc: "Gestes quotidiens, toilette, repas, lever/coucher" },
              { icon: "🌙", title: "Garde de nuit", desc: "Présence 24h/24 pour votre sécurité et sérénité" },
              { icon: "♿", title: "Aide au handicap", desc: "Accompagnement spécialisé pour adultes et enfants" },
              { icon: "🏠", title: "Aide ménagère", desc: "Ménage, lessive, cuisine — domicile impeccable" },
              { icon: "📡", title: "Téléassistance", desc: "Détecteur chute, géolocalisation, appel d'urgence" },
              { icon: "🚗", title: "Transport PMR", desc: "Véhicules adaptés, accompagnement sécurisé" },
              { icon: "🏥", title: "Retour hospitalisation", desc: "Suivi post-hospitalisation à domicile" },
              { icon: "👶", title: "Enfants handicapés", desc: "Aide et soutien pour enfants malades ou handicapés" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg text-text mb-2">{service.title}</h3>
                <p className="text-text-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="inline-flex bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
              Tous les services →
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-16">
            Pourquoi nous <span className="text-gradient">choisir</span> ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👤", title: "Intervenante unique", desc: "Même personne à chaque visite — lien de confiance" },
              { icon: "🎓", title: "Personnel qualifié", desc: "Diplômés, formés en continu, références vérifiées" },
              { icon: "⚡", title: "Réponse sous 2h", desc: "Devis et appel garantis rapides — pas d'attente" },
              { icon: "💰", title: "50% crédit d'impôt", desc: "On gère les démarches, vous économisez" },
              { icon: "📊", title: "Suivi qualité", desc: "Enquêtes satisfaction, ajustements permanents" },
              { icon: "🔄", title: "Adaptabilité", desc: "Le plan d'aide évolue avec vos besoins" },
            ].map((reason) => (
              <div key={reason.title} className="bg-warm rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-text mb-1">{reason.title}</h3>
                <p className="text-text-light text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-16">
            Comment ça <span className="text-gradient">marche</span>
          </h2>

          <div className="space-y-8">
            {[
              { num: "01", title: "Contactez-nous", desc: "Par téléphone ou formulaire. C'est gratuit, sans engagement." },
              { num: "02", title: "Visite à domicile", desc: "On évalue vraiment votre situation, on ne propose rien à la légère." },
              { num: "03", title: "Sélection d'auxiliaire", desc: "On choisit quelqu'un qui vous correspond — caractère, horaires, besoins." },
              { num: "04", title: "Plan d'aide personnalisé", desc: "Services, fréquence, horaires, jours — tout est clair et écrit." },
              { num: "05", title: "Démarrage & suivi", desc: "Première visite, retours, puis suivi régulier et ajustements." },
            ].map((step, i) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                  {i < 4 && <div className="w-0.5 h-16 bg-primary/20 mt-2" />}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-text-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text mb-16">
            Ce que disent les <span className="text-gradient">familles</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Grâce à Youdom Care, maman peut rester chez elle en toute sécurité. Son auxiliaire, Sophie, est devenue comme une amie. Je travaille l'esprit tranquille.",
                author: "Marie D.",
                role: "Fille",
              },
              {
                text: "Papa a Alzheimer et a besoin d'une présence. L'auxiliaire a trouvé avec lui une belle complicité. Elle est patiente, tendre et vraiment professionnelle.",
                author: "Famille Dupont",
                role: "Proche",
              },
              {
                text: "Mon fils est en fauteuil roulant. L'auxiliaire le lave avec tendresse, l'habille, l'accompagne aux sorties. Elle lui redonne une vie sociale.",
                author: "Mère de Tom",
                role: "Parent",
              },
              {
                text: "Je suis atteint de sclérose en plaques. Youdom Care a trouvé quelqu'un qui comprend mon handicap et m'aide à rester indépendant.",
                author: "Jean P.",
                role: "Bénéficiaire",
              },
            ].map((testi) => (
              <div key={testi.author} className="bg-warm rounded-2xl p-7 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary">★</span>
                  ))}
                </div>
                <p className="text-text leading-relaxed mb-5 italic">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{testi.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-text text-sm">{testi.author}</div>
                    <div className="text-text-light text-xs">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/temoignages" className="inline-flex bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full transition-all">
              Lire tous les témoignages →
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à donner le meilleur à votre proche ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            La première étape est gratuite. On vous écoute, on vous propose la meilleure solution.
          </p>
          <a href="/demander-devis" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-4 rounded-full text-lg transition-all cta-glow">
            Demander un Devis Gratuit →
          </a>
        </div>
      </section>
    </>
  );
}
