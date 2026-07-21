import React from "react";
import Link from "next/link";
import { ArrowLeft, FileKey2, Search, Download, ShieldCheck, ShieldAlert, KeyRound, Server, UserCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CertificateRegistry() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Certificate Registry</h1>
            <p className="text-slate-400">Constitutional registry for TLS, Internal PKI, and Signing Certificates.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Certificates..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export PKI Ledger
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              TLS / SSL Certificates
              <Server className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">842</div>
            <div className="text-xs text-blue-400">Public & Internal Routing</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Root / Intermediate CAs
              <KeyRound className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-rose-400">Enterprise Trust Anchors</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Code Signing Certificates
              <UserCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">32</div>
            <div className="text-xs text-emerald-400">Software Supply Chain</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Expiring (30 Days)
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-xs text-amber-400">Rotation workflows initiated</div>
          </div>
        </div>

        {/* Registry Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Cryptographic Certificates" 
            headers={["Common Name (CN)", "Type & Issuer", "Algorithm / Key", "Expiration (UTC)", "Status", "Evidence Trace"]}
          >
            {[
              { cn: "*.revora.com", type: "Public TLS", issuer: "DigiCert Global G2", algo: "RSA-2048", exp: "2027-01-15 00:00:00", status: "Valid", trace: "CRT-EV-101" },
              { cn: "Revora Internal Root CA", type: "Root CA", issuer: "Self-Signed (HSM)", algo: "ECC-384", exp: "2036-05-10 00:00:00", status: "Valid", trace: "CRT-EV-102" },
              { cn: "prod-db-cluster-eu", type: "Internal mTLS", issuer: "Revora Internal Root CA", algo: "RSA-4096", exp: "2026-08-01 12:00:00", status: "Expiring Soon", trace: "CRT-EV-103" },
              { cn: "Revora iOS Developer", type: "Code Signing", issuer: "Apple Worldwide Developer Relations", algo: "ECC-256", exp: "2027-04-22 00:00:00", status: "Valid", trace: "CRT-EV-104" },
              { cn: "legacy-api-gateway", type: "Public TLS", issuer: "Let's Encrypt", algo: "RSA-2048", exp: "2025-11-10 00:00:00", status: "Revoked", trace: "CRT-EV-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <FileKey2 className="w-4 h-4 text-slate-500" />
                     {row.cn}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex flex-col">
                      <span className="font-semibold text-slate-300">{row.type}</span>
                      <span className="text-xs">{row.issuer}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className="text-xs font-mono text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/50">
                      {row.algo}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.exp}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.status === 'Valid' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Expiring Soon' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
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
