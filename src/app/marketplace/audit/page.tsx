import React from "react";
import Link from "next/link";
import { ArrowLeft, History, Search, Download, ShieldCheck, PlayCircle, KeyRound, Lock, FileSignature, AlertCircle, Fingerprint } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MarketplaceAuditLedger() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Marketplace Audit Ledger</h1>
            <p className="text-slate-400">The immutable audit history for the entire platform ecosystem and extension lifecycle.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Audit Events..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Ledger Integrity
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Verified</div>
            <div className="text-xs text-emerald-400">Cryptographically bound</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Lifecycle Events
              <History className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2M</div>
            <div className="text-xs text-blue-400">Since inception</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Executive Approvals
              <FileSignature className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,120</div>
            <div className="text-xs text-amber-400">Human authorization events</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Interventions
              <Lock className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-rose-400">Runtime blocks logged</div>
          </div>
        </div>

        {/* Audit Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Immutable Platform Audit Trail" 
            headers={["Timestamp (UTC)", "Actor / Extension", "Lifecycle Event", "Policy Context", "Execution Result", "Evidence ID"]}
          >
            {[
              { time: "2026-07-21 15:10:44.120", actor: "ext.salesforce.core", event: "Runtime Execution", ctx: "system.evidence.read", result: "Allowed (Policy OK)", trace: "AUD-EV-1001" },
              { time: "2026-07-21 15:05:12.840", actor: "CFO (Jane Doe)", event: "Human Approval", ctx: "system.finance.write_ledger", result: "Signed (Cryptographic)", trace: "AUD-EV-1002" },
              { time: "2026-07-21 14:45:00.000", actor: "ext.legacy.sap.bridge", event: "Permission Request", ctx: "system.network.egress", result: "Blocked (Zero Trust)", trace: "AUD-EV-1003" },
              { time: "2026-07-21 13:12:33.421", actor: "System Admin (Root)", event: "Install Extension", ctx: "ext.slack.notifications v5.2.0", result: "Success", trace: "AUD-EV-1004" },
              { time: "2026-07-21 10:30:11.990", actor: "ext.finance.forecaster", event: "Version Upgrade", ctx: "v3.0.0 Target", result: "Pending Signature", trace: "AUD-EV-1005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">
                  {row.time}
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-200">
                   <div className="flex items-center gap-2">
                      {row.actor.includes('ext.') ? <PlayCircle className="w-4 h-4 text-blue-500" /> : <Fingerprint className="w-4 h-4 text-amber-500" />}
                      {row.actor}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.event}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   <div className="flex items-center gap-2">
                      <KeyRound className="w-3 h-3 text-slate-500" />
                      {row.ctx}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.result.includes('Allowed') || row.result.includes('Success') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.result.includes('Signed') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    row.result.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.result.includes('Blocked') && <Lock className="w-3 h-3" />}
                    {row.result.includes('Signed') && <FileSignature className="w-3 h-3" />}
                    {row.result}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
