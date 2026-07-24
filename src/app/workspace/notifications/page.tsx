import React from "react";
import { Bell, MessageSquare, AlertTriangle, ShieldCheck, Settings, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { NotificationService } from "@/services/notification-service";

export default async function NotificationCenter() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const notifications = await NotificationService.getUserNotifications(workspaceId, session.user.id);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-900 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Inbox</h1>
            <p className="text-slate-400">Collaboration events, mentions, and structural alerts.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Mark all as read</button>
            <button className="p-2 bg-slate-900 border border-slate-700 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-6">
          <button className="px-3 py-2 text-sm font-medium bg-white text-black rounded-full">All</button>
          <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Mentions</button>
          <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Approvals</button>
          <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">System Alerts</button>
        </div>

        {/* Notification Feed */}
        <div className="space-y-2">
          
          {notifications.length === 0 ? (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800/50 rounded-xl">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-slate-700" />
              <p>You're all caught up!</p>
              <p className="text-sm mt-1">No new notifications in this workspace.</p>
            </div>
          ) : (
            notifications.map((notification) => {
              const isUnread = !notification.readAt;
              let Icon = Bell;
              let colorClass = "bg-slate-500/10 text-slate-400 border-slate-500/20";
              let unreadBorder = "bg-slate-500";
              
              if (notification.type === 'INFO') { Icon = MessageSquare; colorClass = "bg-blue-500/10 text-blue-400 border-blue-500/20"; unreadBorder = "bg-blue-500"; }
              if (notification.type === 'SUCCESS') { Icon = ShieldCheck; colorClass = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"; unreadBorder = "bg-emerald-500"; }
              if (notification.type === 'WARNING') { Icon = AlertTriangle; colorClass = "bg-amber-500/10 text-amber-400 border-amber-500/20"; unreadBorder = "bg-amber-500"; }
              if (notification.type === 'ERROR') { Icon = AlertTriangle; colorClass = "bg-rose-500/10 text-rose-400 border-rose-500/20"; unreadBorder = "bg-rose-500"; }

              return (
                <div key={notification.id} className={`p-4 border rounded-xl transition-colors cursor-pointer group flex items-start gap-4 relative overflow-hidden ${isUnread ? 'bg-slate-900/80 border-slate-700 hover:bg-slate-800/80' : 'bg-transparent border-transparent hover:border-slate-800 hover:bg-slate-900/50'}`}>
                  {isUnread && <div className={`absolute left-0 top-0 bottom-0 w-1 ${unreadBorder}`}></div>}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${colorClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-sm ${isUnread ? 'text-white' : 'text-slate-300'}`}>
                        {notification.title}
                      </p>
                      <time className="text-xs text-slate-500">{new Date(notification.createdAt).toLocaleString()}</time>
                    </div>
                    {notification.content && (
                      <p className={`text-sm mt-2 ${isUnread ? 'text-slate-400 bg-slate-950 p-3 rounded-md border border-slate-800/50' : 'text-slate-500'}`}>
                        {notification.content}
                      </p>
                    )}
                    {notification.actionUrl && (
                      <div className="mt-3">
                        <Link href={notification.actionUrl} className="text-sm text-indigo-400 hover:text-indigo-300">View Details &rarr;</Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}

        </div>
      </div>
    </div>
  );
}
