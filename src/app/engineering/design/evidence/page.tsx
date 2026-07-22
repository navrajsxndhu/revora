
import React from "react";
import { ArrowLeft, History, Search, ShieldCheck, Activity, Target, Download, Settings, Palette, Box, LayoutTemplate, MousePointerClick, Accessibility, Move, MonitorSmartphone, LineChart, FileSignature, CheckCircle2, AlertTriangle, XCircle, FileCode } from "lucide-react";

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
              <Link href="/engineering/design" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Design Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <History className="w-8 h-8 text-blue-500" />
              Enterprise Design Evidence Ledger
            </h1>
            <p className="text-slate-400">Immutable constitutional ledger for design governance. Nothing changes without evidence.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Design Records..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(99,102,241,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Design Traces
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8,492</div>
            <div className="text-xs text-blue-400">Cryptographic UI records</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Human Approvals
              <Users className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,420</div>
            <div className="text-xs text-slate-500">Executive decisions</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Ledger Integrity
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Verified</div>
            <div className="text-xs text-slate-500">Hash chain valid</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Policies
              <FileCode className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-slate-500">UX rules enforced</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Governance Findings" 
            headers={["Execution ID", "Timestamp", "Actor / Source", "Action Performed", "Policy Decision", "EvidenceBadge"]}
          >
            {[{"id":"EXE-D-9014","time":"2026-07-22T08:14:00Z","actor":"Automated A11y Audit","action":"Accessibility Scan Completed","status":"Passed","trace":"EV-D-9014"},{"id":"EXE-D-9013","time":"2026-07-22T08:10:22Z","actor":"System Governance","action":"Layout Validation","status":"Passed","trace":"EV-D-9013"},{"id":"EXE-D-9012","time":"2026-07-21T16:45:00Z","actor":"David Wright (VP Design)","action":"Approved Token Migration","status":"Approved","trace":"EV-D-9012"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.id}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.time}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.actor}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.action}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.status}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.trace}
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
