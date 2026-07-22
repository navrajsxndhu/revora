import React from "react";
import { GraduationCap, Smile, Map, Lightbulb, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "First-Run Experience", path: "/adoption/welcome", icon: Smile, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Guided Workflows", path: "/adoption/workflows", icon: Map, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Contextual Learning", path: "/adoption/learning", icon: Lightbulb, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Feature Discovery", path: "/adoption/discovery", icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Enterprise Help", path: "/adoption/help", icon: HeartHandshake, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "User Journeys", path: "/adoption/journeys", icon: Network, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Achievement Center", path: "/adoption/achievements", icon: Award, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Adoption Analytics", path: "/adoption/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Adoption Reviews", path: "/adoption/reviews", icon: FileSignature, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Adoption Evidence", path: "/adoption/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Revora Adoption Operating System (RAOS)"
      description="Executive dashboard governing enterprise onboarding and zero-learning-curve workflows."
      icon={GraduationCap}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
