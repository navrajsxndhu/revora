import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { IntegrationHealth } from "@/components/mission-control/integration-health";
import { sortIncidents } from "@/lib/intelligence/prioritization";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { EmptyState } from "@/components/ui/empty-state";
import { ShieldAlert, Activity, ShieldCheck, Clock } from "lucide-react";

export default async function MissionControlPage() {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  const sortedIncidents = sortIncidents(incidents);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-10 pb-6 border-b border-slate-900">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Mission Control</h1>
            <p className="text-slate-400 text-sm">Deterministic Enterprise Telemetry & Governance</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
               <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">System State</div>
               <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  OPTIMAL
               </div>
            </div>
            <IntegrationHealth />
          </div>
        </header>

        {/* Executive KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Activity className="w-5 h-5" /></div>
              <EvidenceBadge evidenceId="KPI-101" timestamp="Live" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Active Executions</h3>
            <div className="text-3xl font-bold text-white">14,239</div>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><ShieldCheck className="w-5 h-5" /></div>
              <EvidenceBadge evidenceId="KPI-102" timestamp="Live" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Policy Compliance</h3>
            <div className="text-3xl font-bold text-white">99.9%</div>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400"><Clock className="w-5 h-5" /></div>
              <EvidenceBadge evidenceId="KPI-103" timestamp="Live" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Pending Approvals</h3>
            <div className="text-3xl font-bold text-white">12</div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400"><ShieldAlert className="w-5 h-5" /></div>
              <EvidenceBadge evidenceId="KPI-104" timestamp="Live" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Active Incidents</h3>
            <div className="text-3xl font-bold text-white">{sortedIncidents.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Activity Timeline */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Recent Execution Timeline</h2>
            
            {sortedIncidents.length === 0 ? (
              <EmptyState 
                title="No Active Incidents" 
                description="Your environment is currently stable and operating within deterministic thresholds."
                actionLabel="Configure Alerts"
                actionHref="/settings/alerts"
              />
            ) : (
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="py-3 px-5 font-medium">Status</th>
                      <th className="py-3 px-5 font-medium">Incident</th>
                      <th className="py-3 px-5 font-medium text-right">Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {sortedIncidents.map(inc => (
                      <tr key={inc.id} className="hover:bg-slate-800/30 transition-colors group">
                        <td className="py-4 px-5">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            {inc.severity}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <Link href={`/mission-control/incidents/${inc.id}`} className="block">
                            <span className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                              {inc.title}
                            </span>
                            <div className="text-xs text-slate-500 mt-1">{inc.updatedAt.toLocaleTimeString()}</div>
                          </Link>
                        </td>
                        <td className="py-4 px-5 text-right">
                          <EvidenceBadge evidenceId={inc.id.substring(0,8)} timestamp="Logged" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Quick Actions & Governance */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-between p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors text-left group">
                <div>
                  <div className="font-medium text-slate-200 group-hover:text-white transition-colors">Run Compliance Audit</div>
                  <div className="text-xs text-slate-500 mt-0.5">Validate policies across workspace</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              </button>
              <button className="flex items-center justify-between p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors text-left group">
                <div>
                  <div className="font-medium text-slate-200 group-hover:text-white transition-colors">Provision Resource</div>
                  <div className="text-xs text-slate-500 mt-0.5">Deploy new deterministic container</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              </button>
            </div>
            
            <div className="mt-8 p-5 bg-blue-950/20 border border-blue-900/50 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="w-16 h-16 text-blue-400" /></div>
              <h3 className="font-semibold text-blue-400 mb-2">Deterministic Engine</h3>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Revora is actively validating all runtime executions against your defined corporate constitution.</p>
              <Link href="/mission-control/constitutional" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                View Constitutional Registry &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy ArrowRight/Shield if lucide-react isn't fully imported
function ArrowRight(props: any) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
}
function Shield(props: any) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
}
