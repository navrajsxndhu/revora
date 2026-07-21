import React from "react";
import Link from "next/link";
import { ArrowLeft, GitCommit, CheckCircle2, AlertTriangle, ShieldAlert, FileText, User } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function WorkflowExecutionTrace({ params }: { params: { id: string } }) {
  const executionId = params.id;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/workflows" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Executions
          </Link>
          <EvidenceBadge evidenceId={executionId} timestamp="Execution Locked" />
        </div>

        {/* Header Block */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <GitCommit className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight">Production Release (v12.4)</h1>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">Blocked: Awaiting Approval</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-2xl">
              Initiated by <span className="text-slate-200 font-medium">CI/CD Bridge</span> 45 minutes ago. This workflow requires cryptographic authorization from an Executive before the final deployment node can be executed.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Authorize Transition
              </button>
            </div>
          </div>
        </div>

        {/* Execution Timeline */}
        <div>
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-slate-500" />
            Deterministic Execution Trace
          </h2>

          <div className="space-y-0 pl-4 border-l-2 border-slate-800 ml-4 relative">
            
            {/* Step 1 */}
            <div className="relative pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-black"></div>
              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-200">1. Webhook Payload Received</h3>
                  <span className="text-xs font-mono text-slate-500">45m ago</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">Payload validated against schema and cryptographically hashed.</p>
                <EvidenceBadge evidenceId="NODE-1-CFG" timestamp="Verified" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-black"></div>
              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-200">2. Pre-Flight Checks & Test Coverage</h3>
                  <span className="text-xs font-mono text-slate-500">42m ago</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">Automated unit testing matrix passed with 94% coverage.</p>
                <div className="flex items-center gap-2">
                  <EvidenceBadge evidenceId="NODE-2-TEST" timestamp="Passed" />
                  <span className="text-xs text-blue-400 flex items-center gap-1 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20"><FileText className="w-3 h-3" /> Report generated</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-black"></div>
              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-200">3. Container Build & Push</h3>
                  <span className="text-xs font-mono text-slate-500">35m ago</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">Docker images generated and pushed to secure registry `v12.4.0`.</p>
                <EvidenceBadge evidenceId="NODE-3-BUILD" timestamp="Immutable Image" />
              </div>
            </div>

            {/* Step 4 (Current) */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1 border-4 border-black shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <div className="bg-amber-900/10 border border-amber-900/30 p-5 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-amber-400 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    4. Executive Authorization Required
                  </h3>
                  <span className="text-xs font-mono text-amber-500/70">Waiting</span>
                </div>
                <p className="text-sm text-slate-300 mb-4">
                  Constitutional Policy `POL-042` mandates explicit human sign-off before modifying production boundaries.
                </p>
                <div className="flex items-center gap-3 p-3 bg-black/40 rounded border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-200">Pending Signature from:</div>
                    <div className="text-slate-400 font-medium">VP of Engineering OR Lead Architect</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
