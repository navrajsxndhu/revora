import React from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Search, Download, ShieldCheck, ShieldAlert, CheckCircle2, RotateCw, FileX2, Eye, UserX } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CryptographicAuditLedger() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Cryptographic Audit Ledger</h1>
            <p className="text-slate-400">Immutable audit history for all key operations, certificate renewals, policy violations, and vault access.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Audit Trace..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-slate-500 w-72 transition-colors focus:ring-1 focus:ring-slate-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Audit Log
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.05)] border-slate-700 bg-slate-800/30">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Recorded Events
              <Activity className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">9.2M</div>
            <div className="text-xs text-slate-500">Cryptographically Secured Events</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Rotations (30d)
              <RotateCw className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,204</div>
            <div className="text-xs text-blue-400">Keys & Certificates Rotated</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Interventions
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-rose-400">Issuance / Access Blocked</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Audit Integrity
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Zero chain mutations detected</div>
          </div>
        </div>

        {/* Audit Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Cryptographic Ledger Stream" 
            headers={["Timestamp (UTC)", "Event Classification", "Target Asset", "Initiator / Context", "Resulting State", "Evidence Ledger"]}
          >
            {[
              { time: "2026-07-21 14:10:02", type: "Key Rotation", asset: "vlt-aws-prod-001 (API Key)", init: "System (Auto-Rotate Policy)", status: "Success", trace: "AUD-CRYPT-90" },
              { time: "2026-07-21 13:45:11", type: "Issuance Blocked", asset: "Internal TLS Certificate", init: "sk_user_88 (DevOps)", status: "Blocked (Weak Key: RSA-1024)", trace: "AUD-CRYPT-89" },
              { time: "2026-07-20 09:20:00", type: "Certificate Revocation", asset: "legacy-api-gateway (TLS)", init: "SecOps API Automation", status: "Success (Revoked)", trace: "AUD-CRYPT-88" },
              { time: "2026-07-19 16:05:44", type: "Vault Access Alert", asset: "vlt-stripe-sk-044", init: "Unauthorized Subnet IP", status: "Blocked (Network Policy)", trace: "AUD-CRYPT-87" },
              { time: "2026-07-18 11:30:00", type: "HSM Signing Event", asset: "iOS Code Signing Key", init: "Release Pipeline (Agent-LGL-01)", status: "Success", trace: "AUD-CRYPT-86" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.time}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                   <div className="flex items-center gap-2">
                      {row.type.includes('Rotation') && <RotateCw className="w-4 h-4 text-blue-500" />}
                      {row.type.includes('Blocked') && <ShieldAlert className="w-4 h-4 text-rose-500" />}
                      {row.type.includes('Revocation') && <FileX2 className="w-4 h-4 text-amber-500" />}
                      {row.type.includes('Alert') && <UserX className="w-4 h-4 text-rose-500" />}
                      {row.type.includes('Signing') && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {row.type}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.asset}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.init}
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                      row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      row.status.includes('Revoked') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                   }`}>
                      {row.status}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center justify-between">
                     <EvidenceBadge evidenceId={row.trace} timestamp="Sealed" />
                     <button className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                     </button>
                  </div>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
