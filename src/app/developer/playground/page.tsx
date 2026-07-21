import React from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, Search, Save, Send, Code, Terminal, KeyRound, ShieldAlert, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function APIPlayground() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/developer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Developer Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">API Playground</h1>
            <p className="text-slate-400">A secure interactive testing environment constrained by constitutional runtime policies.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center bg-slate-900 border border-slate-800 rounded-md p-1">
                <span className="px-3 py-1 text-sm text-emerald-400 font-medium bg-emerald-900/20 rounded">GET</span>
                <input type="text" value="https://api.revora.internal/v1/users/profile" readOnly className="bg-transparent border-none pl-3 pr-4 py-1 text-sm text-white focus:outline-none w-80 font-mono" />
             </div>
             <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
               <Send className="w-4 h-4" /> Send Request
             </button>
          </div>
        </header>

        {/* Playground Split View */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
          
          {/* Request Panel */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col overflow-hidden">
             <div className="bg-slate-900/80 border-b border-slate-800 p-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                   <Code className="w-4 h-4 text-blue-500" /> Request Payload
                </h3>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                   <span className="cursor-pointer hover:text-white transition-colors border-b-2 border-blue-500 text-blue-400 pb-1">Headers</span>
                   <span className="cursor-pointer hover:text-white transition-colors pb-1">Auth</span>
                   <span className="cursor-pointer hover:text-white transition-colors pb-1">Body</span>
                </div>
             </div>
             <div className="p-4 flex-1 font-mono text-sm text-slate-300 bg-[#0d1117] overflow-y-auto">
<pre><code>{`{
  "Authorization": "Bearer rev_test_m2x89a...",
  "Content-Type": "application/json",
  "X-Revora-Context": "playground-ui"
}`}</code></pre>
             </div>
          </div>

          {/* Response Panel */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col overflow-hidden">
             <div className="bg-slate-900/80 border-b border-slate-800 p-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                   <Terminal className="w-4 h-4 text-emerald-500" /> Response Inspector
                </h3>
                <div className="flex items-center gap-3">
                   <span className="text-xs font-mono text-emerald-400 bg-emerald-900/20 border border-emerald-900/50 px-2 py-0.5 rounded">200 OK</span>
                   <span className="text-xs font-mono text-slate-400">42ms</span>
                   <span className="text-xs font-mono text-slate-400">1.2KB</span>
                </div>
             </div>
             <div className="p-4 flex-1 font-mono text-sm text-emerald-300 bg-[#0d1117] overflow-y-auto relative">
                <div className="absolute top-4 right-4">
                   <EvidenceBadge evidenceId="PLG-EV-701" timestamp="Now" />
                </div>
<pre><code>{`{
  "status": "success",
  "data": {
    "user_id": "usr_99812x",
    "email": "jdoe@revora.com",
    "role": "Developer",
    "policies": [
      "system.evidence.read",
      "system.playground.execute"
    ]
  },
  "_governance": {
    "pii_masked": false,
    "runtime_trace": "RUN-7781-A2"
  }
}`}</code></pre>
             </div>
          </div>

        </div>

        {/* History Table */}
        <div className="shrink-0 h-64 overflow-hidden flex flex-col">
          <PremiumTable 
            title="Playground Execution History" 
            headers={["Method", "Endpoint", "Status", "Latency", "Policy Constraints"]}
          >
            {[
              { method: "GET", path: "/api/v1/users/profile", status: "200 OK", lat: "42ms", pol: "Passed" },
              { method: "POST", path: "/api/v1/ledger/commit", status: "403 Forbidden", lat: "12ms", pol: "Blocked (Human Auth Required)" },
              { method: "GET", path: "/api/v1/finance/summary", status: "403 Forbidden", lat: "8ms", pol: "Blocked (RBAC Missing)" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-3 px-5">
                   <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.method === 'GET' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                   }`}>
                    {row.method}
                   </span>
                </td>
                <td className="py-3 px-5 text-sm font-mono text-slate-300">
                   {row.path}
                </td>
                <td className="py-3 px-5 text-sm font-mono">
                   <span className={row.status.includes('200') ? 'text-emerald-400' : 'text-rose-400'}>{row.status}</span>
                </td>
                <td className="py-3 px-5 text-sm font-mono text-slate-500">
                   {row.lat}
                </td>
                <td className="py-3 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.pol.includes('Passed') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.pol.includes('Passed') ? <CheckCircle2 className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                    {row.pol}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
