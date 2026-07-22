"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

interface ConstitutionalValidationProps {
  validation: unknown[];
}

export function ConstitutionalValidation({ validation }: ConstitutionalValidationProps) {
  if (!validation) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Scale className="h-4 w-4 text-indigo-400" />
          Constitutional Validation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {validation.map((rule, idx) => (
            <div key={idx} className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-slate-800">
              <span className="text-xs font-semibold text-slate-300">{rule.rule}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                rule.passed ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-rose-950 text-rose-400 border-rose-800'
              }`}>
                {rule.passed ? 'PASS' : 'FAIL'}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
