import React from "react";
import { ShieldCheck, TrendingUp, AlertTriangle, Activity, DollarSign, Users } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { ExecutiveService } from "@/services/executive-service";

export default async function ExecutiveHome() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const metrics = await ExecutiveService.getWorkspaceMetrics(workspaceId, session.user.id, session.user.role);
  
  // Helper to extract metric or fallback
  const getMetric = (key: string, defaultVal: string) => {
    const m = metrics.find(m => m.key === key);
    return m ? m.value.toString() : defaultVal;
  };
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Executive Overview</h1>
            <p className="text-slate-400">High-level telemetry across Global Enterprise HQ.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-300">
              Reporting Period: <span className="font-semibold text-white">Q3 2026</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              Generate Board Report
            </button>
          </div>
        </header>

        {/* Top KPI Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20 text-emerald-500"><ShieldCheck className="w-16 h-16" /></div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Platform Compliance</div>
            <div className="text-5xl font-bold text-white mb-2">{getMetric('compliance', '99.9')}%</div>
            <div className="text-sm text-emerald-400 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4" /> +0.2% from last quarter</div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20 text-amber-500"><AlertTriangle className="w-16 h-16" /></div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Active Operational Risks</div>
            <div className="text-5xl font-bold text-white mb-2">{getMetric('risks', '3')}</div>
            <div className="text-sm text-amber-400 flex items-center gap-1 font-medium">Requires executive acknowledgement</div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20 text-blue-500"><Activity className="w-16 h-16" /></div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Runtime Executions</div>
            <div className="text-5xl font-bold text-white mb-2">{getMetric('executions', '4.2')}M</div>
            <div className="text-sm text-blue-400 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4" /> +12% scaling factor</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Financial / Operational Efficiency */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6">Efficiency Metrics</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><DollarSign className="w-5 h-5" /></div>
                  <div>
                    <div className="font-medium text-slate-200">Cloud FinOps Optimization</div>
                    <div className="text-xs text-slate-500">Automated budget re-allocation</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-emerald-400">+${getMetric('finops_savings', '124,500')}</div>
                  <div className="text-xs text-slate-500">Saved this month</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg"><Users className="w-5 h-5" /></div>
                  <div>
                    <div className="font-medium text-slate-200">Workforce Allocation</div>
                    <div className="text-xs text-slate-500">Resource capacity utilized</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">{getMetric('workforce_allocation', '87')}%</div>
                  <div className="text-xs text-slate-500">Optimal range</div>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Evidence Feed */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6">Executive Sign-offs Required</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium text-slate-200">Acquisition Compliance Merger</div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-amber-500/20 text-amber-400">Priority</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">Final governance sign-off required for Phase 1 integration.</p>
                <div className="flex justify-between items-center">
                  <EvidenceBadge evidenceId="MERG-091" timestamp="Pending" />
                  <button className="text-sm font-medium text-blue-400 hover:text-white transition-colors">Review &rarr;</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
