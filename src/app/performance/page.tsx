import React from "react";
import { Gauge, Wind, Loader2, MousePointerClick, Maximize, Layers, Cpu, Sparkles, BarChart2, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Motion Design", path: "/performance/motion", icon: Wind, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Intelligent Loading", path: "/performance/loading", icon: Loader2, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Feedback Engine", path: "/performance/feedback", icon: MousePointerClick, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Responsiveness", path: "/performance/responsive", icon: Maximize, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Visual Stability", path: "/performance/stability", icon: Layers, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Resource Optimization", path: "/performance/resources", icon: Cpu, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Delight Engine", path: "/performance/delight", icon: Sparkles, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Performance Analytics", path: "/performance/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Governance Board", path: "/performance/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/performance/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Performance, Motion & Delight OS (RPMDOS)"
      description="Executive dashboard governing perceived performance, visual stability, and interaction elegance."
      icon={Gauge}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
