import Link from "next/link";
import type { InterventionStatus, InvoiceStatus } from "../_data";

/** En-tête de page interne du tableau de bord. */
export function DashHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="m-0 text-3xl sm:text-4xl">{title}</h1>
        {subtitle ? <p className="text-text-light mt-1.5">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  tone = "primary",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "primary" | "accent" | "success" | "warm";
}) {
  const map: Record<string, string> = {
    primary: "bg-primary-50 border-primary/15",
    accent: "bg-accent-50 border-accent/15",
    success: "bg-success-50 border-success/15",
    warm: "bg-secondary-50 border-secondary/20",
  };
  return (
    <div className={`rounded-2xl p-4 sm:p-5 border ${map[tone]}`}>
      <div className="text-xs uppercase tracking-wider font-bold text-text-muted mb-1.5">
        {label}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-primary-dark leading-none">
        {value}
      </div>
      {hint ? <div className="text-xs text-text-light mt-1.5">{hint}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  action,
  actionHref,
  children,
  className = "",
}: {
  title?: string;
  action?: string;
  actionHref?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white rounded-2xl border border-border shadow-card p-5 sm:p-6 ${className}`}>
      {title ? (
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-base text-primary-dark m-0">{title}</h2>
          {action ? (
            <Link
              href={actionHref ?? "#"}
              className="text-xs font-bold text-primary hover:underline shrink-0"
            >
              {action}
            </Link>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function StatusPill({ status }: { status: InterventionStatus | InvoiceStatus }) {
  const map: Record<string, { label: string; className: string }> = {
    confirmed: { label: "Confirmé", className: "bg-success-50 text-success" },
    tentative: { label: "À confirmer", className: "bg-warm text-text-muted" },
    done: { label: "Terminé", className: "bg-primary-50 text-primary" },
    paid: { label: "Payée", className: "bg-success-50 text-success" },
    pending: { label: "En attente", className: "bg-secondary-50 text-secondary-dark" },
  };
  const s = map[status];
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${s.className}`}>
      {s.label}
    </span>
  );
}

export function Avatar({ initials, tone = "primary" }: { initials: string; tone?: "primary" | "accent" }) {
  const cls = tone === "accent" ? "bg-accent-50 text-accent-dark" : "bg-primary-50 text-primary";
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${cls}`}>
      {initials}
    </div>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-secondary text-sm" aria-label={`${rating} sur 5`}>
      <span aria-hidden="true">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>
    </span>
  );
}
