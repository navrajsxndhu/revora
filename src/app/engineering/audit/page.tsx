
import React from "react";
import { ArrowRight, ShieldCheck, FileCode2, Network, Layout, Box, Code2, Database, Zap, LineChart, History } from "lucide-react";



import Link from "next/link";


export default function EngineeringAuditDashboard() {
  const modules = [
    { name: "Dead Code Governance", path: "/engineering/audit/dead-code", icon: FileCode2, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Import & Dependency", path: "/engineering/audit/imports", icon: Network, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Route & Navigation", path: "/engineering/audit/routes", icon: Layout, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Component Quality", path: "/engineering/audit/components", icon: Box, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "TypeScript Governance", path: "/engineering/audit/types", icon: Code2, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Prisma & Data Layer", path: "/engineering/audit/prisma", icon: Database, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Performance Center", path: "/engineering/audit/performance", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Security & Compliance", path: "/engineering/audit/security", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Engineering Analytics", path: "/engineering/audit/analytics", icon: LineChart, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Repository Evidence Ledger", path: "/engineering/audit/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              Enterprise Repository Command Center
            </h1>
            <p className="text-slate-400">Executive dashboard for repository governance, codebase auditing, and technical quality assurance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-emerald-950/30 border border-emerald-900/50 rounded-md">
               <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider block mb-1">Engineering Health</span>
               <div className="text-xl font-black text-emerald-400">98.4 A+</div>
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
              <div className="text-xs text-slate-500 flex-1">View comprehensive governance and audit trace data.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
