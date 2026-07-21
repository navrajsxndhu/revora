"use client";

import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldAlert, Key, Settings, Activity, Book } from "lucide-react";
import Link from "next/link";
import { PremiumForm } from "@/components/ui/premium-form";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function IntegrationDetail({ params }: { params: { id: string } }) {
  const integrationId = params.id;
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/integrations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Marketplace
          </Link>
        </div>

        {/* Header */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex items-start gap-8 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
          
          <div className="relative z-10 w-20 h-20 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-xl shrink-0">
            <div className="text-2xl font-black text-slate-200 capitalize">{integrationId.substring(0, 2)}</div>
          </div>
          
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight capitalize">{integrationId} Connector</h1>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">Active</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl">
              Bi-directional sync enabled. All incoming webhook payloads are deterministically hashed and bound to the Runtime Execution Ledger.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Authorized connection</div>
              <div className="flex items-center gap-2"><Activity className="w-4 h-4 text-slate-500" /> 124 requests / hr</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 mb-8">
          {[
            { id: "overview", label: "Overview", icon: <Activity className="w-4 h-4" /> },
            { id: "auth", label: "Authentication", icon: <Key className="w-4 h-4" /> },
            { id: "config", label: "Configuration", icon: <Settings className="w-4 h-4" /> },
            { id: "evidence", label: "Runtime Evidence", icon: <ShieldAlert className="w-4 h-4" /> },
            { id: "docs", label: "Documentation", icon: <Book className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-white"
                  : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Areas */}
        
        {/* Auth Tab */}
        {activeTab === "auth" && (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <PremiumForm 
                title="Service Credentials" 
                description="Manage API Keys and OAuth parameters required to maintain the integration bridge."
                submitLabel="Rotate Keys"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">API Key</label>
                    <input type="password" defaultValue="xxxxxxxxxxxxxxxxxxxx" className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Webhook Secret (HMAC-SHA256)</label>
                    <input type="password" defaultValue="xxxxxxxxxxxxxxxxxxxx" className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" readOnly />
                  </div>
                </div>
              </PremiumForm>
            </div>
            <div>
              <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-400 mb-2">Deterministic Security Architecture</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Revora does not store external API keys in plaintext. All credentials are symmetrically encrypted at rest and only decrypted securely within isolated Runtime Kernel memory structures during execution.
                </p>
                <EvidenceBadge evidenceId="SEC-92B" timestamp="Verified cryptographic store" />
              </div>
            </div>
          </div>
        )}

        {/* Generic fallback for other tabs for structural mockup */}
        {activeTab !== "auth" && (
          <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl text-slate-500">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-lg font-medium text-slate-300 mb-2">{activeTab.toUpperCase()} Panel</h3>
            <p className="text-sm">Tab structural implementation reserved for future detailed rendering.</p>
          </div>
        )}

      </div>
    </div>
  );
}
