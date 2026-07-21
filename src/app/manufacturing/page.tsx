import React from "react";
import Link from "next/link";
import { Factory, Cog, Wrench, AlertTriangle, ArrowRight, Search, FileCheck2, ClipboardList, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ManufacturingOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Manufacturing Operations Command Center</h1>
            <p className="text-slate-400">Enterprise governance over production execution, machine utilization, and shop floor delays.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/executive/manufacturing" className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 text-blue-400 border border-blue-900/50 hover:bg-blue-900/30 rounded-md text-sm font-medium transition-colors">
              <Factory className="w-4 h-4" /> Executive Manufacturing Board
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Production Orders
              <ClipboardList className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-blue-400">In-progress on shop floor</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Machine Utilization
              <Cog className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">91%</div>
            <div className="text-xs text-emerald-500">Across 864 Work Centers</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Production Bottlenecks
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Impacting Delivery Schedules</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Unplanned Downtime
              <Wrench className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2 Hrs</div>
            <div className="text-xs text-slate-500">Trailing 24 Hours</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Manufacturing Frameworks</h3>
            
            <Link href="/manufacturing/production" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Production Order Registry</div>
                <div className="text-xs text-slate-500">BOMs & Execution History</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/manufacturing/quality" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Quality Assurance Center</div>
                <div className="text-xs text-slate-500">Inspections, NCRs & CAPAs</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
            
            <div className="mt-8 relative">
               <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search Orders & Machines..." className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          {/* Actionable Requests Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Shop Floor Action Queue" 
              headers={["Event / Exception", "Work Center", "Assigned Owner", "Status"]}
            >
              {[
                { event: "Machine Failure (CNC-04)", center: "Machining Line 2", owner: "Maintenance Engineering", status: "Critical" },
                { event: "Material Shortage (Steel Coil)", center: "Stamping Press A", owner: "Inventory Controller", status: "Blocked" },
                { event: "Production Delay Alert", center: "Assembly Line 4", owner: "Production Supervisor", status: "Warning" },
                { event: "Preventative Maintenance Due", center: "Packaging Robot B", owner: "Maintenance Team", status: "Scheduled" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.event}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.center}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Critical' || row.status === 'Blocked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'Warning' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
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
