"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Landmark } from "lucide-react";

interface TreasuryDashboardProps {
  treasury: any;
}

export function TreasuryDashboard({ treasury }: TreasuryDashboardProps) {
  if (!treasury) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Landmark className="h-4 w-4 text-emerald-500" />
          Treasury Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Liquidity</span>
            <span className="font-mono text-lg text-emerald-400">${(treasury.liquidity / 1000000).toFixed(1)}M</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Burn Rate</span>
            <span className="font-mono text-lg text-rose-400">${treasury.burnRate}/day</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Stability</span>
            <span className="font-mono text-lg text-slate-300">{treasury.stability}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Forecast</span>
            <span className="font-mono text-lg text-emerald-400">{treasury.forecast}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
