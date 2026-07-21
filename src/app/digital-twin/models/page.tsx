import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Search, Cpu, Users, Factory, Download, MapPin, Box, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DigitalTwinModels() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/digital-twin" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Digital Twin
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Digital Models</h1>
            <p className="text-slate-400">The constitutional registry linking physical enterprise capabilities to governed digital objects.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Digital Models..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Model Manifest
             </button>
          </div>
        </header>

        {/* Models Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Governed Enterprise Models" 
            headers={["Model Identifier", "Entity Classification", "Dependencies", "Synchronization State", "Constitutional Record"]}
          >
            {[
              { id: "MOD-INF-AWS-01", name: "AWS Cloud Infrastructure (us-east-1)", class: "Infrastructure", deps: "142 Services", sync: "Active (Real-time)", trace: "TWIN-EV-201" },
              { id: "MOD-MFG-EU-03", name: "Berlin Gigafactory Production Line", class: "Manufacturing", deps: "84 Suppliers", sync: "Active (Real-time)", trace: "TWIN-EV-205" },
              { id: "MOD-WKF-ENG-01", name: "Global Engineering Workforce", class: "Workforce", deps: "4,200 FTEs", sync: "Active (Daily Batch)", trace: "TWIN-EV-211" },
              { id: "MOD-PRD-REV-v2", name: "Revora Enterprise OS Topology", class: "Product", deps: "42 Modules", sync: "Active (Real-time)", trace: "TWIN-EV-215" },
              { id: "MOD-LOC-SNG-01", name: "Singapore APAC HQ (Facility)", class: "Location", deps: "4 Networks", sync: "Degraded (Latency)", trace: "TWIN-EV-220" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-blue-400 mb-0.5">{row.id}</span>
                    <span className="font-bold flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                       {row.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      {row.class === 'Infrastructure' && <Cpu className="w-4 h-4 text-purple-500" />}
                      {row.class === 'Manufacturing' && <Factory className="w-4 h-4 text-amber-500" />}
                      {row.class === 'Workforce' && <Users className="w-4 h-4 text-emerald-500" />}
                      {row.class === 'Product' && <Box className="w-4 h-4 text-blue-500" />}
                      {row.class === 'Location' && <MapPin className="w-4 h-4 text-rose-500" />}
                      {row.class}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded">
                      {row.deps}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.sync.includes('Active') ? 'text-emerald-500' : 'text-rose-500'
                  }`}>
                    {row.sync}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="State Modeled" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
