import React from "react";
import Link from "next/link";
import { ArrowLeft, PackageCheck, Truck, ShieldAlert, DollarSign, TrendingDown, Target, Building2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveSupplyChainDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Supply Chain Board</h1>
            <p className="text-slate-400">Board-level transparency into procurement spend, supplier health, and global inventory resilience.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Supplier Performance
              <PackageCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">96.4%</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               On-Time-In-Full (OTIF) Delivery
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Procurement Spend
              <DollarSign className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$84.2M</div>
            <div className="text-sm font-medium text-blue-400 flex items-center gap-1">
               YTD Across 214 Suppliers
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Procurement Savings
              <TrendingDown className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$2.4M</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               8.2% Sourcing Efficiency
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Supplier Risk Exposure
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">High</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               2 Critical Vendor SLA Breaches
            </div>
          </div>
        </div>

        {/* Supply Chain Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Strategic Supplier Health (Tier 1)" 
              headers={["Supplier Name", "Spend Category", "OTIF Rating", "Risk Profile"]}
            >
              {[
                { name: "Global Tech Hardware Inc", cat: "IT Infrastructure", otif: "99.1%", risk: "Low" },
                { name: "Acme Logistics Services", cat: "Freight & Shipping", otif: "94.2%", risk: "Medium" },
                { name: "Oceanic Manufacturing", cat: "Raw Materials", otif: "82.4%", risk: "High" },
                { name: "Stark Software Solutions", cat: "SaaS & Cloud", otif: "99.9%", risk: "Low" },
                { name: "Wayne Construction Group", cat: "Facilities", otif: "95.5%", risk: "Medium" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Building2 className="w-4 h-4 text-slate-500" />
                       {row.name}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                  <td className="py-4 px-5 text-sm font-mono text-emerald-400/80">{row.otif}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.risk === 'Low' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.risk === 'High' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-amber-900/20 text-amber-400 border-amber-900/50'
                    }`}>
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive Procurement Approvals" 
              headers={["Purchase Request", "Financial Impact", "Sponsor"]}
            >
              {[
                { type: "Enterprise Cloud Contract Renewal", impact: "$14.2M (3-Year)", sponsor: "CTO" },
                { type: "New Vendor Onboarding: Oceanic Mfg", impact: "Strategic Sourcing", sponsor: "VP Supply Chain" },
                { type: "Emergency Data Center Equipment", impact: "$840K Capital Ex", sponsor: "VP Infrastructure" },
                { type: "Global Logistics Contract Award", impact: "$8.4M Annual", sponsor: "Chief Operating Officer" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.impact}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
