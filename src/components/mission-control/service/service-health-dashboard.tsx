import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon } from "lucide-react";

export function ServiceHealthDashboard() {
  return (
    <Card className="bg-slate-900 border-slate-800 text-slate-200">
      <CardHeader>
        <CardTitle className="text-lg font-mono flex items-center gap-2">
          <HeadphonesIcon className="w-5 h-5 text-indigo-400" />
          Service Health Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-32 border border-slate-800 rounded bg-slate-950">
          <span className="text-slate-500 font-mono text-sm">SERVICE TELEMETRY</span>
        </div>
      </CardContent>
    </Card>
  );
}
