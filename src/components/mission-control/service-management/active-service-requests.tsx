"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

interface ActiveServiceRequestsProps {
  requests: any;
}

export function ActiveServiceRequests({ requests }: ActiveServiceRequestsProps) {
  if (!requests) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListChecks className="h-4 w-4 text-sky-400" />
          Active Service Requests
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Open</span>
            <span className="font-mono text-2xl text-sky-400">{requests.open}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Pending</span>
            <span className="font-mono text-2xl text-amber-400">{requests.pending}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Approved</span>
            <span className="font-mono text-2xl text-emerald-400">{requests.approved}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Fulfilled</span>
            <span className="font-mono text-2xl text-slate-300">{requests.fulfilled}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Rejected</span>
            <span className="font-mono text-2xl text-slate-500">{requests.rejected}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Escalated</span>
            <span className="font-mono text-2xl text-rose-500">{requests.escalated}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
