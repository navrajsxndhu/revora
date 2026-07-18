"use client";

import React, { useEffect, useState } from "react";
import { Key, Terminal, Clock, XOctagon } from "lucide-react";

export function PrivilegedAccessCenter() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/privileged-sessions")
      .then(res => res.json())
      .then(d => {
        setSessions(d.sessions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = sessions.length > 0 ? sessions : [
    { id: "SESS-412", admin: "Alice Zhang", target: "K8s-Prod-01", duration: "12m 45s", cmds: 14, status: "ACTIVE" },
    { id: "SESS-411", admin: "Bob Lee", target: "DB-Primary-Writer", duration: "45m 12s", cmds: 8, status: "TERMINATED" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING SESSIONS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Key className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Privileged Sessions</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map(s => (
          <div key={s.id} className="border border-slate-800 rounded bg-slate-950 p-3 relative overflow-hidden">
            {s.status === 'ACTIVE' && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 animate-pulse" />}
            
            <div className="flex justify-between items-start mb-2 ml-1">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-slate-400">{s.id}</span>
                <span className="text-xs text-slate-200 font-sans font-medium">{s.admin}</span>
              </div>
              <span className={`text-[9px] font-mono px-1 py-0.5 rounded ${s.status === 'ACTIVE' ? 'text-rose-400 bg-rose-500/10 border border-rose-500/30' : 'text-slate-500 bg-slate-800'}`}>
                {s.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono ml-1 mb-3">
              <div className="text-slate-400">Target: <span className="text-slate-200">{s.target}</span></div>
              <div className="text-slate-400">Duration: <span className="text-slate-200 flex items-center inline-flex"><Clock className="w-3 h-3 mr-1 text-slate-500" />{s.duration}</span></div>
            </div>

            <div className="flex justify-between items-center border-t border-slate-800/50 pt-2 ml-1">
              <div className="text-[10px] text-indigo-400 font-mono flex items-center hover:underline cursor-pointer">
                <Terminal className="w-3 h-3 mr-1" /> View {s.cmds} Commands
              </div>
              {s.status === 'ACTIVE' && (
                <button className="text-[10px] text-rose-400 hover:text-rose-300 font-mono flex items-center">
                  <XOctagon className="w-3 h-3 mr-1" /> TERMINATE
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
