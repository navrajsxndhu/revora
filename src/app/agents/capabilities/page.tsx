import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, Search, Save, Bot } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AgentCapabilities() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/agents" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Agent Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Agent Capability Governance</h1>
            <p className="text-slate-400">Explicit configuration mapping defining permitted and prohibited actions for every enterprise agent.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Capabilities..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white">
               <Save className="w-4 h-4" /> Save Policy Changes
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Permitted Actions
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-emerald-400">Read & Analysis Only</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Prohibited Actions
              <XCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">128</div>
            <div className="text-xs text-rose-400">Strictly Denied by Policy</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Requires Approval
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15</div>
            <div className="text-xs text-amber-400">Human signature required</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Governance Integrity
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Enforced</div>
            <div className="text-xs text-slate-500">Deterministic runtime enforcement</div>
          </div>
        </div>

        {/* Capabilities Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Capability Matrix" 
            headers={["Capability / Action", "Target Domain", "Default Agent Access", "Human Override", "Governance Policy"]}
          >
            {[
              { action: "Read Analytics Documents", domain: "Data Platform", access: "Permitted (All Agents)", override: "N/A", trace: "POL-CAP-001" },
              { action: "Draft External Emails", domain: "Customer Comms", access: "Requires Approval", override: "Requires Manager Sig", trace: "POL-CAP-002" },
              { action: "Execute Financial Transactions", domain: "Treasury", access: "Prohibited", override: "Blocked (Hard Deny)", trace: "POL-CAP-003" },
              { action: "Delete Production Data", domain: "Infrastructure", access: "Prohibited", override: "Blocked (Hard Deny)", trace: "POL-CAP-004" },
              { action: "Analyze Security Logs", domain: "Cybersecurity", access: "Permitted (Sec Agents Only)", override: "N/A", trace: "POL-CAP-005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-slate-500" />
                     {row.action}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block flex items-center gap-1 ${
                    row.access.includes('Prohibited') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.access.includes('Requires') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                  }`}>
                    {row.access.includes('Permitted') && <CheckCircle2 className="w-3 h-3" />}
                    {row.access.includes('Prohibited') && <XCircle className="w-3 h-3" />}
                    {row.access.includes('Requires') && <ShieldAlert className="w-3 h-3" />}
                    {row.access}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.override.includes('Blocked') ? <span className="text-rose-400">{row.override}</span> : row.override}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Enforced" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
