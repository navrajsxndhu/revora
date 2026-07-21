import React from "react";
import Link from "next/link";
import { ArrowLeft, Webhook, Search, PlusCircle, CheckCircle2, XCircle, AlertTriangle, RefreshCw, Send, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function WebhookEventCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Webhook & Event Center</h1>
            <p className="text-slate-400">Enterprise event management, webhook subscriptions, and cryptographically signed delivery tracking.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Subscriptions..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Add Webhook
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Subscriptions
              <Webhook className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-amber-400">Active event listeners</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Delivery Success
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-emerald-400">Past 24 hours</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              In Retry Queue
              <RefreshCw className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-blue-400">Awaiting exponential backoff</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Dead Letter Queue
              <XCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Failed max retries</div>
          </div>
        </div>

        {/* Webhooks Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Webhook Subscriptions" 
            headers={["Event Topic", "Destination URL", "Signature Validation", "Last Delivery", "Status", "Delivery Trace"]}
          >
            {[
              { topic: "finance.invoice.created", url: "https://api.stripe.com/v1/...", sig: "HMAC-SHA256 Signed", last: "2 seconds ago", status: "Healthy", trace: "WHK-EV-501" },
              { topic: "user.account.provisioned", url: "https://hooks.slack.com/...", sig: "HMAC-SHA256 Signed", last: "14 mins ago", status: "Healthy", trace: "WHK-EV-502" },
              { topic: "system.policy.violation", url: "https://security.splunk.local/...", sig: "mTLS + HMAC Signed", last: "1 hour ago", status: "Healthy", trace: "WHK-EV-503" },
              { topic: "inventory.stock.critical", url: "https://legacy-erp.internal/api/...", sig: "Unsigned (Warning)", last: "Failed (503)", status: "Retrying (2/5)", trace: "WHK-EV-504" },
              { topic: "vendor.approval.granted", url: "https://api.vendorportal.com/...", sig: "HMAC-SHA256 Signed", last: "Failed (401)", status: "Disabled (DLQ)", trace: "WHK-EV-505" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-emerald-400 text-sm flex items-center gap-2">
                       <Webhook className="w-4 h-4 text-slate-500" />
                       {row.topic}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm font-mono text-slate-400 truncate max-w-[200px]">
                      <Send className="w-3 h-3 text-slate-600" />
                      {row.url}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.sig.includes('Signed') && !row.sig.includes('Warning') ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.sig.includes('Signed') && !row.sig.includes('Warning') && <ShieldCheck className="w-3 h-3" />}
                    {row.sig}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <span className={row.last.includes('Failed') ? 'text-rose-400' : 'text-slate-300'}>{row.last}</span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Disabled') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Healthy' && <CheckCircle2 className="w-3 h-3" />}
                    {row.status.includes('Retrying') && <RefreshCw className="w-3 h-3 animate-spin" />}
                    {row.status.includes('Disabled') && <XCircle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
