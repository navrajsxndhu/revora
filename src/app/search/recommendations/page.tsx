import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Cpu, Link as LinkIcon } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/search" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RSKIOS Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-cyan-500" />
              Recommendation & Similarity Engine
            </h1>
            <p className="text-slate-400">Proactively suggesting related enterprise knowledge based on structural similarity.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Knowledge Context..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-cyan-900/30 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Acceptance Rate
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42%</div>
            <div className="text-xs text-cyan-400">Users clicking suggestions</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Generated Daily
              <Cpu className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2M</div>
            <div className="text-xs text-slate-500">Similarity vectors computed</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Avg Relevance
              <BarChart2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0.84</div>
            <div className="text-xs text-slate-500">Cosine similarity score</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Knowledge Silos
              <Network className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">-14%</div>
            <div className="text-xs text-slate-500">Cross-dept discoveries</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Search & Discovery Metrics" 
            headers={["Source Asset", "Recommended Asset", "Similarity Vector", "Business Value", "Confidence", "Evidence"]}
          >
            {[{"src":"Incident #8012 (DB Lock)","rec":"Incident #7044 (DB Lock)","vec":"Root Cause Match","val":"Faster Resolution","conf":"High","trace":"RSE-EV-601"},{"src":"Data Retention Policy v2","rec":"GDPR Compliance Check","vec":"Regulatory Tagging","val":"Audit Prevention","conf":"High","trace":"RSE-EV-602"},{"src":"React Component: Table","rec":"Design System: Grid","vec":"UI Architecture","val":"Code Reuse","conf":"Medium","trace":"RSE-EV-603"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.src}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.rec}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.vec}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.val}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.conf === 'High Risk' || row.conf === 'Low' || row.conf === 'Restricted' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.conf === 'Medium Risk' || row.conf === 'Medium' || row.conf === 'Review Required' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.conf === 'Verified' || row.conf === 'High' || row.conf === 'Approved' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.conf}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
