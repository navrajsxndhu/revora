import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, Globe, Activity, Building2, Zap, Briefcase, Database, Lock, Box, CreditCard, Factory } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { IncidentService } from "@/services/incident-service";
import { HealthService } from "@/services/health-service";

export default async function SituationRoom() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const incidents = await IncidentService.getActiveIncidents(workspaceId, session.user.id, session.user.role);
  const healthHistory = await HealthService.getWorkspaceHealthHistory(workspaceId, 1, session.user.id, session.user.role);
  const currentHealth = healthHistory[0];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/mission-control" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Mission Control
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Situation Room</h1>
            <p className="text-slate-400">The apex enterprise cockpit. Live aggregation of strategic health, risks, and critical priorities.</p>
          </div>
          <div className="flex items-center gap-3">
             <Link href="/executive/decisions" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Briefcase className="w-4 h-4" /> Enterprise Decision Center
             </Link>
          </div>
        </header>

        {/* Apex Global Status */}
        <div className="grid grid-cols-5 gap-4 shrink-0">
          <div className="col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-3 flex items-center justify-between">
              Enterprise Operating State
              <Globe className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-5xl font-black text-white mb-2">{currentHealth?.status || "NOMINAL"}</div>
            <div className="text-sm font-medium text-emerald-400">All Constitutional Systems Stable</div>
          </div>
          
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-between">
              FinOps Risk
              <CreditCard className="w-4 h-4 text-rose-500" />
            </div>
            <div>
               <div className="text-2xl font-bold text-white mb-1">High</div>
               <div className="text-xs text-rose-400">Cloud spend +18% MoM</div>
            </div>
          </div>

          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-between">
              Security Posture
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
               <div className="text-2xl font-bold text-white mb-1">Secured</div>
               <div className="text-xs text-emerald-400">Zero Active Breaches</div>
            </div>
          </div>

          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-between">
              Supply Chain
              <Factory className="w-4 h-4 text-amber-500" />
            </div>
            <div>
               <div className="text-2xl font-bold text-white mb-1">Strained</div>
               <div className="text-xs text-amber-400">Tier 1 Vendor Delay</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0 pb-12">
          
          {/* Active Enterprise Priorities (Deterministic Engine output) */}
          <div className="flex flex-col">
            <PremiumTable 
              title="Enterprise Priority Engine" 
              headers={["Strategic Priority", "Domain", "Risk / Value Matrix", "Status"]}
            >
              {incidents.length === 0 ? (
                <tr><td colSpan={4} className="py-8 text-center text-slate-500">No active priorities flagged.</td></tr>
              ) : incidents.map((row) => (
                <tr key={row.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-3">
                       <AlertTriangle className={`w-4 h-4 ${row.severity === 'CRITICAL' ? 'text-rose-500' : 'text-amber-500'}`}/>
                       {row.title}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.serviceAffected || "Global"}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.severity}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.state === 'OPEN' || row.severity === 'CRITICAL' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.state}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          {/* Cross-Domain Observations */}
          <div className="flex flex-col">
            <PremiumTable 
              title="Cross-Domain Observations (Deterministic AI)" 
              headers={["Observation", "Originating Signal", "Confidence", "Action"]}
            >
              {[
                { obs: "Cloud spend increased 18% MoM across 3 clusters.", signal: "FinOps Module", conf: "Deterministic", action: "Run Impact Simulator" },
                { obs: "Three P1 production incidents originated from US-East.", signal: "Observability Platform", conf: "Deterministic", action: "Review Architecture" },
                { obs: "Enterprise Risk Score degraded due to Tier 1 Supplier delay.", signal: "GRC & Risk Platform", conf: "Deterministic", action: "Approve Mitigation" },
                { obs: "Workforce attrition in Engineering +5% over benchmark.", signal: "Human Capital Platform", conf: "Deterministic", action: "Review Compensation" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-purple-500" />
                       <span className="leading-snug">{row.obs}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.signal}</td>
                  <td className="py-4 px-5">
                     <span className="text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-900/50 px-2 py-1 rounded">
                        {row.conf}
                     </span>
                  </td>
                  <td className="py-4 px-5">
                     <Link href="/executive/simulator" className="text-xs font-medium text-blue-400 hover:text-blue-300">
                        {row.action} &rarr;
                     </Link>
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
