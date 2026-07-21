"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Check, X, Search, FileText, User, ArrowRight } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ApprovalCenter() {
  const [activeTab, setActiveTab] = useState("pending");

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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Human Authorization Queue</h1>
            <p className="text-slate-400">Explicitly sign off on protected actions. Your cryptographic identity will be bound to the Runtime Ledger.</p>
          </div>
          
          {/* Search */}
          <div className="relative w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search approvals..." className="w-full bg-slate-900 border border-slate-800 rounded-md pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
        </header>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 shrink-0">
          {[
            { id: "pending", label: "Pending Your Signature" },
            { id: "all", label: "All Active Gates" },
            { id: "completed", label: "Completed" },
            { id: "rejected", label: "Rejected" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-white"
                  : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700"
              }`}
            >
              {tab.label}
              {tab.id === "pending" && <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs">3</span>}
            </button>
          ))}
        </div>

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
                    <h3 className="font-semibold text-lg">Production Release (v12.4)</h3>
                    <p className="text-sm text-slate-400">Workflow: Database Scaling &bull; Requested 45m ago</p>
                  </div>
                </div>
                <EvidenceBadge evidenceId="WF-EX-992" timestamp="Awaiting Signature" />
              </div>
              
              <div className="pl-13 ml-3">
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Execution Context</h4>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    The CI/CD Bridge has built and tested container <code className="text-xs text-blue-400 bg-blue-900/30 px-1 rounded">frontend:12.4.0</code>. 
                    Constitutional Policy <span className="text-emerald-400 font-mono">POL-042</span> requires Lead Architect approval before promoting this image to the `prod-eu-west` cluster.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> Unit Tests: Passed (94%)</div>
                    <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Requestor: System Bridge</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-semibold transition-colors shadow-lg shadow-emerald-900/20">
                    <Check className="w-4 h-4" /> Cryptographically Approve
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-rose-900/50 hover:text-rose-400 border border-transparent hover:border-rose-900/50 rounded-md text-sm font-semibold transition-colors">
                    <X className="w-4 h-4" /> Reject & Halt
                  </button>
                  <Link href="/workflows/WF-EX-992" className="ml-auto flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    View Execution Trace <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors opacity-75">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cross-Workspace Access Request</h3>
                    <p className="text-sm text-slate-400">Workflow: Identity Provisioning &bull; Requested 2h ago</p>
                  </div>
                </div>
                <EvidenceBadge evidenceId="WF-EX-811" timestamp="Awaiting Signature" />
              </div>
              <div className="pl-13 ml-3 flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-emerald-600 rounded-md text-sm font-semibold transition-colors">
                    <Check className="w-4 h-4" /> Cryptographically Approve
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-rose-900/50 hover:text-rose-400 rounded-md text-sm font-semibold transition-colors">
                    <X className="w-4 h-4" /> Reject & Halt
                  </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
