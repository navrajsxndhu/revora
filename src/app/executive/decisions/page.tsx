import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, FileSignature, CheckCircle2, AlertTriangle, ShieldCheck, Download, Search, PlusCircle, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseDecisionCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/executive/situation-room" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Situation Room
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Decision Center</h1>
            <p className="text-slate-400">The constitutional registry where every executive decision becomes a governed, auditable object.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Decisions..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Propose Executive Decision
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Approvals
              <FileSignature className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-xs text-amber-500">Awaiting Board or CxO Sign-off</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Executed Decisions
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-emerald-400">YTD Cryptographically Logged</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Capital Deployed
              <Briefcase className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$42.5M</div>
            <div className="text-xs text-slate-500">Authorized via Platform</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Blocked Decisions
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Failed Governance Checks</div>
          </div>
        </div>

        {/* Decision Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Executive Decision Registry" 
            headers={["Decision ID / Title", "Business Context", "Financial Impact", "Risk Score", "Current Status", "Constitutional Record"]}
          >
            {[
              { id: "DEC-2026-042", title: "Approve $15M Cloud Migration", ctx: "Shift 40% of on-prem workloads to AWS", impact: "$15.0M", risk: "Medium (42)", status: "Pending Approval", trace: "DC-EV-901" },
              { id: "DEC-2026-041", title: "Expand into European Market (DACH)", ctx: "Establish GmbH entity & local data center", impact: "$8.5M", risk: "High (78)", status: "Executed", trace: "DC-EV-899" },
              { id: "DEC-2026-040", title: "Acquire 'DataStream' Vendor", ctx: "Strategic acquisition for Data Platform", impact: "$112.0M", risk: "Critical (94)", status: "In Due Diligence", trace: "DC-EV-895" },
              { id: "DEC-2026-039", title: "Sunset Legacy Analytics Suite", ctx: "EOL declaration and forced migration", impact: "($4.2M) Rev", risk: "Low (12)", status: "Blocked - Compliance", trace: "DC-EV-892" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-blue-400 mb-0.5">{row.id}</span>
                    <span className="font-bold flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                       {row.title} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.ctx}
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                      {row.impact}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium ${
                    row.risk.includes('Critical') || row.risk.includes('High') ? 'text-rose-500' :
                    row.risk.includes('Medium') ? 'text-amber-500' : 'text-emerald-500'
                  }`}>
                    {row.risk}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Executed') ? 'text-emerald-500' : 
                    row.status.includes('Blocked') ? 'text-rose-500' :
                    row.status.includes('Pending') ? 'text-amber-500' : 'text-blue-500'
                  }`}>
                    {row.status.includes('Executed') && <ShieldCheck className="w-4 h-4" />}
                    {row.status.includes('Blocked') && <AlertTriangle className="w-4 h-4" />}
                    {row.status.includes('Pending') && <FileSignature className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Immutable" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
