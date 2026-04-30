import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | Youdom Care",
  description:
    "CGU Youdom Care : conditions d'utilisation du site youdom-care.com et des services associés.",
};

export default function CGUPage() {
  return (
    <LegalPageLayout
      title="Conditions générales d'utilisation"
      subtitle="Règles applicables à votre utilisation du site et des services proposés en ligne par Youdom Care."
      lastUpdate="30 avril 2026"
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions générales d&apos;utilisation (CGU) régissent
        l&apos;accès et l&apos;utilisation du site web{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a> ainsi que des services
        associés (formulaires de contact, devis en ligne, espace client, blog,
        guides téléchargeables, newsletter).
      </p>
      <p>
        L&apos;utilisation du site implique l&apos;acceptation pleine et entière
        des présentes CGU.
      </p>

      <h2>2. Accès au site</h2>
      <p>
        Le site est accessible gratuitement, 24h/24 et 7j/7, sauf cas de force
        majeure ou interventions techniques. {siteConfig.name} se réserve le
        droit d&apos;interrompre l&apos;accès pour assurer la maintenance ou
        les évolutions du site.
      </p>

      <h2>3. Services proposés en ligne</h2>
      <p>
        Le site propose les services en ligne suivants :
      </p>
      <ul>
        <li><strong>Demande de devis</strong> sous forme de formulaire multi-étapes</li>
        <li><strong>Demande de contact</strong> et prise de rendez-vous</li>
        <li><strong>Téléchargement de guides PDF gratuits</strong> contre inscription email</li>
        <li><strong>Inscription à la newsletter</strong></li>
        <li><strong>Espace client</strong> (sur invitation, après contractualisation)</li>
        <li><strong>Candidature en ligne</strong> pour rejoindre nos équipes</li>
      </ul>
      <p>
        Ces services sont gratuits et n&apos;engagent en rien l&apos;utilisateur,
        à l&apos;exception de la signature ultérieure d&apos;un contrat de
        prestation, qui fait l&apos;objet d&apos;un document distinct.
      </p>

      <h2>4. Engagements de l'utilisateur</h2>
      <p>L&apos;utilisateur s&apos;engage à :</p>
      <ul>
        <li>Fournir des informations exactes et à jour lors de tout formulaire</li>
        <li>Ne pas usurper l&apos;identité d&apos;un tiers</li>
        <li>Respecter les droits de propriété intellectuelle de {siteConfig.name}</li>
        <li>Ne pas tenter de nuire au bon fonctionnement du site</li>
        <li>Ne pas extraire le contenu du site à des fins commerciales</li>
      </ul>

      <h2>5. Contrat de prestation</h2>
      <p>
        L&apos;envoi d&apos;une demande de devis ou d&apos;information ne crée
        aucun contrat. Le contrat de prestation entre {siteConfig.name} et le
        bénéficiaire est formalisé par un document écrit signé par les deux
        parties, après visite à domicile gratuite et présentation du plan
        d&apos;aide personnalisé.
      </p>
      <p>
        Les conditions tarifaires, les modalités d&apos;intervention, les
        engagements de qualité et les modalités de résiliation sont précisées
        dans ce contrat de prestation.
      </p>

      <h2>6. Tarifs et facturation</h2>
      <p>
        Les tarifs indiqués sur le site sont donnés à titre indicatif. Le tarif
        applicable est celui figurant dans le devis personnalisé, validé par le
        bénéficiaire. Les factures sont émises chaque mois, conformément au
        plan d&apos;aide.
      </p>
      <p>
        L&apos;avance immédiate du crédit d&apos;impôt 50 % peut être activée
        sur demande, conformément au dispositif URSSAF en vigueur.
      </p>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        Tous les contenus du site (textes, images, logos, vidéos, structure)
        sont protégés par le droit d&apos;auteur et la propriété intellectuelle.
        Toute reproduction sans autorisation préalable est interdite.
      </p>

      <h2>8. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est régi par notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>, accessible
        depuis chaque page du site.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Le site utilise des cookies nécessaires à son bon fonctionnement et,
        avec votre consentement, des cookies d&apos;analyse d&apos;audience.
        Voir notre politique de confidentialité pour plus de détails.
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        {siteConfig.name} met tout en œuvre pour fournir des informations à
        jour et fiables. Toutefois, ces informations sont données à titre
        indicatif et n&apos;engagent {siteConfig.name} qu&apos;après formalisation
        contractuelle. Les barèmes APA, PCH et autres aides évoluent
        régulièrement — consultez toujours les sources officielles.
      </p>

      <h2>11. Liens vers des sites tiers</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (CAF, MDPH, Service
        Public, etc.) sur lesquels {siteConfig.name} n&apos;exerce aucun
        contrôle. {siteConfig.name} décline toute responsabilité quant à leur
        contenu.
      </p>

      <h2>12. Modification des CGU</h2>
      <p>
        {siteConfig.name} se réserve le droit de modifier les présentes CGU à
        tout moment. La date de mise à jour figure en haut de la page. Les
        modifications majeures pourront être notifiées par email.
      </p>

      <h2>13. Loi applicable & juridiction</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige et
        après tentative de recherche d&apos;une solution amiable, compétence est
        attribuée aux tribunaux français.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question relative aux CGU, contactez-nous à :{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPageLayout>
  );
}
