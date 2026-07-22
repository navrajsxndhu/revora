import React from "react";
import { Presentation, Target, Crosshair, LayoutTemplate, TrendingUp, Compass, Lightbulb, BarChart3, Scale, FileText, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "KPI Registry", path: "/business-intelligence/kpis", icon: Target, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Strategic Objectives", path: "/business-intelligence/objectives", icon: Crosshair, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Executive Scorecards", path: "/business-intelligence/scorecards", icon: LayoutTemplate, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Forecasting Insights", path: "/business-intelligence/forecasting", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Balanced Scorecard", path: "/business-intelligence/balanced-scorecard", icon: Compass, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Decision Center", path: "/business-intelligence/decisions", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "BI Analytics", path: "/business-intelligence/analytics", icon: BarChart3, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Governance Board", path: "/business-intelligence/governance", icon: Scale, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Reporting Studio", path: "/business-intelligence/reports", icon: FileText, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "Evidence Ledger", path: "/business-intelligence/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Business Intelligence (REBIKEDP)"
      description="The constitutional executive decision platform connecting strategy, KPIs, and forecasting with operational execution."
      icon={Presentation}
      iconColor="text-indigo-400"
      modules={modules}
    />
  );
}
