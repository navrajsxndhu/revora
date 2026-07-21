import React from "react";
import { Bell, MessageSquare, AlertTriangle, ShieldCheck, Settings } from "lucide-react";
import Link from "next/link";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function NotificationCenter() {
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
          
          {/* Unread Alert */}
          <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-xl hover:bg-slate-800/80 transition-colors cursor-pointer group flex items-start gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm">
                  <span className="font-semibold text-white">Sarah Chen</span> mentioned you in <Link href="#" className="font-semibold text-blue-400 hover:underline">TASK-890</Link>
                </p>
                <time className="text-xs text-slate-500">10m ago</time>
              </div>
              <p className="text-sm text-slate-400 bg-slate-950 p-3 rounded-md border border-slate-800/50 mt-2">
                "Can you verify the policy parameters before I submit this for executive sign-off? We need this mapped to the Q3 compliance goal."
              </p>
            </div>
          </div>

          {/* Unread Approval */}
          <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-xl hover:bg-slate-800/80 transition-colors cursor-pointer group flex items-start gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm">
                  Approval requested on <Link href="#" className="font-semibold text-amber-400 hover:underline">Phase 1 Integration</Link>
                </p>
                <time className="text-xs text-slate-500">1h ago</time>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Constitutional binding verified. Waiting for final authorization.
              </p>
              <EvidenceBadge evidenceId="REQ-59A" timestamp="Pending" />
            </div>
          </div>

          {/* Read System Notice */}
          <div className="p-4 bg-transparent border border-transparent hover:border-slate-800 rounded-xl hover:bg-slate-900/50 transition-colors cursor-pointer group flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-slate-200">System</span> automatically resolved policy drift in production.
                </p>
                <time className="text-xs text-slate-500">Yesterday</time>
              </div>
              <div className="mt-2 opacity-75">
                <EvidenceBadge evidenceId="DRIFT-RESOLVE-92" timestamp="Verified" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
