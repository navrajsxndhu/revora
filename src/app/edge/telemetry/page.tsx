import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Search, Download, Thermometer, Zap, AlertTriangle, Cpu, TrendingDown, Gauge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TelemetrySensorIntelligence() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Telemetry & Sensor Intelligence</h1>
            <p className="text-slate-400">Observational monitoring of physical enterprise environments. Strictly read-only and deterministic.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Sensor Tags..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors focus:ring-1 focus:ring-purple-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Time-Series
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Ingestion Rate
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2M / sec</div>
            <div className="text-xs text-purple-400">Time-series data points</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Thermal Anomalies
              <Thermometer className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-amber-400">Deviation from baseline &gt; 15%</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Power Consumption
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">48.2 MW</div>
            <div className="text-xs text-blue-400">Global footprint aggregated</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Vibration Warnings
              <Gauge className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-rose-400">Predictive maintenance required</div>
          </div>
        </div>

        {/* Telemetry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Real-time Sensor Stream" 
            headers={["Sensor Tag / Location", "Metric Type", "Current Value", "Baseline Variance", "Status", "Ledger Trace"]}
          >
            {[
              { tag: "SENS-TMP-DC-NY-01", type: "Temperature (Ambient)", val: "22.4 °C", var: "+0.2%", status: "Nominal", trace: "TEL-EV-601" },
              { tag: "SENS-VIB-ROB-DET-4", type: "Vibration (Axis Z)", val: "0.14g RMS", var: "+420%", status: "Critical (Imminent Failure)", trace: "TEL-EV-602" },
              { tag: "SENS-PWR-CHLR-01", type: "Power Draw (Active)", val: "142 kW", var: "+2.1%", status: "Nominal", trace: "TEL-EV-603" },
              { tag: "SENS-PRM-PMP-09", type: "Fluid Pressure", val: "112 PSI", var: "-14%", status: "Warning (Low Pressure)", trace: "TEL-EV-604" },
              { tag: "SENS-CPU-GW-EU", type: "Compute Utilization", val: "94%", var: "+30%", status: "Warning (High Load)", trace: "TEL-EV-605" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm font-mono">
                  {row.tag}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      {row.type.includes('Temperature') && <Thermometer className="w-4 h-4 text-amber-500" />}
                      {row.type.includes('Vibration') && <Activity className="w-4 h-4 text-rose-500" />}
                      {row.type.includes('Power') && <Zap className="w-4 h-4 text-blue-500" />}
                      {row.type.includes('Pressure') && <Gauge className="w-4 h-4 text-emerald-500" />}
                      {row.type.includes('Compute') && <Cpu className="w-4 h-4 text-indigo-500" />}
                      {row.type}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-bold text-slate-200">
                   {row.val}
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-mono flex items-center gap-1 ${
                      row.var.startsWith('+') && parseFloat(row.var.slice(1)) > 15 ? 'text-rose-500' :
                      row.var.startsWith('-') && parseFloat(row.var.slice(1)) > 10 ? 'text-amber-500' : 'text-slate-400'
                   }`}>
                      {row.var.startsWith('+') && parseFloat(row.var.slice(1)) > 15 && <TrendingDown className="w-3 h-3 text-rose-500 rotate-180" />}
                      {row.var}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Nominal' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Critical') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
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
