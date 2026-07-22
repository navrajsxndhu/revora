"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart } from "lucide-react";

interface BudgetGovernanceProps {
  budgets: unknown[];
}

export function BudgetGovernance({ budgets }: BudgetGovernanceProps) {
  if (!budgets) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <PieChart className="h-4 w-4 text-emerald-500" />
          Budget Governance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {budgets.map((budget, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-200">{budget.name}</span>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                  budget.status === 'HEALTHY' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 
                  budget.status === 'WARNING' ? 'border-amber-900 text-amber-400 bg-amber-950/30' : 
                  'border-rose-900 text-rose-400 bg-rose-950/30'
                }`}>
                  {budget.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span>Used: <span className="text-slate-300 font-mono">${budget.consumption.toLocaleString()}</span></span>
                <span>Limit: <span className="text-slate-500 font-mono">${budget.limit.toLocaleString()}</span></span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    budget.status === 'HEALTHY' ? 'bg-emerald-500' : 
                    budget.status === 'WARNING' ? 'bg-amber-500' : 
                    'bg-rose-500'
                  }`} 
                  style={{ width: `${Math.min((budget.consumption / budget.limit) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
