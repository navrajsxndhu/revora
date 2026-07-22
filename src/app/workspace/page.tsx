import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, ShieldCheck, History } from "lucide-react";

export default function WorkspaceCommandCenter() {
  const modules = [
    { name: "Unified Timeline", path: "/workspace/timeline", icon: Clock, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Enterprise Activity", path: "/workspace/activity", icon: ActivitySquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Unified Approvals", path: "/workspace/approvals", icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Situation Room", path: "/workspace/situation", icon: AlertOctagon, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Organizational Health", path: "/workspace/health", icon: HeartPulse, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Enterprise Assistant", path: "/workspace/assistant", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Navigation Intel", path: "/workspace/navigation", icon: Navigation, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Workspace Analytics", path: "/workspace/analytics", icon: BarChart3, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/workspace/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/workspace/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-fuchsia-500" />
              Unified Enterprise Command Center (RECCOS)
            </h1>
            <p className="text-slate-400">The constitutional landing experience for the entire Enterprise Operating System.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-fuchsia-950/30 border border-fuchsia-900/50 rounded-md">
               <span className="text-xs text-fuchsia-500 font-bold uppercase tracking-wider block mb-1">Executive Rule</span>
               <div className="text-xl font-black text-fuchsia-400">10-Second Intel</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern unified enterprise intelligence.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-fuchsia-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
