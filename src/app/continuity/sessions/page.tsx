import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Unlock, HelpCircle, Terminal, ThumbsUp, LayoutDashboard, Star, Bell, UserCircle2, RefreshCw, Tablet, WifiOff, ServerCrash, MapPin, Cast, Link as LinkIcon } from "lucide-react";
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
              <Link href="/continuity" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RMDCOS Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-indigo-500" />
              Cross-Device Session Continuity
            </h1>
            <p className="text-slate-400">Maintains uninterrupted enterprise workflows by synchronizing active workspaces across devices.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Continuity Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(99,102,241,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Sessions
              <Activity className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">412K</div>
            <div className="text-xs text-indigo-400">Synchronized workspaces</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Handoff Success
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-slate-500">Without data loss</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Average Sync Time
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14ms</div>
            <div className="text-xs text-slate-500">Real-time capability</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Orphaned Sessions
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-slate-500">Auto-pruned securely</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Multi-Device Continuity Metrics" 
            headers={["User Identity", "Origin Device", "Target Device", "Workspace State", "Sync State", "Execution ID"]}
          >
            {[{"user":"U-8214","orig":"MacBook Pro","targ":"iPhone 15","state":"Pending Approvals List","sync":"Live","trace":"CDS-EV-101"},{"user":"U-1192","orig":"iPad Pro","targ":"ThinkPad T14","state":"Architecture Review","sync":"Syncing","trace":"CDS-EV-102"},{"user":"U-5042","orig":"iPhone 14","targ":"Offline","state":"Draft Response","sync":"Cached","trace":"CDS-EV-103"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.user}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.orig}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.targ}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.state}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.sync === 'Critical' || row.sync === 'Offline' || row.sync === 'Blocked' || row.sync === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.sync === 'Syncing' || row.sync === 'Medium' || row.sync === 'Pending validation' || row.sync === 'Cached' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.sync === 'Optimal' || row.sync === 'Live' || row.sync === 'Approved' || row.sync === 'Verified' || row.sync === 'Seamless' || row.sync === 'Routed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.sync}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
