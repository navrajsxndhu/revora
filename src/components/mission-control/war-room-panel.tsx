import React from "react";

export function WarRoomPanel({ warRooms }: { warRooms: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Active War Rooms</h2>
      {warRooms.length === 0 ? (
        <p className="text-sm text-slate-500">No active war rooms.</p>
      ) : (
        <div className="space-y-4">
          {warRooms.map(wr => (
            <div key={wr.id} className="border border-indigo-900/50 bg-indigo-950/20 rounded p-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-slate-200">{wr.incident.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Severity: {wr.incident.severity} | Participants: {wr.participants.length}</p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded transition-colors">
                Join Coordination Space
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
