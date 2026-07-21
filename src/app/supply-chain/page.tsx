import React from "react";
import Link from "next/link";
import { PackageCheck, Truck, ShieldAlert, ArrowRight, Search, FileCheck2, Building2, AlertTriangle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function SupplyChainOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Supply Chain Operations Command Center</h1>
            <p className="text-slate-400">Enterprise governance over procurement workflows, supplier deliveries, and operational inventory.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/executive/supply-chain" className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 text-blue-400 border border-blue-900/50 hover:bg-blue-900/30 rounded-md text-sm font-medium transition-colors">
              <PackageCheck className="w-4 h-4" /> Executive Supply Chain Board
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Purchase Orders
              <FileCheck2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">412</div>
            <div className="text-xs text-blue-400">Awaiting Delivery</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Supplier SLA Breaches
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-xs text-rose-400">Escalated to Vendor Management</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              In-Transit Deliveries
              <Truck className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,240</div>
            <div className="text-xs text-amber-400">Global Logistics Tracking</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Inventory Alerts
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-slate-500">Below Reorder Threshold</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Supply Chain Frameworks</h3>
            
            <Link href="/supply-chain/vendors" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Enterprise Vendor Registry</div>
                <div className="text-xs text-slate-500">Constitutional supplier ledger</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/supply-chain/procurement" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <PackageCheck className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Procurement Governance</div>
                <div className="text-xs text-slate-500">Purchasing & Inventory Control</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>
            
            <div className="mt-8 relative">
               <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search POs & Vendors..." className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          {/* Actionable Requests Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Supply Chain Action Queue" 
              headers={["Exception / Workflow", "Vendor / Subject", "Assigned Owner", "Status"]}
            >
              {[
                { flow: "Delayed Shipment (PO-8812)", subj: "Oceanic Manufacturing", owner: "Logistics Coordinator", status: "Escalated" },
                { flow: "Emergency Stock Replenishment", subj: "Silicon Wafers (SKU-110)", owner: "Inventory Manager", status: "Awaiting Sourcing" },
                { flow: "Quarterly Vendor Performance Review", subj: "Acme Logistics Services", owner: "Vendor Manager", status: "In Progress" },
                { flow: "Contract Renewal Validation", subj: "Global Tech Hardware Inc", owner: "Procurement Director", status: "Pending Review" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.flow}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.subj}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Escalated' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'In Progress' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
