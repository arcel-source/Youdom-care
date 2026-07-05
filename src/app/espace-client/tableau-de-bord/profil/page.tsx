import { siteConfig } from "@/lib/site-config";
import { account } from "../_data";
import { DashHeader, Panel, Avatar } from "../_components/ui";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider font-bold text-text-muted">{label}</dt>
      <dd className="text-sm font-semibold text-primary-dark mt-0.5">{value}</dd>
    </div>
  );
}

function Toggle({ label, on }: { label: string; on: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-text">{label}</span>
      <span
        className={`relative inline-flex w-11 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-border"}`}
        aria-hidden="true"
      >
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </span>
    </div>
  );
}

export default function ProfilPage() {
  return (
    <div className="space-y-6">
      <DashHeader
        eyebrow="Mon profil"
        title="Votre compte"
        subtitle="Coordonnées, bénéficiaire, contacts et préférences."
      />

      {/* En-tête profil */}
      <Panel>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold shrink-0">
            {account.clientFirstName[0]}{account.clientLastName[0]}
          </div>
          <div className="flex-1">
            <h2 className="text-lg text-primary-dark m-0">{account.clientFirstName} {account.clientLastName}</h2>
            <p className="text-sm text-text-light">{account.relation} · Client depuis {account.clientSince}</p>
          </div>
          <button type="button" className="px-4 py-2 rounded-lg border-2 border-border text-sm font-bold text-primary-dark hover:border-primary transition-colors self-start">
            Modifier
          </button>
        </div>
      </Panel>

      <div className="grid md:grid-cols-2 gap-6">
        <Panel title="Bénéficiaire">
          <dl className="grid grid-cols-2 gap-4">
            <Field label="Nom" value={account.beneficiary} />
            <Field label="Âge" value={`${account.beneficiaryAge} ans`} />
            <Field label="Ville" value={account.city} />
            <Field label="Plan d'aide" value={account.plan} />
          </dl>
        </Panel>

        <Panel title="Vos interlocuteurs">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Avatar initials={account.coordinator.initials} />
              <div>
                <div className="text-sm font-bold text-primary-dark">{account.coordinator.name}</div>
                <div className="text-xs text-text-muted">{account.coordinator.role}</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Avatar initials={account.caregiver.initials} tone="accent" />
              <div>
                <div className="text-sm font-bold text-primary-dark">{account.caregiver.name}</div>
                <div className="text-xs text-text-muted">{account.caregiver.role} · depuis {account.caregiver.since}</div>
              </div>
            </li>
          </ul>
          <a
            href={`tel:${siteConfig.phone.mainE164}`}
            className="mt-4 block text-center text-sm font-bold bg-primary-50 text-primary rounded-xl py-2.5 hover:bg-primary-100 transition-colors"
          >
            📞 {siteConfig.phone.main}
          </a>
        </Panel>

        <Panel title="Coordonnées">
          <dl className="space-y-4">
            <Field label="Email" value="marie.thibault@exemple.fr" />
            <Field label="Téléphone" value="06 12 34 56 78" />
            <Field label="Adresse de facturation" value="14 rue Crozatier, 75012 Paris" />
          </dl>
        </Panel>

        <Panel title="Préférences de notification">
          <div className="divide-y divide-border">
            <Toggle label="Rappel avant chaque intervention" on />
            <Toggle label="Compte-rendu après intervention" on />
            <Toggle label="Nouveau message de l'équipe" on />
            <Toggle label="Newsletter mensuelle" on={false} />
          </div>
        </Panel>
      </div>

      <Panel title="Sécurité">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-primary-dark">Mot de passe</div>
            <p className="text-xs text-text-muted">Dernière modification il y a 3 mois.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" className="px-4 py-2 rounded-lg border-2 border-border text-sm font-bold text-primary-dark hover:border-primary transition-colors">
              Changer le mot de passe
            </button>
            <button type="button" className="px-4 py-2 rounded-lg text-sm font-bold text-danger hover:bg-danger-50 transition-colors">
              Se déconnecter
            </button>
          </div>
        </div>
      </Panel>
    </div>
  );
}
