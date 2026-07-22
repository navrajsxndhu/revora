"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Coins } from "lucide-react";

interface ErrorBudgetDashboardProps {
  budgets: unknown[];
}

export function ErrorBudgetDashboard({ budgets }: ErrorBudgetDashboardProps) {
  if (!budgets) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Coins className="h-4 w-4 text-amber-500" />
          Error Budget
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {budgets.map((budget, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{budget.name}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border ${
                  budget.status === 'HEALTHY' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-rose-950 text-rose-400 border-rose-800'
                }`}>
                  {budget.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <div className="flex flex-col">
                  <span className="text-slate-500">Remaining</span>
                  <span className={`font-mono ${parseInt(budget.remaining) > 50 ? 'text-emerald-400' : 'text-rose-400'}`}>{budget.remaining}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-slate-500">Burn Rate</span>
                  <span className="font-mono text-slate-300">{budget.burnRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
