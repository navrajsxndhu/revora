"use client";

import React from "react";
import { ApiGovernanceOverview } from "./api-governance-overview";
import { EnterpriseApiRegistry } from "./enterprise-api-registry";
import { ApiContractCenter } from "./api-contract-center";
import { EndpointCenter } from "./endpoint-center";
import { ProviderConsumerMatrix } from "./provider-consumer-matrix";
import { IntegrationCenter } from "./integration-center";
import { WebhookCenter } from "./webhook-center";
import { EventChannelCenter } from "./event-channel-center";
import { SchemaRegistry } from "./schema-registry";
import { ApiPolicyCenter } from "./api-policy-center";
import { ApiValidation } from "./api-validation";
import { IntegrationTimeline } from "./integration-timeline";
import { ApiLedger } from "./api-ledger";
import { ApiSimulator } from "./api-simulator";

export function ExecutiveApiDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise API Governance & Integration</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically mapping and governing the service ecosystem.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">AIG ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">ENFORCING CONTRACTS & POLICIES</div>
        </div>
      </div>

      <ApiGovernanceOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-5 h-full"><EnterpriseApiRegistry /></div>
        <div className="col-span-4 h-full"><ProviderConsumerMatrix /></div>
        <div className="col-span-3 h-full"><ApiPolicyCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-3 h-full"><ApiContractCenter /></div>
        <div className="col-span-3 h-full"><EndpointCenter /></div>
        <div className="col-span-3 h-full"><IntegrationCenter /></div>
        <div className="col-span-3 h-full"><ApiValidation /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><WebhookCenter /></div>
        <div className="col-span-4 h-full"><EventChannelCenter /></div>
        <div className="col-span-4 h-full"><SchemaRegistry /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><IntegrationTimeline /></div>
        <div className="col-span-4 h-full"><ApiLedger /></div>
        <div className="col-span-4 h-full"><ApiSimulator /></div>
      </div>
    </div>
  );
}
