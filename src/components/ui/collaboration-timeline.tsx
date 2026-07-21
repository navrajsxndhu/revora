import React from "react";
import { MessageSquare, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export type TimelineEvent = {
  id: string;
  type: "comment" | "status_change" | "evidence_generated" | "policy_violation";
  actor: string;
  avatarInitials: string;
  timestamp: string;
  content: string;
  evidenceId?: string;
};

export function CollaborationTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
      {events.map((event, index) => (
        <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon Badge */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-[.is-active]:bg-slate-900 text-slate-400">
            {event.type === "comment" && <MessageSquare className="w-4 h-4" />}
            {event.type === "status_change" && <RefreshCw className="w-4 h-4 text-blue-400" />}
            {event.type === "evidence_generated" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {event.type === "policy_violation" && <AlertCircle className="w-4 h-4 text-rose-400" />}
          </div>
          
          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 shadow-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                  {event.avatarInitials}
                </div>
                <span className="font-semibold text-slate-200 text-sm">{event.actor}</span>
              </div>
              <time className="text-xs font-medium text-slate-500">{event.timestamp}</time>
            </div>
            
            <div className="text-sm text-slate-300 mb-3 leading-relaxed">
              {event.content}
            </div>
            
            {event.evidenceId && (
              <div className="mt-3 pt-3 border-t border-slate-800/50">
                <EvidenceBadge evidenceId={event.evidenceId} timestamp="Validated by Constitution" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
