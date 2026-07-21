import React from "react";
import Link from "next/link";
import { ArrowLeft, GitCompare, ShieldAlert, GitBranch, Terminal, RefreshCw, XCircle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ConfigurationDriftCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Configuration Drift Center</h1>
            <p className="text-slate-400">Monitoring unauthorized mutability. Discrepancies between expected CMDB state and runtime reality trigger immediate evidence blocks.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-900/20 text-rose-400 hover:bg-rose-900/30 border border-rose-900/50 rounded-md text-sm font-medium transition-colors">
            <RefreshCw className="w-4 h-4" /> Trigger Global Scan
          </button>
        </header>

        {/* Drift Feed */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Configuration Discrepancies" 
            headers={["CI Component", "Expected Baseline", "Observed Reality", "Delta Type", "Action", "Trace"]}
          >
            {[
              { ci: "auth-worker-node (CI-894-D)", expect: "Docker Image: auth-v2.1.0", obs: "Docker Image: auth-v2.1.0-hotfix", delta: "Version Mismatch", action: "Flagged for Review", trace: "DRF-491" },
              { ci: "prod-db-primary (CI-891-V)", expect: "max_connections = 500", obs: "max_connections = 2000", delta: "Unauthorized Parameter Change", action: "Auto-Reverted (Policy Enforced)", trace: "DRF-490" },
              { ci: "redis-cache-04 (CI-893-X)", expect: "Registered in CMDB", obs: "Running Instance (Unregistered)", delta: "Shadow IT Detected", action: "Quarantined", trace: "DRF-489" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2 text-sm">
                    <Terminal className="w-4 h-4 text-slate-500" />
                    {row.ci}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-emerald-400/80 bg-emerald-950/10 border-l-2 border-emerald-500/50">
                  {row.expect}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-rose-400/80 bg-rose-950/10 border-l-2 border-rose-500/50">
                  {row.obs}
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-sm text-slate-400">
                    <GitBranch className="w-3 h-3 text-slate-500" /> {row.delta}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.action.includes('Reverted') || row.action.includes('Quarantined')
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {row.action.includes('Reverted') || row.action.includes('Quarantined') ? <XCircle className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                    {row.action}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Scan Execution" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
