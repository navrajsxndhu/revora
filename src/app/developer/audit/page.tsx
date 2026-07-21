import React from "react";
import Link from "next/link";
import { ArrowLeft, History, Search, Download, ShieldAlert, CheckCircle2, Lock, KeyRound, Terminal, Webhook } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DeveloperAuditLedger() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/developer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Developer Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Developer Audit Ledger</h1>
            <p className="text-slate-400">Immutable, cryptographically verified history of all developer operations, credential changes, and policy enforcements.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Trace IDs, Actors..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export CSV
             </button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex gap-4 shrink-0">
           <select className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-emerald-500">
             <option>All Events</option>
             <option>Credential Generation</option>
             <option>Policy Blocks</option>
             <option>Human Approvals</option>
             <option>High-Risk Execution</option>
           </select>
           <select className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-emerald-500">
             <option>Past 24 Hours</option>
             <option>Past 7 Days</option>
             <option>Past 30 Days</option>
             <option>All Time</option>
           </select>
        </div>

        {/* Audit Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Immutable Developer Event Ledger" 
            headers={["Timestamp", "Actor / Principal", "Event Context", "Action", "Governance Decision", "Cryptographic Trace"]}
          >
            {[
              { time: "2026-07-21 16:42:01", actor: "jdoe@revora.com", type: "Credential", ctx: "API Key Generation", act: "Created token (scope: finance.read)", dec: "Allowed", trace: "AUD-DEV-2001" },
              { time: "2026-07-21 16:15:22", actor: "rev_prod_x8...", type: "API", ctx: "POST /api/v1/ledger/commit", act: "Requested immutable commit", dec: "Blocked (Human Sign Reqd)", trace: "AUD-DEV-2002" },
              { time: "2026-07-21 15:30:11", actor: "Exec: s.k@revora.com", type: "Approval", ctx: "Pending Execution Queue", act: "Signed CLI deploy request", dec: "Allowed", trace: "AUD-DEV-2003" },
              { time: "2026-07-21 14:05:44", actor: "CLI (Admin)", type: "CLI", ctx: "revora secrets rotate", act: "Initiated key rotation", dec: "Allowed", trace: "AUD-DEV-2004" },
              { time: "2026-07-21 12:10:00", actor: "rev_svc_k4...", type: "Webhook", ctx: "finance.invoice.created", act: "Attempted delivery to unsigned endpoint", dec: "Blocked (Security Policy)", trace: "AUD-DEV-2005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                   {row.actor}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                     {row.type === 'Credential' ? <KeyRound className="w-4 h-4 text-emerald-500" /> : 
                      row.type === 'API' ? <Terminal className="w-4 h-4 text-blue-500" /> :
                      row.type === 'Approval' ? <ShieldAlert className="w-4 h-4 text-indigo-500" /> :
                      row.type === 'Webhook' ? <Webhook className="w-4 h-4 text-amber-500" /> :
                      <Terminal className="w-4 h-4 text-slate-500" />}
                     {row.ctx}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.act}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.dec === 'Allowed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.dec === 'Allowed' ? <CheckCircle2 className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    {row.dec}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Immutable" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
