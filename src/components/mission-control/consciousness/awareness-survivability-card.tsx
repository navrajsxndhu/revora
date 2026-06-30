"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

interface AwarenessSurvivabilityCardProps {
  horizon: string;
}

export function AwarenessSurvivabilityCard({ horizon }: AwarenessSurvivabilityCardProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-emerald-400" />
          Awareness Horizon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-3xl font-bold text-slate-100 tracking-wider">
            {horizon.replace(/_/g, ' ')}
          </span>
          <span className="text-xs text-slate-500 mt-2">Projected Deterministic Survivability</span>
        </div>
      </CardContent>
    </Card>
  );
}
