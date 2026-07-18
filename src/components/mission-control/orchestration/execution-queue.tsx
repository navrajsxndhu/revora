"use client";

import React from "react";
import { ListTodo, PauseCircle, CheckCircle } from "lucide-react";

export function ExecutionQueue() {
  const queue = [
    { id: "TASK-812", status: "PENDING", prio: "HIGH" },
    { id: "TASK-813", status: "WAITING", prio: "NORMAL" },
    { id: "TASK-814", status: "BLOCKED", prio: "CRITICAL" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Queue</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {queue.map((q, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-2">
            <div className="flex items-center space-x-2">
              <ListTodo className="w-3 h-3 text-slate-400" />
              <span className="text-slate-300">{q.id}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className={q.status === 'BLOCKED' ? 'text-rose-400' : 'text-amber-400'}>{q.status}</span>
              <span className="text-slate-500">{q.prio}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
