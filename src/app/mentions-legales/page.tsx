import { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales | Youdom Care",
  description: "Mentions légales du site youdom-care.com — éditeur, hébergeur, propriété intellectuelle, responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      title="Mentions légales"
      subtitle="Informations relatives à l'éditeur, à l'hébergeur et aux conditions d'utilisation du site."
      lastUpdate="30 avril 2026"
    >
      <h2>1. Éditeur du site</h2>
      <p>
        Le site <a href={siteConfig.url}>{siteConfig.url}</a> est édité par :
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> {siteConfig.name}</li>
        <li><strong>Forme juridique :</strong> {siteConfig.legalForm}</li>
        <li><strong>Siège social :</strong> {siteConfig.address.full}</li>
        <li><strong>Téléphone :</strong> {siteConfig.phone.main}</li>
        <li><strong>Email :</strong> {siteConfig.email}</li>
        <li><strong>Numéro SIRET :</strong> [À compléter par l'éditeur]</li>
        <li><strong>Code APE :</strong> 8810A — Aide à domicile</li>
        <li><strong>Numéro de TVA intracommunautaire :</strong> [À compléter]</li>
        <li><strong>Agrément Service à la Personne (SAP) :</strong> [Numéro à compléter]</li>
        <li><strong>Autorisation SAAD :</strong> [Numéro à compléter]</li>
      </ul>

      <h2>2. Directeur de la publication</h2>
      <p>
        Le directeur de la publication est <strong>[Nom à compléter]</strong>, en
        qualité de [fonction à compléter].
      </p>

      <h2>3. Hébergeur</h2>
      <p>
        Le site est hébergé par :
      </p>
      <ul>
        <li><strong>Vercel Inc.</strong></li>
        <li>340 S Lemon Ave #4133</li>
        <li>Walnut, CA 91789, États-Unis</li>
        <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
      </ul>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments du site (textes, logos, images, vidéos,
        graphismes, structure, code source) est protégé par les lois en vigueur
        sur la propriété intellectuelle. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, est
        strictement interdite sans l&apos;autorisation écrite préalable de {siteConfig.name}.
      </p>
      <p>
        Les marques citées sont la propriété de leurs détenteurs respectifs.
      </p>

      <h2>5. Photos</h2>
      <p>
        Les photographies utilisées sur ce site proviennent de la banque d&apos;images{" "}
        <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>
        {" "}sous licence libre, ou ont été produites par {siteConfig.name}.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers d&apos;autres sites internet.{" "}
        {siteConfig.name} décline toute responsabilité quant au contenu de ces
        sites externes et n&apos;a aucun contrôle sur leur évolution.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        {siteConfig.name} met tout en œuvre pour offrir aux utilisateurs des
        informations et outils disponibles et vérifiés, mais ne saurait être
        tenue responsable des erreurs, indisponibilités ou conséquences de
        l&apos;utilisation du site.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas
        de litige, et après tentative de recherche d&apos;une solution amiable,
        compétence est attribuée aux tribunaux français.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez
        nous contacter à : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPageLayout>
  );
}
