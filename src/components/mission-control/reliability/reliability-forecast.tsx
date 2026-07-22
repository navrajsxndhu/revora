"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface ReliabilityForecastProps {
  forecast: unknown;
}

export function ReliabilityForecast({ forecast }: ReliabilityForecastProps) {
  if (!forecast) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          Reliability Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col items-center flex-1 border-r border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase">7 Day</span>
            <span className="font-mono text-lg text-emerald-400">{forecast.sevenDay}</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-r border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase">30 Day</span>
            <span className="font-mono text-lg text-emerald-400">{forecast.thirtyDay}</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] text-slate-500 uppercase">90 Day</span>
            <span className="font-mono text-lg text-amber-400">{forecast.ninetyDay}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
