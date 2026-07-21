import React from "react";
import Link from "next/link";
import { ArrowLeft, Factory, Search, Download, ShieldCheck, Activity, Map, Boxes, Settings2, Box, Battery } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function IndustrialOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/edge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Edge Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Industrial Operations Center</h1>
            <p className="text-slate-400">Deterministic visibility into production sites, assembly lines, and factory environments.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Production Cells..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors focus:ring-1 focus:ring-emerald-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Operations Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overall Equipment Effectiveness
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">88.4%</div>
            <div className="text-xs text-emerald-400">World-class benchmark &gt; 85%</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Production Sites
              <Map className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-xs text-slate-500">Globally distributed</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Operating Cells
              <Boxes className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-slate-500">Assembly, CNC, Packing</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Energy Consumption
              <Battery className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42 MW</div>
            <div className="text-xs text-slate-500">Real-time load</div>
          </div>
        </div>

        {/* Operations Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Global Production Cell Status" 
            headers={["Production Cell", "Facility / Location", "Primary Function", "Current Output Rate", "Cell Status", "Runtime Ledger"]}
          >
            {[
              { cell: "Cell-Detroit-Auto-A1", loc: "Detroit Manufacturing Hub", func: "Chassis Assembly", rate: "42 Units/hr", status: "Optimal", trace: "OPS-EV-401" },
              { cell: "Cell-Berlin-Robot-09", loc: "Berlin Automation Site", func: "Precision Welding", rate: "128 Welds/hr", status: "Optimal", trace: "OPS-EV-402" },
              { cell: "Cell-Taipei-QA-01", loc: "Taipei QC Lab", func: "Automated Optical Insp.", rate: "1,200 Scans/hr", status: "Warning (High Reject)", trace: "OPS-EV-403" },
              { cell: "Line-Texas-Pack-04", loc: "Texas Distribution Center", func: "Automated Packaging", rate: "0 Units/hr", status: "Maintenance", trace: "OPS-EV-404" },
              { cell: "Cell-Osaka-CNC-12", loc: "Osaka Machining", func: "5-Axis Milling", rate: "12 Parts/hr", status: "Optimal", trace: "OPS-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Factory className="w-4 h-4 text-slate-500" />
                     {row.cell}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.loc}
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-300">
                   <div className="flex items-center gap-2">
                      <Settings2 className="w-4 h-4 text-slate-500" />
                      {row.func}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.rate}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Optimal' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Warning') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
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
