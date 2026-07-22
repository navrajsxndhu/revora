
import React from "react";
import { ArrowLeft, Code2, Search, ShieldCheck, Activity, Target, Download, Settings, History, Database, Network, Key, Layout, Cpu, LineChart, FileCode, CheckCircle2, AlertTriangle, Zap, Server } from "lucide-react";

import Link from "next/link";

import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/engineering/audit" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Repository Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-500" />
              TypeScript Governance Center
            </h1>
            <p className="text-slate-400">Constitutional validation of type safety across the enterprise repository.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Audit Records..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-emerald-900/30 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Type Safety Index
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400">Enterprise wide coverage</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Any Types
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-slate-500">Zero tolerance policy</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Unknown Types
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">45</div>
            <div className="text-xs text-slate-500">Safely cast variables</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Type Drift
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-slate-500">Schema sync verified</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Governance Findings" 
            headers={["File Location", "Violation Type", "Line Number", "Suggestion", "Status", "Evidence"]}
          >
            {[{"loc":"packages/revora-cli/src/index.ts","type":"Unsafe Assignment","line":"42","sugg":"Cast to unknown before type assertion","status":"Pending","trace":"TS-EV-701"},{"loc":"src/lib/api-client.ts","type":"Missing Generic","line":"18","sugg":"Provide <T> for ApiResponse","status":"Warning","trace":"TS-EV-702"},{"loc":"src/types/models.ts","type":"Duplicate Interface","line":"104","sugg":"Merge with IEnterpriseRecord","status":"Warning","trace":"TS-EV-703"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.loc}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.type}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.line}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.sugg}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Critical' || row.status === 'High' || row.status === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.status === 'Warning' || row.status === 'Pending' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.status === 'Passed' || row.status === 'Safe' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
