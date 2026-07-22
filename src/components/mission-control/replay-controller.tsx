'use client';
import React, { useState } from "react";

export function ReplayController({ events }: { events: unknown[] }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => setIndex(i => Math.min(events.length - 1, i + 1));
  const handlePrev = () => setIndex(i => Math.max(0, i - 1));

  if (events.length === 0) return null;
  
  const currentEvent = events[index];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mt-6">
      <h3 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
        <span>⏪</span> Incident Flight Recorder Replay
      </h3>
      
      <div className="mb-4 bg-black border border-slate-800 p-4 rounded min-h-[100px]">
        <div className="text-xs text-slate-500 font-mono mb-1">{new Date(currentEvent.timestamp).toLocaleString()}</div>
        <div className="text-sm font-semibold text-indigo-400 mb-2">[{currentEvent.type}]</div>
        <div className="text-slate-200 text-sm">{currentEvent.message}</div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500 font-mono">Step {index + 1} / {events.length}</span>
        <div className="flex gap-2">
          <button onClick={handlePrev} disabled={index === 0} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs rounded transition-colors">Prev</button>
          <button onClick={handleNext} disabled={index === events.length - 1} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs rounded transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
