import React from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Search, Download, BookOpen, CheckCircle2, ShieldCheck, Package } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseSDKCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise SDK Center</h1>
            <p className="text-slate-400">Official Software Development Kits natively bound to Revora's constitutional runtime.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Libraries..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Supported Languages
              <Code2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-xs text-blue-400">Tier 1 official support</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Security Compliance
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Zero CVEs across latest versions</div>
          </div>
        </div>

        {/* SDK Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Official Client Libraries" 
            headers={["SDK / Language", "Current Version", "Package Manager", "Status", "Release Trace"]}
          >
            {[
              { lang: "TypeScript / Node.js", ver: "v4.2.0", pkg: "npm install @revora/sdk", status: "Active", trace: "SDK-EV-201" },
              { lang: "Python", ver: "v3.1.5", pkg: "pip install revora-sdk", status: "Active", trace: "SDK-EV-202" },
              { lang: "Java", ver: "v2.0.1", pkg: "mvn: com.revora:sdk", status: "Active", trace: "SDK-EV-203" },
              { lang: "Go", ver: "v1.4.0", pkg: "go get github.com/revora/sdk-go", status: "Active", trace: "SDK-EV-204" },
              { lang: ".NET / C#", ver: "v1.0.0-rc", pkg: "dotnet add package Revora.SDK", status: "Release Candidate", trace: "SDK-EV-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Code2 className="w-4 h-4 text-blue-500" />
                     {row.lang}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.ver}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 w-max">
                      <Package className="w-3 h-3 text-slate-500" />
                      {row.pkg}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Active' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
