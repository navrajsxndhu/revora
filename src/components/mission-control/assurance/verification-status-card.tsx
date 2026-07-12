"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface VerificationStatusCardProps {
  status: {
    systemStatus: string;
    lastVerified: string;
  } | null;
}

export function VerificationStatusCard({ status }: VerificationStatusCardProps) {
  if (!status) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-teal-400" />
          Assurance Subsystem Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Status</span>
            <span className="text-sm font-medium text-teal-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              {status.systemStatus}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">Last Telemetry Sync</span>
            <span className="text-slate-400 font-mono">{status.lastVerified}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
