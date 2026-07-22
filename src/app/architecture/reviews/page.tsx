import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Gavel, FileSignature, CheckCircle2, XCircle, Clock, FileWarning, HelpCircle, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ArchitectureReviewBoard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Architecture Review Board (ARB)</h1>
            <p className="text-slate-400">Constitutional governance for architecture decisions, waivers, and technology approvals.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search ADRs & Waivers..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm font-medium transition-colors text-white">
               <FileSignature className="w-4 h-4" /> Submit ADR
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(6,182,212,0.05)] border-cyan-900/30 bg-cyan-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Reviews
              <Clock className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-cyan-400">Awaiting ARB authorization</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Approved (YTD)
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">184</div>
            <div className="text-xs text-emerald-400">Architecture Decision Records</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Waivers
              <FileWarning className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-amber-400">Temporary policy exceptions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Rejected
              <XCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">28</div>
            <div className="text-xs text-rose-400">Failed constitutional policy</div>
          </div>
        </div>

        {/* ARB Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Architecture Decision Records (ADR)" 
            headers={["Record ID / Title", "Request Type", "Submitter", "Status", "Review Date", "Governance Trace"]}
          >
            {[
              { id: "ADR-1042", title: "Adopt GraphQL for Mobile API Gateway", type: "Technology Adoption", submitter: "Mobile Eng Lead", status: "Approved", date: "2026-07-21", trace: "ARB-EV-7001" },
              { id: "ADR-1043", title: "MongoDB Atlas for Customer Profiles", type: "Architecture Design", submitter: "Data Architect", status: "Under Review", date: "Pending", trace: "ARB-EV-7002" },
              { id: "WAV-0089", title: "Exception: Deploying non-containerized legacy service", type: "Policy Waiver (6mo)", submitter: "VP Legacy Ops", status: "Approved (Conditional)", date: "2026-07-15", trace: "ARB-EV-7003" },
              { id: "ADR-1044", title: "Use custom cryptography instead of KMS", type: "Security Design", submitter: "Backend Eng", status: "Rejected (Policy Violation)", date: "2026-07-14", trace: "ARB-EV-7004" },
              { id: "ADR-1045", title: "Standardize on Next.js 14 for Frontend", type: "Enterprise Standard", submitter: "Chief Architect", status: "Approved", date: "2026-07-10", trace: "ARB-EV-7005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-cyan-400 text-sm flex items-center gap-2">
                       <Gavel className="w-4 h-4 text-slate-500" />
                       {row.id}
                     </span>
                     <span className="text-xs text-slate-300 pl-6">{row.title}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-400">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.submitter}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Approved') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Review') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status.includes('Approved') && <ShieldCheck className="w-3 h-3" />}
                    {row.status.includes('Review') && <Clock className="w-3 h-3" />}
                    {row.status.includes('Rejected') && <XCircle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.date}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
