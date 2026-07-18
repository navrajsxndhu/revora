"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export function ReliabilitySimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSimulate = (scenario: string) => {
    setSimulating(true);
    setResult(null);
    setTimeout(() => {
      setSimulating(false);
      setResult(`Simulated: ${scenario} (Budget Burn: 42.5%)`);
    }, 1200);
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <PlayCircle className="h-4 w-4 text-indigo-400" />
          Reliability Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-400 mb-2">Simulate operational disruptions.</p>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleSimulate("Traffic Surge")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Traffic Surge
            </button>
            <button 
              onClick={() => handleSimulate("Regional Failure")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Regional Failure
            </button>
            <button 
              onClick={() => handleSimulate("Capacity Exhaustion")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Capacity Exhaustion
            </button>
            <button 
              onClick={() => handleSimulate("Dependency Failure")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Dependency Failure
            </button>
          </div>
          {simulating && (
            <div className="text-xs text-indigo-400 animate-pulse mt-2 font-mono text-center">
              Simulating reliability event...
            </div>
          )}
          {result && !simulating && (
            <div className="text-[10px] text-amber-400 mt-2 font-mono text-center bg-amber-950/30 py-1 rounded border border-amber-900/50">
              {result}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
