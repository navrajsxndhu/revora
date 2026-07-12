"use client";

import { useEffect, useState } from "react";
import { ConnectorStatusPanel } from "@/components/mission-control/integration/connector-status-panel";
import { SynchronizationTimeline } from "@/components/mission-control/integration/synchronization-timeline";
import { EventLedger } from "@/components/mission-control/integration/event-ledger";
import { IntegrationHealthDashboard } from "@/components/mission-control/integration/integration-health-dashboard";
import { ExternalSystemsMatrix } from "@/components/mission-control/integration/external-systems-matrix";
import { ValidationFailures } from "@/components/mission-control/integration/validation-failures";
import { AuthenticationStatus } from "@/components/mission-control/integration/authentication-status";
import { SynchronizationStatistics } from "@/components/mission-control/integration/synchronization-statistics";
import { Loader2, Zap } from "lucide-react";

export default function OperationalIntegrationPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/integration/index and related routes
    setTimeout(() => {
      setData({
        index: {
          connectorCoverage: 100,
          synchronizationQuality: 98,
          integrationClass: "OPERATIONAL_INTEGRATION_CIVILIZATION"
        },
        connectors: [
          { provider: "GITHUB", status: "ACTIVE" },
          { provider: "DATADOG", status: "ACTIVE" },
          { provider: "JIRA", status: "ACTIVE" },
          { provider: "KUBERNETES", status: "ACTIVE" },
          { provider: "GITHUB_ACTIONS", status: "ACTIVE" }
        ],
        healthStats: {
          uptimePercentage: 99.9,
          latencyMs: 145,
          activeConnections: 5
        },
        stats: {
          totalEvents: 1425,
          validatedEvents: 1425,
          blockedEvents: 0,
          completeness: 100
        },
        ledger: [
          { eventType: "COMMIT_PUSH", externalId: "sha-9a8b7c6d5e", payloadHash: "b3f4d5c6", createdAt: new Date(Date.now() - 3600000).toISOString(), synchronization: { targetSubsystem: "EXECUTION" } },
          { eventType: "MONITOR_ALERT", externalId: "alert-8842", payloadHash: "a1b2c3d4", createdAt: new Date(Date.now() - 86400000).toISOString(), synchronization: { targetSubsystem: "ASSURANCE" } }
        ],
        failures: [],
        timeline: [12, 45, 10, 89, 23, 56, 120, 8, 4, 33]
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
            <Zap className="h-6 w-6 text-amber-400" />
            The Operational Integration Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic governance of external engineering operational events.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <ConnectorStatusPanel connectors={data?.connectors} />
        </div>
        <div className="col-span-2 space-y-4">
          <SynchronizationTimeline timelineData={data?.timeline} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 space-y-4">
          <IntegrationHealthDashboard healthStats={data?.healthStats} />
          <AuthenticationStatus connectors={data?.connectors} />
        </div>
        <div className="col-span-5 space-y-4">
          <div className="grid gap-4 grid-cols-1">
            <ExternalSystemsMatrix />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 space-y-4">
              <SynchronizationStatistics stats={data?.stats} />
            </div>
            <div className="col-span-1 space-y-4">
              <ValidationFailures failures={data?.failures} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <div className="col-span-1">
          <EventLedger events={data?.ledger} />
        </div>
      </div>
    </div>
  );
}
