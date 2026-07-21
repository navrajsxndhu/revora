import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Search, Download, ShieldCheck, TerminalSquare, Command, ArrowRightCircle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseCLICenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise CLI Center</h1>
            <p className="text-slate-400">Governed command-line tooling. High-risk commands enforce authenticated human authorization.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Commands..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium transition-colors text-white">
               <Download className="w-4 h-4" /> Install Revora CLI
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              CLI Version
              <Terminal className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">v2.14.0</div>
            <div className="text-xs text-emerald-400">Stable release</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Sessions
              <TerminalSquare className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">412</div>
            <div className="text-xs text-blue-400">Authenticated global users</div>
          </div>
        </div>

        {/* Commands Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="CLI Command Reference & Governance" 
            headers={["Command String", "Description", "Required Privilege", "Runtime Auth Check", "Audit Trace"]}
          >
            {[
              { cmd: "revora auth login", desc: "Authenticate CLI session via SSO.", priv: "None", auth: "SSO Redirect", trace: "CLI-EV-301" },
              { cmd: "revora project list", desc: "List all accessible enterprise projects.", priv: "Read Project", auth: "Session Token", trace: "CLI-EV-302" },
              { cmd: "revora deploy --prod", desc: "Push artifacts to production environment.", priv: "Write Production", auth: "Human Signature Reqd", trace: "CLI-EV-303" },
              { cmd: "revora logs tail", desc: "Stream real-time constitutional logs.", priv: "Read Logs", auth: "Session Token", trace: "CLI-EV-304" },
              { cmd: "revora secrets rotate", desc: "Rotate cryptographic keys.", priv: "Admin Secrets", auth: "Executive Auth Only", trace: "CLI-EV-305" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-emerald-400 text-sm flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 w-max">
                       <Command className="w-3 h-3 text-slate-500" />
                       {row.cmd}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.desc}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.priv}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.auth.includes('Session') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    row.auth.includes('Signature') || row.auth.includes('Executive') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.auth.includes('Signature') && <ShieldCheck className="w-3 h-3" />}
                    {row.auth}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Documented" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
