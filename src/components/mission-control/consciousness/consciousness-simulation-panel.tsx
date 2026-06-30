"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Zap } from "lucide-react";

export function ConsciousnessSimulationPanel() {
  const [scenario, setScenario] = useState("FEDERATION_DESYNC");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/consciousness/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baseAwarenessScore: 100,
          baseCoherence: 100,
          baseIntegrity: 100,
          scenario
        })
      });

      if (!res.ok) throw new Error("Simulation failed");
      const data = await res.json();
      setResult(data);
      console.log("Simulation complete");
    } catch (err) {
      console.error("Failed to run simulation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Zap className="h-4 w-4 text-fuchsia-400" />
          Consciousness Simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Select value={scenario} onValueChange={setScenario}>
              <SelectTrigger className="w-full bg-slate-950 border-slate-800">
                <SelectValue placeholder="Select Scenario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FEDERATION_DESYNC">Federation Desynchronization</SelectItem>
                <SelectItem value="GOVERNANCE_BLIND_SPOT">Governance Blind Spot</SelectItem>
                <SelectItem value="DISCONNECTED_INFRASTRUCTURE">Disconnected Infrastructure</SelectItem>
                <SelectItem value="TREATY_FRAGMENTATION">Treaty Fragmentation</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSimulate} disabled={loading} variant="outline" className="border-slate-700">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Simulate"}
            </Button>
          </div>

          {result && (
            <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Projected Class:</span>
                <span className="text-fuchsia-400 font-mono">{result.projectedConsciousnessClass.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Awareness Stability:</span>
                <span className="text-slate-200 font-mono">{result.projectedAwarenessStability.toFixed(1)}</span>
              </div>
              
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-500 mb-1">Causality Derivation:</div>
                <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                  {result.impactDerivation.map((ev: string, i: number) => (
                    <li key={i}>{ev}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
