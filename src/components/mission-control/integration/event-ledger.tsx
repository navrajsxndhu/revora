"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database } from "lucide-react";

interface EventLedgerProps {
  events: any[];
}

export function EventLedger({ events }: EventLedgerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Database className="h-4 w-4 text-slate-400" />
          Immutable Integration Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        {events && events.length > 0 ? (
          <div className="space-y-3 mt-2">
            {events.map((evt, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{evt.eventType}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{new Date(evt.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">External ID:</span>
                  <span className="text-indigo-400 font-mono">{evt.externalId}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Hash:</span>
                  <span className="text-slate-400 font-mono text-[10px]">{evt.payloadHash}</span>
                </div>
                {evt.synchronization && (
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-slate-500">Subsystem Sync:</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-500">{evt.synchronization.targetSubsystem}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No integration events in ledger.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
