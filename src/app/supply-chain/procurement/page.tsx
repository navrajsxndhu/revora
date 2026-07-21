import React from "react";
import Link from "next/link";
import { ArrowLeft, PackageCheck, DollarSign, AlertCircle, FileCheck2, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ProcurementOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/supply-chain" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Supply Chain Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Procurement & Inventory Governance</h1>
            <p className="text-slate-400">Unified governance over purchase approvals, sourcing events, and inventory thresholds.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
            <DollarSign className="w-4 h-4" /> Initiate Purchase Request (PR)
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Procurement Cycle Time
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4.2 Days</div>
            <div className="text-sm font-medium text-emerald-400">Avg time from PR to PO issuance</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Purchase Requisitions
              <FileCheck2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">124</div>
            <div className="text-sm font-medium text-blue-400">Awaiting Sourcing or Approval</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Executive Approvals Needed
              <ShieldCheck className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">6</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               <AlertCircle className="w-3 h-3" /> High-Value or Non-Standard Spend
            </div>
          </div>
        </div>

        {/* Procurement Pipeline Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Procurement Workflow (PRs & POs)" 
            headers={["Request / Order ID", "Procurement Stage", "Requestor", "Est. Value", "Vendor", "Governance Check"]}
          >
            {[
              { id: "PR-99201", stage: "Executive Review", req: "VP Engineering", val: "$1.4M", vendor: "Stark Software Solutions", status: "Board Approval Required", trace: "PRO-EV-211" },
              { id: "PR-99245", stage: "Sourcing & Bidding", req: "Facilities Director", val: "$450K", vendor: "TBD (RFP Open)", status: "In Sourcing", trace: "PRO-EV-214" },
              { id: "PO-44102", stage: "Awaiting Delivery", req: "IT Infrastructure", val: "$125K", vendor: "Global Tech Hardware Inc", status: "Order Placed", trace: "PRO-EV-219" },
              { id: "PO-44091", stage: "Goods Received", req: "Logistics Team", val: "$82K", vendor: "Acme Logistics Services", status: "Completed", trace: "PRO-EV-221" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-slate-200 text-sm">{row.id}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.stage.includes('Received') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.stage.includes('Review') || row.stage.includes('Sourcing') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.req}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-200">{row.val}</td>
                <td className="py-4 px-5 text-sm font-medium text-slate-400">{row.vendor}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Completed') || row.status.includes('Order') ? 'text-emerald-500' :
                    row.status.includes('Required') ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status.includes('Required') && <AlertCircle className="w-4 h-4" />}
                    {row.status.includes('Completed') && <FileCheck2 className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Change Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
