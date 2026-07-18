"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { useState } from "react";

export function ChangeSimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSimulate = (scenario: string) => {
    setSimulating(true);
    setResult(null);
    setTimeout(() => {
      setSimulating(false);
      setResult(`Simulated: ${scenario} (Governance routing verified)`);
    }, 1200);
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Zap className="h-4 w-4 text-indigo-400" />
          Change Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-400 mb-2">Simulate governance requirements for proposed changes.</p>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleSimulate("Emergency Change")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Emergency Change
            </button>
            <button 
              onClick={() => handleSimulate("Database Migration")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Database Migration
            </button>
            <button 
              onClick={() => handleSimulate("Secret Rotation")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              Secret Rotation
            </button>
            <button 
              onClick={() => handleSimulate("K8s Upgrade")}
              disabled={simulating}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded border border-slate-700 transition-colors"
            >
              K8s Upgrade
            </button>
          </div>
          {simulating && (
            <div className="text-xs text-indigo-400 animate-pulse mt-2 font-mono text-center">
              Simulating governance path...
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
