"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function RecoveryPanel({ 
  incidentId, 
  incidentState, 
  recoveryStatus, 
  symptomServices 
}: { 
  incidentId: string, 
  incidentState: string,
  recoveryStatus: string | null,
  symptomServices: string[] 
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Auto-refresh when status is IN_PROGRESS to see live updates
  useEffect(() => {
    if (recoveryStatus === "IN_PROGRESS") {
      const interval = setInterval(() => {
        router.refresh();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [recoveryStatus, router]);

  const startRecovery = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch(`/api/incidents/${incidentId}/recovery/start`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to start recovery.");
      }
    } catch (err) {
      setErrorMsg("Network error.");
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  if (symptomServices.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg mt-6">
      <h2 className="text-lg font-semibold text-slate-200 mb-4">Downstream Recovery Orchestration</h2>
      
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-950/50 border border-red-900 rounded text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3 text-emerald-400 text-sm font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Root Cause Resolved</span>
        </div>
        
        {symptomServices.map((service, idx) => (
          <div key={idx} className={`flex items-center space-x-3 text-sm font-medium ${recoveryStatus === 'COMPLETED' ? 'text-emerald-400' : 'text-slate-300'}`}>
            {recoveryStatus === "COMPLETED" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            ) : recoveryStatus === "IN_PROGRESS" ? (
              <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            ) : (
              <span className="w-5 h-5 flex items-center justify-center text-slate-500">•</span>
            )}
            <span>Recover {service}</span>
          </div>
        ))}
      </div>

      {incidentState === "RESOLVED" && (!recoveryStatus || recoveryStatus === "PENDING" || recoveryStatus === "FAILED") && (
        <button
          onClick={startRecovery}
          disabled={loading}
          className="w-full py-2 bg-blue-900/50 hover:bg-blue-800 text-blue-200 text-sm font-medium rounded transition-colors border border-blue-700/50"
        >
          {loading ? "Starting..." : "Start Sequential Recovery"}
        </button>
      )}

      {recoveryStatus === "IN_PROGRESS" && (
        <div className="w-full py-2 text-center bg-blue-950/30 text-blue-400 text-sm font-medium rounded border border-blue-900/30">
          Recovery In Progress...
        </div>
      )}

      {recoveryStatus === "COMPLETED" && (
        <div className="w-full py-2 text-center bg-emerald-950/30 text-emerald-400 text-sm font-medium rounded border border-emerald-900/30">
          All Systems Recovered
        </div>
      )}
    </div>
  );
}
