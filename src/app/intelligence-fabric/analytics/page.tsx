import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Unlock, HelpCircle, Terminal, ThumbsUp, LayoutDashboard, Star, Bell, UserCircle2, RefreshCw, Tablet, WifiOff, ServerCrash, MapPin, Cast, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, Paintbrush, Type, Wand2, Palette, Component, Sparkle, Share2, Waypoints, GitMerge, Radar, Telescope, Binary, Workflow, Microscope, Link as LinkIcon } from "lucide-react";
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
              <Link href="/intelligence-fabric" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to REIF Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-teal-500" />
              Intelligence Analytics
            </h1>
            <p className="text-slate-400">Measures the quantitative ROI of connected enterprise knowledge and graph traversal.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Knowledge Graph..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-teal-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-teal-900/30 bg-teal-950/10 shadow-[0_0_15px_rgba(20,184,166,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Intelligence Index
              <Activity className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94/100</div>
            <div className="text-xs text-teal-400">Overall maturity</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Silos Eliminated
              <XCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-slate-500">Legacy barriers removed</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Search Reduction
              <TrendingDown className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">-82%</div>
            <div className="text-xs text-slate-500">Time saved finding context</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Graph Queries
              <Network className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2M</div>
            <div className="text-xs text-slate-500">Daily fabric navigations</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Enterprise Knowledge Metrics" 
            headers={["Department", "Graph Utilization", "Time Saved (Monthly)", "Decision Velocity Increase", "Health", "Evidence"]}
          >
            {[{"dept":"Security Operations","util":"99.4%","time":"412 Hours","vel":"+84%","health":"Optimal","trace":"IAN-EV-801"},{"dept":"Cloud Infrastructure","util":"94.2%","time":"214 Hours","vel":"+62%","health":"Optimal","trace":"IAN-EV-802"},{"dept":"Finance & Legal","util":"88.4%","time":"142 Hours","vel":"+42%","health":"Healthy","trace":"IAN-EV-803"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.dept}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.util}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.time}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.vel}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.health}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
