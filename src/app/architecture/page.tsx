import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Map, 
  Box, 
  FileCode2, 
  Rocket, 
  MapPin, 
  AlertTriangle, 
  Gavel, 
  BarChart3, 
  History,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

const MODULES = [
  {
    title: "Business Capability Map",
    description: "Constitutional registry for enterprise business capabilities and their maturity.",
    icon: Map,
    href: "/architecture/capabilities",
    color: "bg-blue-900/20 text-blue-400 border-blue-900/50"
  },
  {
    title: "Enterprise Application Portfolio",
    description: "Governed inventory of enterprise applications, lifecycle, and critical dependencies.",
    icon: Box,
    href: "/architecture/applications",
    color: "bg-emerald-900/20 text-emerald-400 border-emerald-900/50"
  },
  {
    title: "Technology Standards & Reference",
    description: "Enterprise governance for approved technologies, programming languages, and cloud platforms.",
    icon: FileCode2,
    href: "/architecture/standards",
    color: "bg-indigo-900/20 text-indigo-400 border-indigo-900/50"
  },
  {
    title: "Strategic Transformation Portfolio",
    description: "Executive oversight for digital transformation initiatives and their execution.",
    icon: Rocket,
    href: "/architecture/transformation",
    color: "bg-purple-900/20 text-purple-400 border-purple-900/50"
  },
  {
    title: "Enterprise Roadmap Planner",
    description: "Unified roadmap management aligning architecture initiatives with business priorities.",
    icon: MapPin,
    href: "/architecture/roadmaps",
    color: "bg-amber-900/20 text-amber-400 border-amber-900/50"
  },
  {
    title: "Technical Debt Governance",
    description: "Tracks enterprise technical debt, legacy systems, and modernization backlog.",
    icon: AlertTriangle,
    href: "/architecture/debt",
    color: "bg-rose-900/20 text-rose-400 border-rose-900/50"
  },
  {
    title: "Architecture Review Board",
    description: "Constitutional governance for architecture decisions, waivers, and Human Approvals.",
    icon: Gavel,
    href: "/architecture/reviews",
    color: "bg-cyan-900/20 text-cyan-400 border-cyan-900/50"
  },
  {
    title: "Architecture Analytics",
    description: "Executive intelligence visualizing capability maturity and modernization velocity.",
    icon: BarChart3,
    href: "/architecture/analytics",
    color: "bg-fuchsia-900/20 text-fuchsia-400 border-fuchsia-900/50"
  },
  {
    title: "Enterprise Architecture Audit Ledger",
    description: "Immutable ledger for every enterprise architecture activity and policy violation.",
    icon: History,
    href: "/architecture/audit",
    color: "bg-slate-800 text-slate-300 border-slate-700"
  }
];

export default function ArchitectureCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-900 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold tracking-tight text-white">Enterprise Architecture Command Center</h1>
          </div>
          <p className="text-slate-400 max-w-3xl">
            Constitutional governance over the entire Enterprise Architecture landscape. Every capability, application, standard, and transformation program is a governed asset with immutable evidence and executive accountability.
          </p>
        </header>

        {/* Executive KPIs */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Enterprise EA Score
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">92.4%</div>
            <div className="text-xs text-blue-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +1.2% this quarter
            </div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Application Rationalization
              <Box className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,245</div>
            <div className="text-xs text-emerald-400">Total active managed apps</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Strategic Alignment
              <Target className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-xs text-amber-400">Capabilities aligned to strategy</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Technical Debt Index
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$42.5M</div>
            <div className="text-xs text-rose-400">Across 18 critical systems</div>
          </div>
        </div>

        {/* EA Modules */}
        <div className="grid grid-cols-3 gap-6">
          {MODULES.map((mod, idx) => (
            <Link 
              key={idx} 
              href={mod.href}
              className="group bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/60 hover:border-slate-700 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-2 -translate-y-2">
                 <mod.icon className="w-24 h-24" />
              </div>
              <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-4 ${mod.color}`}>
                <mod.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{mod.title}</h3>
              <p className="text-sm text-slate-400 flex-1 leading-relaxed">
                {mod.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
