"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Check, X, FileText, User, ArrowRight } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function AIApprovalsQueue() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ai-governance" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to AI Governance
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">High-Risk AI Approval Queue</h1>
            <p className="text-slate-400">Explicitly sign off on AI operations blocked by Constitutional Policies. Your cryptographic identity will be bound to the Runtime Ledger.</p>
          </div>
        </header>

        {/* Approval Feed */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          
          {/* Card 1 */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Financial Report Summarization</h3>
                    <p className="text-sm text-slate-400">Model: gpt-4-turbo &bull; Requested 2m ago</p>
                  </div>
                </div>
                <EvidenceBadge evidenceId="AI-EX-8902" timestamp="Awaiting Signature" />
              </div>
              
              <div className="pl-13 ml-3">
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Policy Violation Context</h4>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    The HR System attempted to execute the <span className="font-mono text-purple-400">Support Ticket Summarizer v1.0.0</span> prompt. 
                    Constitutional Policy <span className="text-emerald-400 font-mono">POL-AI-014</span> requires Executive approval before processing payloads classified as `Financial/HR` through external provider APIs (Azure).
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> Payload Size: 4,200 Tokens</div>
                    <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Requestor: HR System</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-semibold transition-colors shadow-lg shadow-emerald-900/20">
                    <Check className="w-4 h-4" /> Cryptographically Approve Inference
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-rose-900/50 hover:text-rose-400 border border-transparent hover:border-rose-900/50 rounded-md text-sm font-semibold transition-colors">
                    <X className="w-4 h-4" /> Reject Request
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
