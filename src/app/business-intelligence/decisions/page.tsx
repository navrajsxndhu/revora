import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck, Activity, Target, Download, Settings, History, BrainCircuit, Layers, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Image, Keyboard, Timer, TrendingUp, TrendingDown, BookOpen, MousePointerClick, Database, Users, FileCode, GraduationCap, Map, ClipboardList, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, Lightbulb, Compass, MessageSquare, FolderHeart, Tags, Fingerprint, Users2, Video, Megaphone, Inbox, Calendar, Globe, Handshake, MessageCircle, Zap, Wind, Cpu, Mouse, Monitor, EyeOff, Laptop, Smartphone, Box, Maximize, Gauge, Unlock, HelpCircle, Terminal, ThumbsUp, LayoutDashboard, Star, Bell, UserCircle2, RefreshCw, Tablet, WifiOff, ServerCrash, MapPin, Cast, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, Paintbrush, Type, Wand2, Palette, Component, Sparkle, Share2, Waypoints, GitMerge, Radar, Telescope, Binary, Workflow, Microscope, MonitorPlay, Columns, Menu, Save, GitCompare, Layout, SearchCode, UsersRound, Scale, LinkIcon, PenTool, GitPullRequest, UserCheck, Library, Plug, PlayCircle, ListChecks, BookMarked, TableProperties, DatabaseBackup, FileJson, ShieldAlert, ShoppingBag, PieChart, RadioTower, HardDrive, Siren, Flame, Presentation, Crosshair, LayoutTemplate, FileText, Link as LinkIconComponent } from "lucide-react";
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
              <Link href="/business-intelligence" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to BI Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-indigo-400" />
              Executive Decision Center
            </h1>
            <p className="text-slate-400">Provides decision-ready executive briefings with supporting evidence, financial impact, and risk analysis.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Executive KPIs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          
          <div className="bg-slate-900/60 border border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(129,140,248,0.05)] rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Decisions
              <Inbox className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-indigo-400">Executive approvals</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Decision Velocity
              <Timer className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2 Days</div>
            <div className="text-xs text-slate-500">Time to approve</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Evidence Coverage
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-slate-500">Data-backed briefs</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Strategic Alignment
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-xs text-slate-500">Matches OKRs</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          
          
          <PremiumTable 
            title="Strategic Intelligence" 
            headers={["Strategic Decision", "Requested By", "Financial Impact", "Risk Level", "Status", "Execution ID"]}
          >
            {[{"dec":"Acquire Competitor (Project Alpha)","req":"Corp Dev","imp":"$42M Allocation","risk":"High","status":"Warning","trace":"EDC-EV-601"},{"dec":"Open Tokyo Data Center","req":"VP Infrastructure","imp":"$4.2M CAPEX","risk":"Medium","status":"Optimal","trace":"EDC-EV-602"},{"dec":"Hiring Freeze (Q4)","req":"CFO","imp":"$2.1M Savings","risk":"Low","status":"Critical","trace":"EDC-EV-603"}].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.dec}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.req}
                </td>
                <td className="py-4 px-5 text-sm ${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.imp}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.risk === 'Critical' || row.risk === 'At Risk' || row.risk === 'High' || row.risk === 'Off Track' || row.risk === 'Low' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.risk === 'Warning' || row.risk === 'Medium' || row.risk === 'Behind' || row.risk === 'Needs Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.risk === 'Optimal' || row.risk === 'On Track' || row.risk === 'Low' || row.risk === 'Verified' || row.risk === 'Active' || row.risk === 'High' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.risk}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Critical' || row.status === 'At Risk' || row.status === 'High' || row.status === 'Off Track' || row.status === 'Low' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.status === 'Warning' || row.status === 'Medium' || row.status === 'Behind' || row.status === 'Needs Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.status === 'Optimal' || row.status === 'On Track' || row.status === 'Low' || row.status === 'Verified' || row.status === 'Active' || row.status === 'High' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
