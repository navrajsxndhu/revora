import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Search, Filter, DatabaseZap, Lock, Activity, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function EnterpriseDataCatalog() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/data-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Data Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Data Catalog</h1>
            <p className="text-slate-400">Inventory of all governed datasets. No uncertified data may be used in production.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md text-sm font-medium transition-colors">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
              <DatabaseZap className="w-4 h-4" /> Register Dataset
            </button>
          </div>
        </header>

        {/* Search */}
        <div className="relative shrink-0">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search enterprise datasets, schemas, or owners..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors shadow-lg"
          />
        </div>

        {/* Catalog Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Registered Datasets" 
            headers={["Dataset", "Domain", "Steward", "Privacy Class", "Quality", "Status", ""]}
          >
            {[
              { name: "Global_Customer_Master", domain: "CRM", steward: "M. Reed", privacy: "PII (Restricted)", quality: "98.5%", status: "Certified" },
              { name: "Financial_Transactions_Q4", domain: "Treasury", steward: "S. Chen", privacy: "Confidential", quality: "99.9%", status: "Certified" },
              { name: "Website_Clickstream_Raw", domain: "Marketing", steward: "System API", privacy: "Public", quality: "82.1%", status: "Uncertified" },
              { name: "Employee_Health_Records", domain: "HR", steward: "Legal", privacy: "HIPAA (Critical)", quality: "95.0%", status: "Certified" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4 text-blue-400" />
                    </div>
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.steward}</td>
                <td className="py-4 px-5 text-sm">
                  <span className={`flex items-center gap-1 ${
                    row.privacy.includes('Restricted') || row.privacy.includes('Critical') ? 'text-rose-400' :
                    row.privacy.includes('Confidential') ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {(row.privacy.includes('Restricted') || row.privacy.includes('Critical')) && <Lock className="w-3 h-3" />}
                    {row.privacy}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-sm font-mono text-emerald-400">
                    <Activity className="w-3 h-3 text-emerald-500" /> {row.quality}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Certified'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status === 'Certified' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="text-sm text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Lineage
                  </button>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
