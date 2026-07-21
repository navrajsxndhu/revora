import React from "react";
import Link from "next/link";
import { ArrowLeft, Tag, Search, Download, DollarSign, Percent, Globe, FileSignature, AlertTriangle, TrendingDown } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PricingPromotionGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Pricing & Promotion Governance</h1>
            <p className="text-slate-400">Central governance for enterprise pricing strategy, regional rules, and discount authorizations.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Rules or Campaigns..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
               <Tag className="w-4 h-4" /> Propose New Pricing
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Pricing Rules
              <DollarSign className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-purple-400">Base, regional, & dynamic</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Live Promotions
              <Percent className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-blue-400">Campaigns active globally</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Authorization
              <FileSignature className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-amber-400">Executive signatures required</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Margin Alerts
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-rose-400">Pricing below threshold</div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Pricing Rule Ledger" 
            headers={["Rule Name / Campaign", "Target Scope", "Adjustment / Impact", "Lifecycle Status", "Governance / Approvals", "Ledger Trace"]}
          >
            {[
              { rule: "Global Q3 Hardware Sale", scope: "Hardware Category (Global)", impact: "-15% Base Price", status: "Active", gov: "Authorized (VP Sales)", trace: "PRC-EV-601" },
              { rule: "EU Regional Adjust (Euro)", scope: "All SKUs (EU Region)", impact: "+4% Base Price (FX)", status: "Active", gov: "Authorized (FinOps)", trace: "PRC-EV-602" },
              { rule: "B2B Tier 1 Wholesale Discount", scope: "Tier 1 Accounts (B2B)", impact: "-25% MSRP", status: "Active", gov: "Authorized (Exec)", trace: "PRC-EV-603" },
              { rule: "Black Friday Doorbuster (US)", scope: "Select Consumer SKUs (US)", impact: "-40% Base Price", status: "Draft", gov: "Pending Exec Approval", trace: "PRC-EV-604" },
              { rule: "Clearance: Gen 1 Sensors", scope: "SKU-881-D", impact: "-60% (Below Margin)", status: "Blocked", gov: "Margin Rule Violation", trace: "PRC-EV-605" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Tag className="w-4 h-4 text-slate-500" />
                     {row.rule}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-500" />
                      {row.scope}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={`px-2 py-1 rounded text-xs border ${
                      row.impact.startsWith('-') && row.impact.includes('Margin') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      row.impact.startsWith('-') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                   }`}>
                      {row.impact}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-300">
                   {row.status}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.gov.includes('Authorized') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.gov.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.gov.includes('Pending') && <FileSignature className="w-3 h-3" />}
                    {row.gov.includes('Violation') && <AlertTriangle className="w-3 h-3" />}
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
