import React from "react";
import Link from "next/link";
import { ArrowLeft, Box, Search, Play, Package, ShieldCheck, Download, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ProductRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Product Portfolio
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Product Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all active, deprecated, and developmental enterprise products.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Products & Services..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Catalog
             </button>
          </div>
        </header>

        {/* Product Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Product Catalog" 
            headers={["SKU / Identifier", "Product Name", "Product Line", "Current Version", "Lifecycle Stage", "Governance Record"]}
          >
            {[
              { sku: "PRD-OS-100", name: "Revora Enterprise OS", line: "Core Platform", ver: "v2.4.0", stage: "General Availability (GA)", trace: "PRD-EV-901" },
              { sku: "PRD-CF-210", name: "Cloud Compute Fabric", line: "Infrastructure", ver: "v3.1.2", stage: "General Availability (GA)", trace: "PRD-EV-904" },
              { sku: "PRD-AI-305", name: "AI Governance Platform", line: "Emerging Tech", ver: "v1.0.0-beta", stage: "Public Beta", trace: "PRD-EV-911" },
              { sku: "PRD-AN-800", name: "Legacy Analytics Suite", line: "Data Solutions", ver: "v4.0.0 (LTS)", stage: "End of Life (EOL) Scheduled", trace: "PRD-EV-915" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.sku}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <Link href={`/products/portfolio/${row.sku}`} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5">
                        View Product Constitution <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.line}
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded">
                      {row.ver}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.stage.includes('GA') ? 'text-emerald-500' : 
                    row.stage.includes('Beta') ? 'text-blue-500' :
                    'text-rose-500'
                  }`}>
                    {row.stage.includes('GA') && <ShieldCheck className="w-4 h-4" />}
                    {row.stage.includes('Beta') && <Play className="w-4 h-4" />}
                    {row.stage.includes('EOL') && <Package className="w-4 h-4" />}
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Validated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
