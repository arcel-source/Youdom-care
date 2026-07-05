import type { Metadata } from "next";
import DashboardShell from "./_components/DashboardShell";

export const metadata: Metadata = {
  title: "Espace client — Tableau de bord",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
