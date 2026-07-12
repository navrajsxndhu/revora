"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Beaker } from "lucide-react";

export function ImmunitySimulationPanel() {
  const [scenario, setScenario] = useState("GOVERNANCE_CORRUPTION_OUTBREAK");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/immunity/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baseImmunity: 80, // Mocked base immunity
          scenario
        })
      });

      if (!res.ok) throw new Error("Simulation failed");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Failed to run immunity simulation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Beaker className="h-4 w-4 text-fuchsia-400" />
          Contagion Simulation
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
                <SelectItem value="GOVERNANCE_CORRUPTION_OUTBREAK">Governance Corruption Outbreak</SelectItem>
                <SelectItem value="TREATY_COLLAPSE_CONTAGION">Treaty Collapse Contagion</SelectItem>
                <SelectItem value="TREASURY_EXHAUSTION_PROPAGATION">Treasury Exhaustion Propagation</SelectItem>
                <SelectItem value="DEPENDENCY_CONCENTRATION_INFECTION">Dependency Concentration Infection</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSimulate} disabled={loading} variant="outline" className="border-slate-700 whitespace-nowrap">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Simulate"}
            </Button>
          </div>

          {result && (
            <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Projected Class:</span>
                <span className="text-fuchsia-400 font-mono">{result.projectedProtectionClass.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Projected Immunity:</span>
                <span className="text-slate-200 font-mono">{result.projectedImmunityScore.toFixed(1)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Containment Horizon:</span>
                <span className="text-amber-400 font-mono">{result.containmentSurvivabilityHorizon.replace(/_/g, ' ')}</span>
              </div>
              
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-500 mb-1">Immunity Derivation:</div>
                <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                  {result.immunityDerivation.map((ev: string, i: number) => (
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
