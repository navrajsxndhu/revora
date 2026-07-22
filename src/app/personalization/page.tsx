import React from "react";
import { UserCircle2, LayoutDashboard, Box, Star, Target, Bell, BrainCircuit, Layers, LineChart, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Adaptive Workspaces", path: "/personalization/workspaces", icon: LayoutDashboard, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Smart Widgets", path: "/personalization/widgets", icon: Box, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Intelligent Favorites", path: "/personalization/favorites", icon: Star, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Productivity Focus", path: "/personalization/focus", icon: Target, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Adaptive Notifications", path: "/personalization/notifications", icon: Bell, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Productivity Insights", path: "/personalization/insights", icon: BrainCircuit, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Workspace Templates", path: "/personalization/templates", icon: Layers, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Personalization Analytics", path: "/personalization/analytics", icon: LineChart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/personalization/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/personalization/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Personalization & Adaptive OS (RPAWPOS)"
      description="Executive dashboard governing intelligent workspace adaptation, productivity, and focus states."
      icon={UserCircle2}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
