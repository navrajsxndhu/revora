import React from "react";
import Link from "next/link";
import { ArrowLeft, GitMerge, Clock, Server, Database, ShieldCheck, Activity } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DistributedTraceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/operations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Operations Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Distributed Trace Explorer</h1>
            <p className="text-slate-400">Cryptographically verifiable execution timelines for every enterprise transaction.</p>
          </div>
        </header>

        <div className="flex-1 min-h-0 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
             <div>
               <h2 className="text-xl font-bold mb-1">Trace ID: <span className="font-mono text-blue-400">TRC-892-XFA</span></h2>
               <p className="text-sm text-slate-500">Triggered by: Mobile Application (Customer Login Flow)</p>
             </div>
             <div className="text-right">
               <div className="text-2xl font-mono font-bold text-emerald-400">242ms</div>
               <p className="text-sm text-slate-500">Total Duration</p>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-4">
            <div className="relative pl-8 border-l border-slate-700 space-y-10">
              
              {/* Span 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-slate-900 border border-slate-700 w-6 h-6 rounded-full flex items-center justify-center">
                  <Activity className="w-3 h-3 text-purple-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-200">API Gateway (Ingress)</h3>
                    <span className="font-mono text-sm text-slate-400">12ms</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 font-mono">POST /v1/auth/login</p>
                  <EvidenceBadge evidenceId="SPN-1" timestamp="Received" />
                </div>
              </div>

              {/* Span 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-slate-900 border border-slate-700 w-6 h-6 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-200">Identity Service</h3>
                    <span className="font-mono text-sm text-slate-400">85ms</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">Validated JWT constraints against Constitutional Policy <span className="text-emerald-400 font-mono">POL-SEC-09</span>.</p>
                  <EvidenceBadge evidenceId="SPN-2" timestamp="Authorized" />
                </div>
              </div>

              {/* Span 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-slate-900 border border-slate-700 w-6 h-6 rounded-full flex items-center justify-center">
                  <Database className="w-3 h-3 text-blue-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 border-l-4 border-l-amber-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-200">User DB Primary (Postgres)</h3>
                    <span className="font-mono text-sm text-amber-400 font-bold">140ms</span>
                  </div>
                  <p className="text-sm text-amber-400/80 mb-4">SELECT * FROM users WHERE email = ? (Query Cache Miss)</p>
                  <EvidenceBadge evidenceId="SPN-3" timestamp="Executed" />
                </div>
              </div>

              {/* Span 4 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-slate-900 border border-slate-700 w-6 h-6 rounded-full flex items-center justify-center">
                  <Activity className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-200">Audit Ledger Action</h3>
                    <span className="font-mono text-sm text-slate-400">5ms</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">Appended 200 OK result to Runtime Execution history.</p>
                  <EvidenceBadge evidenceId="SPN-4" timestamp="Committed" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
