import React from "react";
import Link from "next/link";
import { ArrowLeft, Box, Server, Monitor, HardDrive, Smartphone, FileCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EnterpriseAssetInventory() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/assets" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Asset Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Asset Inventory</h1>
            <p className="text-slate-400">Physical hardware, cloud instances, and software endpoints bound to their departmental owners.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors">
            <Box className="w-4 h-4" /> Export Inventory
          </button>
        </header>

        {/* Inventory Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Registered Enterprise Assets" 
            headers={["Asset Tag", "Asset Name", "Category", "Department", "Assignment", "Warranty End", "Audit Ledger"]}
          >
            {[
              { tag: "AST-HW-192", name: "Dell PowerEdge R740", cat: "Physical Server", dept: "Infrastructure", assign: "Datacenter DC-1", warranty: "2027-11-01" },
              { tag: "AST-VM-841", name: "i-09a8b7c6d5e4f3210", cat: "EC2 Instance", dept: "Platform Engineering", assign: "EKS Node Group A", warranty: "N/A (Cloud)" },
              { tag: "AST-SW-002", name: "Datadog Enterprise", cat: "SaaS License", dept: "Operations", assign: "Global Org", warranty: "2027-01-15 (Renewal)" },
              { tag: "AST-EUD-991", name: "MacBook Pro M3", cat: "End User Device", dept: "Engineering", assign: "Alice Johnson", warranty: "2026-10-22" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.tag}</td>
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    {row.cat.includes('Physical') ? <Server className="w-4 h-4 text-emerald-400" /> : 
                     row.cat.includes('End User') ? <Monitor className="w-4 h-4 text-purple-400" /> :
                     <Box className="w-4 h-4 text-blue-400" />}
                    {row.name}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.assign}</td>
                <td className="py-4 px-5 text-sm text-slate-500 font-mono">{row.warranty}</td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={`AUD-${row.tag.split('-')[2]}`} timestamp="Last Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
