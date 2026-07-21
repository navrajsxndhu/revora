import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Search, ShieldAlert, Cpu, Lock, Fingerprint, Activity, Download, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EdgeSecurityCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/edge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Edge Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Device Security & Compliance Center</h1>
            <p className="text-slate-400">Enterprise governance for edge security, verifying secure boot, TPM state, and firmware integrity.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Security Profiles..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-72 transition-colors focus:ring-1 focus:ring-emerald-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Trust Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Trust Score
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400">Firmware & Hardware Verified</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              TPM 2.0 Enforced
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">41,200</div>
            <div className="text-xs text-blue-400">Hardware Roots of Trust</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Missing Security Patches
              <Lock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">184</div>
            <div className="text-xs text-amber-400">CVSS &gt; 7.0 Pending</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Quarantines
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-rose-400">Network isolated devices</div>
          </div>
        </div>

        {/* Security Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Device Trust & Compliance Matrix" 
            headers={["Device Identifier", "Hardware Trust (TPM/Secure Boot)", "Certificate Health", "Vulnerability Posture", "Governance State", "Security Ledger"]}
          >
            {[
              { id: "PLC-Detroit-M4-01", hw: "TPM 2.0 / Secure Boot: OK", cert: "Valid (mTLS)", vulns: "0 Critical", status: "Trusted", trace: "SEC-EDG-701" },
              { id: "Gateway-Edge-EU-West", hw: "TPM Warning (Key Unseal Failed)", cert: "Valid (mTLS)", vulns: "2 Medium", status: "Degraded", trace: "SEC-EDG-702" },
              { id: "POS-Terminal-LDN-01", hw: "Secure Boot: Disabled (Tampered)", cert: "Revoked", vulns: "1 Critical", status: "Quarantined", trace: "SEC-EDG-703" },
              { id: "Robot-Arm-Kuka-09", hw: "TPM 2.0 / Secure Boot: OK", cert: "Expiring (3 Days)", vulns: "0 Critical", status: "Warning", trace: "SEC-EDG-704" },
              { id: "Sensor-HVAC-HQ-01", hw: "Not Supported (Legacy)", cert: "Valid (PSK)", vulns: "Acknowledged Risk", status: "Exception Granted", trace: "SEC-EDG-705" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                     <Fingerprint className="w-4 h-4 text-slate-500" />
                     {row.id}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      {row.hw.includes('OK') ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : 
                       row.hw.includes('Warning') || row.hw.includes('Not Supported') ? <ShieldAlert className="w-4 h-4 text-amber-500" /> :
                       <ShieldAlert className="w-4 h-4 text-rose-500" />}
                      {row.hw}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.cert}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.vulns}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Trusted' || row.status === 'Exception Granted' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Quarantined') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status.includes('Quarantined') && <Lock className="w-3 h-3" />}
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
