import React from "react";
import Link from "next/link";
import { ArrowLeft, Server, Search, Filter, ShieldCheck, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function EnterpriseAPICatalog() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/api-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to API Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise API Catalog</h1>
            <p className="text-slate-400">Inventory of all governed APIs, strictly mapping versioning and authentication bounds.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md text-sm font-medium transition-colors">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
              <Server className="w-4 h-4" /> Register API
            </button>
          </div>
        </header>

        {/* Search */}
        <div className="relative shrink-0">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search APIs by name, domain, or owner..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors shadow-lg"
          />
        </div>

        {/* Catalog Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Registered APIs" 
            headers={["API Name", "Domain", "Version", "Auth Method", "Lifecycle", "Policy", ""]}
          >
            {[
              { name: "Customer Core API", domain: "Sales", version: "v2.1.4", auth: "OAuth 2.0 (Entra ID)", status: "Published", policy: "Compliant" },
              { name: "Payments Gateway", domain: "Finance", version: "v4.0.0", auth: "mTLS + JWT", status: "Published", policy: "Compliant" },
              { name: "Inventory Sync API", domain: "Supply Chain", version: "v1.1.2", auth: "API Key", status: "Review", policy: "Compliant" },
              { name: "Legacy Billing REST", domain: "Finance", version: "v0.9.0", auth: "Basic Auth", status: "Deprecated", policy: "Violation" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4 text-blue-400" />
                    </div>
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.version}</td>
                <td className="py-4 px-5 text-sm">
                  <span className={`flex items-center gap-1 ${
                    row.auth.includes('Basic') ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {row.auth.includes('Basic') ? <ShieldAlert className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                    {row.auth}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.status === 'Review'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status === 'Published' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm flex items-center gap-1 ${row.policy === 'Compliant' ? 'text-emerald-500' : 'text-rose-400'}`}>
                    {row.policy === 'Compliant' ? <CheckCircle2 className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                    {row.policy}
                  </span>
                </td>
                <td className="py-4 px-5 text-right flex gap-3 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    <FileText className="w-4 h-4" /> Swagger
                  </button>
                  <button className="text-sm text-slate-400 hover:text-white">
                    Manage
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
