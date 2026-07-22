import React from "react";
import Link from "next/link";
import { ArrowLeft, Store, Search, Download, CheckCircle2, AlertCircle, Box, Edit3, Image, Archive, ImageIcon } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseProductCatalog() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Product Catalog</h1>
            <p className="text-slate-400">The constitutional registry for every sellable product, inventory status, and marketplace visibility.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search SKU or Product Name..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Master Catalog
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Active SKUs
              <Box className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14,291</div>
            <div className="text-xs text-blue-400">Sellable across all channels</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Out of Stock (OOS)
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-rose-500">Requires supply chain action</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Missing Media Assets
              <ImageIcon className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Incomplete catalog listings</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Draft / Unpublished
              <Edit3 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">420</div>
            <div className="text-xs text-emerald-400">Pending review</div>
          </div>
        </div>

        {/* Catalog Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Master Product Registry" 
            headers={["Product Name / SKU", "Category", "Pricing (MSRP)", "Global Inventory", "Lifecycle Status", "Governance Trace"]}
          >
            {[
              { sku: "SKU-991-A", name: "Revora Pro Edge Gateway", cat: "Hardware > Networking", price: "$1,299.00", stock: "14,200", status: "Published (Active)", trace: "CAT-EV-301" },
              { sku: "SKU-442-B", name: "Industrial PLC Module v2", cat: "Hardware > Controllers", price: "$499.00", stock: "0 (Backordered)", status: "Published (OOS)", trace: "CAT-EV-302" },
              { sku: "SKU-110-C", name: "Enterprise SaaS License (Annual)", cat: "Software > Subscription", price: "$12,000.00", stock: "Unlimited (Digital)", status: "Published (Active)", trace: "CAT-EV-303" },
              { sku: "SKU-881-D", name: "Legacy Sensor Array (Gen 1)", cat: "Hardware > Sensors", price: "$149.00", stock: "450", status: "Deprecated", trace: "CAT-EV-304" },
              { sku: "SKU-550-E", name: "Next-Gen AI Vision Camera", cat: "Hardware > Cameras", price: "$899.00", stock: "0", status: "Draft (Pending Media)", trace: "CAT-EV-305" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                       <Box className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                     <span className="text-xs font-mono text-blue-400 pl-6">{row.sku}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.cat}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.price}
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.stock.includes('0') ? 'text-rose-400' : 'text-emerald-400'}>
                     {row.stock}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Active') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Draft') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.status.includes('OOS') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status.includes('Active') && <CheckCircle2 className="w-3 h-3" />}
                    {row.status.includes('Deprecated') && <Archive className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Updated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
