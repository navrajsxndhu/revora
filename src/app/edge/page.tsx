import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Server, Wifi, Network, Activity, Factory, ShieldCheck, Box, CloudCog, ShieldAlert, WifiOff } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function EdgeCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Edge Operations Command Center</h1>
            <p className="text-slate-400">Constitutional governance over enterprise edge, industrial IoT, and distributed physical infrastructure.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/edge/synchronization" className="flex items-center gap-2 px-4 py-2 bg-emerald-900/40 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-900/60 rounded-md text-sm font-medium transition-colors">
              <Activity className="w-4 h-4" /> Global Sync Health: 99.98%
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Connected Edge Devices
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42,891</div>
            <div className="text-xs text-blue-400">IoT, PLCs, Gateways</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Industrial Sites
              <Factory className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">128</div>
            <div className="text-xs text-emerald-400">Manufacturing & Distribution</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Offline / Degraded Devices
              <WifiOff className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-rose-400">Requires Field Service</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Edge Workloads (K3s)
              <Server className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-indigo-400">Distributed Containers</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Edge Governance</h3>
            
            <Link href="/edge/devices" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Device & Gateway Registry</div>
                <div className="text-xs text-slate-500">Inventory & Firmware Status</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/edge/operations" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Factory className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Industrial Operations</div>
                <div className="text-xs text-slate-500">Assembly Lines & Cells</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/edge/deployments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <CloudCog className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">Edge Fleet Deployments</div>
                <div className="text-xs text-slate-500">Rollouts & Workloads</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </Link>

            <Link href="/edge/telemetry" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Telemetry Intelligence</div>
                <div className="text-xs text-slate-500">Sensors, Metrics, Health</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/edge/security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Device Security Center</div>
                <div className="text-xs text-slate-500">TPM, Secure Boot, Trust</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
            
            <Link href="/edge/synchronization" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Edge Synchronization</div>
                <div className="text-xs text-slate-500">Cloud-to-Edge Sync Health</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </Link>
          </div>

          {/* Active Enterprise Operations Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Global Edge Events" 
              headers={["Event Timestamp", "Site / Device", "Event Classification", "Status"]}
            >
              {[
                { time: "2026-07-21 14:50:11", asset: "Factory-Berlin-Cell-4 (PLC)", event: "Telemetry Sync Restored", status: "Resolved" },
                { time: "2026-07-21 14:45:00", asset: "Gateway-US-East-Retail", event: "Firmware OTA Update (v2.1.4)", status: "In Progress" },
                { time: "2026-07-21 13:12:00", asset: "Sensor-HVAC-HQ-01", event: "Lost Connectivity (Heartbeat Timeout)", status: "Offline" },
                { time: "2026-07-21 10:30:44", asset: "Robot-Arm-Detroit-A1", event: "Secure Boot Validation Failure", status: "Quarantined" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Box className="w-4 h-4 text-blue-500" />
                       {row.asset}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.event}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Quarantined') || row.status.includes('Offline') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status.includes('In Progress') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
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
