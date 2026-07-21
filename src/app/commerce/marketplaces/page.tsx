import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Search, Download, ShoppingBag, Box, Activity, ShieldCheck, AlertCircle, RefreshCcw } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MarketplaceIntegrationCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Marketplace Integration Center</h1>
            <p className="text-slate-400">Governed integrations for external commerce ecosystems like Amazon, Shopify, and Walmart.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Integrations..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors focus:ring-1 focus:ring-emerald-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Sync Logs
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overall API Health
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-emerald-400">Marketplace Connectivity</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Listings Sync
              <Box className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42,100</div>
            <div className="text-xs text-blue-400">SKUs synchronized globally</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Order Ingestion Rate
              <ShoppingBag className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">450 / min</div>
            <div className="text-xs text-indigo-400">Orders pulled from partners</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Sync Errors (24h)
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">API Throttling / Rejects</div>
          </div>
        </div>

        {/* Marketplaces Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Marketplace Synchronization Status" 
            headers={["Marketplace Ecosystem", "Integration Type", "Inventory Sync", "Order Ingestion", "API Health / Status", "Ledger Trace"]}
          >
            {[
              { mp: "Amazon US (Seller Central)", type: "Native SP-API", inv: "Nominal (2s lag)", orders: "Nominal", status: "Healthy", trace: "MKT-EV-701" },
              { mp: "Amazon EU (Seller Central)", type: "Native SP-API", inv: "Nominal (4s lag)", orders: "Nominal", status: "Healthy", trace: "MKT-EV-702" },
              { mp: "Shopify Plus (D2C)", type: "GraphQL Admin API", inv: "Real-time Webhook", orders: "Real-time Webhook", status: "Healthy", trace: "MKT-EV-703" },
              { mp: "Walmart Marketplace", type: "REST API", inv: "Degraded (45m lag)", orders: "Nominal", status: "API Throttled", trace: "MKT-EV-704" },
              { mp: "eBay Global Partner", type: "Legacy XML API", inv: "Nominal (5m lag)", orders: "Nominal", status: "Healthy", trace: "MKT-EV-705" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <TrendingUp className="w-4 h-4 text-slate-500" />
                     {row.mp}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      <RefreshCcw className={`w-3 h-3 ${row.inv.includes('Degraded') ? 'text-amber-500' : 'text-slate-500'}`} />
                      {row.inv}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      <RefreshCcw className="w-3 h-3 text-slate-500" />
                      {row.orders}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Live" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
