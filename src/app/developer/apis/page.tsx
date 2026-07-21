import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Code, ShieldCheck, Lock, Globe, FileJson, PlayCircle, EyeOff } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseAPIExplorer() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/developer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Developer Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise API Explorer</h1>
            <p className="text-slate-400">Governed API discovery, OpenAPI documentation, and constitutional endpoint registry.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Endpoints..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <FileJson className="w-4 h-4" /> Download OpenAPI Spec
             </button>
          </div>
        </header>

        {/* Catalog Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Constitutional API Registry" 
            headers={["Endpoint", "Category", "Method", "Auth Required", "Governance Boundary", "Trace"]}
          >
            {[
              { path: "/api/v1/ledger/records", cat: "Evidence Ledger", method: "GET", auth: "OAuth2 + RBAC", gov: "Read-Only (No PII)", trace: "API-EV-101" },
              { path: "/api/v1/ledger/commit", cat: "Evidence Ledger", method: "POST", auth: "Human Signature Required", gov: "Immutable Append", trace: "API-EV-102" },
              { path: "/api/v1/users/profile", cat: "Identity", method: "GET", auth: "Bearer Token", gov: "PII Masked", trace: "API-EV-103" },
              { path: "/api/v1/finance/transfer", cat: "Finance", method: "POST", auth: "Executive Auth Only", gov: "Transaction Bound", trace: "API-EV-104" },
              { path: "/api/v1/system/health", cat: "Operations", method: "GET", auth: "None (Public)", gov: "Unrestricted", trace: "API-EV-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-slate-200 text-sm flex items-center gap-2">
                       <Code className="w-4 h-4 text-purple-500" />
                       {row.path}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.cat}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.method === 'GET' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                  }`}>
                    {row.method}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.auth.includes('None') ? 'bg-slate-800 text-slate-400 border-slate-700' : 
                    row.auth.includes('Signature') || row.auth.includes('Executive') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-indigo-900/20 text-indigo-400 border-indigo-900/50'
                  }`}>
                    {row.auth.includes('None') ? <Globe className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    {row.auth}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    {row.gov.includes('Masked') ? <EyeOff className="w-4 h-4 text-amber-500" /> : <ShieldCheck className="w-4 h-4 text-emerald-500" />}
                    {row.gov}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Active" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
