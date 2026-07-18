"use client";

import React from "react";
import { ObservabilityOverview } from "./observability-overview";
import { TelemetryRegistry } from "./telemetry-registry";
import { MetricsCenter } from "./metrics-center";
import { LogsCenter } from "./logs-center";
import { TracesCenter } from "./traces-center";
import { AlertCenter } from "./alert-center";
import { HealthCenter } from "./health-center";
import { DiagnosticsCenter } from "./diagnostics-center";
import { TelemetryCorrelation } from "./telemetry-correlation";
import { ValidationCenter } from "./validation-center";
import { TelemetryTimeline } from "./telemetry-timeline";
import { TelemetryLedger } from "./telemetry-ledger";
import { TelemetrySimulator } from "./telemetry-simulator";
import { ObservabilityAssessments } from "./observability-assessments";

export function ExecutiveObservabilityDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Observability Intelligence & Diagnostics</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically verifying operational evidence.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">OITD ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">ENFORCING TELEMETRY GOVERNANCE</div>
        </div>
      </div>

      <ObservabilityOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-5 h-full"><TelemetryRegistry /></div>
        <div className="col-span-4 h-full"><TelemetryCorrelation /></div>
        <div className="col-span-3 h-full"><ValidationCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-3 h-full"><MetricsCenter /></div>
        <div className="col-span-3 h-full"><LogsCenter /></div>
        <div className="col-span-3 h-full"><TracesCenter /></div>
        <div className="col-span-3 h-full"><AlertCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><HealthCenter /></div>
        <div className="col-span-4 h-full"><DiagnosticsCenter /></div>
        <div className="col-span-4 h-full"><ObservabilityAssessments /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><TelemetryTimeline /></div>
        <div className="col-span-4 h-full"><TelemetryLedger /></div>
        <div className="col-span-4 h-full"><TelemetrySimulator /></div>
      </div>
    </div>
  );
}
