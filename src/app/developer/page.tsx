import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Code2, Terminal, KeyRound, Webhook, BookOpen, Activity, History, Search, PlayCircle, BarChart2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function DeveloperCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Developer Command</h1>
            <p className="text-slate-400">Constitutional governance over the enterprise API, SDK, CLI, and developer experience ecosystem.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/developer/keys" className="flex items-center gap-2 px-4 py-2 bg-purple-900/40 text-purple-400 border border-purple-900/50 hover:bg-purple-900/60 rounded-md text-sm font-medium transition-colors">
              <KeyRound className="w-4 h-4" /> Manage Credentials
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              API Traffic (24h)
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2M</div>
            <div className="text-xs text-purple-400">Governed invocations</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active SDKs
              <Code2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-xs text-blue-400">Officially supported languages</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Tokens
              <KeyRound className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,024</div>
            <div className="text-xs text-emerald-400">Zero plaintext exposure</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Webhook Deliveries
              <Webhook className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-amber-400">Successful event propagation</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Developer Tools</h3>
            
            <Link href="/developer/apis" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Code className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">API Explorer</div>
                <div className="text-xs text-slate-500">Governed endpoint catalog</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/developer/sdks" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">SDK Center</div>
                <div className="text-xs text-slate-500">Official language libraries</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/developer/cli" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">CLI Center</div>
                <div className="text-xs text-slate-500">Command-line tooling</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/developer/webhooks" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Webhook className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Webhooks & Events</div>
                <div className="text-xs text-slate-500">Event subscriptions</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
            
            <div className="border-t border-slate-800 my-2 pt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-3">Resources & Audit</h3>
              <Link href="/developer/playground" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">API Playground</div>
                </div>
              </Link>
              <Link href="/developer/docs" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Documentation</div>
                </div>
              </Link>
              <Link href="/developer/analytics" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Platform Analytics</div>
                </div>
              </Link>
              <Link href="/developer/audit" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
                  <History className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-200 group-hover:text-slate-400 transition-colors">Audit Ledger</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Active Platform Activity Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Recent Developer Activity" 
              headers={["Timestamp", "Service / Actor", "Operation", "Governance State"]}
            >
              {[
                { time: "2026-07-21 16:15:22", actor: "API Key (Sales App)", op: "GET /api/v1/customers", status: "200 OK" },
                { time: "2026-07-21 16:10:05", actor: "CLI User (jdoe)", op: "revora deploy --prod", status: "Pending Human Sign" },
                { time: "2026-07-21 15:45:00", actor: "Webhook Delivery", op: "invoice.created -> Stripe", status: "Delivered" },
                { time: "2026-07-21 14:30:44", actor: "API Key (Legacy)", op: "POST /api/v1/ledger", status: "Blocked (RBAC)" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-mono text-xs text-slate-400">{row.time}</td>
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    {row.actor}
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.op}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status.includes('Pending') ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

        </div>
      </div>
    </div>
  );
}
