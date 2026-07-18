"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export function FinancialSimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSimulate = (scenario: string) => {
    setSimulating(true);
    setResult(null);
    setTimeout(() => {
      setSimulating(false);
      setResult(`Simulated: ${scenario} (Cost Modeled)`);
    }, 1200);
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <PlayCircle className="h-4 w-4 text-emerald-400" />
          Financial Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-400 mb-2">Evaluate hypothetical infrastructure changes.</p>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleSimulate("Traffic Growth")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Traffic Growth
            </button>
            <button 
              onClick={() => handleSimulate("Region Failover")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Region Failover
            </button>
            <button 
              onClick={() => handleSimulate("Infra Expansion")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Infra Expansion
            </button>
            <button 
              onClick={() => handleSimulate("K8s Scaling")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              K8s Scaling
            </button>
          </div>
          {simulating && (
            <div className="text-xs text-emerald-400 animate-pulse mt-2 font-mono text-center">
              Modeling treasury impact...
            </div>
          )}
          {result && !simulating && (
            <div className="text-[10px] text-emerald-400 mt-2 font-mono text-center bg-emerald-950/30 py-1 rounded border border-emerald-900/50">
              {result}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
