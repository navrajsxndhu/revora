import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Search, PlusCircle, Server, Lock, AlertTriangle, KeyRound, Globe, FileWarning, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CryptographicPolicies() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Cryptographic Policy Center</h1>
            <p className="text-slate-400">Enterprise constitutional governance defining allowed algorithms, key lengths, and rotation requirements.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Policies..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors focus:ring-1 focus:ring-purple-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Draft New Policy
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Crypto Policies
              <ShieldAlert className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-xs text-purple-400">Globally Enforced</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Approved Cipher Suites
              <Lock className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-xs text-slate-500">NIST SP 800-52 Compliant</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Automated Enforcements
              <Server className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Zero manual bypasses</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Violations (30d)
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-amber-400">Blocked at runtime</div>
          </div>
        </div>

        {/* Policy Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Cryptographic Governance Rulesets" 
            headers={["Policy Directive", "Target Scope", "Constraint / Requirement", "Violation Escalation", "Governance Ledger"]}
          >
            {[
              { rule: "Minimum RSA Key Length", scope: "Global (All Certificates)", limit: ">= 2048-bit (4096-bit recommended)", action: "Issuance Blocked", trace: "CRYP-POL-01" },
              { rule: "Symmetric Encryption Standard", scope: "Data-at-Rest", limit: "AES-256-GCM only", action: "Build Failure", trace: "CRYP-POL-02" },
              { rule: "Hardware-Backed Signing", scope: "Code Signing, PKI Roots", limit: "FIPS 140-2 Level 3 HSM Required", action: "Execution Blocked", trace: "CRYP-POL-03" },
              { rule: "Maximum Certificate Validity", scope: "Public TLS", limit: "90 Days (Automated Renewal)", action: "Revocation Alert", trace: "CRYP-POL-04" },
              { rule: "Deprecated Algorithms", scope: "Global", limit: "SHA-1, MD5, DES Strictly Prohibited", action: "Immediate Blocking", trace: "CRYP-POL-05" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.rule.includes('Minimum RSA') && <KeyRound className="w-4 h-4 text-blue-500" />}
                     {row.rule.includes('Symmetric') && <Lock className="w-4 h-4 text-emerald-500" />}
                     {row.rule.includes('Hardware') && <Server className="w-4 h-4 text-amber-500" />}
                     {row.rule.includes('Validity') && <Globe className="w-4 h-4 text-indigo-500" />}
                     {row.rule.includes('Deprecated') && <FileWarning className="w-4 h-4 text-rose-500" />}
                     {row.rule}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.scope}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.limit}
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                      row.action.includes('Blocked') || row.action.includes('Blocking') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      row.action.includes('Failure') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                   }`}>
                      {row.action.includes('Blocked') && <AlertTriangle className="w-3 h-3" />}
                      {row.action.includes('Failure') && <FileWarning className="w-3 h-3" />}
                      {row.action.includes('Alert') && <CheckCircle2 className="w-3 h-3" />}
                      {row.action}
                   </span>
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
