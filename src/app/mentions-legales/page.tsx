import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Youdom Care",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-6 sm:mb-8">Mentions Légales</h1>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Informations sur l'entreprise</h2>
            <p className="text-text-light">
              Youdom Care — Service d'aide à domicile<br/>
              61 rue de Lyon<br/>
              75012 Paris, France<br/>
              <br/>
              Téléphone : 01 84 80 72 97 / 06 67 22 45 07<br/>
              Email : contact@youdom-care.com
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Responsabilité du site</h2>
            <p className="text-text-light leading-relaxed">
              Les informations contenues dans ce site sont fournies à titre informatif et sans garantie de leur exactitude ou complétude. 
              Youdom Care décline toute responsabilité en cas d'erreur, omission ou utilisation abusive des informations fournies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Propriété intellectuelle</h2>
            <p className="text-text-light leading-relaxed">
              Tous les contenus de ce site (textes, images, logos) sont la propriété exclusive de Youdom Care ou de ses partenaires. 
              Toute reproduction ou utilisation sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Données personnelles</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care traite vos données personnelles conformément au RGPD (Règlement Général sur la Protection des Données). 
              Consultez notre politique de confidentialité pour en savoir plus.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Cookies</h2>
            <p className="text-text-light leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Limitations de responsabilité</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care ne peut être tenu responsable des dommages indirects résultant de l'utilisation du site ou de ses services. 
              L'utilisateur assume l'entière responsabilité de l'utilisation des informations fournies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Modification des conditions</h2>
            <p className="text-text-light leading-relaxed">
              Youdom Care se réserve le droit de modifier ces mentions légales à tout moment. Les modifications entrent en vigueur dès leur publication.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
