import React from "react";
import Link from "next/link";
import { Users, Shield, Key, Globe, Lock, Smartphone } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function IdentityCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Identity Center</h1>
            <p className="text-slate-400">Enterprise Multi-Tenant SaaS Administration. Every permission modification generates constitutional evidence.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/identity/organization" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              <Globe className="w-4 h-4" /> Organization Settings
            </Link>
          </div>
        </header>

        {/* Global Identity KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-colors cursor-pointer group">
            <div className="text-slate-400 text-sm font-medium mb-3 flex items-center justify-between">
              Total Managed Users
              <Users className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-slate-500">Across 14 Tenant Workspaces</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-colors cursor-pointer group">
            <div className="text-slate-400 text-sm font-medium mb-3 flex items-center justify-between">
              MFA Adoption Rate
              <Smartphone className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94.2%</div>
            <div className="text-xs text-amber-400 flex items-center gap-1">Policy requirement active</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-colors cursor-pointer group">
            <div className="text-slate-400 text-sm font-medium mb-3 flex items-center justify-between">
              SSO Active Bridges
              <Key className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-slate-500 flex items-center gap-1">Okta, Azure AD, Google</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-colors cursor-pointer group">
            <div className="text-slate-400 text-sm font-medium mb-3 flex items-center justify-between">
              High-Risk Interventions
              <Shield className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-emerald-500 flex items-center gap-1">Zero threats detected</div>
          </div>
        </div>

        {/* Action Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Shield className="w-64 h-64" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security & Identity Control</h3>
              <p className="text-slate-400 mb-8 max-w-lg">
                Manage global authentication boundaries, force MFA resets, and investigate active deterministic sessions across the Revora ecosystem.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="/identity/sessions" className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 transition-colors group">
                  <Globe className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-200 mb-1">Session Management</h4>
                  <p className="text-sm text-slate-500">View and terminate active cryptographic device tokens.</p>
                </Link>
                <Link href="/identity/security" className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 transition-colors group">
                  <Lock className="w-6 h-6 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-200 mb-1">Security Center</h4>
                  <p className="text-sm text-slate-500">Audit failed logins and SSO provider telemetry.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Recent Deterministic Events</h3>
            <div className="space-y-6">
              <div className="relative pl-4 border-l-2 border-slate-800">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1"></div>
                <div className="text-sm font-medium text-slate-200 mb-1">Role Modification (Analyst &rarr; Developer)</div>
                <div className="text-xs text-slate-500 mb-2">Actor: System Admin &bull; 10m ago</div>
                <EvidenceBadge evidenceId="ID-MOD-911" timestamp="RBAC Enforced" />
              </div>
              <div className="relative pl-4 border-l-2 border-slate-800">
                <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[5px] top-1"></div>
                <div className="text-sm font-medium text-slate-200 mb-1">SSO Bridge Established (Okta)</div>
                <div className="text-xs text-slate-500 mb-2">Actor: Sarah Chen &bull; 2h ago</div>
                <EvidenceBadge evidenceId="SSO-CFG-04" timestamp="Verified Signature" />
              </div>
              <div className="relative pl-4 border-l-2 border-slate-800">
                <div className="absolute w-2 h-2 bg-rose-500 rounded-full -left-[5px] top-1"></div>
                <div className="text-sm font-medium text-slate-200 mb-1">Session Terminated (Suspicious IP)</div>
                <div className="text-xs text-slate-500 mb-2">Actor: Constitutional Engine &bull; 4h ago</div>
                <EvidenceBadge evidenceId="SEC-KILL-92" timestamp="Policy Auto-Heal" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
