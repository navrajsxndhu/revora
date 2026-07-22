const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge'];
  if (!allIcons.includes(iconName)) allIcons.push(iconName);
  
  const uniqueIconsStr = [...new Set(allIcons)].join(', ');

  return `import React from "react";
import Link from "next/link";
import { ${uniqueIconsStr}, Link as LinkIcon } from "lucide-react";
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
              <${iconName} className="w-8 h-8 text-cyan-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
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
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-cyan-900/30 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)]' : 'border-slate-800'} rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              ${kpi.label}
              <${kpi.icon} className="w-4 h-4 ${kpi.color || 'text-slate-500'}" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">${kpi.value}</div>
            <div className="text-xs ${kpi.descColor || 'text-slate-500'}">${kpi.desc}</div>
          </div>`).join('')}
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          ${additionalUI ? additionalUI : ''}
          
          <PremiumTable 
            title="Performance & Motion Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Performance' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High Latency' || row.${key} === 'Restricted' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Degraded' || row.${key} === 'Review Required' || row.${key} === 'Sub-Optimal' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Instant' || row.${key} === 'Approved' || row.${key} === 'Verified' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Runtime" />
                </td>`;
                  }
                  return `
                <td className="py-4 px-5 text-sm \${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.${key}}
                </td>`;
                }).join('')}
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
`;
}

const routes = {
  'motion': {
    title: 'Motion Design System',
    description: 'Constitutional governance ensuring all animations are purposeful, calm, and performant.',
    icon: 'Wind',
    kpis: [
      { label: 'Motion Consistency', value: '98%', desc: 'Adherence to design spec', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Avg Animation Duration', value: '240ms', desc: 'Enterprise standard', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Frame Drops', value: '0.1%', desc: 'Near-perfect 60FPS', icon: 'Activity', color: 'text-blue-500' },
      { label: 'Rogue Animations', value: '0', desc: 'Unapproved CSS transitions', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Component Type', 'Transition Model', 'Target Duration', 'Easing Curve', 'Governance', 'Trace'],
    data: [
      { comp: 'Modal Dialog', trans: 'Fade + Slide Up', dur: '300ms', ease: 'cubic-bezier(0.4, 0, 0.2, 1)', gov: 'Approved', trace: 'MDS-EV-101' },
      { comp: 'Navigation Drawer', trans: 'Slide Horizontal', dur: '250ms', ease: 'ease-out', gov: 'Approved', trace: 'MDS-EV-102' },
      { comp: 'Hover Button', trans: 'Background Fill', dur: '150ms', ease: 'linear', gov: 'Approved', trace: 'MDS-EV-103' },
    ]
  },
  'loading': {
    title: 'Intelligent Loading Experience',
    description: 'Transforms waiting into progress via progressive rendering and skeletal layouts.',
    icon: 'Loader2',
    kpis: [
      { label: 'Perceived Load Time', value: '0.8s', desc: 'Visual completeness', icon: 'Eye', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Skeleton Coverage', value: '92%', desc: 'Async data placeholders', icon: 'Box', color: 'text-emerald-500' },
      { label: 'Blank Screen Time', value: '0ms', desc: 'Always rendering UI', icon: 'EyeOff', color: 'text-blue-500' },
      { label: 'Indefinite Spinners', value: '0', desc: 'Banned pattern', icon: 'XCircle', color: 'text-emerald-500' },
    ],
    headers: ['Route / Dashboard', 'Loading Strategy', 'Initial Paint', 'Full Hydration', 'Performance', 'Evidence'],
    data: [
      { route: '/engineering/audit', strat: 'Streaming Skeleton', paint: '400ms', hyd: '1.2s', perf: 'Optimal', trace: 'ILE-EV-201' },
      { route: '/intelligence/decisions', strat: 'Progressive Hydration', paint: '300ms', hyd: '1.8s', perf: 'Optimal', trace: 'ILE-EV-202' },
      { route: '/finance/ledger', strat: 'Server Component Chunking', paint: '800ms', hyd: '2.4s', perf: 'Sub-Optimal', trace: 'ILE-EV-203' },
    ]
  },
  'feedback': {
    title: 'Interaction Feedback Engine',
    description: 'Ensuring every interaction produces satisfying, instantaneous confirmation.',
    icon: 'MousePointerClick',
    kpis: [
      { label: 'Feedback Latency', value: '45ms', desc: 'Visual response time', icon: 'Zap', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Optimistic Actions', value: '1.4K', desc: 'Immediate UI updates', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Missed Feedback', value: '0.2%', desc: 'Silent interactions', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'User Confidence', value: '98%', desc: 'Certainty of action', icon: 'ShieldCheck', color: 'text-blue-500' },
    ],
    headers: ['Interaction Type', 'Feedback Mechanism', 'Latency', 'Optimistic UI', 'Status', 'Trace'],
    data: [
      { int: 'Form Submission', feed: 'Micro-animation + Toast', lat: '12ms', opt: 'Yes', status: 'Optimal', trace: 'IFE-EV-301' },
      { int: 'Record Deletion', feed: 'Strike-through + Fade', lat: '8ms', opt: 'Yes', status: 'Optimal', trace: 'IFE-EV-302' },
      { int: 'Heavy Data Export', feed: 'Progress Bar + Email Ack', lat: '120ms', opt: 'No', status: 'Optimal', trace: 'IFE-EV-303' },
    ]
  },
  'responsive': {
    title: 'Enterprise Responsiveness Center',
    description: 'Governance ensuring pristine layout integrity across all form factors.',
    icon: 'Maximize',
    kpis: [
      { label: 'Mobile Parity', value: '100%', desc: 'Feature complete', icon: 'Smartphone', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Desktop Layouts', value: 'Verified', desc: 'Ultrawide support', icon: 'Monitor', color: 'text-emerald-500' },
      { label: 'Touch Targets', value: '44px', desc: 'Minimum hit area', icon: 'Mouse', color: 'text-blue-500' },
      { label: 'Overflow Errors', value: '0', desc: 'Horizontal scroll broken', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Component Category', 'Breakpoint Matrix', 'Touch Optimized', 'Visual Integrity', 'Governance', 'Evidence'],
    data: [
      { comp: 'Premium Table', brk: 'All (sm to 4xl)', touch: 'Yes', integ: 'Perfect', gov: 'Verified', trace: 'ERC-EV-401' },
      { comp: 'Evidence Badge', brk: 'All (sm to 4xl)', touch: 'Yes', integ: 'Perfect', gov: 'Verified', trace: 'ERC-EV-402' },
      { comp: 'Command Palette', brk: 'Desktop/Tablet Only', touch: 'Partial', integ: 'Needs Mobile Adjust', gov: 'Review Required', trace: 'ERC-EV-403' },
    ]
  },
  'stability': {
    title: 'Visual Stability Governance',
    description: 'Preventing disruptive layout shifts and ensuring the interface never jumps unexpectedly.',
    icon: 'Layers',
    kpis: [
      { label: 'Avg CLS Score', value: '0.02', desc: 'Near-zero layout shift', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Image Reserves', value: '100%', desc: 'Pre-allocated spaces', icon: 'Image', color: 'text-emerald-500' },
      { label: 'Font Flash (FOUT)', value: '0ms', desc: 'Invisible font loading', icon: 'Type', color: 'text-blue-500' },
      { label: 'Scroll Jank', value: '0.4%', desc: 'Smooth rendering', icon: 'TrendingDown', color: 'text-amber-500' },
    ],
    headers: ['Dashboard Route', 'Cumulative Layout Shift', 'Largest Shift Source', 'Scroll Performance', 'Status', 'Trace'],
    data: [
      { route: '/intelligence/analytics', cls: '0.01', src: 'None', scroll: '60 FPS', status: 'Optimal', trace: 'VSG-EV-501' },
      { route: '/engineering/audit', cls: '0.04', src: 'Dynamic Table Load', scroll: '58 FPS', status: 'Optimal', trace: 'VSG-EV-502' },
      { route: '/collaboration/spaces', cls: '0.12', src: 'Late Image Hydration', scroll: '45 FPS', status: 'Degraded', trace: 'VSG-EV-503' },
    ]
  },
  'resources': {
    title: 'Resource Optimization Center',
    description: 'Enterprise governance for frontend efficiency, bundle size, and memory utilization.',
    icon: 'Cpu',
    kpis: [
      { label: 'JS Bundle Size', value: '142kb', desc: 'Initial Gzip payload', icon: 'FileCode', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Code Splitting', value: '98%', desc: 'Route-based chunks', icon: 'Network', color: 'text-emerald-500' },
      { label: 'Asset Cache Hit', value: '94%', desc: 'Edge CDN efficiency', icon: 'Database', color: 'text-blue-500' },
      { label: 'Memory Leaks', value: '0', desc: 'Client stability verified', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Resource Type', 'Total Payload', 'Optimization Strat', 'Delivery Network', 'Performance', 'Execution ID'],
    data: [
      { res: 'Core Framework (Next.js)', load: '78kb (gz)', strat: 'Turbopack + Minify', net: 'Edge CDN', perf: 'Optimal', trace: 'ROC-EV-601' },
      { res: 'Lucide Icons', load: '12kb (gz)', strat: 'Tree-shaking', net: 'Edge CDN', perf: 'Optimal', trace: 'ROC-EV-602' },
      { res: 'Chart.js Render Library', load: '145kb (gz)', strat: 'Dynamic Lazy Import', net: 'Client Request', perf: 'Optimal', trace: 'ROC-EV-603' },
    ]
  },
  'delight': {
    title: 'Delight & Micro-Interaction Engine',
    description: 'Creating memorable, premium enterprise interactions that reduce software fatigue.',
    icon: 'Sparkles',
    kpis: [
      { label: 'Delight Score', value: '96/100', desc: 'User experience index', icon: 'Smile', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Micro-Interactions', value: '42', desc: 'Governed subtle effects', icon: 'MousePointerClick', color: 'text-emerald-500' },
      { label: 'Cognitive Easing', value: 'High', desc: 'Stress reduction', icon: 'BrainCircuit', color: 'text-blue-500' },
      { label: 'Distraction Level', value: 'Zero', desc: 'Motion is purposeful', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Interaction', 'Trigger', 'Visual Response', 'Haptic Output', 'Governance', 'Trace'],
    data: [
      { int: 'Form Success', trig: 'Submit Complete', resp: 'Checkmark Draw + Glow', hap: 'Light Tap', gov: 'Approved', trace: 'DME-EV-701' },
      { int: 'Delete Warning', trig: 'Destructive Hover', resp: 'Subtle Pulse (Red)', hap: 'None', gov: 'Approved', trace: 'DME-EV-702' },
      { int: 'Navigation Switch', trig: 'Tab Change', resp: 'Sliding Underline Indicator', hap: 'None', gov: 'Approved', trace: 'DME-EV-703' },
    ]
  },
  'analytics': {
    title: 'Performance Analytics',
    description: 'Executive intelligence aggregating technical speeds with perceived human experience metrics.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Performance Index', value: '98.2', desc: 'Overall enterprise score', icon: 'Gauge', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'LCP (Largest Paint)', value: '1.2s', desc: 'Core Web Vitals', icon: 'Image', color: 'text-emerald-500' },
      { label: 'TTI (Interactive)', value: '1.4s', desc: 'Ready for human input', icon: 'MousePointerClick', color: 'text-blue-500' },
      { label: 'Task Speed', value: '+42%', desc: 'Workflow completion', icon: 'TrendingUp', color: 'text-emerald-500' },
    ],
    headers: ['Enterprise Module', 'LCP', 'TTI', 'Interaction Latency', 'Status', 'Evidence'],
    data: [
      { mod: '/engineering', lcp: '1.1s', tti: '1.3s', lat: '45ms', status: 'Optimal', trace: 'PAN-EV-801' },
      { mod: '/search', lcp: '0.8s', tti: '1.0s', lat: '24ms', status: 'Instant', trace: 'PAN-EV-802' },
      { mod: '/collaboration', lcp: '1.8s', tti: '2.1s', lat: '120ms', status: 'Degraded', trace: 'PAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Performance Governance Board',
    description: 'Constitutional oversight for performance budgets, accessibility rules, and rendering policies.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Budget Compliance', value: '100%', desc: 'Size & Speed limits', icon: 'Lock', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'A11y Overrides', value: '14', desc: 'Motion reduced for users', icon: 'Accessibility', color: 'text-emerald-500' },
      { label: 'Policy Checks', value: '4.2K', desc: 'Automated CI/CD gates', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Exemptions', value: '0', desc: 'Strict enforcement', icon: 'XCircle', color: 'text-emerald-500' },
    ],
    headers: ['Governance Policy', 'Target Metric', 'Maximum Threshold', 'Current Value', 'Status', 'Execution ID'],
    data: [
      { pol: 'Initial JS Bundle Limit', metric: 'Size (Gzipped)', max: '150kb', cur: '142kb', status: 'Approved', trace: 'PGB-EV-901' },
      { pol: 'Interaction Latency Cap', metric: 'Time to Paint', max: '100ms', cur: '45ms', status: 'Approved', trace: 'PGB-EV-902' },
      { pol: 'Strict CLS Requirement', metric: 'Layout Shift', max: '0.1', cur: '0.02', status: 'Approved', trace: 'PGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Performance Evidence Ledger',
    description: 'Immutable cryptographic trails for all performance optimizations and architectural speed improvements.',
    icon: 'History',
    kpis: [
      { label: 'Audit Records', value: '8.4M', desc: 'Performance snapshots', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Optimization Events', value: '412', desc: 'Engineered improvements', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Ledger Health', value: 'Verified', desc: 'Hashes matching', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'CI/CD Traces', value: '100%', desc: 'Linked to deployments', icon: 'GitCommit', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Optimization Applied', 'Impact Metric', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'PRF-E-1044', time: '2026-07-22T09:14:00Z', opt: 'Lazy Loaded Chart.js', imp: 'Bundle Size -145kb', gov: 'Policy: Asset Splitting', trace: 'EV-P-1044' },
      { id: 'PRF-E-1043', time: '2026-07-22T09:12:15Z', opt: 'Implemented Skeletons', imp: 'Blank Screen -100%', gov: 'Policy: Progressive UI', trace: 'EV-P-1043' },
      { id: 'PRF-E-1042', time: '2026-07-22T09:05:00Z', opt: 'Optimistic UI on Submit', imp: 'Feedback Latency -400ms', gov: 'Policy: 100ms Response', trace: 'EV-P-1042' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Gauge, Wind, Loader2, MousePointerClick, Maximize, Layers, Cpu, Sparkles, BarChart2, ShieldCheck, History } from "lucide-react";

export default function PerformanceCommandCenter() {
  const modules = [
    { name: "Motion Design", path: "/performance/motion", icon: Wind, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Intelligent Loading", path: "/performance/loading", icon: Loader2, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Feedback Engine", path: "/performance/feedback", icon: MousePointerClick, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Responsiveness", path: "/performance/responsive", icon: Maximize, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Visual Stability", path: "/performance/stability", icon: Layers, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Resource Optimization", path: "/performance/resources", icon: Cpu, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Delight Engine", path: "/performance/delight", icon: Sparkles, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Performance Analytics", path: "/performance/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Governance Board", path: "/performance/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/performance/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Gauge className="w-8 h-8 text-cyan-500" />
              Performance, Motion & Delight OS (RPMDOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing perceived performance, visual stability, and interaction elegance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Performance Index</span>
               <div className="text-xl font-black text-cyan-400">98.2 Ultra</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 overflow-y-auto pb-12 content-start">
          {modules.map((m, i) => (
            <Link key={i} href={m.path} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/60 hover:border-slate-700 transition-all group flex flex-col h-full">
              <div className={\`w-10 h-10 rounded-lg \${m.bg} \${m.border} border flex items-center justify-center mb-4 shrink-0\`}>
                <m.icon className={\`w-5 h-5 \${m.color}\`} />
              </div>
              <div className="font-bold text-slate-200 mb-1">{m.name}</div>
              <div className="text-xs text-slate-500 flex-1">Govern performance metrics and interaction UX.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
`;

const basePath = path.join(__dirname, 'src', 'app', 'performance');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
