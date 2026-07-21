import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, DollarSign, TrendingUp, AlertCircle, FileCheck2, Briefcase, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function RevenueOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/customers" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to CRM Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Revenue Operations & Sales Governance</h1>
            <p className="text-slate-400">Unified governance over commercial pipelines, forecasting, and pricing approvals.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium transition-colors text-white">
            <DollarSign className="w-4 h-4" /> Log New Opportunity
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Q3 Closed Won
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$14.2M</div>
            <div className="text-sm font-medium text-emerald-400">104% of Quarterly Target</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Pipeline
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$84M</div>
            <div className="text-sm font-medium text-blue-400">3.2x Coverage Ratio</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Pending Pricing Exceptions
              <Briefcase className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               <AlertCircle className="w-3 h-3" /> Awaiting Deal Desk Approval
            </div>
          </div>
        </div>

        {/* Revenue Pipeline Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Commercial Opportunities" 
            headers={["Account / Opportunity", "Pipeline Stage", "Deal Sponsor", "Forecast Close", "Opportunity Value", "Governance Check"]}
          >
            {[
              { opp: "Stark Enterprises - Global Expansion", stage: "6 - Contract Negotiation", sponsor: "EMEA Sales", close: "2026-08-30", val: "$1.8M", status: "Deal Desk Approval Required", trace: "REV-EV-812" },
              { opp: "Acme Global - Security Add-on", stage: "5 - Executive Proposal", sponsor: "NA Sales", close: "2026-07-28", val: "$840K", status: "In Governance Review", trace: "REV-EV-844" },
              { opp: "Initech - Platform Renewal", stage: "3 - Technical Validation", sponsor: "Customer Success", close: "2026-09-15", val: "$420K", status: "Approved Standard Pricing", trace: "REV-EV-891" },
              { opp: "Globex - Phase 2 Licensing", stage: "Closed Won", sponsor: "APAC Sales", close: "2026-07-15", val: "$1.2M", status: "Executed & Bound", trace: "REV-EV-904" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.opp}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.stage.includes('Closed') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.stage.includes('6 -') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.close}</td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400/80">{row.val}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Executed') || row.status.includes('Standard') ? 'text-emerald-500' :
                    row.status.includes('Required') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status.includes('Required') && <AlertCircle className="w-4 h-4" />}
                    {row.status.includes('Executed') && <FileCheck2 className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Status Change Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
