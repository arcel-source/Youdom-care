import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import {
  account,
  upcomingInterventions,
  pastInterventions,
  messages,
  invoices,
  monthlyHours,
  monthPlan,
} from "./_data";
import { DashHeader, Panel, StatCard, StatusPill, Avatar, Stars } from "./_components/ui";

const BASE = "/espace-client/tableau-de-bord";

export default function DashboardOverviewPage() {
  const maxHours = Math.max(...monthlyHours.map((m) => m.hours));
  const progress = Math.round((monthPlan.done / monthPlan.planned) * 100);
  const nextIv = upcomingInterventions[0];

  return (
    <div className="space-y-6">
      <DashHeader
        eyebrow="Tableau de bord"
        title={`Bonjour ${account.clientFirstName} 👋`}
        subtitle={`Accompagnement de ${account.beneficiary} · ${account.city}`}
        action={
          <Button href="/demander-devis" variant="primary" size="sm" glow>
            Ajuster mon plan d&apos;aide
          </Button>
        }
      />

      {/* Prochaine intervention — bandeau mis en avant */}
      <div className="bg-primary text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5 shadow-soft">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="text-center shrink-0 bg-white/10 rounded-xl px-4 py-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white/70">
              {nextIv.label.split(" ")[0]}
            </div>
            <div className="text-2xl font-bold leading-none">
              {nextIv.label.split(" ").slice(1).join(" ")}
            </div>
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider font-bold text-white/60 mb-1">
              Prochaine intervention
            </div>
            <div className="font-bold">{nextIv.time} · {nextIv.caregiver}</div>
            <div className="text-sm text-white/80 truncate">{nextIv.type}</div>
          </div>
        </div>
        <Link
          href={`${BASE}/planning`}
          className="shrink-0 text-center text-sm font-bold bg-secondary text-primary-dark rounded-xl px-5 py-2.5 hover:bg-secondary-light transition-colors"
        >
          Voir le planning
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Heures ce mois" value={`${monthPlan.done} h`} hint={`sur ${monthPlan.planned} h prévues`} tone="primary" />
        <StatCard label="Interventions restantes" value={`${upcomingInterventions.length}`} hint="d'ici la fin du mois" tone="accent" />
        <StatCard label="Reste à charge" value="384 €" hint="après crédit d'impôt 50 %" tone="success" />
        <StatCard label="Score qualité" value="9,7/10" hint="sur 11 évaluations" tone="warm" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-6">
          <Panel title="Prochaines interventions" action="Planning complet →" actionHref={`${BASE}/planning`}>
            <ul className="space-y-3">
              {upcomingInterventions.slice(0, 3).map((i) => (
                <li
                  key={i.id}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <div className="text-center shrink-0 px-3 py-2 bg-primary-50 rounded-lg">
                    <div className="text-xs uppercase tracking-wider font-bold text-primary">
                      {i.label.split(" ")[0]}
                    </div>
                    <div className="text-lg font-bold text-primary-dark leading-none mt-0.5">
                      {i.label.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-sm font-semibold text-primary-dark">{i.time}</span>
                      <StatusPill status={i.status} />
                    </div>
                    <div className="text-sm text-text">{i.type}</div>
                    <div className="text-xs text-text-light mt-1">👤 {i.caregiver}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Consommation d'heures — mini graphe */}
          <Panel title="Consommation d'heures">
            <div className="flex items-end justify-between gap-3 h-40">
              {monthlyHours.map((m, idx) => {
                const h = Math.round((m.hours / maxHours) * 100);
                const current = idx === monthlyHours.length - 1;
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-xs font-bold text-text-light">{m.hours}</span>
                    <div
                      className={`w-full rounded-t-lg ${current ? "bg-secondary" : "bg-primary/80"}`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-xs text-text-muted">{m.month}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-text-muted mt-4">
              Mois en cours ({monthPlan.done} h) en jaune. Objectif mensuel : {monthPlan.planned} h.
            </p>
          </Panel>

          <Panel title="Historique récent" action="Tout l'historique →" actionHref={`${BASE}/planning`}>
            <ul className="space-y-3">
              {pastInterventions.slice(0, 3).map((p) => (
                <li key={p.id} className="flex items-start gap-4 p-3 rounded-lg bg-warm">
                  <div className="text-xs text-text-muted shrink-0 w-24">{p.label}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-primary-dark">{p.hours} h · {p.caregiver}</span>
                      <Stars rating={p.rating} />
                    </div>
                    <div className="text-xs text-text-light">{p.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-6">
          {/* Objectif mensuel — anneau */}
          <Panel title="Plan du mois">
            <div className="flex items-center gap-5">
              <div
                className="relative w-24 h-24 rounded-full shrink-0"
                style={{
                  background: `conic-gradient(var(--color-primary) ${progress * 3.6}deg, var(--color-border-light) 0deg)`,
                }}
              >
                <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-primary-dark leading-none">{progress}%</span>
                  <span className="text-[10px] text-text-muted">réalisé</span>
                </div>
              </div>
              <div className="text-sm text-text-light">
                <div className="font-semibold text-primary-dark">{monthPlan.done} h / {monthPlan.planned} h</div>
                <div className="mt-1">{monthPlan.planned - monthPlan.done} h encore planifiées ce mois.</div>
              </div>
            </div>
          </Panel>

          <Panel title="Messagerie" action="Tous les messages →" actionHref={`${BASE}/messagerie`}>
            <ul className="space-y-3">
              {messages.slice(0, 2).map((m) => (
                <li key={m.id} className="flex gap-3">
                  <Avatar initials={m.initials} tone={m.role.includes("Auxiliaire") ? "accent" : "primary"} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary-dark truncate">{m.from}</span>
                      {m.unread ? <span className="w-2 h-2 rounded-full bg-danger shrink-0" /> : null}
                    </div>
                    <p className="text-xs text-text-light line-clamp-2">{m.preview}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Dernière facture" action="Toutes les factures →" actionHref={`${BASE}/factures`}>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-primary-dark">{invoices[0].period}</div>
                <div className="text-xs text-text-muted truncate">{invoices[0].id} · {invoices[0].date}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-bold text-primary-dark">{invoices[0].gross} €</div>
                <StatusPill status={invoices[0].status} />
              </div>
            </div>
          </Panel>

          <div className="bg-accent-50 border border-accent/20 rounded-2xl p-5">
            <div className="text-2xl mb-2" aria-hidden="true">📞</div>
            <h2 className="font-bold text-base text-primary-dark mb-1">Besoin d&apos;aide ?</h2>
            <p className="text-sm text-text-light mb-4 leading-snug">
              {account.coordinator.name} vous répond {account.coordinator.availability.toLowerCase()}.
            </p>
            <a
              href={`tel:${siteConfig.phone.mainE164}`}
              className="block w-full px-4 py-2.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-center text-sm transition-colors"
            >
              {siteConfig.phone.main}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
