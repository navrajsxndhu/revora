"use client";

import React from 'react';
import { format } from 'date-fns';
import { CheckCircle2, AlertCircle, PlayCircle, Loader2, MessageSquare, Ticket } from 'lucide-react';

export type TimelineEvent = {
  id: string;
  type: 'MERGE' | 'BUILD' | 'FAILURE' | 'AI_ANALYSIS' | 'ALERT' | 'TICKET';
  title: string;
  description: string;
  timestamp: Date;
  status: 'PENDING' | 'SUCCESS' | 'ERROR';
};

interface IncidentTimelineProps {
  events: TimelineEvent[];
}

const IconMap = {
  MERGE: CheckCircle2,
  BUILD: PlayCircle,
  FAILURE: AlertCircle,
  AI_ANALYSIS: Loader2,
  ALERT: MessageSquare,
  TICKET: Ticket,
};

export function IncidentTimeline({ events }: IncidentTimelineProps) {
  return (
    <div className="flex flex-col space-y-6 relative border-l-2 border-slate-800 ml-4 py-2">
      {events.map((event, index) => {
        const Icon = IconMap[event.type];
        const isError = event.status === 'ERROR';
        const isPending = event.status === 'PENDING';

        return (
          <div key={event.id} className="relative pl-8 group">
            <div
              className={`absolute -left-[17px] top-1 rounded-full bg-slate-950 p-1 border-2 
              ${isError ? 'border-red-500 text-red-500' : isPending ? 'border-amber-500 text-amber-500' : 'border-emerald-500 text-emerald-500'}`}
            >
              <Icon size={16} className={isPending ? 'animate-spin' : ''} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-200">{event.title}</span>
              <span className="text-xs text-slate-400 mt-1">{event.description}</span>
              <span className="text-xs text-slate-500 mt-2 font-mono">
                {format(event.timestamp, "HH:mm:ss.SSS")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
