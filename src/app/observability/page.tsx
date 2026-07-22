import React from "react";
import { Activity, RadioTower, HeartPulse, Siren, ShieldCheck, HardDrive, Network, LineChart, Scale, Flame, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Telemetry Explorer", path: "/observability/telemetry", icon: RadioTower, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Service Health", path: "/observability/services", icon: HeartPulse, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Incident Intelligence", path: "/observability/incidents", icon: Siren, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Reliability Center", path: "/observability/reliability", icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Capacity Intelligence", path: "/observability/capacity", icon: HardDrive, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Dependency Map", path: "/observability/dependencies", icon: Network, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Operational Analytics", path: "/observability/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Governance Board", path: "/observability/governance", icon: Scale, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Resilience Simulator", path: "/observability/resilience", icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "Evidence Ledger", path: "/observability/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Observability (REOROIP)"
      description="The constitutional governance engine for operational health, reliability engineering, and capacity intelligence."
      icon={Activity}
      iconColor="text-indigo-400"
        statusLabel="Platform Status"
        statusValue="All Systems Operational"
      modules={modules}
    />
  );
}
