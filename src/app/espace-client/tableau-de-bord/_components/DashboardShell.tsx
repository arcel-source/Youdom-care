"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { account } from "../_data";

const BASE = "/espace-client/tableau-de-bord";

const nav = [
  { href: BASE, label: "Tableau de bord", icon: "🏠", exact: true },
  { href: `${BASE}/planning`, label: "Planning", icon: "📅" },
  { href: `${BASE}/messagerie`, label: "Messagerie", icon: "💬", badge: 1 },
  { href: `${BASE}/factures`, label: "Factures & docs", icon: "🧾" },
  { href: `${BASE}/profil`, label: "Mon profil", icon: "👤" },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = (onClick?: () => void) => (
    <nav className="space-y-1" aria-label="Navigation espace client">
      {nav.map((item) => {
        const active = isActive(pathname, item.href, item.exact);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              active
                ? "bg-primary text-white shadow-soft"
                : "text-text-light hover:bg-primary-50 hover:text-primary-dark"
            }`}
          >
            <span className="text-lg leading-none" aria-hidden="true">
              {item.icon}
            </span>
            <span className="flex-1">{item.label}</span>
            {item.badge ? (
              <span
                className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-xs font-bold ${
                  active ? "bg-white text-primary" : "bg-danger text-white"
                }`}
              >
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-warm-grain">
      {/* Bannière démo */}
      <div className="bg-secondary-50 border-b border-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 flex-wrap text-sm">
          <p className="text-primary-dark">
            <span className="font-bold">🎯 Aperçu démo</span> — données fictives.
            La connexion sécurisée est en cours de déploiement.
          </p>
          <Link href="/espace-client" className="text-primary font-bold hover:underline shrink-0">
            ← Quitter la démo
          </Link>
        </div>
      </div>

      {/* Topbar */}
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border text-primary-dark"
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>

          <Link href={BASE} className="flex items-center gap-2 font-bold text-primary-dark">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white text-sm">
              Y
            </span>
            <span className="hidden sm:inline">Espace client</span>
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Link
              href={`${BASE}/messagerie`}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-primary-50 text-xl"
              aria-label="Messagerie (1 non lu)"
            >
              <span aria-hidden="true">🔔</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-danger" />
            </Link>
            <div className="flex items-center gap-2.5 pl-2 sm:pl-3 sm:border-l border-border">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {account.clientFirstName[0]}
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="text-sm font-bold text-primary-dark">
                  {account.clientFirstName} {account.clientLastName}
                </div>
                <div className="text-xs text-text-muted">{account.relation}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-8">
          {/* Sidebar desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-border p-3 shadow-card">
                {navLinks()}
              </div>
              <div className="bg-primary text-white rounded-2xl p-4">
                <div className="text-xs uppercase tracking-wider text-white/70 font-bold mb-2">
                  Votre coordinatrice
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-sm font-bold">
                    {account.coordinator.initials}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-bold">{account.coordinator.name}</div>
                    <div className="text-xs text-white/70">{account.coordinator.availability}</div>
                  </div>
                </div>
                <Link
                  href={`${BASE}/messagerie`}
                  className="mt-3 block text-center text-xs font-bold bg-secondary text-primary-dark rounded-lg py-2 hover:bg-secondary-light transition-colors"
                >
                  Envoyer un message
                </Link>
              </div>
            </div>
          </aside>

          {/* Contenu */}
          <main className="min-w-0">{children}</main>
        </div>
      </div>

      {/* Drawer mobile */}
      {open ? (
        <div className="lg:hidden fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-white p-4 shadow-lifted overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-primary-dark">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-lg border border-border text-text-light"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            {navLinks(() => setOpen(false))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
