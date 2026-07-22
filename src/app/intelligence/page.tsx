import React from "react";
import { BrainCircuit, LayoutDashboard, Map, BookOpen, ClipboardList, Network, Brain, GraduationCap, Target, BarChart2, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Adaptive Workspace", path: "/intelligence/workspace", icon: LayoutDashboard, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Predictive Guidance", path: "/intelligence/guidance", icon: Map, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Executive Briefing", path: "/intelligence/briefing", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Smart Work Queue", path: "/intelligence/work", icon: ClipboardList, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Enterprise Context", path: "/intelligence/context", icon: Network, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Decision Intelligence", path: "/intelligence/decisions", icon: Brain, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Learning Center", path: "/intelligence/learning", icon: GraduationCap, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Enterprise Focus Mode", path: "/intelligence/focus", icon: Target, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
    { name: "Intelligence Analytics", path: "/intelligence/analytics", icon: BarChart2, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Intelligence Evidence", path: "/intelligence/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Revora Intelligence Operating System (RIOS)"
      description="Executive dashboard for predictive guidance and adaptive enterprise experience."
      icon={BrainCircuit}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
