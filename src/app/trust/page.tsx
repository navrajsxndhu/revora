import React from "react";
import { ShieldCheck, MessageSquare, Unlock, Eye, FileCode, History, HeartHandshake, BarChart2, Terminal } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Explainable Decisions", path: "/trust/explanations", icon: MessageSquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Permission Transparency", path: "/trust/permissions", icon: Unlock, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Privacy & Data", path: "/trust/privacy", icon: Eye, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Policy Intelligence", path: "/trust/policies", icon: FileCode, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Activity Timeline", path: "/trust/timeline", icon: History, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Confidence Center", path: "/trust/confidence", icon: HeartHandshake, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Transparency Analytics", path: "/trust/analytics", icon: BarChart2, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/trust/governance", icon: ShieldCheck, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Confidence Simulator", path: "/trust/simulator", icon: Terminal, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/trust/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Trust, Security & Transparency OS (RTSTOS)"
      description="Executive dashboard governing enterprise confidence, explainable security, and privacy transparency."
      icon={ShieldCheck}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
