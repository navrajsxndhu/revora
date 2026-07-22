import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Unlock, HelpCircle, Terminal, ThumbsUp, LayoutDashboard, Star, Bell, UserCircle2, RefreshCw, Tablet, WifiOff, ServerCrash, MapPin, Cast, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, Link as LinkIcon } from "lucide-react";
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
              <Link href="/workspace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RECCOS Enterprise Workspace
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <HeartPulse className="w-8 h-8 text-fuchsia-500" />
              Organizational Health Center
            </h1>
            <p className="text-slate-400">A single constitutional health score for the enterprise across security, compliance, and infrastructure.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Workspace Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-fuchsia-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-fuchsia-900/30 bg-fuchsia-950/10 shadow-[0_0_15px_rgba(217,70,239,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Enterprise Health
              <Activity className="w-4 h-4 text-fuchsia-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98.4%</div>
            <div className="text-xs text-fuchsia-400">Constitutional Index</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Security Score
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-slate-500">Zero-trust verification</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Platform Uptime
              <ServerCrash className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.99%</div>
            <div className="text-xs text-slate-500">Global infrastructure</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compliance Adherence
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-slate-500">Regulatory mappings</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Enterprise Workspace Metrics" 
            headers={["Organizational Pillar", "Primary Metric", "Secondary Metric", "Trend (30d)", "Health", "Trace"]}
          >
            {[{"pill":"Engineering & Infrastructure","prim":"99.99% Availability","sec":"14ms Avg Latency","trend":"+0.01%","health":"Optimal","trace":"OHC-EV-501"},{"pill":"Security & Trust","prim":"0 Active Breaches","sec":"98% Policy Comprehension","trend":"+4%","health":"Optimal","trace":"OHC-EV-502"},{"pill":"Workforce Productivity","prim":"14h Nav Time Saved","sec":"82% Focus Mode Adoption","trend":"+14%","health":"Healthy","trace":"OHC-EV-503"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.pill}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.prim}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.sec}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.trend}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.health === 'Critical' || row.health === 'High' || row.health === 'Failed' || row.health === 'Overdue' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.health === 'Warning' || row.health === 'Medium' || row.health === 'Pending' || row.health === 'Active' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.health === 'Optimal' || row.health === 'Low' || row.health === 'Approved' || row.health === 'Healthy' || row.health === 'Resolved' || row.health === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.health}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
