import React from "react";
import Link from "next/link";
import { ArrowRight, Share2, Waypoints, GitMerge, Radar, BrainCircuit, Telescope, Network, BarChart3, ShieldCheck, History } from "lucide-react";

export default function IntelligenceFabricCenter() {
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
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Share2 className="w-8 h-8 text-teal-500" />
              Enterprise Intelligence Fabric (REIF)
            </h1>
            <p className="text-slate-400">The constitutional knowledge graph connecting every asset, policy, and workflow.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-teal-950/30 border border-teal-900/50 rounded-md">
               <span className="text-xs text-teal-500 font-bold uppercase tracking-wider block mb-1">Knowledge State</span>
               <div className="text-xl font-black text-teal-400">Unified</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 overflow-y-auto pb-12 content-start">
          {modules.map((m, i) => (
            <Link key={i} href={m.path} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/60 hover:border-slate-700 transition-all group flex flex-col h-full">
              <div className={`w-10 h-10 rounded-lg ${m.bg} ${m.border} border flex items-center justify-center mb-4 shrink-0`}>
                <m.icon className={`w-5 h-5 ${m.color}`} />
              </div>
              <div className="font-bold text-slate-200 mb-1">{m.name}</div>
              <div className="text-xs text-slate-500 flex-1">Govern enterprise knowledge graph.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-teal-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
