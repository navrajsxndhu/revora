import React from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Search, Download, ShieldAlert, CheckCircle2, Lock, FileSignature, AlertTriangle, UserCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ExtensionPermissionsGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Extension Permissions Governance</h1>
            <p className="text-slate-400">A centralized RBAC/ABAC governance matrix controlling extension privileges across the enterprise.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Permission Scopes..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Matrix
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Critical Access Grants
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-rose-400">High-risk scopes granted</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Read-Only Scopes
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-emerald-400">Non-mutating privileges</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Approvals
              <FileSignature className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-amber-400">Awaiting human sign-off</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Interventions
              <Lock className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-indigo-400">Blocked out-of-scope calls</div>
          </div>
        </div>

        {/* Permissions Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Permission Boundary Matrix" 
            headers={["Extension ID", "Requested Scope", "Risk Tier", "Required Approval", "Grant Status", "Ledger Trace"]}
          >
            {[
              { id: "ext.salesforce.core", scope: "system.evidence.read", risk: "Low", app: "Auto-Granted (Policy)", status: "Active Grant", trace: "PRM-EV-401" },
              { id: "ext.finance.forecaster", scope: "system.finance.write_ledger", risk: "Critical", app: "Executive (CFO)", status: "Pending Signature", trace: "PRM-EV-402" },
              { id: "ext.workday.hrsync", scope: "system.users.read_pii", risk: "High", app: "HR Director", status: "Active Grant", trace: "PRM-EV-403" },
              { id: "ext.legacy.sap.bridge", scope: "system.runtime.modify", risk: "Critical", app: "System Admin", status: "Revoked", trace: "PRM-EV-404" },
              { id: "ext.slack.notifications", scope: "system.alerts.publish", risk: "Low", app: "Auto-Granted (Policy)", status: "Active Grant", trace: "PRM-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-blue-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-slate-500" />
                      {row.scope}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className={`px-2 py-1 rounded text-xs font-bold border w-max block flex items-center gap-1 ${
                      row.risk === 'Low' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.risk === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                   }`}>
                      {row.risk === 'Critical' && <AlertTriangle className="w-3 h-3" />}
                      {row.risk}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-slate-500" />
                      {row.app}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Active') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status.includes('Revoked') && <Lock className="w-3 h-3" />}
                    {row.status.includes('Pending') && <FileSignature className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
