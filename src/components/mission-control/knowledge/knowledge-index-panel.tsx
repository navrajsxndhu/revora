"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface KnowledgeIndexPanelProps {
  data: {
    knowledgeScore: number;
    knowledgeClass: string;
    knowledgeMaturity: string;
  } | null;
}

export function KnowledgeIndexPanel({ data }: KnowledgeIndexPanelProps) {
  if (!data) return null;

  const isHigh = data.knowledgeScore >= 75;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookOpen className={`h-4 w-4 ${isHigh ? 'text-blue-400' : 'text-slate-400'}`} />
          Operational Knowledge Index
        </CardTitle>
        <Badge variant="outline" className={`border-slate-700 ${isHigh ? 'text-blue-400 bg-blue-950/50' : 'text-slate-400 bg-slate-900/50'}`}>
          {data.knowledgeClass.replace(/_/g, ' ')}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${isHigh ? 'text-blue-100' : 'text-slate-100'}`}>
              {data.knowledgeScore.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Memory Maturity</span>
              <span className="text-slate-200 font-medium">{data.knowledgeMaturity.replace(/_/g, ' ')}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${data.knowledgeScore}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
