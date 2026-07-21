import React from "react";
import Link from "next/link";
import { ArrowLeft, Monitor, Smartphone, Globe, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function SessionManagement() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/identity" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Identity Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Session Management</h1>
            <p className="text-slate-400">View active authorization tokens globally. Terminating a session explicitly commits a cryptographic block to the Runtime Ledger.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-600/10 text-rose-500 border border-rose-500/20 hover:bg-rose-600/20 hover:border-rose-500/40 rounded-md text-sm font-medium transition-colors">
              <ShieldAlert className="w-4 h-4" /> Global Invalidate All
            </button>
          </div>
        </header>

        {/* Data Grid */}
        <div className="flex-1 min-h-0">
          <PremiumTable 
            title="Active Deterministic Sessions" 
            headers={["User", "Device", "Location / IP", "Auth Method", "Last Active", "Actions"]}
          >
            {[
              { user: "Sarah Chen (You)", device: "MacBook Pro M3", ip: "192.168.1.1 (Seattle)", method: "Passkey (WebAuthn)", time: "Current Session", icon: <Monitor className="w-4 h-4 text-slate-400" /> },
              { user: "Sarah Chen", device: "iPhone 15 Pro", ip: "10.0.0.1 (Cellular)", method: "Magic Link + TOTP", time: "2 hours ago", icon: <Smartphone className="w-4 h-4 text-slate-400" /> },
              { user: "Mike Tyson", device: "Windows 11 PC", ip: "203.0.113.4 (London)", method: "Azure AD SSO", time: "14 hours ago", icon: <Monitor className="w-4 h-4 text-slate-400" /> },
              { user: "System Auditor", device: "Linux Workstation", ip: "198.51.100.2 (Berlin)", method: "Keycloak SAML", time: "Yesterday", icon: <Globe className="w-4 h-4 text-slate-400" /> },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                      {row.user.substring(0,2).toUpperCase()}
                    </div>
                    <span className="font-medium text-slate-200">{row.user}</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    {row.icon} {row.device}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.ip}</td>
                <td className="py-4 px-5 text-sm text-blue-400">{row.method}</td>
                <td className="py-4 px-5 text-sm text-slate-500">{row.time}</td>
                <td className="py-4 px-5">
                  {row.time === "Current Session" ? (
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded border border-emerald-500/20">Active</span>
                  ) : (
                    <button className="text-xs font-medium text-rose-400 hover:text-rose-300 hover:underline">Revoke Session</button>
                  )}
                </td>
              </tr>
            ))}
          </PremiumTable>
          
          <div className="mt-8 p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
            <h3 className="font-semibold mb-2">Immutable Revocation Tracking</h3>
            <p className="text-sm text-slate-400 mb-4 max-w-3xl">
              Unlike traditional SaaS platforms that silently prune sessions, Revora records every forced revocation cryptographically. This guarantees auditing systems can prove exactly when and why an actor's access was severed.
            </p>
            <EvidenceBadge evidenceId="SESS-POLICY-V4" timestamp="Engine Validation Active" />
          </div>
        </div>

      </div>
    </div>
  );
}
