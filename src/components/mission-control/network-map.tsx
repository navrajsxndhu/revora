import React from "react";

export function NetworkMap({ coordinators }: { coordinators: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block"></span>
        Global Operational Mesh
      </h2>
      <div className="relative w-full h-48 border border-slate-800/50 bg-slate-950 rounded flex items-center justify-center">
        {coordinators.length === 0 ? (
          <span className="text-slate-500 text-sm">Waiting for federation sync...</span>
        ) : (
          <div className="flex gap-10 justify-center">
             {coordinators.map(c => (
               <div key={c.region} className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center mb-2">
                   <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                 </div>
                 <span className="text-xs font-mono text-slate-300">{c.region}</span>
                 <span className="text-[10px] text-emerald-400 mt-1">SYNCED</span>
               </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
