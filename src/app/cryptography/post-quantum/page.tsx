import React from "react";
import Link from "next/link";
import { ArrowLeft, Fingerprint, Search, Network, ShieldAlert, Cpu, CheckCircle2, Download, Cloud } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PostQuantumReadiness() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Post-Quantum Readiness Center</h1>
            <p className="text-slate-400">Tracking enterprise migration toward post-quantum cryptography (PQC) and hybrid cipher adoption.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Systems..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-72 transition-colors focus:ring-1 focus:ring-indigo-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export PQC Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overall PQC Readiness
              <Fingerprint className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42%</div>
            <div className="text-xs text-indigo-400">Enterprise Migration Progress</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Hybrid Cryptography
              <Network className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">184</div>
            <div className="text-xs text-emerald-400">Systems using PQC/Classical Hybrid</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Vulnerable RSA Deployments
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">256</div>
            <div className="text-xs text-rose-400">Requires Modernization</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              ECC Deployments
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">820</div>
            <div className="text-xs text-slate-500">Transitional classical algorithms</div>
          </div>
        </div>

        {/* PQC Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise System Post-Quantum Posture" 
            headers={["System / Subnet", "Primary Algorithm", "PQC Status", "Migration Priority", "Target Architecture", "Governance Trace"]}
          >
            {[
              { sys: "Core Banking API Gateway", algo: "Hybrid: X25519Kyber768Draft00", status: "PQC Ready", priority: "Low", target: "Maintained", trace: "PQC-EV-091" },
              { sys: "Legacy Reporting Database", algo: "RSA-2048", status: "Vulnerable (Shor's Algo)", priority: "Critical (P1)", target: "Hybrid KEM", trace: "PQC-EV-092" },
              { sys: "Internal VPN Concentrator", algo: "ECC-384", status: "Transitional", priority: "Medium (P2)", target: "Kyber/Dilithium", trace: "PQC-EV-093" },
              { sys: "Identity Provider (IdP)", algo: "Hybrid: X25519Kyber768Draft00", status: "PQC Ready", priority: "Low", target: "Maintained", trace: "PQC-EV-094" },
              { sys: "IoT Device Fleet (v1.0)", algo: "RSA-1024", status: "Critically Vulnerable", priority: "Critical (P1)", target: "Hardware Replacement", trace: "PQC-EV-095" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <Cloud className="w-4 h-4 text-slate-500" />
                     {row.sys}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={`px-2 py-1 rounded text-xs border border-slate-700 bg-slate-900 ${
                     row.algo.includes('Hybrid') ? 'text-indigo-400 border-indigo-900/50' :
                     row.algo.includes('RSA') ? 'text-rose-400 border-rose-900/50' : 'text-slate-400'
                   }`}>
                      {row.algo}
                   </span>
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold flex items-center gap-1 ${
                      row.status.includes('Ready') ? 'text-emerald-400' :
                      row.status.includes('Vulnerable') ? 'text-rose-400' : 'text-amber-400'
                   }`}>
                      {row.status.includes('Ready') && <CheckCircle2 className="w-4 h-4" />}
                      {row.status.includes('Vulnerable') && <ShieldAlert className="w-4 h-4" />}
                      {row.status}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block ${
                    row.priority.includes('Critical') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.priority.includes('Medium') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.priority}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.target}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Scanned" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
