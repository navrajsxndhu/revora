const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'FileSignature', 'Trophy', 'Award', 'Lightbulb'];
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
              <Link href="/adoption" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Adoption Command Center
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
                <input type="text" placeholder="Search Adoption Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
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
            title="Learning & Adoption Activity" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Mastery Level' || h === 'Engagement' || h === 'Status' || h === 'Confidence') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Novice' || row.${key} === 'Low' || row.${key} === 'Struggling' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Intermediate' || row.${key} === 'Medium' || row.${key} === 'Learning' || row.${key} === 'In Progress' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Expert' || row.${key} === 'High' || row.${key} === 'Completed' || row.${key} === 'Mastered' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'RuntimeExecution' || h === 'Trace') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Record Audited" />
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
  'welcome': {
    title: 'Intelligent First-Run Experience',
    description: 'Personalized onboarding journeys that replace generic tutorials with role-aware guidance.',
    icon: 'Smile',
    kpis: [
      { label: 'Onboarding Success', value: '98%', desc: 'First-day completion', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Time to Value', value: '14m', desc: 'Avg first workflow execution', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Guided Steps', value: '4.2', desc: 'Average steps per user', icon: 'Map', color: 'text-blue-500' },
      { label: 'Drop-off Rate', value: '1.2%', desc: 'Users abandoning setup', icon: 'TrendingDown', color: 'text-rose-500' },
    ],
    headers: ['User / Role', 'Department', 'Initial Setup Time', 'First Workflow', 'Status', 'Evidence'],
    data: [
      { user: 'Sarah Jenkins (VP Eng)', dept: 'Engineering', time: '8 mins', fw: 'Architecture Review', status: 'Completed', trace: 'WEL-EV-101' },
      { user: 'Marcus Chen (Data Sci)', dept: 'Machine Learning', time: '12 mins', fw: 'Dataset Registration', status: 'Completed', trace: 'WEL-EV-102' },
      { user: 'Elena Rostova (Legal)', dept: 'Compliance', time: '45 mins', fw: 'Policy Audit', status: 'In Progress', trace: 'WEL-EV-103' },
    ]
  },
  'workflows': {
    title: 'Guided Workflow Assistant',
    description: 'Contextual, step-by-step guidance embedded directly within complex enterprise operations.',
    icon: 'Map',
    kpis: [
      { label: 'Guidance Completion', value: '94%', desc: 'Workflow success rate', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Active Guides', value: '142', desc: 'Running across platform', icon: 'Activity', color: 'text-blue-500' },
      { label: 'Error Prevention', value: '8.4K', desc: 'Mistakes caught mid-flow', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Support Tickets', value: '-45%', desc: 'Reduction in "How to" queries', icon: 'TrendingDown', color: 'text-indigo-500' },
    ],
    headers: ['Workflow Name', 'Target Audience', 'Est. Time', 'Completion Rate', 'Engagement', 'Trace'],
    data: [
      { wf: 'Incident Response Protocol', aud: 'SRE Team', time: '15 mins', cr: '98%', eng: 'High', trace: 'GWA-EV-201' },
      { wf: 'New Policy Creation', aud: 'Governance Board', time: '8 mins', cr: '92%', eng: 'High', trace: 'GWA-EV-202' },
      { wf: 'Database Migration Prep', aud: 'DevOps', time: '45 mins', cr: '74%', eng: 'Medium', trace: 'GWA-EV-203' },
    ]
  },
  'learning': {
    title: 'Contextual Learning Engine',
    description: 'Inline explanations, tutorials, and smart tooltips triggered exactly when needed.',
    icon: 'GraduationCap',
    kpis: [
      { label: 'Learning Moments', value: '14.2K', desc: 'Tooltips & inline hints viewed', icon: 'Eye', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Documentation Views', value: '-82%', desc: 'Shifted to inline learning', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Concept Retention', value: 'High', desc: 'Repeat mistakes prevented', icon: 'BrainCircuit', color: 'text-purple-500' },
      { label: 'Active Tutorials', value: '24', desc: 'Embedded across platform', icon: 'Layers', color: 'text-blue-500' },
    ],
    headers: ['Learning Context', 'Trigger Condition', 'Content Type', 'Helpfulness Rating', 'Engagement', 'Evidence'],
    data: [
      { ctx: 'Command Palette', trig: 'User clicks navigation 5x', type: 'Interactive Hint', rat: '4.8/5', eng: 'High', trace: 'CLE-EV-301' },
      { ctx: 'Evidence Ledger', trig: 'First time viewing trace', type: 'Inline Explanation', rat: '4.9/5', eng: 'High', trace: 'CLE-EV-302' },
      { ctx: 'Data Retention Policy', trig: 'Hover over Warning', type: 'Smart Tooltip', rat: '4.2/5', eng: 'Medium', trace: 'CLE-EV-303' },
    ]
  },
  'discovery': {
    title: 'Feature Discovery Center',
    description: 'Gradually introduces advanced platform capabilities based on user maturity and role.',
    icon: 'Sparkles',
    kpis: [
      { label: 'Feature Adoption', value: '88%', desc: 'Discovery success rate', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Advanced Users', value: '42%', desc: 'Mastery of Pro features', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Ignored Features', value: '1.2%', desc: 'Features requiring redesign', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Discovery Paths', value: '56', desc: 'Active capability tracks', icon: 'Map', color: 'text-blue-500' },
    ],
    headers: ['Advanced Capability', 'Target Role', 'Prerequisite Usage', 'Discovery Method', 'Engagement', 'Trace'],
    data: [
      { cap: 'Custom RXOS Rules', role: 'UX Architect', pre: '10 standard reviews', meth: 'Command Palette Hint', eng: 'High', trace: 'FDC-EV-401' },
      { cap: 'Automated Approvals', role: 'Security Manager', pre: '50 manual approvals', meth: 'End-of-flow Suggestion', eng: 'High', trace: 'FDC-EV-402' },
      { cap: 'Bulk Audit Export', role: 'Compliance Officer', pre: '5 single exports', meth: 'Smart Tooltip', eng: 'Medium', trace: 'FDC-EV-403' },
    ]
  },
  'help': {
    title: 'Enterprise Help Intelligence',
    description: 'Context-aware, plain-language troubleshooting and governance explanations.',
    icon: 'HeartHandshake',
    kpis: [
      { label: 'Resolution Rate', value: '96%', desc: 'Solved without IT ticket', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Avg Time to Fix', value: '2m', desc: 'Speed of comprehension', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Jargon Detected', value: '0', desc: 'Plain-language compliant', icon: 'ShieldCheck', color: 'text-indigo-500' },
      { label: 'Active Articles', value: '1,492', desc: 'Context-aware snippets', icon: 'BookOpen', color: 'text-blue-500' },
    ],
    headers: ['Help Context', 'User Query Type', 'Assistance Method', 'Resolution Speed', 'Status', 'Evidence'],
    data: [
      { ctx: 'Deployment Blocked', query: 'Why did this fail?', meth: 'Visual Policy Diff', speed: '30s', status: 'Completed', trace: 'EHI-EV-501' },
      { ctx: 'Access Denied', query: 'How do I get permission?', meth: '1-Click Request Flow', speed: '15s', status: 'Completed', trace: 'EHI-EV-502' },
      { ctx: 'Data Sync Error', query: 'What does error 503 mean?', meth: 'Plain-Language Translation', speed: '45s', status: 'Completed', trace: 'EHI-EV-503' },
    ]
  },
  'journeys': {
    title: 'User Journey Analytics',
    description: 'Maps organizational workflow paths, drop-off points, and learning progress.',
    icon: 'Network',
    kpis: [
      { label: 'Workflow Efficiency', value: '+34%', desc: 'Reduction in clicks', icon: 'TrendingUp', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Drop-off Rate', value: '4.2%', desc: 'Across core workflows', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Avg Session', value: '14m', desc: 'Intentional, focused usage', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Journeys Mapped', value: '124', desc: 'Enterprise wide', icon: 'Map', color: 'text-indigo-500' },
    ],
    headers: ['Enterprise Journey', 'Primary Persona', 'Completion Rate', 'Major Friction Point', 'Confidence', 'Trace'],
    data: [
      { jour: 'New Policy Creation', per: 'Governance Lead', comp: '96%', fric: 'None detected', conf: 'High', trace: 'UJA-EV-601' },
      { jour: 'Incident Triage', per: 'SRE', comp: '92%', fric: 'Log context gathering', conf: 'High', trace: 'UJA-EV-602' },
      { jour: 'Architecture Review', per: 'Staff Engineer', comp: '74%', fric: 'Dependency mapping', conf: 'Medium', trace: 'UJA-EV-603' },
    ]
  },
  'achievements': {
    title: 'Personal Achievement Center',
    description: 'Encourages platform confidence through professional mastery milestones.',
    icon: 'Award',
    kpis: [
      { label: 'Mastery Level', value: 'Enterprise', desc: 'Organization average', icon: 'GraduationCap', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Milestones Unlocked', value: '14.2K', desc: 'Platform wide', icon: 'Trophy', color: 'text-amber-500' },
      { label: 'Power Users', value: '24%', desc: 'Mastered all workflows', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Engagement Score', value: 'A+', desc: 'Executive rating', icon: 'Smile', color: 'text-blue-500' },
    ],
    headers: ['Achievement Title', 'Category', 'Unlock Criteria', 'Users Unlocked', 'Mastery Level', 'Evidence'],
    data: [
      { title: 'Governance Guardian', cat: 'Compliance', crit: '100 Policies Audited', users: '42', level: 'Expert', trace: 'PAC-EV-701' },
      { title: 'Keyboard Warrior', cat: 'Productivity', crit: 'Used Cmd Palette 500x', users: '142', level: 'Expert', trace: 'PAC-EV-702' },
      { title: 'First Steps', cat: 'Onboarding', crit: 'Completed Initial Setup', users: '1,492', level: 'Novice', trace: 'PAC-EV-703' },
    ]
  },
  'analytics': {
    title: 'Organization Adoption Analytics',
    description: 'Executive intelligence providing insight into department readiness and time-to-productivity.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Adoption Index', value: '94.8', desc: 'Enterprise wide score', icon: 'Activity', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Time to Prod.', value: '2 Days', desc: 'Avg onboarding speed', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Support Reduction', value: '-62%', desc: 'Fewer IT tickets', icon: 'TrendingDown', color: 'text-indigo-500' },
      { label: 'Active Departments', value: '14', desc: 'Fully onboarded', icon: 'Building2', color: 'text-blue-500' },
    ],
    headers: ['Department', 'Adoption Score', 'Active Users', 'Training Completion', 'Mastery Level', 'Trace'],
    data: [
      { dept: 'Engineering', score: '98%', active: '412', train: '100%', level: 'Expert', trace: 'OAA-EV-801' },
      { dept: 'Security & Compliance', score: '95%', active: '84', train: '100%', level: 'Expert', trace: 'OAA-EV-802' },
      { dept: 'Finance Operations', score: '82%', active: '142', train: '88%', level: 'Intermediate', trace: 'OAA-EV-803' },
    ]
  },
  'reviews': {
    title: 'Adoption Review Board',
    description: 'Constitutional governance ensuring all educational content aligns with enterprise standards.',
    icon: 'FileSignature',
    kpis: [
      { label: 'Content Accuracy', value: '100%', desc: 'Verified by Governance', icon: 'ShieldCheck', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Pending Reviews', value: '4', desc: 'Tutorials awaiting sign-off', icon: 'ClipboardList', color: 'text-amber-500' },
      { label: 'Approved Guides', value: '142', desc: 'Active in production', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Avg Review Time', value: '14h', desc: 'Speed of approval', icon: 'Timer', color: 'text-blue-500' },
    ],
    headers: ['Educational Content', 'Target Module', 'Submitted By', 'Reviewer', 'Approval Status', 'Evidence'],
    data: [
      { cont: 'Architecture Capability Tutorial', mod: 'Enterprise Architecture', sub: 'UX Team', rev: 'Sarah Jenkins', status: 'Approved', trace: 'ARB-EV-901' },
      { cont: 'Security Exemption Guide', mod: 'Trust Governance', sub: 'Security Ops', rev: 'Pending', status: 'Pending Review', trace: 'ARB-EV-902' },
      { cont: 'Legacy DB Migration Hint', mod: 'Infrastructure', sub: 'DevOps', rev: 'Marcus Chen', status: 'Rejected', trace: 'ARB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Adoption Evidence Ledger',
    description: 'The immutable constitutional ledger tracking all onboarding and learning events.',
    icon: 'History',
    kpis: [
      { label: 'Learning Traces', value: '1.2M', desc: 'Cryptographic records', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Verified Certs', value: '842', desc: 'Governance training passes', icon: 'Award', color: 'text-emerald-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Active Policies', value: '14', desc: 'RAOS rules enforced', icon: 'FileCode', color: 'text-indigo-500' },
    ],
    headers: ['Adoption Event ID', 'Timestamp', 'User / Actor', 'Learning Interaction', 'Constitutional Impact', 'EvidenceBadge'],
    data: [
      { id: 'ADO-E-4092', time: '2026-07-22T08:14:00Z', actor: 'New Hire: J. Smith', act: 'Completed First-Run Setup', impact: 'Platform Access Granted', trace: 'EV-A-4092' },
      { id: 'ADO-E-4091', time: '2026-07-22T08:10:22Z', actor: 'Automated Discovery', act: 'Recommended Command Palette', impact: 'None (Advisory)', trace: 'EV-A-4091' },
      { id: 'ADO-E-4090', time: '2026-07-21T16:45:00Z', actor: 'Compliance Officer', act: 'Approved New Tutorial', impact: 'Content Published', trace: 'EV-A-4090' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Smile, Map, Sparkles, HeartHandshake, Network, Award, BarChart2, FileSignature, History, Lightbulb } from "lucide-react";

export default function AdoptionCommandCenter() {
  const modules = [
    { name: "First-Run Experience", path: "/adoption/welcome", icon: Smile, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Guided Workflows", path: "/adoption/workflows", icon: Map, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Contextual Learning", path: "/adoption/learning", icon: Lightbulb, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Feature Discovery", path: "/adoption/discovery", icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Enterprise Help", path: "/adoption/help", icon: HeartHandshake, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "User Journeys", path: "/adoption/journeys", icon: Network, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Achievement Center", path: "/adoption/achievements", icon: Award, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Adoption Analytics", path: "/adoption/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Adoption Reviews", path: "/adoption/reviews", icon: FileSignature, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Adoption Evidence", path: "/adoption/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyan-500" />
              Revora Adoption Operating System (RAOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing enterprise onboarding and zero-learning-curve workflows.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Adoption Score</span>
               <div className="text-xl font-black text-cyan-400">98.2 A+</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern organizational learning and workflow mastery.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'adoption');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
