"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuarantineCoordinationTableProps {
  data: {
    activeQuarantines: number;
    containmentStatus: string;
    restrictionLevel: string;
  } | null;
}

export function QuarantineCoordinationTable({ data }: QuarantineCoordinationTableProps) {
  if (!data) return null;

  const isSecure = data.containmentStatus === "CONTAINED" || data.containmentStatus === "SECURE";

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Lock className="h-4 w-4 text-slate-400" />
          Survivability Quarantine
        </CardTitle>
        <Badge variant="outline" className={`border-slate-700 ${isSecure ? 'text-emerald-400' : 'text-rose-400'}`}>
          {data.containmentStatus}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Active Zones</span>
            <span className="text-xl font-mono text-slate-200">{data.activeQuarantines}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Restriction Level</span>
            <span className={`text-sm font-medium ${data.restrictionLevel === 'NONE' ? 'text-slate-500' : 'text-amber-400'}`}>
              {data.restrictionLevel.replace(/_/g, ' ')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
