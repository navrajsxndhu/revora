
import React from "react";
import { ArrowLeft, Palette, Search, ShieldCheck, Activity, Target, Download, Settings, History, Box, LayoutTemplate, MousePointerClick, Accessibility, Move, MonitorSmartphone, LineChart, FileSignature, CheckCircle2, AlertTriangle, XCircle, FileCode } from "lucide-react";

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
              <Palette className="w-8 h-8 text-blue-500" />
              Enterprise Design System Registry
            </h1>
            <p className="text-slate-400">The constitutional registry for all design assets, tokens, colors, and typography.</p>
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
              Token Standardization
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-indigo-400">No hardcoded hex values</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Tokens
              <Box className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">428</div>
            <div className="text-xs text-slate-500">Active design variables</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Approvals
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-slate-500">Design proposals</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Version
              <History className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">v2.4.1</div>
            <div className="text-xs text-slate-500">Latest core update</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Governance Findings" 
            headers={["Asset Category", "Token / Variable", "Usage Instance", "Approval Status", "Evidence"]}
          >
            {[{"cat":"Color Palette","token":"--tw-color-emerald-500","usage":"High (4,291)","status":"Approved","trace":"DS-EV-1001"},{"cat":"Typography Scale","token":"text-3xl font-bold","usage":"Medium (84)","status":"Approved","trace":"DS-EV-1002"},{"cat":"Spacing System","token":"px-5 py-4","usage":"High (3,102)","status":"Approved","trace":"DS-EV-1003"},{"cat":"Motion Standards","token":"transition-all duration-300","usage":"Pending Audit","status":"Pending Review","trace":"DS-EV-1004"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.cat}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.token}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.usage}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Critical' || row.status === 'Rejected' || row.status === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.status === 'Warning' || row.status === 'Pending Review' || row.status === 'Pending' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.status === 'Passed' || row.status === 'Approved' || row.status === 'Compliant' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
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
