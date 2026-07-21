import React from "react";
import Link from "next/link";
import { ArrowLeft, PackageOpen, Search, Download, Layers, ShieldCheck, Tag, Box, ArrowUpCircle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PackageRepository() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Package Repository</h1>
            <p className="text-slate-400">The internal registry for reusable, governed, and certified enterprise packages.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Packages..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white">
               <ArrowUpCircle className="w-4 h-4" /> Publish Package
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Packages
              <PackageOpen className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">842</div>
            <div className="text-xs text-indigo-400">Reusable components</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Versions
              <Layers className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,102</div>
            <div className="text-xs text-blue-400">Across all packages</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Certified Safe
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.1%</div>
            <div className="text-xs text-emerald-400">Passed vulnerability scan</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Deprecated
              <Box className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">41</div>
            <div className="text-xs text-amber-400">Requires migration</div>
          </div>
        </div>

        {/* Packages Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Internal Package Index" 
            headers={["Package Namespace", "Latest Version", "Owning Department", "Dependency Count", "Certification Status", "Publish Trace"]}
          >
            {[
              { pkg: "@revora/ui-core", ver: "v2.4.1", dept: "Platform Engineering", deps: "14", status: "Gold Certified", trace: "PKG-EV-701" },
              { pkg: "@revora/auth-provider", ver: "v1.9.0", dept: "Security & IAM", deps: "2", status: "Gold Certified", trace: "PKG-EV-702" },
              { pkg: "@revora/legacy-export", ver: "v0.9.4", dept: "Data Platform", deps: "45", status: "Deprecated", trace: "PKG-EV-703" },
              { pkg: "@revora/hr-workflows", ver: "v3.0.0", dept: "Human Resources", deps: "8", status: "Silver Certified", trace: "PKG-EV-704" },
              { pkg: "@revora/experimental-ai", ver: "v0.1.0-beta", dept: "AI Labs", deps: "12", status: "Review Required", trace: "PKG-EV-705" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-indigo-400">
                  <div className="flex items-center gap-2">
                     <PackageOpen className="w-4 h-4 text-slate-500" />
                     {row.pkg}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-slate-500" />
                      {row.ver}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.dept}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.deps} deps
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Gold') ? 'bg-yellow-900/20 text-yellow-400 border-yellow-900/50' : 
                    row.status.includes('Silver') ? 'bg-slate-800 text-slate-300 border-slate-600' :
                    row.status.includes('Review') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status.includes('Gold') && <ShieldCheck className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Published" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
