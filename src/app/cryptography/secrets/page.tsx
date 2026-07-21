import React from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Search, ShieldCheck, Lock, Download, AlertTriangle, EyeOff, Hash, Database } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function SecretsKeyManagement() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/cryptography" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Cryptography Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Secrets & Key Management</h1>
            <p className="text-slate-400 flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-emerald-500" /> 
              Zero-plaintext exposure. Viewing cryptographic metadata and constitutional governance state only.
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Vault Identifiers..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-72 transition-colors focus:ring-1 focus:ring-amber-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md text-sm font-medium transition-colors text-white">
               <KeyRound className="w-4 h-4" /> Issue New Key Metadata
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Enterprise Secrets
              <KeyRound className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14,291</div>
            <div className="text-xs text-amber-400">Secured in Central Vaults</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Stale / Expiring Keys
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-rose-400">Rotation SLA Breached</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Hardware Backed (HSM)
              <Lock className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-slate-500">FIPS 140-2 Level 3 Validated</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Plaintext Exposure
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-emerald-400">Zero-knowledge governance</div>
          </div>
        </div>

        {/* Secrets Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Key & Secret Metadata Ledger" 
            headers={["Vault Reference", "Secret Type / Access", "Last Rotation", "Target System", "Status", "Audit Ledger"]}
          >
            {[
              { id: "vlt-aws-prod-001", type: "AWS IAM Access Key", rot: "2026-07-01", target: "Production EC2", status: "Active", trace: "SEC-EV-902" },
              { id: "vlt-stripe-sk-044", type: "API Secret Key", rot: "2026-06-15", target: "Stripe Billing Engine", status: "Active", trace: "SEC-EV-901" },
              { id: "vlt-db-pg-master", type: "Database Password", rot: "2025-01-10", target: "Main PostgreSQL", status: "Stale (Action Required)", trace: "SEC-EV-900" },
              { id: "vlt-hsm-sign-01", type: "HSM Signing Key", rot: "2026-07-20", target: "Enterprise Release Pipieline", status: "Active", trace: "SEC-EV-899" },
              { id: "vlt-oauth-legacy", type: "OAuth 2.0 Client Secret", rot: "2024-11-22", target: "Deprecated Portal", status: "Revoked", trace: "SEC-EV-898" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-amber-400">
                   <div className="flex items-center gap-2">
                     <Hash className="w-3 h-3 text-amber-500" />
                     {row.id}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-200">
                   <div className="flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-slate-500" />
                      {row.type}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.rot}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-500" />
                      {row.target}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Stale') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
