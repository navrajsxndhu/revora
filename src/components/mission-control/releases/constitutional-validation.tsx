"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

interface ConstitutionalValidationProps {
  status: string;
}

export function ConstitutionalValidation({ status }: ConstitutionalValidationProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-rose-400" />
          Constitutional Governance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-4">
          <span className={`text-2xl font-mono font-bold tracking-widest ${status === 'VALID' ? 'text-emerald-400' : 'text-rose-400'}`}>
            {status}
          </span>
          <span className="text-xs text-slate-500 mt-2">Governance Evaluation Result</span>
        </div>
      </CardContent>
    </Card>
  );
}
