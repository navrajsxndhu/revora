"use client";

import React from "react";
import { EventStreamingOverview } from "./event-streaming-overview";
import { EnterpriseEventRegistry } from "./enterprise-event-registry";
import { TopicCenter } from "./topic-center";
import { QueueCenter } from "./queue-center";
import { StreamCenter } from "./stream-center";
import { ProducerConsumerMatrix } from "./producer-consumer-matrix";
import { RoutingCenter } from "./routing-center";
import { DeliveryCenter } from "./delivery-center";
import { SubscriptionCenter } from "./subscription-center";
import { StreamValidation } from "./stream-validation";
import { EventReplayCenter } from "./event-replay-center";
import { StreamingTimeline } from "./streaming-timeline";
import { StreamingLedger } from "./streaming-ledger";
import { StreamSimulator } from "./stream-simulator";

export function ExecutiveStreamingDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Event Streaming & Messaging</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically mapping and governing asynchronous operations.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">ESMRT ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">ENFORCING MESSAGE CONTRACTS</div>
        </div>
      </div>

      <EventStreamingOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-5 h-full"><EnterpriseEventRegistry /></div>
        <div className="col-span-4 h-full"><ProducerConsumerMatrix /></div>
        <div className="col-span-3 h-full"><StreamValidation /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-3 h-full"><TopicCenter /></div>
        <div className="col-span-3 h-full"><QueueCenter /></div>
        <div className="col-span-3 h-full"><StreamCenter /></div>
        <div className="col-span-3 h-full"><SubscriptionCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><RoutingCenter /></div>
        <div className="col-span-4 h-full"><DeliveryCenter /></div>
        <div className="col-span-4 h-full"><EventReplayCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><StreamingTimeline /></div>
        <div className="col-span-4 h-full"><StreamingLedger /></div>
        <div className="col-span-4 h-full"><StreamSimulator /></div>
      </div>
    </div>
  );
}
