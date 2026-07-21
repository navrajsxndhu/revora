import React from "react";
import { ArrowLeft, Clock, Activity, FileText, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { PremiumTable } from "@/components/ui/premium-table";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = params.id;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-6">
          <Link href="/workspace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Workspace
          </Link>
        </div>

        {/* Header Header */}
        <header className="flex items-start justify-between border-b border-slate-900 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">Q3 Compliance Audit</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Active</span>
            </div>
            <p className="text-slate-400 max-w-2xl">Enterprise-wide security and compliance validation for the upcoming Q3 financial reporting period.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              <FileText className="w-4 h-4" /> Export Evidence
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
              <Play className="w-4 h-4" /> Trigger Execution
            </button>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="col-span-2 space-y-8">
            
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-800">
              <button className="px-1 py-3 text-sm font-medium text-blue-400 border-b-2 border-blue-500">Overview</button>
              <button className="px-1 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Tasks (12)</button>
              <button className="px-1 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Evidence Ledger</button>
              <button className="px-1 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Activity</button>
            </div>

            {/* Active Content: Overview */}
            <div className="space-y-8 animate-in fade-in duration-500">
              <PremiumTable 
                title="Pending Governance Approvals" 
                description="The following tasks require constitutional sign-off before proceeding."
                headers={["Task", "Owner", "Due Date", "Status"]}
              >
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200">Validate Identity Matrix</td>
                  <td className="py-4 px-5 text-slate-400">Security Team</td>
                  <td className="py-4 px-5 text-slate-400">Today</td>
                  <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-medium">Pending Review</span></td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200">Database Scaling Configuration</td>
                  <td className="py-4 px-5 text-slate-400">DevOps</td>
                  <td className="py-4 px-5 text-slate-400">Tomorrow</td>
                  <td className="py-4 px-5"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-medium">Pending Review</span></td>
                </tr>
              </PremiumTable>

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                  {[1, 2].map(i => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:bg-blue-500/20 group-[.is-active]:border-blue-500 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-4 rounded-xl border border-slate-800 shadow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-slate-200">Policy Automatically Enforced</div>
                          <time className="text-xs font-medium text-slate-500">2h ago</time>
                        </div>
                        <div className="text-sm text-slate-400 mb-3">The deterministic engine validated the configuration changes.</div>
                        <EvidenceBadge evidenceId={`EV-${i}8X912`} timestamp="Verified" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Sidebar: Metadata */}
          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Metadata</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500 mb-1">Project ID</dt>
                  <dd className="font-mono text-slate-300">{projectId}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Status</dt>
                  <dd className="text-emerald-400 font-medium">Healthy</dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Created By</dt>
                  <dd className="flex items-center gap-2 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">SA</div>
                    System Administrator
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Constitution Binding</dt>
                  <dd className="text-slate-300"><EvidenceBadge evidenceId="CONST-01" timestamp="Attached" /></dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
