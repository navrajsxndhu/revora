import React from "react";
import { MonitorPlay, Columns, Menu, Save, GitCompare, Layout, SearchCode, LineChart, UsersRound, Scale, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Multi-Panel Engine", path: "/digital-workspace/panels", icon: Columns, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Universal Dock", path: "/digital-workspace/dock", icon: Menu, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Memory Engine", path: "/digital-workspace/memory", icon: Save, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Comparison Studio", path: "/digital-workspace/compare", icon: GitCompare, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Canvas Manager", path: "/digital-workspace/canvas", icon: Layout, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Universal Search", path: "/digital-workspace/search", icon: SearchCode, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Workspace Analytics", path: "/digital-workspace/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Collaboration Layer", path: "/digital-workspace/collaboration", icon: UsersRound, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/digital-workspace/governance", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/digital-workspace/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Digital Workspace (REDWS)"
      description="The spatial, multi-panel operating environment governing enterprise operations."
      icon={MonitorPlay}
      iconColor="text-indigo-400"
      modules={modules}
    />
  );
}
