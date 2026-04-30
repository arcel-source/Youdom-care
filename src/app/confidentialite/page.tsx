import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Youdom Care",
  description:
    "Politique de confidentialité Youdom Care : collecte et traitement de vos données personnelles, vos droits RGPD, durée de conservation, sécurité.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles, en conformité totale avec le RGPD."
      lastUpdate="30 avril 2026"
    >
      <h2>1. Notre engagement</h2>
      <p>
        Chez {siteConfig.name}, nous prenons la protection de vos données très
        au sérieux. Nous nous conformons strictement au{" "}
        <strong>Règlement Général sur la Protection des Données (RGPD)</strong>{" "}
        et à la loi française Informatique et Libertés.
      </p>
      <p>
        Cette page explique <strong>quelles données nous collectons, pourquoi
        et comment vous gardez le contrôle.</strong>
      </p>

      <h2>2. Responsable du traitement</h2>
      <p>
        Le responsable du traitement de vos données est :
      </p>
      <ul>
        <li><strong>{siteConfig.name}</strong></li>
        <li>{siteConfig.address.full}</li>
        <li>Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        <li>Téléphone : {siteConfig.phone.main}</li>
      </ul>

      <h2>3. Données collectées</h2>

      <h3>Lors d&apos;une demande de devis ou contact</h3>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone</li>
        <li>Adresse postale (pour le bénéficiaire)</li>
        <li>Description de votre situation et de vos besoins</li>
      </ul>

      <h3>Lors d&apos;une candidature</h3>
      <ul>
        <li>Nom et prénom</li>
        <li>Coordonnées (email, téléphone)</li>
        <li>Parcours professionnel et formations</li>
        <li>Informations relatives au poste recherché</li>
      </ul>

      <h3>Lors de la souscription à la newsletter</h3>
      <ul>
        <li>Adresse email uniquement</li>
      </ul>

      <h3>Données de navigation</h3>
      <ul>
        <li>Pages visitées (analytics anonymisés)</li>
        <li>Type de navigateur et appareil</li>
        <li>Adresse IP (anonymisée)</li>
      </ul>

      <h2>4. Finalités du traitement</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Répondre à vos demandes (devis, contact, information)</li>
        <li>Établir et exécuter le contrat de prestation, le cas échéant</li>
        <li>Vous adresser nos communications (uniquement avec votre consentement)</li>
        <li>Étudier votre candidature (recrutement)</li>
        <li>Améliorer la qualité de nos services et de notre site web</li>
        <li>Répondre à nos obligations légales et réglementaires</li>
      </ul>

      <h2>5. Base légale</h2>
      <p>
        Selon les cas, le traitement de vos données repose sur :
      </p>
      <ul>
        <li><strong>Votre consentement</strong> (newsletter, lead magnets, cookies optionnels)</li>
        <li><strong>L&apos;exécution d&apos;un contrat</strong> (si vous êtes client)</li>
        <li><strong>Notre intérêt légitime</strong> (sécurité du site, prévention de la fraude)</li>
        <li><strong>Une obligation légale</strong> (facturation, comptabilité)</li>
      </ul>

      <h2>6. Durées de conservation</h2>
      <ul>
        <li><strong>Demandes de devis non concrétisées :</strong> 3 ans après le dernier contact</li>
        <li><strong>Données client (contrat actif) :</strong> durée du contrat + 5 ans</li>
        <li><strong>Données de facturation :</strong> 10 ans (obligation comptable)</li>
        <li><strong>Newsletter :</strong> jusqu&apos;à votre désinscription</li>
        <li><strong>Candidatures non retenues :</strong> 2 ans</li>
        <li><strong>Cookies :</strong> 13 mois maximum</li>
      </ul>

      <h2>7. Destinataires de vos données</h2>
      <p>
        Vos données sont traitées par les équipes de {siteConfig.name}. Elles peuvent
        également être communiquées à nos sous-traitants techniques (hébergement,
        envoi d&apos;emails), tous engagés contractuellement à respecter la
        confidentialité et le RGPD.
      </p>
      <p>
        <strong>Nous ne vendons jamais vos données à des tiers.</strong> Vos
        informations restent en France ou dans l&apos;Union Européenne.
      </p>

      <h2>8. Vos droits RGPD</h2>
      <p>Vous disposez à tout moment des droits suivants :</p>
      <ul>
        <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
        <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
        <li><strong>Droit à l&apos;effacement :</strong> supprimer vos données (« droit à l&apos;oubli »)</li>
        <li><strong>Droit à la limitation :</strong> restreindre certains traitements</li>
        <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
        <li><strong>Droit d&apos;opposition :</strong> refuser certains traitements</li>
        <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
      </ul>

      <h2>9. Comment exercer vos droits</h2>
      <p>
        Pour exercer ces droits, contactez-nous à :{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> en précisant
        votre demande et en joignant une copie d&apos;une pièce d&apos;identité.
      </p>
      <p>
        Nous répondons dans un délai maximum de 30 jours.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez
        introduire une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>

      <h2>10. Cookies</h2>
      <p>
        Nous utilisons des cookies nécessaires au fonctionnement du site et,
        avec votre consentement, des cookies de mesure d&apos;audience. Aucun
        cookie publicitaire tiers n&apos;est utilisé. Vous pouvez gérer vos
        préférences cookies via votre navigateur.
      </p>

      <h2>11. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées pour protéger vos données contre tout accès non autorisé,
        perte ou détérioration : chiffrement TLS, hébergement sécurisé,
        contrôles d&apos;accès, formation du personnel, charte de confidentialité
        signée par tous les intervenants.
      </p>

      <h2>12. Modifications</h2>
      <p>
        Cette politique peut être mise à jour. La date en haut de la page
        indique la dernière révision. Les modifications majeures vous seront
        notifiées par email.
      </p>
    </LegalPageLayout>
  );
}
