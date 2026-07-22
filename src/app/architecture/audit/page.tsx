import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, History, Download, Map, Box, FileCode2, Rocket, Gavel, ShieldCheck, Lock, ShieldAlert, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ArchitectureAuditLedger() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/architecture" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Architecture Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Architecture Audit Ledger</h1>
            <p className="text-slate-400">Immutable, cryptographically verified history of all enterprise architecture activities and governance decisions.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Trace IDs, Assets..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export CSV
             </button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex gap-4 shrink-0">
           <select className="bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500">
             <option>All EA Events</option>
             <option>Capability Updates</option>
             <option>Application Registration</option>
             <option>Standards Approval</option>
             <option>ARB Decisions</option>
             <option>Transformation Milestones</option>
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
            title="Immutable Architecture Event Ledger" 
            headers={["Timestamp", "Actor / Principal", "Event Context", "Action", "Governance Decision", "Cryptographic Trace"]}
          >
            {[
              { time: "2026-07-22 09:15:02", actor: "Exec: s.chief@revora.com", type: "ARB Decision", ctx: "ADR-1045 (Next.js Standard)", act: "Approved enterprise standard", dec: "Allowed", trace: "AUD-EA-9001" },
              { time: "2026-07-22 08:42:11", actor: "j.doe@revora.com", type: "Transformation", ctx: "TRN-4001 (Cloud Migration)", act: "Requested phase 2 budget unlock", dec: "Allowed (Human Sign)", trace: "AUD-EA-9002" },
              { time: "2026-07-21 16:20:00", actor: "auto_discovery_agent", type: "Application", ctx: "APP-1102 (Shadow IT)", act: "Discovered unregistered application", dec: "Flagged (Tech Debt)", trace: "AUD-EA-9003" },
              { time: "2026-07-21 14:10:44", actor: "m.patel@revora.com", type: "Capability", ctx: "CAP-045 (AI Pricing)", act: "Upgraded capability maturity to Defined", dec: "Allowed", trace: "AUD-EA-9004" },
              { time: "2026-07-21 11:05:00", actor: "dev_team_alpha", type: "Standards", ctx: "MongoDB Atlas", act: "Attempted unapproved deployment", dec: "Blocked (Standard Violation)", trace: "AUD-EA-9005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                   {row.actor}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                     {row.type === 'ARB Decision' ? <Gavel className="w-4 h-4 text-cyan-500" /> : 
                      row.type === 'Transformation' ? <Rocket className="w-4 h-4 text-purple-500" /> :
                      row.type === 'Application' ? <Box className="w-4 h-4 text-emerald-500" /> :
                      row.type === 'Capability' ? <Map className="w-4 h-4 text-blue-500" /> :
                      row.type === 'Standards' ? <FileCode2 className="w-4 h-4 text-indigo-500" /> :
                      <History className="w-4 h-4 text-slate-500" />}
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
