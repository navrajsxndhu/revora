"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { useState } from "react";

export function IncidentSimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSimulate = (scenario: string) => {
    setSimulating(true);
    setResult(null);
    setTimeout(() => {
      setSimulating(false);
      setResult(`Simulated: ${scenario} (14 impacts generated)`);
    }, 1200);
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-400" />
          Incident Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-400 mb-2">Test organizational response by injecting mock operational failures.</p>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleSimulate("Region Failure")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Region Failure
            </button>
            <button 
              onClick={() => handleSimulate("K8s Outage")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              K8s Outage
            </button>
            <button 
              onClick={() => handleSimulate("DB Migration Error")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              DB Migration Error
            </button>
            <button 
              onClick={() => handleSimulate("Network Partition")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Network Partition
            </button>
          </div>
          {simulating && (
            <div className="text-xs text-amber-400 animate-pulse mt-2 font-mono text-center">
              Injecting scenario...
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
