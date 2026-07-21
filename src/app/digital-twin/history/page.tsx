import React from "react";
import Link from "next/link";
import { ArrowLeft, History, Search, Download, Undo, PlayCircle, Clock, Database, CalendarSync, ShieldCheck, CheckCircle2, ShieldAlert, Zap, Box, Factory, Save } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function HistoricalReplay() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/digital-twin" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Digital Twin
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Time Travel & Historical Replay</h1>
            <p className="text-slate-400">Replay immutable historical enterprise states mapped cryptographically via the Evidence Ledger.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Epochs & Snapshots..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-72 transition-colors focus:ring-1 focus:ring-amber-500/50" />
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium text-slate-400">
               <Save className="w-4 h-4 text-emerald-500" /> Auto-Snapshot Active
             </div>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Stored Epochs
              <History className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8,421</div>
            <div className="text-xs text-amber-500">Immutable Enterprise States</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Retention
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">7 Years</div>
            <div className="text-xs text-slate-500">Regulatory Compliance Bound</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Replay Integrity
              <ShieldAlert className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Cryptographically Verified</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Drift Warnings
              <Undo className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-rose-400">No modification anomalies</div>
          </div>
        </div>

        {/* Historical Epochs Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Epoch Registry (Immutable Timeline)" 
            headers={["Timestamp (UTC)", "Epoch Event Marker", "Primary Domain", "Governance Record", "Replay Action"]}
          >
            {[
              { time: "2026-06-15 14:30:00", event: "Enterprise Security Posture (Pre-Incident #892)", domain: "Cybersecurity", trace: "HIS-EV-1001" },
              { time: "2026-04-01 00:00:00", event: "Q1 Financial Ledger Close", domain: "Finance & Accounting", trace: "HIS-EV-1002" },
              { time: "2026-02-28 09:15:22", event: "Manufacturing Capacity Baseline", domain: "Supply Chain", trace: "HIS-EV-1003" },
              { time: "2025-12-31 23:59:59", event: "End of Year Product Portfolio Snapshot", domain: "Product Engineering", trace: "HIS-EV-1004" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-amber-400">
                  {row.time}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                     {row.domain.includes('Cyber') && <ShieldAlert className="w-4 h-4 text-rose-500" />}
                     {row.domain.includes('Finance') && <Database className="w-4 h-4 text-blue-500" />}
                     {row.domain.includes('Supply') && <Factory className="w-4 h-4 text-emerald-500" />}
                     {row.domain.includes('Product') && <Box className="w-4 h-4 text-purple-500" />}
                     {row.event}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
                </td>
                <td className="py-4 px-5">
                   <button className="flex items-center gap-1 px-3 py-1.5 bg-amber-900/20 text-amber-400 border border-amber-900/50 hover:bg-amber-900/40 rounded text-xs font-bold transition-colors">
                     <PlayCircle className="w-3 h-3" /> Replay Epoch
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
