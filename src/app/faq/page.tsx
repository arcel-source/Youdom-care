import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Questions Fréquentes | Youdom Care",
  description: "Toutes vos questions sur l'aide à domicile, crédit d'impôt, qualifications, week-ends, aides financières.",
};

const faqs = [
  {
    q: "Comment fonctionne le crédit d'impôt de 50% ?",
    a: "L'ensemble des sommes versées pour aide à domicile ouvre droit à crédit d'impôt 50%, dans limites légales. On vous fournit l'attestation fiscale annuelle et accompagnons vos démarches.",
  },
  {
    q: "Sous quel délai pouvez-vous intervenir ?",
    a: "Nous garantissons réponse sous 2h après réception demande. En cas d'urgence (retour hospitalisation), on peut organiser intervention 24-48h.",
  },
  {
    q: "Est-ce toujours la même personne qui intervient ?",
    a: "Oui, c'est principe fondamental. Même auxiliaire à chaque visite, créant lien de confiance. En cas absence exceptionnelle, remplaçant qualifié prend relais.",
  },
  {
    q: "Quelles sont les qualifications de vos intervenants ?",
    a: "Tous diplômés (DEAVS, DEAES ou équivalent), références vérifiées, formation continue garantie. Vérification systématique antécédents et compétences.",
  },
  {
    q: "Intervenez-vous le week-end et les jours fériés ?",
    a: "Oui, disponibles 24h/24, 7j/7 incluant week-ends et jours fériés. Services adaptent entièrement à vos besoins, ponctuels ou permanents.",
  },
  {
    q: "Quelles aides financières existent pour l'aide à domicile ?",
    a: "Plusieurs dispositifs : APA (Allocation Personnalisée Autonomie), PCH (Prestation Compensation Handicap), aides CNAV, aides mutuelle, crédit d'impôt 50%. Nos conseillers vous guident gratuitement.",
  },
  {
    q: "Combien coûte une auxiliaire de vie ?",
    a: "Tarifs variables selon services, fréquence, localisation. Mais avec crédit d'impôt 50% + aides (APA, PCH), coût réel est moindre. On propose devis personnalisé.",
  },
  {
    q: "Pouvez-vous augmenter/diminuer les heures selon les besoins ?",
    a: "Absolument. Le plan d'aide évolue avec votre situation. Plus d'heures ou de services ? Moins ? On s'adapte, on ajuste, on n'est jamais figés.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer flex items-center justify-between px-6 py-5 text-left hover:bg-warm/80 transition-colors">
                  <span className="font-semibold text-text pr-4">{item.q}</span>
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-text-light leading-relaxed border-t border-gray-200">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-white/70 text-lg mb-8">
            Contactez-nous directement — on répond à tout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-8 py-4 rounded-full text-lg transition-all cta-glow">
              Nous Contacter →
            </a>
            <a href="tel:+33667224507" className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              📞 06 67 22 45 07
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
