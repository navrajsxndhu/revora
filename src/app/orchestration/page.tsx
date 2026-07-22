import React from "react";
import { Workflow, PenTool, GitPullRequest, UserCheck, Library, Plug, PlayCircle, LineChart, Scale, ListChecks, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Visual Workflow Designer", path: "/orchestration/designer", icon: PenTool, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Constitutional Workflow Engine", path: "/orchestration/workflows", icon: GitPullRequest, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Human Approvals", path: "/orchestration/approvals", icon: UserCheck, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Process Library", path: "/orchestration/library", icon: Library, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Integration Hub", path: "/orchestration/integrations", icon: Plug, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Simulation Studio", path: "/orchestration/simulation", icon: PlayCircle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Execution Analytics", path: "/orchestration/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Governance Board", path: "/orchestration/governance", icon: Scale, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Automation Registry", path: "/orchestration/registry", icon: ListChecks, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/orchestration/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Autonomous Enterprise Orchestration (RAEOP)"
      description="The constitutional execution engine orchestrating cross-domain workflows with strict human-in-the-loop governance."
      icon={Workflow}
      iconColor="text-indigo-400"
      modules={modules}
    />
  );
}
