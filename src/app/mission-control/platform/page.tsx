"use client";

import { useEffect, useState } from "react";
import { ServiceCatalog } from "@/components/mission-control/platform/service-catalog";
import { PlatformResources } from "@/components/mission-control/platform/platform-resources";
import { SelfServicePortal } from "@/components/mission-control/platform/self-service-portal";
import { ResourcePolicies } from "@/components/mission-control/platform/resource-policies";
import { ResourceLifecycle } from "@/components/mission-control/platform/resource-lifecycle";
import { ProvisioningQueue } from "@/components/mission-control/platform/provisioning-queue";
import { PlatformSimulator } from "@/components/mission-control/platform/platform-simulator";
import { ExecutivePlatformMetrics } from "@/components/mission-control/platform/executive-platform-metrics";
import { Loader2, Server } from "lucide-react";

export default function EnterprisePlatformPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic extraction payload
    setTimeout(() => {
      setData({
        catalog: [
          { service: "Payment Gateway", owner: "FinOps", runtime: "Node.js 20", environment: "Production", slo: "99.99%" },
          { service: "Auth Core", owner: "Security", runtime: "Go 1.21", environment: "Production", slo: "99.995%" }
        ],
        resources: [
          { type: "Database", name: "auth-db-primary", owner: "Security", status: "PROVISIONED", region: "us-east-1" },
          { type: "Namespace", name: "fin-prod-01", owner: "FinOps", status: "SCALING", region: "eu-central-1" }
        ],
        policies: [
          { name: "Prod DB Security", constraint: "Requires Security Approval", level: "BLOCKING" },
          { name: "Public Egress Guard", constraint: "Compliance Scan Required", level: "BLOCKING" }
        ],
        lifecycle: {
          provisioned: 420,
          scaling: 12,
          updating: 5,
          archived: 84
        },
        queue: [
          { request: "Provision Redis Cache", requester: "dev-team-alpha", status: "EXECUTING" },
          { request: "Clone Staging Env", requester: "qa-team-1", status: "PENDING_APPROVAL" }
        ],
        metrics: {
          successRate: "99.8%",
          avgTime: "3.2m",
          violations: 2,
          utilization: "76%",
          adoption: "85%",
          selfServiceRatio: "94%"
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Server className="h-6 w-6 text-indigo-500" />
            Enterprise Platform Engineering
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministically provision and govern operational resources through self-service workflows.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <SelfServicePortal />
          
          <div className="grid gap-4 grid-cols-2">
            <ServiceCatalog catalog={data?.catalog} />
            <PlatformResources resources={data?.resources} />
          </div>

          <div className="grid gap-4 grid-cols-2">
            <ResourcePolicies policies={data?.policies} />
            <ResourceLifecycle lifecycle={data?.lifecycle} />
          </div>
          
          <ProvisioningQueue queue={data?.queue} />
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutivePlatformMetrics metrics={data?.metrics} />
          <PlatformSimulator />
        </div>
      </div>
    </div>
  );
}
