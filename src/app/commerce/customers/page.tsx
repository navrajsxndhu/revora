import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, Download, Star, RefreshCcw, Headset, HeartHandshake, Smile, AlertTriangle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CustomerExperienceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/commerce" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Commerce Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Customer Experience & Returns Center</h1>
            <p className="text-slate-400">Governance over customer satisfaction, support SLAs, returns processing, and brand loyalty.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Customer / Order..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export CX Metrics
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Net Promoter Score (NPS)
              <HeartHandshake className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">72</div>
            <div className="text-xs text-rose-400">Top quartile performance</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Return Rate
              <RefreshCcw className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.2%</div>
            <div className="text-xs text-amber-400">Below 5% threshold</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              CSAT (Post-Purchase)
              <Star className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.8 / 5</div>
            <div className="text-xs text-emerald-400">Based on 14k recent reviews</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Support Resolution SLA
              <Headset className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-xs text-indigo-400">First contact resolution</div>
          </div>
        </div>

        {/* Customer Experience Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Recent Customer Interactions & Returns" 
            headers={["Customer / Segment", "Interaction Type", "Related Order", "Sentiment / Outcome", "Status", "Ledger Trace"]}
          >
            {[
              { cust: "Enterprise Corp (B2B)", type: "Support Escalation", order: "ORD-991204-A", sentiment: "Frustrated", status: "In Progress (P1)", trace: "CX-EV-801" },
              { cust: "Sarah Jenkins (D2C VIP)", type: "Product Return", order: "ORD-110293-D", sentiment: "Neutral", status: "Return Processed", trace: "CX-EV-802" },
              { cust: "Global Logistics Ltd", type: "Bulk Refund Request", order: "ORD-REF-8812", sentiment: "Unhappy", status: "Pending Human Sign", trace: "CX-EV-803" },
              { cust: "Mark O. (Retail Customer)", type: "Positive Review (5-Star)", order: "ORD-775430-E", sentiment: "Delighted", status: "Resolved", trace: "CX-EV-804" },
              { cust: "Tech Innovators Inc.", type: "Onboarding Inquiry", order: "N/A", sentiment: "Curious", status: "Routed to Sales", trace: "CX-EV-805" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Users className="w-4 h-4 text-slate-500" />
                     {row.cust}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.order}
                </td>
                <td className="py-4 px-5 text-sm font-medium">
                   <div className="flex items-center gap-2">
                     {row.sentiment === 'Delighted' ? <Smile className="w-4 h-4 text-emerald-500" /> :
                      row.sentiment === 'Neutral' || row.sentiment === 'Curious' ? <Star className="w-4 h-4 text-amber-500" /> :
                      <AlertTriangle className="w-4 h-4 text-rose-500" />}
                     <span className={`${
                       row.sentiment === 'Delighted' ? 'text-emerald-400' :
                       row.sentiment === 'Neutral' || row.sentiment === 'Curious' ? 'text-amber-400' : 'text-rose-400'
                     }`}>{row.sentiment}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status.includes('Resolved') || row.status.includes('Processed') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Pending') || row.status.includes('Routed') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
