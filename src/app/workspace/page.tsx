import React from "react";
import { LayoutDashboard, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Unified Timeline", path: "/workspace/timeline", icon: Clock, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Enterprise Activity", path: "/workspace/activity", icon: ActivitySquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Unified Approvals", path: "/workspace/approvals", icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Situation Room", path: "/workspace/situation", icon: AlertOctagon, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Organizational Health", path: "/workspace/health", icon: HeartPulse, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Enterprise Assistant", path: "/workspace/assistant", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Navigation Intel", path: "/workspace/navigation", icon: Navigation, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Workspace Analytics", path: "/workspace/analytics", icon: BarChart3, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/workspace/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/workspace/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Unified Enterprise Command Center (RECCOS)"
      description="The constitutional landing experience for the entire Enterprise Operating System."
      icon={LayoutDashboard}
      iconColor="text-fuchsia-500"
      modules={modules}
    />
  );
}
