"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Telescope } from "lucide-react";

interface ContainmentHorizonCardProps {
  horizon: string;
}

export function ContainmentHorizonCard({ horizon }: ContainmentHorizonCardProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Telescope className="h-4 w-4 text-purple-400" />
          Containment Horizon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4 h-full">
          <span className="text-2xl font-bold text-slate-100 tracking-wider text-center">
            {horizon.replace(/_/g, ' ')}
          </span>
          <span className="text-xs text-slate-500 mt-2 text-center">Projected Operational Containment Capability</span>
        </div>
      </CardContent>
    </Card>
  );
}
