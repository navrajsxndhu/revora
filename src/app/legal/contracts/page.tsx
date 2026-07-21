import React from "react";
import Link from "next/link";
import { ArrowLeft, FileSignature, ShieldCheck, FileWarning, Search, ShieldAlert, ArrowDownToLine } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ContractRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/legal" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Legal Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Contract Registry</h1>
            <p className="text-slate-400">The constitutional repository for all MSAs, NDAs, and licensing agreements.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Contracts..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium transition-colors text-white">
               <FileSignature className="w-4 h-4" /> New Agreement
             </button>
          </div>
        </header>

        {/* Contract Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Enterprise Agreements" 
            headers={["Contract ID", "Counterparty", "Agreement Type", "Effective Date", "Expiration Date", "Financial Value", "Status", "Governance"]}
          >
            {[
              { id: "CTR-2024-892", party: "Amazon Web Services", type: "Master Services Agreement", eff: "2024-01-01", exp: "2027-12-31", val: "$10.2M (Total)", status: "Active", trace: "CTR-EV-411" },
              { id: "CTR-2025-114", party: "Acme Corp", type: "Partnership Agreement", eff: "2025-06-15", exp: "2026-06-14", val: "$4.2M (ARR)", status: "Active", trace: "CTR-EV-412" },
              { id: "CTR-2026-002", party: "Global Data Providers", type: "Data Licensing", eff: "Pending", exp: "N/A", val: "$840K (Annual)", status: "In Negotiation", trace: "CTR-EV-413" },
              { id: "CTR-2023-991", party: "Legacy Office Space", type: "Commercial Lease", eff: "2023-08-01", exp: "2026-07-28", val: "$1.2M (Total)", status: "Expiring Soon", trace: "CTR-EV-414" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                    <FileSignature className="w-4 h-4 text-emerald-400" />
                    {row.party}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.eff}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.exp}</td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400/80">{row.val}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'In Negotiation' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status === 'Expiring Soon' && <FileWarning className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Contract Executed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
