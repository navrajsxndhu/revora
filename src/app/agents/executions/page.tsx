import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Search, ShieldCheck, Download, Bot, Database, Clock, Eye, AlertCircle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AgentExecutionLedger() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Agent Execution Ledger</h1>
            <p className="text-slate-400">The immutable runtime ledger cryptographically tracking every AI interaction, prompt, and tool execution.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Executions..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
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
              Total Executions
              <Database className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,424,091</div>
            <div className="text-xs text-emerald-400">Cryptographically Secured</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Invocations
              <Activity className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-slate-500">Processing Currently</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Failed/Blocked
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">Policy Interventions (24h)</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Ledger Integrity
              <ShieldCheck className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Verified</div>
            <div className="text-xs text-purple-400">Zero mutation detected</div>
          </div>
        </div>

        {/* Execution Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Runtime Execution Stream" 
            headers={["Timestamp (UTC)", "Execution Trace ID", "Agent", "Initiator", "Policy Decision", "Evidence Ledger"]}
          >
            {[
              { time: "2026-07-21 14:02:11", id: "EXEC-849201", agent: "Legal Analyzer", init: "sk_user_09", status: "Authorized", trace: "LDG-EV-190" },
              { time: "2026-07-21 14:02:08", id: "EXEC-849200", agent: "Infra Copilot", init: "sk_user_42", status: "Blocked (Modify)", trace: "LDG-EV-189" },
              { time: "2026-07-21 14:01:45", id: "EXEC-849199", agent: "Customer Success", init: "Webhook/Zendesk", status: "Authorized", trace: "LDG-EV-188" },
              { time: "2026-07-21 14:01:10", id: "EXEC-849198", agent: "FinOps Bot", init: "sk_user_11", status: "Authorized", trace: "LDG-EV-187" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4 text-slate-500" />
                     {row.time}
                  </div>
                </td>
                <td className="py-4 px-5 font-mono text-blue-400 text-xs">{row.id}</td>
                <td className="py-4 px-5 text-sm font-medium text-slate-200">
                   <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-slate-500" />
                      {row.agent}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400 font-mono">{row.init}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block flex items-center gap-1 ${
                    row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center justify-between">
                     <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
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
