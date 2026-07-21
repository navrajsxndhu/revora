import React from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Search, Download, BookOpen, Terminal, CheckCircle2, ShieldCheck, Bug, Zap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PluginSDKCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Plugin SDK Center</h1>
            <p className="text-slate-400">The governed developer experience for building constitutional enterprise extensions.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search API Docs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors focus:ring-1 focus:ring-purple-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
               <Download className="w-4 h-4" /> Download SDK CLI
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              SDK Version
              <Code2 className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">v4.2.0</div>
            <div className="text-xs text-purple-400">Latest Stable Release</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              API Coverage
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-blue-400">Constitutional API bound</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Security Frameworks
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Enforced</div>
            <div className="text-xs text-emerald-400">Zero-trust runtime embedded</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Testing Suite
              <Bug className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Active</div>
            <div className="text-xs text-indigo-400">Automated policy validation</div>
          </div>
        </div>

        {/* Resources Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="SDK Resources & Documentation" 
            headers={["Resource Module", "Description", "Required Compliance", "Status", "Version Trace"]}
          >
            {[
              { mod: "Extension Manifest Spec", desc: "Configuration file structure for defining plugin scopes.", req: "Strict Metadata Parsing", status: "Available", trace: "SDK-EV-301" },
              { mod: "Runtime Execution API", desc: "Methods for interacting with the Evidence Ledger.", req: "Immutable Writes Only", status: "Available", trace: "SDK-EV-302" },
              { mod: "UI Component Standards", desc: "React/Next.js components matching Revora styling.", req: "Accessibility (a11y) Pass", status: "Available", trace: "SDK-EV-303" },
              { mod: "Constitutional Testing Framework", desc: "Local mock environment to test policy compliance.", req: "Zero Network Egress", status: "Available", trace: "SDK-EV-304" },
              { mod: "Human Approval Hooks", desc: "API for halting execution until cryptographic signature.", req: "Executive Signature", status: "Available", trace: "SDK-EV-305" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <BookOpen className="w-4 h-4 text-slate-500" />
                     {row.mod}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.desc}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      {row.req}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Available' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status === 'Available' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="v4.2.0" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
