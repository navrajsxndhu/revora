'use client';
import React, { useEffect, useState } from "react";

export function LiveOperationsFeed({ workspaceId }: { workspaceId: string }) {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!workspaceId) return;

    const eventSource = new EventSource(`/api/os/stream?workspaceId=${workspaceId}`);
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data === 'ping') return;
        setEvents(prev => [data, ...prev].slice(0, 50));
      } catch (e) {
        console.error("Failed to parse event stream data", e);
      }
    };

    return () => eventSource.close();
  }, [workspaceId]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
        Live Operations Stream
      </h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500 italic">Listening for operational events...</p>
        ) : (
          events.map((ev, i) => (
            <div key={i} className="text-xs border-l-2 border-slate-700 pl-3 py-1">
              <span className="text-slate-500 font-mono mr-2">{new Date(ev.timestamp).toLocaleTimeString()}</span>
              <span className="font-semibold text-slate-300 mr-2">[{ev.type}]</span>
              <span className="text-slate-400">{JSON.stringify(ev.payload)}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
