'use client';
import React, { useState } from "react";
import { CHAOS_SCENARIOS } from "@/lib/network/chaos-scenarios";

export function ChaosSimulator({ workspaceId }: { workspaceId: string }) {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [selectedScenario, setSelectedScenario] = useState(CHAOS_SCENARIOS[0]);

  const handleRun = async () => {
    setRunning(true);
    setResult(null);
    try {
      const res = await fetch('/api/network/chaos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workspaceId, scenario: selectedScenario })
      });
      const data = await res.json();
      setResult(data.simulation?.result || "Simulation failed to return result.");
    } catch (e: any) {
      setResult(`Error: ${e.message}`);
    }
    setRunning(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span>⚡</span> Digital Twin Chaos Sandbox
      </h2>
      <p className="text-sm text-slate-400 mb-4">Run non-destructive stress tests against the mirrored infrastructure twin to validate governance and rollback policies.</p>
      
      <div className="flex gap-4 items-center mb-4">
        <select 
          value={selectedScenario} 
          onChange={(e) => setSelectedScenario(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 focus:outline-none focus:border-slate-600"
        >
          {CHAOS_SCENARIOS.map(s => <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>)}
        </select>
        <button 
          onClick={handleRun} 
          disabled={running}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900 text-white text-sm px-4 py-2 rounded transition-colors"
        >
          {running ? "Simulating..." : "Inject Failure"}
        </button>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-300 font-mono leading-relaxed">
          <span className="text-emerald-500 font-bold mr-2">Output:</span>
          {result}
        </div>
      )}
    </div>
  );
}
