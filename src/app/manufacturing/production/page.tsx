import React from "react";
import Link from "next/link";
import { ArrowLeft, ClipboardList, Search, Play, Pause, CheckCircle2, Download, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ProductionRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/manufacturing" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Manufacturing Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Production Order Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all manufacturing execution, tracing materials to finished goods.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Orders & BOMs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Batch Report
             </button>
          </div>
        </header>

        {/* Production Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Manufacturing Execution" 
            headers={["Order ID", "Product & BOM", "Work Center", "Target Quantity", "Progress", "Status", "Execution Record"]}
          >
            {[
              { id: "PROD-2441", prod: "Enterprise Router (ER-990)", center: "Assembly Line 1", target: "1,200", progress: "840 (70%)", status: "In Production", trace: "MFG-EV-801" },
              { id: "PROD-2445", prod: "Switch Chassis (SC-100)", center: "Machining Cell B", target: "400", progress: "120 (30%)", status: "Paused (Setup)", trace: "MFG-EV-805" },
              { id: "PROD-2420", prod: "Power Supply Unit (PSU-22)", center: "SMT Line 4", target: "5,000", progress: "5,000 (100%)", status: "Completed", trace: "MFG-EV-811" },
              { id: "PROD-2448", prod: "Cooling Fan Assembly (CF-12)", center: "Assembly Line 3", target: "2,000", progress: "0 (0%)", status: "Queued", trace: "MFG-EV-815" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">{row.prod}</div>
                      <Link href={`/manufacturing/production/${row.id}`} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5">
                        View Routing & BOM <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.center}
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300">
                      {row.target}
                   </span>
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-emerald-400/80">
                      {row.progress}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'In Production' ? 'text-blue-500' : 
                    row.status === 'Completed' ? 'text-emerald-500' :
                    'text-amber-500'
                  }`}>
                    {row.status === 'In Production' && <Play className="w-4 h-4" />}
                    {row.status === 'Paused (Setup)' && <Pause className="w-4 h-4" />}
                    {row.status === 'Completed' && <CheckCircle2 className="w-4 h-4" />}
                    {row.status === 'Queued' && <ClipboardList className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Batch Synced" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
