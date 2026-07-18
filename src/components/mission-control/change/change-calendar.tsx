"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface ChangeCalendarProps {
  calendar: any[];
}

export function ChangeCalendar({ calendar }: ChangeCalendarProps) {
  if (!calendar) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-emerald-400" />
          Enterprise Change Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {calendar.map((event, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-300">{event.title}</span>
                <span className={`ml-2 text-[9px] px-1 py-0.5 rounded font-mono border ${
                  event.type === 'BLACKOUT' ? 'bg-rose-950 text-rose-400 border-rose-800' : 'bg-amber-950 text-amber-400 border-amber-800'
                }`}>
                  {event.type}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                {new Date(event.start).toLocaleString()} - {new Date(event.end).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
