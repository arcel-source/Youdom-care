import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Youdom Care",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-text mb-8">Politique de Confidentialité</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Collecte de données</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care collecte vos données personnelles (nom, prénom, téléphone, email) lorsque vous complétez un formulaire de devis ou de contact. 
              Ces données sont utilisées pour vous contacter et vous proposer nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Utilisation des données</h2>
            <p className="text-text-light leading-relaxed">
              Vos données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
              <li>Vous contacter pour un devis ou une demande</li>
              <li>Vous envoyer des informations sur nos services</li>
              <li>Améliorer notre service (si vous consentez)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Protection des données</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care applique des mesures de sécurité strictes pour protéger vos données contre l'accès non autorisé, 
              la modification ou la suppression. Vos données sont stockées de façon sécurisée et accessibles uniquement aux employés autorisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Durée de conservation</h2>
            <p className="text-text-light leading-relaxed">
              Vos données personnelles sont conservées pendant la durée nécessaire pour traiter votre demande. 
              Vous pouvez demander leur suppression à tout moment en contactant notre DPO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Vos droits</h2>
            <p className="text-text-light leading-relaxed">
              Conformément au RGPD, vous avez le droit de :
            </p>
            <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier ou supprimer vos données</li>
              <li>Limiter l'utilisation de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Délégué à la Protection des Données (DPO)</h2>
            <p className="text-text-light leading-relaxed">
              Pour toute question concernant la protection de vos données, contactez notre DPO :<br/>
              Email : dpo@youdom-care.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Modifications</h2>
            <p className="text-text-light leading-relaxed">
              Cette politique de confidentialité peut être modifiée à tout moment. 
              Nous vous notifierons de tout changement significatif.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
