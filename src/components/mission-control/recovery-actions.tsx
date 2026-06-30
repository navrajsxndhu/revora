"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function RecoveryActions({ incidentId, currentState }: { incidentId: string, currentState: string }) {
  const router = useRouter();
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const actions = [
    { type: "REPLAY_WORKFLOW", label: "Replay Workflow" },
    { type: "TRIGGER_REDEPLOY", label: "Trigger Redeploy" },
    { type: "RETRY_SLACK", label: "Retry Slack Notification" }
  ];

  const handleAction = async (actionType: string) => {
    setLoadingAction(actionType);
    setErrorMsg(null);
    try {
      const res = await fetch(`/api/incidents/${incidentId}/remediate`, {
        method: "POST",
        body: JSON.stringify({ actionType })
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Action failed.");
      }
    } catch (err) {
      setErrorMsg("Network error during action.");
    } finally {
      setLoadingAction(null);
      router.refresh();
    }
  };

  if (currentState === "RESOLVED") {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Recovery Actions</h2>
        <p className="text-slate-500 text-sm">Actions are disabled for resolved incidents.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Recovery Actions</h2>
      
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-950/50 border border-red-900 rounded text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-3">
        {actions.map(action => (
          <button
            key={action.type}
            onClick={() => handleAction(action.type)}
            disabled={loadingAction !== null}
            className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
              loadingAction === action.type
                ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-700 text-slate-200"
            }`}
          >
            {loadingAction === action.type ? "Executing..." : action.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">Actions are subject to a 60-second cooldown.</p>
    </div>
  );
}
