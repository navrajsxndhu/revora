import React from "react";
import { Share2, GitMerge, Waypoints, Network, Radar, BrainCircuit, Telescope, BarChart3, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Relationship Graph", path: "/intelligence-fabric/relationships", icon: Share2, color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
    { name: "Correlation Engine", path: "/intelligence-fabric/correlations", icon: GitMerge, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Dependency Explorer", path: "/intelligence-fabric/dependencies", icon: Waypoints, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Business Context", path: "/intelligence-fabric/context", icon: Network, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Impact Analyzer", path: "/intelligence-fabric/impact", icon: Radar, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Decision Intel", path: "/intelligence-fabric/decisions", icon: BrainCircuit, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Insight Discovery", path: "/intelligence-fabric/insights", icon: Telescope, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Intelligence Analytics", path: "/intelligence-fabric/analytics", icon: BarChart3, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/intelligence-fabric/governance", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/intelligence-fabric/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Intelligence Fabric (REIF)"
      description="The constitutional knowledge graph connecting every asset, policy, and workflow."
      icon={Share2}
      iconColor="text-teal-500"
      modules={modules}
    />
  );
}
