import React from "react";
import { Deployment, Incident } from "@prisma/client";

export function DeploymentTimeline({ deployment, incidents }: { deployment: Deployment, incidents: Incident[] }) {
  const events = [
    {
      id: 'deploy-eval',
      title: 'Deployment Evaluated',
      time: deployment.createdAt,
      type: 'INFO',
      description: `Risk Level: ${deployment.riskLevel} | Strategy: ${deployment.rolloutStrategy.split('.')[0]}`
    }
  ];

  incidents.forEach(inc => {
    events.push({
      id: `inc-${inc.id}`,
      title: 'Incident Triggered',
      time: inc.createdAt,
      type: 'ERROR',
      description: `[${inc.severity}] ${inc.title} - ${inc.serviceAffected}`
    });

    if (inc.recoveryStatus === 'COMPLETED' && inc.recoveryCompletedAt) {
      events.push({
        id: `rec-${inc.id}`,
        title: 'Recovery Executed',
        time: inc.recoveryCompletedAt,
        type: 'SUCCESS',
        description: `Successfully orchestrated recovery for ${inc.serviceAffected}`
      });
    }
  });

  events.sort((a, b) => a.time.getTime() - b.time.getTime());

  const getIcon = (type: string) => {
    switch (type) {
      case 'ERROR': return <div className="w-6 h-6 rounded-full bg-red-900 border border-red-500 flex items-center justify-center shrink-0 z-10"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>;
      case 'SUCCESS': return <div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-500 flex items-center justify-center shrink-0 z-10"><div className="w-2 h-2 rounded-full bg-emerald-500"></div></div>;
      default: return <div className="w-6 h-6 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center shrink-0 z-10"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>;
    }
  };

  return (
    <div className="space-y-6">
      {events.map((ev, i) => (
        <div key={ev.id} className="flex relative">
          {i !== events.length - 1 && (
            <div className="absolute top-6 left-3 w-px h-full bg-slate-800 -ml-px"></div>
          )}
          
          <div className="mr-4">
            {getIcon(ev.type)}
          </div>
          
          <div className="-mt-1">
            <h4 className="text-sm font-semibold text-slate-200">{ev.title}</h4>
            <p className="text-xs text-slate-400 mt-1">{ev.description}</p>
            <span className="text-[10px] text-slate-500 font-mono mt-1 block">{ev.time.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
