import React from "react";
import Link from "next/link";
import { ArrowLeft, Network, Search, Zap, Activity, Users, LayoutTemplate, ShieldCheck, DatabaseZap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseEventBus() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Event Bus</h1>
            <p className="text-slate-400">Unified enterprise event catalog, asynchronous message routing, and schema governance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Event Topics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <DatabaseZap className="w-4 h-4" /> Download AsyncAPI Spec
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Event Throughput (1h)
              <Zap className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2M</div>
            <div className="text-xs text-indigo-400">Messages routed globally</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Registered Schemas
              <LayoutTemplate className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">482</div>
            <div className="text-xs text-blue-400">Constitutional event definitions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Producers
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">84</div>
            <div className="text-xs text-emerald-400">Governed publisher apps</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Consumers
              <Users className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">312</div>
            <div className="text-xs text-purple-400">Authorized subscriber queues</div>
          </div>
        </div>

        {/* Events Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Constitutional Event Catalog" 
            headers={["Event Topic", "Schema Version", "Primary Producer", "Active Consumers", "Policy Validation", "Schema Trace"]}
          >
            {[
              { topic: "finance.ledger.committed", ver: "v2.1 (Avro)", prod: "Core Finance Service", cons: "14 Services", pol: "Pass (No PII)", trace: "EVT-EV-601" },
              { topic: "hr.employee.onboarded", ver: "v1.4 (JSON Schema)", prod: "Workday Bridge", cons: "8 Services", pol: "PII Masked", trace: "EVT-EV-602" },
              { topic: "system.security.alert", ver: "v1.0 (Protobuf)", prod: "Policy Engine", cons: "22 Services", pol: "Pass", trace: "EVT-EV-603" },
              { topic: "commerce.order.placed", ver: "v3.0 (Avro)", prod: "Commerce API", cons: "4 Services", pol: "Pass", trace: "EVT-EV-604" },
              { topic: "legacy.db.update", ver: "v0.9 (Raw JSON)", prod: "Legacy SAP", cons: "0 Services", pol: "Blocked (Unstructured)", trace: "EVT-EV-605" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-indigo-400 text-sm flex items-center gap-2">
                       <Network className="w-4 h-4 text-slate-500" />
                       {row.topic}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.ver}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.prod}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-600" />
                      {row.cons}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.pol.includes('Pass') || row.pol.includes('Masked') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {(row.pol.includes('Pass') || row.pol.includes('Masked')) && <ShieldCheck className="w-3 h-3" />}
                    {row.pol}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Active" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
