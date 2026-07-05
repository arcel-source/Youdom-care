import { invoices, documents } from "../_data";
import { DashHeader, Panel, StatusPill, StatCard } from "../_components/ui";

export default function FacturesPage() {
  const totalGross = invoices.reduce((s, i) => s + i.gross, 0);
  const totalCredit = invoices.reduce((s, i) => s + i.credit, 0);

  return (
    <div className="space-y-6">
      <DashHeader
        eyebrow="Factures & documents"
        title="Vos justificatifs"
        subtitle="Factures mensuelles, attestation fiscale et documents contractuels."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard label="Total facturé 2026" value={`${totalGross.toLocaleString("fr-FR")} €`} hint="4 factures" tone="primary" />
        <StatCard label="Crédit d'impôt" value={`${totalCredit.toLocaleString("fr-FR")} €`} hint="50 % récupérables" tone="success" />
        <StatCard label="Reste à charge réel" value={`${(totalGross - totalCredit).toLocaleString("fr-FR")} €`} hint="après crédit d'impôt" tone="accent" />
      </div>

      <Panel title="Factures">
        {/* En-têtes (desktop) */}
        <div className="hidden sm:grid grid-cols-[1.4fr_1fr_1fr_0.8fr_auto] gap-3 px-3 pb-2 text-xs uppercase tracking-wider font-bold text-text-muted border-b border-border">
          <span>Période</span>
          <span>Montant</span>
          <span>Crédit d&apos;impôt</span>
          <span>Statut</span>
          <span className="text-right">PDF</span>
        </div>
        <ul className="divide-y divide-border">
          {invoices.map((inv) => (
            <li key={inv.id} className="grid grid-cols-2 sm:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto] gap-x-3 gap-y-1 items-center px-3 py-3.5">
              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-semibold text-primary-dark">{inv.period}</div>
                <div className="text-xs text-text-muted">{inv.id} · {inv.date}</div>
              </div>
              <div className="text-sm font-bold text-primary-dark sm:font-semibold">{inv.gross} €</div>
              <div className="text-sm text-success font-semibold">− {inv.credit} €</div>
              <div><StatusPill status={inv.status} /></div>
              <div className="col-span-2 sm:col-span-1 sm:text-right mt-2 sm:mt-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span aria-hidden="true">📥</span> Télécharger
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="grid md:grid-cols-2 gap-6">
        <Panel title="Attestation fiscale">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center text-2xl shrink-0" aria-hidden="true">
              🧾
            </div>
            <div>
              <div className="text-sm font-bold text-primary-dark">Attestation fiscale 2025</div>
              <p className="text-xs text-text-light mt-1 mb-3">
                Document à joindre à votre déclaration de revenus pour bénéficier du
                crédit d&apos;impôt de 50 % sur les services à la personne.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-light transition-colors"
              >
                <span aria-hidden="true">📥</span> Télécharger l&apos;attestation
              </button>
            </div>
          </div>
        </Panel>

        <Panel title="Mes documents">
          <ul className="divide-y divide-border">
            {documents.map((d) => (
              <li key={d.id} className="flex items-center gap-3 py-3">
                <span className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-sm shrink-0" aria-hidden="true">
                  📄
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-primary-dark truncate">{d.label}</div>
                  <div className="text-xs text-text-muted">{d.type} · {d.size} · {d.date}</div>
                </div>
                <button type="button" className="text-xs font-bold text-primary hover:underline shrink-0">
                  Ouvrir
                </button>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
