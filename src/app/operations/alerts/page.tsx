import React from "react";
import Link from "next/link";
import { ArrowLeft, Bell, AlertTriangle, Cpu, HardDrive, Network, CheckCircle2, ShieldAlert } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { NotificationService } from "@/services/notification-service";

export default async function EnterpriseAlertCenter() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  let notifications = await NotificationService.getUserNotifications(workspaceId, session.user.id);
  notifications = notifications.filter(n => n.type === 'ERROR' || n.type === 'WARNING');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/operations" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Operations Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Alert Center</h1>
            <p className="text-slate-400">Policy-driven operational telemetry. Alert resolutions are cryptographically bound to the Runtime Ledger.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600/20 text-amber-500 hover:bg-amber-600/30 border border-amber-600/50 rounded-md text-sm font-medium transition-colors">
            <Bell className="w-4 h-4" /> Configure Alert Policies
          </button>
        </header>

        {/* Alerts Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Operational Alerts" 
            headers={["Alert ID", "Message", "Severity", "Status"]}
          >
            {notifications.length === 0 ? (
              <tr><td colSpan={4} className="py-8 text-center text-slate-500">No active alerts.</td></tr>
            ) : (
              notifications.map((row: any) => (
                <tr key={row.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="py-4 px-5 font-medium text-slate-200">
                    <EvidenceBadge evidenceId={row.id} timestamp="Alert Triggered" />
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">{row.title}</span>
                      <span className="text-slate-400">{row.content}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                      row.type === 'ERROR'
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                        : row.type === 'WARNING'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {row.type === 'ERROR' ? <ShieldAlert className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`text-sm font-medium flex items-center gap-1 ${
                      row.readAt ? 'text-emerald-500' : 'text-slate-300'
                    }`}>
                      {row.readAt && <CheckCircle2 className="w-4 h-4" />}
                      {row.readAt ? 'Resolved' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
