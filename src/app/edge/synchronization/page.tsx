import React from "react";
import Link from "next/link";
import { ArrowLeft, Network, Search, Download, Clock, WifiOff, Cloud, HardDrive, RefreshCcw, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EdgeSynchronization() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Edge Synchronization & Connectivity</h1>
            <p className="text-slate-400">Monitoring data consistency, replication health, and connectivity between edge nodes and cloud infrastructure.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Sync Channels..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-slate-500 w-72 transition-colors focus:ring-1 focus:ring-slate-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Sync Logs
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.05)] border-slate-700 bg-slate-800/30">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Sync Health
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.98%</div>
            <div className="text-xs text-emerald-500">Cloud-to-Edge Parity</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Average Sync Latency
              <Clock className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42 ms</div>
            <div className="text-xs text-blue-400">P95 Global Latency</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Queue Depth
              <HardDrive className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-amber-400">Messages Pending Replication</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Disconnected Nodes
              <WifiOff className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-rose-400">Buffering local data</div>
          </div>
        </div>

        {/* Sync Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Edge Synchronization Channels" 
            headers={["Edge Node / Cluster", "Direction & Protocol", "Data Freshness", "Sync Status", "Queue Size", "Ledger Event"]}
          >
            {[
              { node: "Detroit Factory Gateway", proto: "MQTT (Bi-directional)", fresh: "2s ago", status: "Synced", queue: "0 msgs", trace: "SYNC-EDG-801" },
              { node: "Berlin Logistics Server", proto: "Kafka (Edge-to-Cloud)", fresh: "12ms ago", status: "Synced", queue: "0 msgs", trace: "SYNC-EDG-802" },
              { node: "Ocean Freight Sensor C2", proto: "CoAP (Edge-to-Cloud)", fresh: "4 hours ago", status: "Offline (Buffering)", queue: "14,200 msgs", trace: "SYNC-EDG-803" },
              { node: "Retail Store POS (LDN)", proto: "REST (Cloud-to-Edge)", fresh: "1m ago", status: "Degraded Latency", queue: "450 msgs", trace: "SYNC-EDG-804" },
              { node: "Texas Fulfillment K3s", proto: "gRPC (Bi-directional)", fresh: "5s ago", status: "Synced", queue: "12 msgs", trace: "SYNC-EDG-805" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Cloud className="w-4 h-4 text-slate-500" />
                     {row.node}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   <div className="flex items-center gap-2">
                      <RefreshCcw className="w-3 h-3 text-slate-600" />
                      {row.proto}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      {row.fresh}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Synced' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Offline') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.queue}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
