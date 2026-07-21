import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Key, MapPin, AlertTriangle, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function SecurityCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/identity" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Identity Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Identity Security Center</h1>
            <p className="text-slate-400">Monitor multi-tenant authentication boundaries, failed token assertions, and geographical anomalies.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors">
              Configure Policies
            </button>
          </div>
        </header>

        {/* Threat Map Overview */}
        <div className="grid grid-cols-3 gap-6 mb-8 shrink-0">
          <div className="col-span-2 bg-slate-900/30 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <MapPin className="w-48 h-48" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-200 mb-1">Geographic Anomalies</h3>
              <p className="text-sm text-slate-400">Suspicious sign-in vectors isolated in the last 24h.</p>
            </div>
            <div className="flex items-end gap-6 mt-8 relative z-10">
              <div>
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-xs text-rose-400">Blocked Attempts</div>
              </div>
              <div className="w-px h-12 bg-slate-800"></div>
              <div>
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-xs text-emerald-400">Compromised Accounts</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center">
                  <Key className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-300">Failed MFA Tokens</span>
              </div>
              <span className="font-mono text-white">204</span>
            </div>
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-300">SAML Drift Events</span>
              </div>
              <span className="font-mono text-white">3</span>
            </div>
          </div>
        </div>

        {/* Data Grid */}
        <div className="flex-1 min-h-0">
          <PremiumTable 
            title="Authentication Security Ledger" 
            headers={["Execution ID", "Actor", "Event Type", "Vector", "Status"]}
          >
            {[
              { id: "SEC-LOG-92A", actor: "unknown@partner.corp", type: "Failed Password (x5)", vector: "45.33.22.11 (RU)", status: "Blocked" },
              { id: "SEC-LOG-92B", actor: "System Engine", type: "Account Lockout Applied", vector: "Automated Policy", status: "Enforced" },
              { id: "SEC-LOG-92C", actor: "S. Chen (Admin)", type: "API Token Revoked", vector: "Manual Console", status: "Executed" },
              { id: "SEC-LOG-92D", actor: "m.tyson@revora", type: "SSO Assertion Mismatch", vector: "Okta Bridge", status: "Rejected" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.id} timestamp="Verified" />
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-300">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.vector}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Enforced' || row.status === 'Blocked' || row.status === 'Rejected' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
