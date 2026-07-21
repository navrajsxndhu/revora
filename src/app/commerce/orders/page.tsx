import React from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Search, Download, Package, Truck, FileSignature, CheckCircle2, RotateCcw, AlertCircle, RefreshCw } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function OrderFulfillmentGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Order & Fulfillment Governance</h1>
            <p className="text-slate-400">The constitutional ledger for every enterprise order, tracking payment, allocation, and delivery.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Order ID..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-72 transition-colors focus:ring-1 focus:ring-indigo-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Order Ledger
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Orders Processing
              <ShoppingCart className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,210</div>
            <div className="text-xs text-indigo-400">Active in fulfillment pipeline</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Delivered (Today)
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">124,901</div>
            <div className="text-xs text-emerald-400">Successfully fulfilled</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Returns Processing
              <RefreshCw className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-amber-400">Awaiting inspection</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Authorization
              <FileSignature className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">Bulk refunds/cancellations</div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Order Ledger" 
            headers={["Order Identifier", "Channel", "Financial Value", "Lifecycle Status", "Governance / Approvals", "Ledger Trace"]}
          >
            {[
              { id: "ORD-991204-A", channel: "D2C Website", value: "$1,299.00", status: "Shipped", gov: "Automated Release", trace: "ORD-EV-501" },
              { id: "ORD-441092-B", channel: "B2B Portal", value: "$42,500.00", status: "Payment Captured", gov: "Pending Export Compliance", trace: "ORD-EV-502" },
              { id: "ORD-REF-8812", channel: "Retail POS (Bulk)", value: "-$14,200.00", status: "Refund Requested", gov: "Pending Executive Signature", trace: "ORD-EV-503" },
              { id: "ORD-110293-D", channel: "Amazon Marketplace", value: "$149.00", status: "Delivered", gov: "Automated Release", trace: "ORD-EV-504" },
              { id: "ORD-775430-E", channel: "Mobile App", value: "$899.00", status: "Allocating Inventory", gov: "Automated Release", trace: "ORD-EV-505" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-indigo-400">
                   {row.id}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.channel}
                </td>
                <td className={`py-4 px-5 text-sm font-mono ${row.value.startsWith('-') ? 'text-rose-400' : 'text-slate-300'}`}>
                   {row.value}
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2">
                     {row.status === 'Shipped' && <Truck className="w-4 h-4 text-blue-500" />}
                     {row.status === 'Delivered' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                     {row.status.includes('Payment') && <ShoppingCart className="w-4 h-4 text-emerald-500" />}
                     {row.status.includes('Refund') && <RotateCcw className="w-4 h-4 text-rose-500" />}
                     {row.status.includes('Allocating') && <Package className="w-4 h-4 text-amber-500" />}
                     <span className="text-sm text-slate-300">{row.status}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.gov.includes('Automated') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.gov.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.gov.includes('Pending') && <FileSignature className="w-3 h-3" />}
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
