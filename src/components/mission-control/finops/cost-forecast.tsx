"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface CostForecastProps {
  forecast: unknown;
}

export function CostForecast({ forecast }: CostForecastProps) {
  if (!forecast) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-indigo-400" />
          Cost Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">30-Day Projection</span>
            <span className="font-mono text-slate-300">${forecast.thirtyDay.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">90-Day Projection</span>
            <span className="font-mono text-slate-300">${forecast.ninetyDay.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Annual Run Rate</span>
            <span className="font-mono text-emerald-400 font-bold">${forecast.annual.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
