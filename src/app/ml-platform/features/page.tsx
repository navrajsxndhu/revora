import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Search, PlusCircle, Database, Clock, Fingerprint, RefreshCw, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function FeatureStoreGovernance() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ml-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ML Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Feature Store Governance</h1>
            <p className="text-slate-400">Central governance for reusable enterprise features, lineage tracking, and data quality metrics.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Features..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Register Feature
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Certified Features
              <Layers className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,812</div>
            <div className="text-xs text-emerald-400">Approved for production use</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Source Lineage
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-blue-400">Cryptographically verifiable</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Feature Reuse Rate
              <Fingerprint className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3.4x</div>
            <div className="text-xs text-purple-400">Models per feature (avg)</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Real-time Pipeline SLA
              <Clock className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-indigo-400">On-time computation</div>
          </div>
        </div>

        {/* Feature Store Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Feature Catalog" 
            headers={["Feature Group / Name", "Data Type", "Owner", "Refresh Cadence", "Quality Status", "Lineage Trace"]}
          >
            {[
              { name: "customer_activity_features.avg_spend_30d", type: "Float32", owner: "Data Eng Team", refresh: "Daily (Batch)", status: "Healthy", trace: "FEAT-EV-201" },
              { name: "fraud_signals.recent_failed_logins", type: "Int64", owner: "Risk Team", refresh: "Real-time (Stream)", status: "Healthy", trace: "FEAT-EV-202" },
              { name: "product_catalog.embedding_v2", type: "Vector[768]", owner: "AI Core", refresh: "Weekly", status: "Healthy", trace: "FEAT-EV-203" },
              { name: "supply_chain.warehouse_stock_level", type: "Int64", owner: "Logistics Team", refresh: "Hourly", status: "Stale Data Warning", trace: "FEAT-EV-204" },
              { name: "user_profile.demographics_encoded", type: "Float32[]", owner: "Growth Team", refresh: "Monthly", status: "Healthy", trace: "FEAT-EV-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-emerald-400 text-sm flex items-center gap-2">
                       <Layers className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.type}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.owner}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.refresh.includes('Real-time') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' : 
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    <RefreshCw className="w-3 h-3" />
                    {row.refresh}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Healthy' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Validated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
