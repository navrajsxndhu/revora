import React from "react";
import Link from "next/link";
import { ArrowLeft, FileSignature, CheckCircle2, Search, Filter, Bot, User, Clock, ShieldAlert, Zap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function HumanApprovalCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Human Approval Center</h1>
            <p className="text-slate-400">The mandatory authorization boundary requiring authenticated human signatures for high-risk agent operations.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium text-slate-400">
               <Filter className="w-4 h-4" /> Filter: My Approvals
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-md text-sm font-medium transition-colors text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]">
               <FileSignature className="w-4 h-4" /> Sign All (3)
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Authorization
              <Clock className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Execution Blocked</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Escalated to Board
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-amber-500">Requires multi-sig</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Signed Today
              <FileSignature className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-slate-500">Cryptographically signed</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Auto-Approvals
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-blue-400">Strictly prohibited by policy</div>
          </div>
        </div>

        {/* Approvals Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Authorization Queue" 
            headers={["Request ID", "Originating Agent", "Proposed Action / Output", "Risk Vector", "Required Authority", "Action"]}
          >
            {[
              { id: "REQ-9920", agent: "Customer Support Copilot", action: "Send Email: SLA Breach Response (ACME Corp)", risk: "Customer Sentiment", auth: "VP Customer Success" },
              { id: "REQ-9919", agent: "FinOps Optimization Bot", action: "Terminate 12 Unused EC2 Instances (us-east-1)", risk: "Production Impact", auth: "Director of Platform" },
              { id: "REQ-9918", agent: "Security Threat Analyzer", action: "Quarantine User Workspace (Identity: john.doe)", risk: "Data Access Loss", auth: "CISO / SecOps Manager" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm font-medium text-slate-200">
                   <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-500" />
                      {row.agent}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="font-semibold">{row.action}</div>
                </td>
                <td className="py-4 px-5">
                   <span className="text-xs font-medium px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-300">
                      {row.risk}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-500" />
                      {row.auth}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <button className="flex items-center gap-1 px-3 py-1.5 bg-rose-900/20 text-rose-400 border border-rose-900/50 hover:bg-rose-900/40 rounded text-xs font-bold transition-colors">
                     <FileSignature className="w-3 h-3" /> Authorize
                   </button>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
