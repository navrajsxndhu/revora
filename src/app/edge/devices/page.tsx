import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Search, Download, ShieldCheck, ShieldAlert, Signal, Settings, HardDrive, Wifi } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EdgeDeviceRegistry() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Device & Gateway Registry</h1>
            <p className="text-slate-400">Constitutional ledger for IoT sensors, PLCs, industrial robots, and edge servers.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Devices (MAC/IP)..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Device Roster
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Registered Assets
              <HardDrive className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42,891</div>
            <div className="text-xs text-blue-400">Governed Physical Devices</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Heartbeats
              <Signal className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42,749</div>
            <div className="text-xs text-emerald-500">Connected in last 60s</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Firmware Updates
              <Settings className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-amber-400">Scheduled Rollouts</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Security Anomalies
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">TPM or Boot Validation Failed</div>
          </div>
        </div>

        {/* Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Global Edge Inventory" 
            headers={["Device Identifier", "Asset Class", "Location / Zone", "Firmware & Security", "Connectivity State", "Governance Trace"]}
          >
            {[
              { id: "PLC-Detroit-M4-01", class: "Industrial Controller", loc: "Detroit / Assembly Line 4", fw: "v2.1.4 (Secure Boot OK)", status: "Online", trace: "EDG-REG-201" },
              { id: "Sensor-Temp-NY-Rack1", class: "IoT Environmental", loc: "NY Datacenter / Rack 1", fw: "v1.0.8 (Verified)", status: "Online", trace: "EDG-REG-202" },
              { id: "Gateway-Edge-EU-West", class: "Edge Compute Gateway", loc: "Frankfurt / Warehouse C", fw: "v3.0.0 (TPM Warning)", status: "Degraded", trace: "EDG-REG-203" },
              { id: "Robot-Arm-Kuka-09", class: "Manufacturing Robot", loc: "Berlin / Cell 2", fw: "v4.2.1 (Update Pending)", status: "Online", trace: "EDG-REG-204" },
              { id: "POS-Terminal-LDN-01", class: "Retail Point-of-Sale", loc: "London / Flagship Store", fw: "v1.2.9 (Compromised)", status: "Quarantined", trace: "EDG-REG-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-slate-500" />
                     {row.id}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.class}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.loc}
                </td>
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="text-xs font-mono text-slate-300">{row.fw.split(' ')[0]}</span>
                     <span className={`text-[10px] font-bold ${
                       row.fw.includes('OK') || row.fw.includes('Verified') ? 'text-emerald-500' :
                       row.fw.includes('Pending') || row.fw.includes('Warning') ? 'text-amber-500' : 'text-rose-500'
                     }`}>
                       {row.fw.substring(row.fw.indexOf('('))}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Online' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Degraded' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status === 'Online' && <Wifi className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Registered" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
