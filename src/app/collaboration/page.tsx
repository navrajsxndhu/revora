import React from "react";
import Link from "next/link";
import { ArrowRight, Users2, Activity, Layers, FileSignature, Inbox, Megaphone, Calendar, Globe, BarChart2, ShieldCheck, History } from "lucide-react";

export default function CollaborationCommandCenter() {
  const modules = [
    { name: "Presence Intelligence", path: "/collaboration/presence", icon: Activity, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Contextual Workspaces", path: "/collaboration/spaces", icon: Layers, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Collaborative Decisions", path: "/collaboration/decisions", icon: FileSignature, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Async Alignment", path: "/collaboration/async", icon: Inbox, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Enterprise Broadcast", path: "/collaboration/broadcast", icon: Megaphone, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Meeting Governance", path: "/collaboration/meetings", icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Secure External Ops", path: "/collaboration/external", icon: Globe, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Collaboration Analytics", path: "/collaboration/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Governance Board", path: "/collaboration/reviews", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/collaboration/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Users2 className="w-8 h-8 text-cyan-500" />
              Collaboration & Communication OS (RCCOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing real-time presence, async alignment, and human workflow connectivity.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Collaboration Health</span>
               <div className="text-xl font-black text-cyan-400">96.4 A+</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern communication protocols and alignment.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
