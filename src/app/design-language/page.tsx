import React from "react";
import { Paintbrush, Layers, Component, Wand2, Palette, Type, Sparkle, Sparkles, BarChart2, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Token Registry", path: "/design-language/tokens", icon: Layers, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Component Library", path: "/design-language/components", icon: Component, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Motion Studio", path: "/design-language/motion", icon: Wand2, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Theme System", path: "/design-language/themes", icon: Palette, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Typography", path: "/design-language/typography", icon: Type, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Iconography", path: "/design-language/icons", icon: Sparkle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Experience Polish", path: "/design-language/polish", icon: Sparkles, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Design Analytics", path: "/design-language/analytics", icon: BarChart2, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Governance Board", path: "/design-language/governance", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/design-language/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Design Language (REDL)"
      description="The constitutional visual system governing every pixel, token, and micro-interaction."
      icon={Paintbrush}
      iconColor="text-orange-500"
      modules={modules}
    />
  );
}
