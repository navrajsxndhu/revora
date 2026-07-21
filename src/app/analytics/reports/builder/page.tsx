"use client";

import React from "react";
import { ArrowLeft, Save, Plus, FileText, LayoutTemplate, Share2 } from "lucide-react";
import Link from "next/link";
import { PremiumForm } from "@/components/ui/premium-form";

export default function ReportBuilder() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex gap-8">
        
        {/* Left Sidebar: Controls */}
        <div className="w-[400px] shrink-0 flex flex-col gap-6">
          <div className="mb-2">
            <Link href="/analytics" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Analytics Center
            </Link>
          </div>

          <PremiumForm 
            title="Report Configuration" 
            description="Configure the output format and data sources for this deterministic report."
            submitLabel="Generate Report"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Report Title</label>
                <input type="text" defaultValue="Q3 Operational Health Summary" className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Data Range</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>Year to Date</option>
                  <option>Custom Range</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Report Template</label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button type="button" className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-blue-500 bg-blue-500/10 text-blue-400">
                    <LayoutTemplate className="w-6 h-6" />
                    <span className="text-xs font-medium">Executive Summary</span>
                  </button>
                  <button type="button" className="flex flex-col items-center gap-2 p-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 transition-colors">
                    <FileText className="w-6 h-6" />
                    <span className="text-xs font-medium">Detailed Evidence Grid</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Included Modules</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500/20" />
                    <span className="text-sm text-slate-300">Compliance Validations</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500/20" />
                    <span className="text-sm text-slate-300">Policy Drift Incidents</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500/20" />
                    <span className="text-sm text-slate-300">Financial FinOps Savings</span>
                  </label>
                </div>
              </div>
            </div>
          </PremiumForm>
        </div>

        {/* Right Area: Live Preview Canvas */}
        <div className="flex-1 flex flex-col bg-slate-900/20 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
            <h3 className="font-medium text-sm text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Report Preview
            </h3>
            <div className="flex gap-2">
              <button className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded"><Share2 className="w-4 h-4" /></button>
              <button className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded"><Save className="w-4 h-4" /></button>
            </div>
          </div>
          
          <div className="flex-1 p-8 overflow-y-auto bg-slate-950/50">
            {/* The Document / Paper representation */}
            <div className="bg-white text-black p-10 rounded-lg shadow-2xl min-h-[800px] max-w-[800px] mx-auto opacity-90 transition-opacity hover:opacity-100">
              <header className="border-b-2 border-black pb-6 mb-8 flex justify-between items-end">
                <div>
                  <h1 className="text-4xl font-black tracking-tight mb-2">Q3 Operational Health Summary</h1>
                  <p className="text-slate-600 font-medium">Generated by Revora Enterprise OS</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">DATE RANGE</div>
                  <div className="text-sm text-slate-600">Last 30 Days</div>
                </div>
              </header>

              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4 uppercase tracking-wider text-slate-500">Executive Summary</h2>
                <p className="leading-relaxed text-slate-800">
                  During the specified reporting period, the Revora deterministic engine processed <strong className="text-black">1.4M</strong> executions. 
                  Constitutional compliance was maintained at <strong className="text-black">99.94%</strong>, with <strong className="text-black">3</strong> minor policy drifts automatically resolved without manual intervention.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-slate-100 rounded-lg border border-slate-200">
                  <div className="text-sm font-bold text-slate-500 uppercase mb-2">Mean Resolution Time</div>
                  <div className="text-4xl font-black">4.2 Hrs</div>
                </div>
                <div className="p-6 bg-slate-100 rounded-lg border border-slate-200">
                  <div className="text-sm font-bold text-slate-500 uppercase mb-2">Operational Savings</div>
                  <div className="text-4xl font-black text-emerald-600">+$124k</div>
                </div>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-lg p-10 flex flex-col items-center justify-center text-center text-slate-500 bg-slate-50">
                <Plus className="w-8 h-8 mb-4 text-slate-400" />
                <p className="font-medium">Drag and drop additional visualization widgets here.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
