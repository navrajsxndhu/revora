"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface WisdomFeedProps {
  wisdom: string[];
}

export function WisdomFeed({ wisdom }: WisdomFeedProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-yellow-400" />
          Derived Operational Wisdom
        </CardTitle>
      </CardHeader>
      <CardContent>
        {wisdom && wisdom.length > 0 ? (
          <div className="space-y-4 mt-2">
            {wisdom.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-950/50 rounded border border-slate-800 flex items-start gap-3">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] shrink-0" />
                <div className="text-sm text-slate-200 font-medium">
                  {item}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            Insufficient historical epochs to derive mathematical wisdom.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
