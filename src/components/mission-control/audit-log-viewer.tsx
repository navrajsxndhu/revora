"use client";

import React from 'react';
import { format } from 'date-fns';

interface AuditLog {
  id: string;
  eventType: string;
  status: string;
  message: string;
  timestamp: Date;
}

export function AuditLogViewer({ logs }: { logs: AuditLog[] }) {
  if (!logs || logs.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs">
      <h3 className="text-slate-400 mb-4 font-semibold uppercase tracking-wider">Execution Audit Logs</h3>
      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="flex flex-col border-b border-slate-800/50 pb-2 last:border-0">
            <div className="flex justify-between items-center mb-1">
              <span className={`font-semibold ${log.status === 'ERROR' ? 'text-red-400' : 'text-emerald-400'}`}>
                [{log.eventType}]
              </span>
              <span className="text-slate-500">{format(log.timestamp, "HH:mm:ss.SSS")}</span>
            </div>
            <span className="text-slate-300">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
