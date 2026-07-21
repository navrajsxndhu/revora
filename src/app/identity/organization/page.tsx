"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Upload } from "lucide-react";
import { PremiumForm } from "@/components/ui/premium-form";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function OrganizationAdmin() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8 flex flex-col">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/identity" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Identity Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Organization & Branding</h1>
            <p className="text-slate-400">Configure multi-tenant boundaries and whitelisted domains. Policy changes map directly to constitutional governance.</p>
          </div>
        </header>

        <div className="space-y-12">
          
          <PremiumForm 
            title="Tenant Configuration" 
            description="Manage the master identity of this enterprise workspace."
            submitLabel="Update Configuration"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              
              <div className="flex items-start gap-6 pb-6 border-b border-slate-800">
                <div className="w-24 h-24 bg-slate-900 border border-slate-700 flex items-center justify-center rounded-xl shrink-0 group hover:border-slate-500 cursor-pointer transition-colors relative overflow-hidden">
                  <Building2 className="w-8 h-8 text-slate-500 group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload className="w-5 h-5 text-white mb-1" />
                    <span className="text-[10px] text-slate-200">Upload Logo</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Organization Name</label>
                    <input type="text" defaultValue="Revora Global Enterprise" className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Tenant ID (Immutable)</label>
                    <input type="text" defaultValue="TEN-9001-ALPHA" readOnly className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-600 focus:outline-none cursor-not-allowed font-mono" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Whitelisted Email Domains</label>
                <p className="text-xs text-slate-500 mb-2">Users signing up with these domains will automatically bypass the manual approval queue.</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">@revora.enterprise</span>
                  <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">@partner.corp</span>
                  <input type="text" placeholder="Add domain..." className="bg-transparent border border-dashed border-slate-700 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-slate-500" />
                </div>
              </div>

            </div>
          </PremiumForm>

          <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-xl flex items-start gap-6">
            <div className="shrink-0">
              <EvidenceBadge evidenceId="TENANT-POLICY-V1" timestamp="Constitution Enforced" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Multi-Tenant Data Isolation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                By modifying these configurations, you trigger a policy evaluation against the `RuntimeKernel`. If you whitelist a domain, the Kernel mathematically guarantees that identity provisioning requests from that domain are isolated exclusively to `TEN-9001-ALPHA` database tables.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
