import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Search, Download, Database, HardDrive, Network, Server, Cloud, Smartphone } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EncryptionCoverage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Encryption Coverage Dashboard</h1>
            <p className="text-slate-400">Enterprise visibility into Data-at-Rest and Data-in-Transit cryptographic enforcement.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Data Stores..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors focus:ring-1 focus:ring-emerald-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Coverage Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overall Encryption Coverage
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Enterprise Mandate Achieved</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data-at-Rest (Databases)
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-blue-400">AES-256 Volume Encrypted</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data-in-Transit (TLS)
              <Network className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8.2B</div>
            <div className="text-xs text-indigo-400">Encrypted Requests/Day</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Object Storage (S3)
              <Cloud className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.8 PB</div>
            <div className="text-xs text-purple-400">Customer Managed Keys (KMS)</div>
          </div>
        </div>

        {/* Coverage Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Encryption Inventory" 
            headers={["Asset Identifier", "Asset Class", "Encryption Paradigm", "Key Management", "Enforcement Engine", "Validation Trace"]}
          >
            {[
              { asset: "revora-core-db-primary", class: "Relational Database", paradigm: "AES-256 (Volume & Columnar)", key: "AWS KMS (CMK)", engine: "Postgres TDE", trace: "ENC-EV-201" },
              { asset: "customer-analytics-bucket", class: "Object Storage (S3)", paradigm: "AES-256-GCM", key: "AWS KMS (CMK)", engine: "S3 Bucket Policy (Deny HTTP)", trace: "ENC-EV-202" },
              { asset: "Global API Gateway (Edge)", class: "Data-in-Transit", paradigm: "TLS 1.3 / mTLS", key: "Internal CA / DigiCert", engine: "NGINX Ingress", trace: "ENC-EV-203" },
              { asset: "Corporate Laptop Fleet", class: "Endpoint", paradigm: "XTS-AES-128", key: "TPM / MDM", engine: "FileVault / BitLocker", trace: "ENC-EV-204" },
              { asset: "Enterprise Backup Vault", class: "Cold Storage", paradigm: "AES-256", key: "Offline HSM", engine: "Veeam / AWS Glacier", trace: "ENC-EV-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.class.includes('Database') && <Database className="w-4 h-4 text-blue-500" />}
                     {row.class.includes('Storage') && <Cloud className="w-4 h-4 text-purple-500" />}
                     {row.class.includes('Transit') && <Network className="w-4 h-4 text-indigo-500" />}
                     {row.class.includes('Endpoint') && <Smartphone className="w-4 h-4 text-emerald-500" />}
                     {row.class.includes('Backup') && <HardDrive className="w-4 h-4 text-amber-500" />}
                     {row.asset}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.class}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700">{row.paradigm}</span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-slate-500" />
                      {row.key}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.engine}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Validated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
