import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Link as LinkIcon } from "lucide-react";
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
              <Link href="/performance" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RPMDOS Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Maximize className="w-8 h-8 text-cyan-500" />
              Enterprise Responsiveness Center
            </h1>
            <p className="text-slate-400">Governance ensuring pristine layout integrity across all form factors.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Performance Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
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
              Mobile Parity
              <Smartphone className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-cyan-400">Feature complete</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Desktop Layouts
              <Monitor className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Verified</div>
            <div className="text-xs text-slate-500">Ultrawide support</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Touch Targets
              <Mouse className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">44px</div>
            <div className="text-xs text-slate-500">Minimum hit area</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overflow Errors
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-slate-500">Horizontal scroll broken</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Performance & Motion Metrics" 
            headers={["Component Category", "Breakpoint Matrix", "Touch Optimized", "Visual Integrity", "Governance", "Evidence"]}
          >
            {[{"comp":"Premium Table","brk":"All (sm to 4xl)","touch":"Yes","integ":"Perfect","gov":"Verified","trace":"ERC-EV-401"},{"comp":"Evidence Badge","brk":"All (sm to 4xl)","touch":"Yes","integ":"Perfect","gov":"Verified","trace":"ERC-EV-402"},{"comp":"Command Palette","brk":"Desktop/Tablet Only","touch":"Partial","integ":"Needs Mobile Adjust","gov":"Review Required","trace":"ERC-EV-403"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.comp}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.brk}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.touch}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.integ}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.gov === 'Critical' || row.gov === 'High Latency' || row.gov === 'Restricted' || row.gov === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.gov === 'Warning' || row.gov === 'Degraded' || row.gov === 'Review Required' || row.gov === 'Sub-Optimal' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.gov === 'Optimal' || row.gov === 'Instant' || row.gov === 'Approved' || row.gov === 'Verified' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
