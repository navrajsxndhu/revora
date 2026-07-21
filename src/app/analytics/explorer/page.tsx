import React from "react";
import { ArrowLeft, Search, Filter, Download } from "lucide-react";
import Link from "next/link";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EvidenceExplorer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/analytics" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Analytics Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Immutable Evidence Explorer</h1>
            <p className="text-slate-400">Deep-dive into the raw constitutional ledger. Every execution is cryptographically verified.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </header>

        {/* Global Filter Bar */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center gap-4 mb-6 shrink-0">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search by Execution ID, User, or Workspace..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-slate-600 transition-colors" 
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" /> Advanced Filters
          </button>
        </div>

        {/* Data Grid */}
        <div className="flex-1 min-h-0">
          <PremiumTable 
            title="Runtime Execution Ledger" 
            headers={["Execution ID", "Timestamp", "Actor", "Context", "Policy", "Status"]}
          >
            {[
              { id: "EX-991A", time: "10 min ago", actor: "S. Chen", ctx: "Workspace Configuration", pol: "POL-001 (Strict)", status: "Verified" },
              { id: "EX-991B", time: "12 min ago", actor: "System", ctx: "Automated Policy Drift Resolution", pol: "POL-042 (Auto-Heal)", status: "Verified" },
              { id: "EX-991C", time: "1 hr ago", actor: "M. Tyson", ctx: "Database Scaling Deployment", pol: "POL-012 (Infra)", status: "Violation" },
              { id: "EX-991D", time: "2 hrs ago", actor: "A. Patel", ctx: "Cross-region data transfer", pol: "POL-099 (Data Privacy)", status: "Verified" },
              { id: "EX-991E", time: "4 hrs ago", actor: "S. Chen", ctx: "Identity Matrix Update", pol: "POL-002 (RBAC)", status: "Verified" },
              { id: "EX-991F", time: "Yesterday", actor: "System", ctx: "Nightly Audit Aggregation", pol: "POL-100 (Audit)", status: "Verified" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors cursor-pointer group">
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.id} timestamp="Verified" />
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm font-medium text-slate-300">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.ctx}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.pol}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
