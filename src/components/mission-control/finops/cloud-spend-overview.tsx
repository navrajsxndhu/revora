"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

interface CloudSpendOverviewProps {
  spend: unknown;
}

export function CloudSpendOverview({ spend }: CloudSpendOverviewProps) {
  if (!spend) return null;

  return (
    <Card className="border-emerald-900/50 bg-emerald-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-emerald-400" />
          Cloud Spend Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-emerald-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Total Monthly</span>
            <span className="font-mono text-2xl text-emerald-400">${spend.totalMonthly.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center border-r border-emerald-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Daily Avg</span>
            <span className="font-mono text-2xl text-emerald-400">${spend.daily.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center border-r border-emerald-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">AWS Share</span>
            <span className="font-mono text-2xl text-slate-300">{spend.distribution.aws}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Engineering Share</span>
            <span className="font-mono text-2xl text-slate-300">{spend.allocation.engineering}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
