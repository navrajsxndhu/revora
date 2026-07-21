import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Search, Download, AlertTriangle, FileWarning, Eye, UserX, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AgentAuditCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Agent Audit & Compliance</h1>
            <p className="text-slate-400">Enterprise audit center tracking policy violations, human overrides, and unauthorized execution attempts.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Violations..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-72 transition-colors focus:ring-1 focus:ring-rose-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Audit Log
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Violations (30d)
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-rose-400">Successfully blocked by runtime</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Unauthorized Attempts
              <UserX className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Prompt injection / Access denied</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Human Overrides
              <FileWarning className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-slate-500">Authorized exceptions logged</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Audit Health
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">All events cryptographically secured</div>
          </div>
        </div>

        {/* Audit Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Agent Incident & Violation Log" 
            headers={["Timestamp (UTC)", "Incident Type", "Implicated Agent", "User / Context", "Mitigation Action", "Ledger Trace"]}
          >
            {[
              { time: "2026-07-21 09:14:02", type: "Prohibited Action Attempt (Write)", agent: "Infra Copilot", user: "sk_user_42 (Platform)", action: "Execution Blocked", trace: "AUD-EV-999" },
              { time: "2026-07-20 18:45:11", type: "Context Truncation Alert", agent: "Legal Analyzer", user: "sk_user_09 (Legal)", action: "System Warning", trace: "AUD-EV-998" },
              { time: "2026-07-19 11:20:00", type: "Data Masking Failure (PII)", agent: "Customer Support", user: "System Webhook", action: "Agent Suspended", trace: "AUD-EV-997" },
              { time: "2026-07-18 14:05:44", type: "Authorized Override (Executive)", agent: "FinOps Bot", user: "VP Platform (Multi-Sig)", action: "Exception Granted", trace: "AUD-EV-996" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.time}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                   <div className="flex items-center gap-2">
                      {row.type.includes('Prohibited') || row.type.includes('Failure') ? <ShieldAlert className="w-4 h-4 text-rose-500" /> : 
                       row.type.includes('Alert') ? <AlertTriangle className="w-4 h-4 text-amber-500" /> : <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                      {row.type}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.agent}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.user}
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                      row.action.includes('Blocked') || row.action.includes('Suspended') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      row.action.includes('Exception') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 'bg-amber-900/20 text-amber-400 border-amber-900/50'
                   }`}>
                      {row.action}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center justify-between">
                     <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                     <button className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                     </button>
                  </div>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
