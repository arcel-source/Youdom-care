import Button from "@/components/ui/Button";
import { upcomingInterventions, pastInterventions, account } from "../_data";
import { DashHeader, Panel, StatusPill, Stars, StatCard } from "../_components/ui";

export default function PlanningPage() {
  const totalUpcomingHours = upcomingInterventions.reduce((s, i) => s + i.hours, 0);

  return (
    <div className="space-y-6">
      <DashHeader
        eyebrow="Planning"
        title="Vos interventions"
        subtitle={`Auxiliaire principale : ${account.caregiver.name} · binôme : ${account.caregiver.backup}`}
        action={
          <Button href="/contact" variant="outline" size="sm">
            Demander un changement
          </Button>
        }
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="À venir" value={`${upcomingInterventions.length}`} hint="interventions" tone="primary" />
        <StatCard label="Heures à venir" value={`${totalUpcomingHours} h`} hint="planifiées" tone="accent" />
        <StatCard label="Ce mois" value="30 h" hint="déjà réalisées" tone="success" />
        <StatCard label="Fréquence" value="3×/sem." hint="lun · mer · ven" tone="warm" />
      </div>

      <Panel title="À venir">
        <ol className="relative border-l-2 border-primary-100 ml-3 space-y-5">
          {upcomingInterventions.map((i) => (
            <li key={i.id} className="ml-6">
              <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary border-2 border-white" aria-hidden="true" />
              <div className="p-4 rounded-xl border border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-sm font-bold text-primary-dark">{i.label}</span>
                  <span className="text-sm text-text-light">· {i.time}</span>
                  <StatusPill status={i.status} />
                </div>
                <div className="text-sm text-text">{i.type}</div>
                <div className="text-xs text-text-light mt-1.5 flex items-center gap-3 flex-wrap">
                  <span>👤 {i.caregiver}</span>
                  <span>⏱️ {i.hours} h</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel title="Historique">
        <ul className="divide-y divide-border">
          {pastInterventions.map((p) => (
            <li key={p.id} className="py-3.5 flex items-start gap-4">
              <div className="w-28 shrink-0">
                <div className="text-sm font-semibold text-primary-dark">{p.label}</div>
                <div className="text-xs text-text-muted">{p.hours} h · {p.caregiver}</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-light">{p.note}</p>
              </div>
              <div className="shrink-0">
                <Stars rating={p.rating} />
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
