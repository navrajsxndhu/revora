import React from "react";
import Link from "next/link";
import { ArrowLeft, History, Search, Download, ShieldAlert, CheckCircle2, Lock, GitMerge, Database, Brain, Network } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MLAuditLedger() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ml-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ML Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">ML Audit Ledger</h1>
            <p className="text-slate-400">Immutable, cryptographically verified history of all Machine Learning governance events.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Trace IDs, Models..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export CSV
             </button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex gap-4 shrink-0">
           <select className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500">
             <option>All ML Events</option>
             <option>Model Deployment</option>
             <option>Dataset Access</option>
             <option>Training Execution</option>
             <option>Drift Violations</option>
           </select>
           <select className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500">
             <option>Past 24 Hours</option>
             <option>Past 7 Days</option>
             <option>Past 30 Days</option>
             <option>All Time</option>
           </select>
        </div>

        {/* Audit Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Immutable ML Event Ledger" 
            headers={["Timestamp", "Actor / Principal", "Event Context", "Action", "Governance Decision", "Cryptographic Trace"]}
          >
            {[
              { time: "2026-07-22 10:42:01", actor: "Exec: m.patel@revora.com", type: "Deployment", ctx: "supply_chain_forecast@v3.1.4", act: "Signed production promotion", dec: "Allowed", trace: "AUD-ML-9001" },
              { time: "2026-07-22 10:15:22", actor: "auto_drift_monitor", type: "Drift", ctx: "pricing_optimizer@v5.0.0", act: "Detected Concept Drift (+15%)", dec: "Alert Raised", trace: "AUD-ML-9002" },
              { time: "2026-07-22 09:30:11", actor: "jdoe@revora.com", type: "Dataset", ctx: "global_customer_tx_2026", act: "Requested read access (PII)", dec: "Allowed (ABAC Match)", trace: "AUD-ML-9003" },
              { time: "2026-07-22 08:05:44", actor: "ci_cd_pipeline", type: "Training", ctx: "Llama3-Finetune Pipeline", act: "Triggered distributed training", dec: "Allowed", trace: "AUD-ML-9004" },
              { time: "2026-07-22 07:10:00", actor: "asmith@revora.com", type: "Deployment", ctx: "fraud_detect_realtime@v12.1.0", act: "Attempted unapproved deploy", dec: "Blocked (Human Sign Reqd)", trace: "AUD-ML-9005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                   {row.actor}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                     {row.type === 'Deployment' ? <GitMerge className="w-4 h-4 text-emerald-500" /> : 
                      row.type === 'Drift' ? <ShieldAlert className="w-4 h-4 text-rose-500" /> :
                      row.type === 'Dataset' ? <Database className="w-4 h-4 text-indigo-500" /> :
                      row.type === 'Training' ? <Network className="w-4 h-4 text-blue-500" /> :
                      <Brain className="w-4 h-4 text-slate-500" />}
                     {row.ctx}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.act}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.dec.includes('Allowed') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.dec.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.dec.includes('Allowed') ? <CheckCircle2 className="w-3 h-3" /> : 
                     row.dec.includes('Blocked') ? <Lock className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
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
