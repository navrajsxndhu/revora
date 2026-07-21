import React from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Search, PlusCircle, ShieldCheck, Lock, AlertTriangle, Fingerprint, CalendarOff, EyeOff } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function APIKeysCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">API Keys & Access Tokens</h1>
            <p className="text-slate-400">Central governance for developer credentials. Zero plaintext secrets are exposed; only metadata is retained.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Credentials..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-rose-700 hover:bg-rose-600 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Generate New Key
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active API Keys
              <KeyRound className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">342</div>
            <div className="text-xs text-rose-400">Scoped access tokens</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              OAuth Applications
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-blue-400">Trusted integrations</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Service Accounts
              <Fingerprint className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">48</div>
            <div className="text-xs text-emerald-400">Machine-to-machine</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Expiring Soon (30d)
              <CalendarOff className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-amber-400">Requires rotation</div>
          </div>
        </div>

        {/* Keys Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Credential Registry (Metadata Only)" 
            headers={["Key Name / Owner", "Key Identifier", "Scope / Permissions", "Last Usage", "Status", "Audit Trace"]}
          >
            {[
              { name: "Production ERP Sync", owner: "Finance System", prefix: "rev_prod_x8...", scope: "Finance (Write)", usage: "2 mins ago", status: "Active", trace: "KEY-EV-401" },
              { name: "Developer Sandbox Key", owner: "jdoe@revora.com", prefix: "rev_test_m2...", scope: "All (Read-Only)", usage: "14 hours ago", status: "Active", trace: "KEY-EV-402" },
              { name: "Legacy Reporting Tool", owner: "Analytics Team", prefix: "rev_prod_b9...", scope: "Data Warehouse (Read)", usage: "28 days ago", status: "Expiring", trace: "KEY-EV-403" },
              { name: "Compromised Vendor Token", owner: "Vendor Portal", prefix: "rev_prod_z1...", scope: "Vendor API (All)", usage: "Never", status: "Revoked", trace: "KEY-EV-404" },
              { name: "CI/CD Deployment Service", owner: "DevOps Pipeline", prefix: "rev_svc_k4...", scope: "Deployments (Write)", usage: "10 mins ago", status: "Active", trace: "KEY-EV-405" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-slate-200 text-sm flex items-center gap-2">
                       {row.status === 'Revoked' ? <Lock className="w-4 h-4 text-rose-500" /> : <KeyRound className="w-4 h-4 text-slate-500" />}
                       {row.name}
                     </span>
                     <span className="text-xs font-mono text-slate-500 pl-6">{row.owner}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
                      <EyeOff className="w-4 h-4 text-slate-600" />
                      {row.prefix}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-blue-300">
                   {row.scope}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.usage}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Revoked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Revoked' && <Lock className="w-3 h-3" />}
                    {row.status === 'Expiring' && <AlertTriangle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Metadata" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
