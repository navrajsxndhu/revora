import React from "react";
import Link from "next/link";
import { ArrowRight, Lock, KeyRound, ShieldAlert, FileKey2, Fingerprint, Activity, Network, Box } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function CryptographyCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Cryptography Command Center</h1>
            <p className="text-slate-400">Constitutional governance over enterprise cryptography, certificates, secrets, and post-quantum readiness.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/cryptography/post-quantum" className="flex items-center gap-2 px-4 py-2 bg-indigo-900/40 text-indigo-400 border border-indigo-900/50 hover:bg-indigo-900/60 rounded-md text-sm font-medium transition-colors">
              <Network className="w-4 h-4" /> View PQC Readiness Map
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cryptographic Health
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98.4%</div>
            <div className="text-xs text-emerald-400">Aligned to NIST Standards</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Certificates
              <FileKey2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-blue-400">TLS, PKI, Code Signing</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Critical Expiring Keys
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-amber-400">Expiration &lt; 30 Days</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Post-Quantum Readiness
              <Fingerprint className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42%</div>
            <div className="text-xs text-indigo-400">Hybrid PQC Adoption</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Cryptography Governance</h3>
            
            <Link href="/cryptography/certificates" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <FileKey2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Certificate Registry</div>
                <div className="text-xs text-slate-500">TLS, Internal PKI, Signatures</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/cryptography/secrets" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <KeyRound className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Secrets & Key Management</div>
                <div className="text-xs text-slate-500">Zero-plaintext Vault references</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>

            <Link href="/cryptography/post-quantum" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Fingerprint className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">Post-Quantum Readiness</div>
                <div className="text-xs text-slate-500">PQC migration & legacy RSA</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </Link>

            <Link href="/cryptography/policies" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Cryptographic Policies</div>
                <div className="text-xs text-slate-500">Key lengths, Cipher suites</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/cryptography/encryption" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Encryption Coverage</div>
                <div className="text-xs text-slate-500">At-Rest & In-Transit posture</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>
            
            <Link href="/cryptography/audit" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Cryptographic Audit Ledger</div>
                <div className="text-xs text-slate-500">Rotations, Revocations, Exceptions</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </Link>
          </div>

          {/* Active Enterprise Operations Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Recent Cryptographic Events" 
              headers={["Event Timestamp", "Asset Identifier", "Event Classification", "Status"]}
            >
              {[
                { time: "2026-07-21 14:40:02", asset: "Root CA (Internal PKI)", event: "Automated Certificate Rotation", status: "Success" },
                { time: "2026-07-21 12:15:00", asset: "Stripe API Key (Production)", event: "Metadata Access (Vault Link)", status: "Authorized" },
                { time: "2026-07-20 09:00:00", asset: "legacy-lb-tls-01", event: "PQC Readiness Scan (RSA-2048 detected)", status: "Flagged (Legacy)" },
                { time: "2026-07-19 16:30:11", asset: "iOS Code Signing Key", event: "HSM Signing Operation", status: "Success" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Box className="w-4 h-4 text-blue-500" />
                       {row.asset}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.event}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Flagged') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' : 
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
