import React from "react";
import { Users2, Activity, Layers, FileSignature, Inbox, Megaphone, Calendar, Globe, BarChart2, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Presence Intelligence", path: "/collaboration/presence", icon: Activity, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Contextual Workspaces", path: "/collaboration/spaces", icon: Layers, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Collaborative Decisions", path: "/collaboration/decisions", icon: FileSignature, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Async Alignment", path: "/collaboration/async", icon: Inbox, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Enterprise Broadcast", path: "/collaboration/broadcast", icon: Megaphone, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Meeting Governance", path: "/collaboration/meetings", icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Secure External Ops", path: "/collaboration/external", icon: Globe, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Collaboration Analytics", path: "/collaboration/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Governance Board", path: "/collaboration/reviews", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/collaboration/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Collaboration & Communication OS (RCCOS)"
      description="Executive dashboard governing real-time presence, async alignment, and human workflow connectivity."
      icon={Users2}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
