"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AdaptiveRunbook, AdaptiveRunbookStep } from "@/lib/incidents/adaptive-runbooks";

export function RunbookPanel({ 
  incidentId, 
  currentState, 
  activeRunbookId, 
  completedSteps,
  availableRunbooks
}: { 
  incidentId: string, 
  currentState: string, 
  activeRunbookId: string | null, 
  completedSteps: string[],
  availableRunbooks: Record<string, AdaptiveRunbook>
}) {
  const router = useRouter();
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedRunbook, setSelectedRunbook] = useState<string | null>(null);

  const startRunbook = async (runbookId: string) => {
    setLoadingAction("start");
    setErrorMsg(null);
    try {
      const res = await fetch(`/api/incidents/${incidentId}/runbooks/start`, {
        method: "POST",
        body: JSON.stringify({ runbookId })
      });
      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to start runbook.");
      }
    } catch (err) {
      setErrorMsg("Network error.");
    } finally {
      setLoadingAction(null);
      router.refresh();
    }
  };

  const executeStep = async (stepId: string) => {
    setLoadingAction(stepId);
    setErrorMsg(null);
    try {
      const res = await fetch(`/api/incidents/${incidentId}/runbooks/step`, {
        method: "POST",
        body: JSON.stringify({ stepId })
      });
      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || "Step failed.");
      }
    } catch (err) {
      setErrorMsg("Network error.");
    } finally {
      setLoadingAction(null);
      router.refresh();
    }
  };

  if (currentState === "RESOLVED") {
    return null;
  }

  if (!activeRunbookId) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Operational Runbooks</h2>
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-950/50 border border-red-900 rounded text-red-400 text-sm">
            {errorMsg}
          </div>
        )}
        <p className="text-slate-400 text-sm mb-4">No active recovery procedure. Select a runbook to begin guided remediation.</p>
        <div className="space-y-3">
           <select 
             className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm text-slate-200"
             onChange={e => setSelectedRunbook(e.target.value)}
             defaultValue=""
           >
             <option value="" disabled>Select a standard procedure...</option>
             {Object.values(availableRunbooks).map(rb => (
               <option key={rb.id} value={rb.id}>{rb.title}</option>
             ))}
           </select>
           <button 
             onClick={() => selectedRunbook && startRunbook(selectedRunbook)}
             disabled={!selectedRunbook || loadingAction !== null}
             className="w-full bg-emerald-900/50 hover:bg-emerald-800 text-emerald-100 text-sm font-medium rounded p-2 transition-colors border border-emerald-800 disabled:opacity-50"
           >
             Start Guided Recovery
           </button>
        </div>
      </div>
    );
  }

  const runbook = availableRunbooks[activeRunbookId];
  if (!runbook) return null;

  const currentStepIndex = runbook.steps.findIndex(s => !completedSteps.includes(s.id));
  const isComplete = currentStepIndex === -1;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
      <div className="flex justify-between items-center mb-4">
         <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Active Runbook</h2>
         {isComplete && <span className="px-2 py-1 bg-emerald-950 text-emerald-400 text-xs rounded border border-emerald-900">Completed</span>}
      </div>
      
      <h3 className="text-slate-200 font-medium mb-1">{runbook.title}</h3>
      <p className="text-slate-500 text-xs mb-6">{runbook.description}</p>

      {errorMsg && (
        <div className="mb-6 p-3 bg-red-950/50 border border-red-900 rounded text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

        {runbook.warnings && runbook.warnings.length > 0 && (
          <div className="mb-6 space-y-2">
            {runbook.warnings.map((warning, idx) => (
              <div key={idx} className="p-3 bg-amber-950/30 border border-amber-900/50 rounded flex items-start space-x-3 text-amber-400 text-sm">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <span>{warning}</span>
              </div>
            ))}
          </div>
        )}

      <div className="space-y-6">
        {runbook.steps.map((step, idx) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = idx === currentStepIndex;
          const isFuture = idx > currentStepIndex && !isComplete;

          let indicatorClass = "bg-slate-800 border-slate-700 text-slate-500";
          if (isCompleted) indicatorClass = "bg-emerald-900/50 border-emerald-800 text-emerald-400";
          if (isCurrent) indicatorClass = "bg-blue-900/50 border-blue-800 text-blue-400";

          return (
            <div key={step.id} className={`flex relative ${isFuture ? 'opacity-40' : ''}`}>
               {idx !== runbook.steps.length - 1 && (
                 <div className={`absolute top-8 left-3.5 bottom-[-24px] w-px ${isCompleted ? 'bg-emerald-900' : 'bg-slate-800'}`}></div>
               )}
               
               <div className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs font-semibold z-10 shrink-0 mr-4 ${indicatorClass}`}>
                 {isCompleted ? "✓" : (idx + 1)}
               </div>
               
               <div className="flex-1 pb-2">
                 <div className="flex justify-between items-center mb-1">
                   <h4 className={`text-sm font-medium ${isCurrent ? 'text-blue-100' : (isCompleted ? 'text-slate-300' : 'text-slate-400')}`}>{step.label}</h4>
                   {step.priorityScore > 0 && (
                     <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${isCurrent ? 'bg-blue-900/50 text-blue-300' : 'bg-slate-800 text-slate-500'}`}>Score: {step.priorityScore}</span>
                   )}
                 </div>
                 
                 {step.explanation && (
                   <p className={`text-xs mb-3 italic ${isCurrent ? 'text-blue-300/80' : 'text-slate-500'}`}>
                     Guidance: {step.explanation}
                   </p>
                 )}

                 {isCurrent && (
                   <div className="mt-2 p-3 bg-slate-950 border border-slate-800 rounded">
                     <p className="text-slate-400 text-xs mb-2 leading-relaxed"><span className="text-slate-300 font-medium">Context:</span> {step.description}</p>
                     <p className="text-slate-400 text-xs mb-4 leading-relaxed"><span className="text-slate-300 font-medium">Expected:</span> {step.expectedOutcome}</p>
                     <button 
                       onClick={() => executeStep(step.id)}
                       disabled={loadingAction !== null}
                       className="w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 text-sm font-medium rounded p-2 transition-colors border border-blue-800 disabled:opacity-50"
                     >
                       {loadingAction === step.id ? "Executing..." : `Execute: ${step.actionType}`}
                     </button>
                   </div>
                 )}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
