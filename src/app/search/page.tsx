import React from "react";
import { Search, Network, MessageSquare, MousePointerClick, Compass, Tags, Sparkles, FolderHeart, BarChart2, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Knowledge Graph", path: "/search/knowledge", icon: Network, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Natural Language", path: "/search/natural", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Universal Actions", path: "/search/actions", icon: MousePointerClick, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Knowledge Explorer", path: "/search/explorer", icon: Compass, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Context Filters", path: "/search/context", icon: Tags, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Recommendation Engine", path: "/search/recommendations", icon: Sparkles, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Saved Collections", path: "/search/collections", icon: FolderHeart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Search Analytics", path: "/search/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Search Governance", path: "/search/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Search Evidence", path: "/search/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Universal Search & Knowledge OS (RSKIOS)"
      description="Executive dashboard governing enterprise knowledge discovery and semantic search."
      icon={Search}
      iconColor="text-cyan-500"
      modules={modules}
    />
  );
}
