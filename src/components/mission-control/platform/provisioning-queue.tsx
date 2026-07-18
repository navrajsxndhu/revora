"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTodo } from "lucide-react";

interface ProvisioningQueueProps {
  queue: any[];
}

export function ProvisioningQueue({ queue }: ProvisioningQueueProps) {
  if (!queue) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListTodo className="h-4 w-4 text-emerald-400" />
          Provisioning Queue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {queue.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{item.request}</span>
                <span className="text-[10px] text-slate-500 font-mono">Req: {item.requester}</span>
              </div>
              <span className={`font-mono text-[9px] px-2 py-1 rounded border ${
                item.status === 'EXECUTING' ? 'text-amber-400 border-amber-800 bg-amber-950/30' : 'text-slate-400 border-slate-700 bg-slate-800/30'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
