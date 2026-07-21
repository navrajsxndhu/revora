import React from "react";
import { ArrowLeft, MoreHorizontal, Plus, Search, Filter } from "lucide-react";
import Link from "next/link";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function KanbanBoardPage({ params }: { params: { id: string } }) {
  const projectId = params.id;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-white p-8 overflow-x-hidden flex flex-col">
      <div className="max-w-[1600px] mx-auto w-full flex-1 flex flex-col">
        
        {/* Header */}
        <header className="mb-6 flex items-end justify-between border-b border-slate-900 pb-6">
          <div>
            <div className="mb-4">
              <Link href={`/workspace/projects/${projectId}`} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Project Overview
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Sprint 42: Execution</h1>
            <p className="text-slate-400">Drag and drop tasks to update their governance status.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search tasks..." className="bg-slate-900 border border-slate-800 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-slate-600 transition-colors" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <Plus className="w-4 h-4" /> Create Task
            </button>
          </div>
        </header>

        {/* Board Container */}
        <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
          
          {/* Column: To Do */}
          <div className="flex-shrink-0 w-80 flex flex-col bg-slate-900/30 rounded-xl border border-slate-800">
            <div className="p-4 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300">To Do</h3>
              <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-medium">1</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              
              {/* Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 cursor-grab hover:border-slate-600 transition-colors shadow-sm relative group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-slate-500">TASK-892</span>
                  <button className="text-slate-600 hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100"><MoreHorizontal className="w-4 h-4" /></button>
                </div>
                <h4 className="text-sm font-medium text-slate-200 mb-4">Migrate legacy authorization tokens</h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs font-medium">High Priority</span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-400" title="Unassigned">-</div>
                </div>
              </div>

            </div>
          </div>

          {/* Column: In Progress */}
          <div className="flex-shrink-0 w-80 flex flex-col bg-slate-900/30 rounded-xl border border-slate-800">
            <div className="p-4 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-400">In Progress</h3>
              <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full font-medium">2</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              
              {/* Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 cursor-grab hover:border-slate-600 transition-colors shadow-sm relative group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-slate-500">TASK-890</span>
                </div>
                <h4 className="text-sm font-medium text-slate-200 mb-4">Implement deterministic RBAC resolution</h4>
                <div className="mb-3">
                  <EvidenceBadge evidenceId="PRG-X19" timestamp="Started 2h ago" />
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-xs font-medium">Medium</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center text-[10px] font-bold text-emerald-400" title="Sarah Chen">SC</div>
                </div>
              </div>

              {/* Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 cursor-grab hover:border-slate-600 transition-colors shadow-sm relative group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-slate-500">TASK-889</span>
                </div>
                <h4 className="text-sm font-medium text-slate-200 mb-4">Update policy engine schema validator</h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-xs font-medium">Low</span>
                  <div className="w-6 h-6 rounded-full bg-blue-900 border border-blue-800 flex items-center justify-center text-[10px] font-bold text-blue-400" title="Mike Tyson">MT</div>
                </div>
              </div>

            </div>
          </div>

          {/* Column: Awaiting Approval */}
          <div className="flex-shrink-0 w-80 flex flex-col bg-slate-900/30 rounded-xl border border-slate-800">
            <div className="p-4 border-b border-slate-800/50 flex items-center justify-between">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-amber-400">Awaiting Approval</h3>
              <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium">1</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              
              {/* Card */}
              <div className="bg-slate-950 border border-amber-900/30 rounded-lg p-4 cursor-grab hover:border-amber-700/50 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.05)] relative group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-slate-500">TASK-881</span>
                </div>
                <h4 className="text-sm font-medium text-slate-200 mb-4">Deploy Phase 1 architectural bindings</h4>
                <div className="mb-3 p-2 bg-amber-500/5 border border-amber-500/10 rounded">
                  <p className="text-xs text-amber-400 mb-1 font-medium">Requires Executive Sign-off</p>
                  <EvidenceBadge evidenceId="REQ-59A" timestamp="Pending" />
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs font-medium">Critical</span>
                  <div className="w-6 h-6 rounded-full bg-purple-900 border border-purple-800 flex items-center justify-center text-[10px] font-bold text-purple-400" title="System Admin">SA</div>
                </div>
              </div>

            </div>
          </div>

          {/* Column: Done */}
          <div className="flex-shrink-0 w-80 flex flex-col bg-slate-900/10 rounded-xl border border-slate-800/50">
            <div className="p-4 border-b border-slate-800/30 flex items-center justify-between">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-emerald-500/70">Done</h3>
              <span className="text-xs bg-slate-800/50 text-slate-500 px-2 py-0.5 rounded-full font-medium">12</span>
            </div>
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              
              {/* Card */}
              <div className="bg-slate-900/20 border border-slate-800/50 rounded-lg p-4 opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-slate-600 line-through">TASK-880</span>
                </div>
                <h4 className="text-sm font-medium text-slate-400 line-through mb-4">Configure Next.js layout engine</h4>
                <div className="mb-3">
                  <EvidenceBadge evidenceId="DON-102" timestamp="Verified" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
