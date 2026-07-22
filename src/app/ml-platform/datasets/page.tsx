import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Database, Lock, Eye, CheckCircle2, ShieldCheck, Tag } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DatasetGovernance() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Dataset Governance Center</h1>
            <p className="text-slate-400">Enterprise registry for governed training datasets. Every modification produces immutable evidence.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Datasets..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-md text-sm font-medium transition-colors text-white">
               <Database className="w-4 h-4" /> Register Dataset
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Governed Datasets
              <Database className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">842</div>
            <div className="text-xs text-indigo-400">Approved for ML training</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              High Quality Tier
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94%</div>
            <div className="text-xs text-emerald-400">Passes validation constraints</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              PII / Restricted Data
              <Lock className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">156</div>
            <div className="text-xs text-rose-400">Requires strict ABAC authorization</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Stewardship
              <Eye className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-blue-400">Owner assigned to all sets</div>
          </div>
        </div>

        {/* Dataset Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Dataset Directory" 
            headers={["Dataset Name", "Data Steward", "Privacy Tier", "Size / Rows", "Quality Score", "Governance Trace"]}
          >
            {[
              { name: "global_customer_tx_2026", steward: "Finance Analytics Team", privacy: "Restricted (PII)", size: "4.2TB / 850M", quality: "98/100", trace: "DATA-EV-801" },
              { name: "product_catalog_images", steward: "Content Ops", privacy: "Public", size: "12TB / 4M", quality: "99/100", trace: "DATA-EV-802" },
              { name: "employee_performance_q3", steward: "HR Data Science", privacy: "Confidential", size: "1.2GB / 15k", quality: "100/100", trace: "DATA-EV-803" },
              { name: "web_telemetry_raw_streams", steward: "Data Engineering", privacy: "Internal", size: "45TB / 12B", quality: "82/100 (Unstructured)", trace: "DATA-EV-804" },
              { name: "medical_records_anon", steward: "Healthcare AI Group", privacy: "Restricted (HIPAA)", size: "8.4TB / 120M", quality: "95/100", trace: "DATA-EV-805" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-indigo-400 text-sm flex items-center gap-2">
                       <Database className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.steward}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.privacy.includes('Restricted') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.privacy === 'Confidential' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.privacy === 'Public' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.privacy.includes('Restricted') && <Lock className="w-3 h-3" />}
                    {row.privacy}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.size}
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.quality.includes('82') ? 'text-amber-400' : 'text-emerald-400'}>
                     {row.quality}
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
