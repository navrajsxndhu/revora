import React from "react";
import Link from "next/link";
import { ArrowLeft, Factory, Activity, TrendingUp, AlertTriangle, Hammer, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveManufacturingDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Manufacturing Board</h1>
            <p className="text-slate-400">Board-level transparency into global production throughput, OEE, and facility utilization.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Overall Equipment Effectiveness
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">84.2%</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               Global Average (Target: 85%)
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Production Throughput
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">12,410</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Units Produced Today
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              First Pass Yield (FPY)
              <Hammer className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">96.8%</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Quality Tolerance Met
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Capacity Constraints
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">2</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               Critical Bottlenecks Detected
            </div>
          </div>
        </div>

        {/* Manufacturing Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Global Manufacturing Facilities" 
              headers={["Facility Location", "OEE", "Utilization", "Status"]}
            >
              {[
                { loc: "North America - Ohio Plant", oee: "86.4%", util: "92%", status: "Nominal" },
                { loc: "Europe - Munich Facility", oee: "82.1%", util: "88%", status: "Maintenance" },
                { loc: "APAC - Shenzhen Hub", oee: "88.9%", util: "98%", status: "Capacity Constrained" },
                { loc: "LATAM - Monterrey Plant", oee: "78.4%", util: "75%", status: "Underperforming" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Factory className="w-4 h-4 text-slate-500" />
                       {row.loc}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.oee}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.util}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Nominal' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.status === 'Capacity Constrained' || row.status === 'Underperforming' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive Production Approvals" 
              headers={["Strategic Request", "Impact Assessment", "Sponsor"]}
            >
              {[
                { req: "Capital Expense: CNC Machining Centers", impact: "$4.2M Investment", sponsor: "VP Manufacturing" },
                { req: "Shift Expansion (24/7 Operations)", impact: "+30% Labor Cost (APAC)", sponsor: "Plant Manager (APAC)" },
                { req: "Major Line Retooling Schedule", impact: "3 Days Planned Downtime", sponsor: "Dir. Engineering" },
                { req: "Critical Material Substitution", impact: "Quality Risk Acceptance", sponsor: "VP Quality Assurance" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.req}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.impact}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
