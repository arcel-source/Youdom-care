import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Youdom Care",
};

export default function CGUPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-6 sm:mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Acceptation des conditions</h2>
            <p className="text-text-light leading-relaxed">
              En utilisant le site Youdom Care, vous acceptez l'intégralité de ces conditions générales d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Services proposés</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care propose des services d'aide à domicile pour personnes âgées, en situation de handicap ou en perte d'autonomie. 
              Les services sont fournis conformément à la législation française applicables aux services à la personne.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Responsabilité du client</h2>
            <p className="text-text-light leading-relaxed">
              Le client assume l'entière responsabilité de la complétude et de l'exactitude des informations fournies lors de la demande de devis. 
              Toute information inexacte pourrait affecter la qualité de notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Annulation et résiliation</h2>
            <p className="text-text-light leading-relaxed">
              Le client peut annuler ou résilier son contrat à tout moment en contactant Youdom Care par écrit. 
              Un délai de préavis peut s'appliquer selon les conditions du contrat.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Limitation de responsabilité</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care s'engage à fournir ses services avec professionnalisme. 
              Cependant, nous ne pouvons être tenu responsable des dommages indirects ou imprévisibles résultant de l'utilisation de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Confidentialité</h2>
            <p className="text-text-light leading-relaxed">
              Nos intervenants s'engagent à maintenir la confidentialité totale concernant les informations personnelles et médicales 
              des bénéficiaires. Le secret professionnel est strictement respecté.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Assurance</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care est assuré pour la responsabilité civile professionnelle couvrant tous les risques liés à l'exercice de ses activités.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Droit applicable</h2>
            <p className="text-text-light leading-relaxed">
              Ces conditions générales sont soumises à la loi française. 
              Tout litige sera du ressort des tribunaux compétents en France.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Modification des conditions</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care se réserve le droit de modifier ces conditions générales à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur le site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
