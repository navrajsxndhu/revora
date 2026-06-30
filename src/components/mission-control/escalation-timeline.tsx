import React from "react";

export type EscalationEvent = {
  id: string;
  type: "ROUTED" | "STATE_CHANGE" | "OWNERSHIP_CLAIM" | "RECOVERY_MILESTONE";
  message: string;
  timestamp: Date;
  actor?: string;
};

export function EscalationTimeline({ events }: { events: EscalationEvent[] }) {
  if (events.length === 0) {
    return (
      <div className="text-sm text-slate-500 italic py-4">
        No escalation events recorded.
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "ROUTED":
        return (
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        );
      case "STATE_CHANGE":
        return (
          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        );
      case "OWNERSHIP_CLAIM":
        return (
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        );
      case "RECOVERY_MILESTONE":
        return (
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        );
      default:
        return (
          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {events.map((ev, i) => (
        <div key={ev.id} className="flex relative">
          {/* Vertical line connector */}
          {i !== events.length - 1 && (
            <div className="absolute top-6 left-3.5 w-px h-full bg-slate-800 -ml-px"></div>
          )}
          
          <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 z-10 mr-4">
            {getIcon(ev.type)}
          </div>
          
          <div className="pt-1">
            <p className="text-sm text-slate-300 font-medium">
              {ev.message}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-slate-500 font-mono">{ev.timestamp.toLocaleTimeString()}</span>
              {ev.actor && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">by {ev.actor}</span>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
