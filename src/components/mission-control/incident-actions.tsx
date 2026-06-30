"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function IncidentActions({ incidentId, currentState, currentAssignee }: { incidentId: string, currentState: string, currentAssignee: string | null }) {
  const router = useRouter();
  const [showTransfer, setShowTransfer] = useState(false);
  const [showResolve, setShowResolve] = useState(false);
  
  const [newAssignee, setNewAssignee] = useState("");
  const [handoffSummary, setHandoffSummary] = useState("");
  
  const [rootCause, setRootCause] = useState("");
  const [mitigation, setMitigation] = useState("");
  const [nextSteps, setNextSteps] = useState("");

  const handleTransfer = async () => {
    if (!newAssignee || !handoffSummary) return;
    await fetch(`/api/incidents/${incidentId}/transfer`, {
      method: "POST",
      body: JSON.stringify({ newAssignee, handoffSummary })
    });
    setShowTransfer(false);
    router.refresh();
  };

  const handleResolve = async () => {
    if (!rootCause || !mitigation) return;
    await fetch(`/api/incidents/${incidentId}/resolve`, {
      method: "POST",
      body: JSON.stringify({ rootCause, mitigation, nextSteps })
    });
    setShowResolve(false);
    router.refresh();
  };

  return (
    <div className="flex space-x-3">
      {currentState === "OPEN" && (
        <button onClick={() => fetch(`/api/incidents/${incidentId}/assign`, { method: "POST" }).then(() => router.refresh())} className="px-4 py-2 bg-emerald-900/50 hover:bg-emerald-900 text-emerald-100 text-sm font-medium rounded border border-emerald-800">Acknowledge</button>
      )}
      
      {currentState !== "RESOLVED" && (
        <>
          <button onClick={() => setShowTransfer(!showTransfer)} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded">Transfer</button>
          <button onClick={() => setShowResolve(!showResolve)} className="px-4 py-2 bg-slate-100 hover:bg-white text-black text-sm font-medium rounded">Resolve</button>
        </>
      )}

      {showTransfer && (
        <div className="absolute top-20 right-8 w-80 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl z-50">
          <h3 className="text-slate-100 font-semibold mb-3">Transfer Incident</h3>
          <input value={newAssignee} onChange={e => setNewAssignee(e.target.value)} placeholder="New Assignee (Email)" className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 mb-2" />
          <textarea value={handoffSummary} onChange={e => setHandoffSummary(e.target.value)} placeholder="Handoff Summary (What did you find?)" className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 mb-3 h-20"></textarea>
          <div className="flex justify-end space-x-2">
             <button onClick={() => setShowTransfer(false)} className="px-3 py-1 text-slate-400 text-sm hover:text-slate-200">Cancel</button>
             <button onClick={handleTransfer} className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded font-medium">Transfer</button>
          </div>
        </div>
      )}

      {showResolve && (
        <div className="absolute top-20 right-8 w-96 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl z-50">
          <h3 className="text-slate-100 font-semibold mb-3">Resolve Incident</h3>
          <textarea value={rootCause} onChange={e => setRootCause(e.target.value)} placeholder="Root Cause" className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 mb-2 h-16"></textarea>
          <textarea value={mitigation} onChange={e => setMitigation(e.target.value)} placeholder="Mitigation Performed" className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 mb-2 h-16"></textarea>
          <textarea value={nextSteps} onChange={e => setNextSteps(e.target.value)} placeholder="Future Notes / Follow-up" className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200 mb-3 h-16"></textarea>
          <div className="flex justify-end space-x-2">
             <button onClick={() => setShowResolve(false)} className="px-3 py-1 text-slate-400 text-sm hover:text-slate-200">Cancel</button>
             <button onClick={handleResolve} className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded font-medium">Complete Resolution</button>
          </div>
        </div>
      )}
    </div>
  );
}
