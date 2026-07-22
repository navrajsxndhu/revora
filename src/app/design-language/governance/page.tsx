import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Unlock, HelpCircle, Terminal, ThumbsUp, LayoutDashboard, Star, Bell, UserCircle2, RefreshCw, Tablet, WifiOff, ServerCrash, MapPin, Cast, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, Paintbrush, Type, Wand2, Palette, Component, Sparkle, Link as LinkIcon } from "lucide-react";
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
              <Link href="/design-language" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to REDL Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-orange-500" />
              Design Governance Board
            </h1>
            <p className="text-slate-400">Constitutional oversight preventing visual drift and ensuring every addition meets premium standards.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Design Tokens..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-orange-900/30 bg-orange-950/10 shadow-[0_0_15px_rgba(249,115,22,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Visual Reviews
              <Search className="w-4 h-4 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-orange-400">Pull requests analyzed</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Design Drift
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0%</div>
            <div className="text-xs text-slate-500">Strict UI enforcement</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Exceptions Granted
              <ClipboardList className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-slate-500">Contextual overrides</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              A11y Violations
              <XCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-slate-500">Blocked at CI/CD</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Design Governance Metrics" 
            headers={["Governance Rule", "Enforcement Mechanism", "Violations Blocked", "Approval Required", "Governance", "Execution ID"]}
          >
            {[{"rule":"No custom HEX colors","enf":"Linter (stylelint)","block":"42 Commits","req":"Design System Lead","gov":"Verified","trace":"DGB-EV-901"},{"rule":"Interactive elements must have focus state","enf":"CI/CD A11y Scanner","block":"14 Commits","req":"Accessibility Auditor","gov":"Verified","trace":"DGB-EV-902"},{"rule":"Typography must use Rem scaling","enf":"PR Review Bot","block":"12 Commits","req":"Design Tokens Team","gov":"Verified","trace":"DGB-EV-903"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.rule}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.enf}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.block}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.req}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.gov === 'Critical' || row.gov === 'High' || row.gov === 'Deprecated' || row.gov === 'Low' || row.gov === 'Blocked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.gov === 'Warning' || row.gov === 'Medium' || row.gov === 'Pending' || row.gov === 'Transitional' || row.gov === 'Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.gov === 'Optimal' || row.gov === 'Adopted' || row.gov === 'Approved' || row.gov === 'Verified' || row.gov === 'Live' || row.gov === 'Standard' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.gov}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
