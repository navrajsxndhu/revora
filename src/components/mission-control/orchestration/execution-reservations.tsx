"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";

export function ExecutionReservations() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Reservations</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        <div className="border-l-2 border-indigo-500 pl-3">
          <div className="text-xs text-slate-200 font-mono">INFRA_MAINTENANCE_WINDOW</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1 flex items-center">
            <Calendar className="w-3 h-3 mr-1" /> SAT 02:00 UTC
          </div>
        </div>
        <div className="border-l-2 border-slate-700 pl-3">
          <div className="text-xs text-slate-400 font-mono">DB_SNAPSHOT_SLOT</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1 flex items-center">
            <Clock className="w-3 h-3 mr-1" /> NEXT: 45m
          </div>
        </div>
      </div>
    </div>
  );
}
