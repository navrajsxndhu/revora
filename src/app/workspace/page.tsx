import React from "react";
import Link from "next/link";
import { Folder, CheckCircle, Clock, Plus, Zap, AlertCircle } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function WorkspaceHome() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Welcome Section */}
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Good morning, System Administrator</h1>
          <p className="text-slate-400">Here's what needs your attention today in Global Enterprise HQ.</p>
        </header>

        {/* Continue / Jump Back In */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Jump Back In</h2>
          <div className="grid grid-cols-3 gap-4">
            <Link href="/workspace/projects/prj-101" className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-all group flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Folder className="w-4 h-4 text-blue-400" />
                  <span className="font-medium group-hover:text-blue-400 transition-colors">Q3 Compliance Audit</span>
                </div>
                <p className="text-xs text-slate-400">Edited 2 hours ago</p>
              </div>
            </Link>
            <Link href="/settings/security" className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/80 transition-all group flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium group-hover:text-emerald-400 transition-colors">Security Baselines</span>
                </div>
                <p className="text-xs text-slate-400">You have 2 pending reviews</p>
              </div>
            </Link>
            <div className="bg-slate-900/20 border border-slate-800 border-dashed rounded-xl p-5 hover:bg-slate-900/40 transition-all group cursor-pointer flex items-center justify-center">
              <div className="text-sm font-medium text-slate-400 group-hover:text-white flex items-center gap-2 transition-colors">
                <Plus className="w-4 h-4" /> Start a new project
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-10">
          {/* Main Feed: Assigned Tasks & Approvals */}
          <div className="col-span-2 space-y-10">
            <section>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h2 className="text-lg font-medium">Assigned to You</h2>
                <span className="text-xs font-medium bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">3 Tasks</span>
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, text: "Review identity access control matrix", due: "Today", priority: "High" },
                  { id: 2, text: "Approve database scaling deployment", due: "Tomorrow", priority: "Medium" },
                  { id: 3, text: "Update cryptographic rotation policy", due: "Aug 1", priority: "Low" }
                ].map(task => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 cursor-pointer transition-colors text-transparent hover:text-white">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span className="font-medium text-slate-200">{task.text}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`px-2 py-1 rounded font-medium ${task.priority === 'High' ? 'bg-rose-500/10 text-rose-400' : 'bg-slate-800 text-slate-400'}`}>{task.priority}</span>
                      <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Recent Evidence / Activity */}
          <div className="space-y-8">
            <section>
              <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Recent Executions</h2>
              <div className="space-y-4">
                {[
                  { id: "exc-8291a", action: "Policy Validated", time: "10 min ago" },
                  { id: "exc-8291b", action: "Workflow Triggered", time: "1 hr ago" },
                  { id: "exc-8291c", action: "Access Granted", time: "2 hrs ago" },
                ].map(ev => (
                  <div key={ev.id} className="flex flex-col gap-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <div className="text-sm text-slate-300 font-medium">{ev.action}</div>
                    <div className="flex items-center justify-between">
                      <EvidenceBadge evidenceId={ev.id} timestamp={ev.time} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
      </div>
    </div>
  );
}
