import React from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Search, ShieldCheck, Download, AlertTriangle, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function VendorRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/supply-chain" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Supply Chain Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Vendor & Supplier Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all approved suppliers, linked to procurement performance and risk profiles.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Suppliers..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Vendor Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Approved Enterprise Suppliers" 
            headers={["Supplier ID", "Supplier Name", "Spend Category", "Risk Tier", "Annual Spend", "Status", "Supplier Record"]}
          >
            {[
              { id: "VEN-8812", name: "Global Tech Hardware Inc", cat: "IT Infrastructure", risk: "Low Risk", spend: "$42.4M", status: "Active & Compliant", trace: "VEN-EV-411" },
              { id: "VEN-9041", name: "Acme Logistics Services", cat: "Freight & Shipping", risk: "Medium Risk", spend: "$12.8M", status: "Active", trace: "VEN-EV-422" },
              { id: "VEN-9155", name: "Oceanic Manufacturing", cat: "Raw Materials", risk: "High Risk", spend: "$8.4M", status: "SLA Breach Warning", trace: "VEN-EV-450" },
              { id: "VEN-9801", name: "Stark Software Solutions", cat: "SaaS & Cloud", risk: "Low Risk", spend: "$6.2M", status: "Active & Compliant", trace: "VEN-EV-491" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <Link href={`/supply-chain/vendors/${row.id}`} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5">
                        View Supplier Constitution <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.cat}
                </td>
                <td className="py-4 px-5">
                   <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.risk === 'Low Risk' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.risk === 'High Risk' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                    }`}>
                      {row.risk}
                    </span>
                </td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-slate-300">
                      {row.spend}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Compliant') ? 'text-emerald-500' : 
                    row.status.includes('Breach') ? 'text-rose-500' :
                    'text-blue-500'
                  }`}>
                    {row.status.includes('Breach') && <AlertTriangle className="w-4 h-4" />}
                    {row.status.includes('Compliant') && <ShieldCheck className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Audit Complete" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
