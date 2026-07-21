import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Puzzle, ShieldCheck, Download, Star, Info, FileCheck2, Filter } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseExtensionMarketplace() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Extension Catalog</h1>
            <p className="text-slate-400">Discover and install governed applications certified for the Revora platform ecosystem.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Certified Extensions..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Filter className="w-4 h-4" /> Filters
             </button>
          </div>
        </header>

        {/* Catalog Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Certified Extension Registry" 
            headers={["Extension Name / Publisher", "Category", "Certification Level", "Risk Tier", "Installation Status", "Governance Evidence"]}
          >
            {[
              { name: "Salesforce CRM Sync Core", pub: "Revora Partner Network", cat: "CRM / Sales", cert: "Gold Certified", risk: "Low Risk", status: "Installed v4.2", trace: "MKT-EV-101" },
              { name: "Advanced Financial Forecasting AI", pub: "FinanceLabs Corp", cat: "Finance / AI", cert: "Silver Certified", risk: "Medium Risk", status: "Available", trace: "MKT-EV-102" },
              { name: "Global Procurement Auto-Approver", pub: "Internal (Supply Chain)", cat: "Automation", cert: "Review Required", risk: "High Risk (Approvals)", status: "Pending Audit", trace: "MKT-EV-103" },
              { name: "Workday HR Bridge", pub: "Revora Official", cat: "HR / Identity", cert: "Gold Certified", risk: "Medium Risk (PII)", status: "Installed v2.1", trace: "MKT-EV-104" },
              { name: "Experimental Ledger Visualizer", pub: "Community", cat: "Analytics", cert: "Rejected", risk: "Critical", status: "Blocked", trace: "MKT-EV-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                       <Puzzle className="w-4 h-4 text-blue-500" />
                       {row.name}
                     </span>
                     <span className="text-xs font-mono text-slate-500 pl-6">By {row.pub}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.cat}
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-sm">
                    {row.cert.includes('Gold') && <Star className="w-4 h-4 text-yellow-500" />}
                    {row.cert.includes('Silver') && <Star className="w-4 h-4 text-slate-300" />}
                    {row.cert.includes('Review') && <Info className="w-4 h-4 text-amber-500" />}
                    {row.cert.includes('Rejected') && <ShieldCheck className="w-4 h-4 text-rose-500" />}
                    <span className={
                      row.cert.includes('Rejected') ? 'text-rose-400' :
                      row.cert.includes('Review') ? 'text-amber-400' : 'text-slate-300'
                    }>{row.cert}</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                   <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.risk.includes('Low') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.risk.includes('High') || row.risk.includes('Critical') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                   }`}>
                      {row.risk}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Installed') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    row.status.includes('Available') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    row.status.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status.includes('Installed') && <FileCheck2 className="w-3 h-3" />}
                    {row.status.includes('Available') && <Download className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
