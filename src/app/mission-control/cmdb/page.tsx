"use client";

import { useEffect, useState } from "react";
import { ConfigurationInventory } from "@/components/mission-control/cmdb/configuration-inventory";
import { ServiceDependencyGraph } from "@/components/mission-control/cmdb/service-dependency-graph";
import { OwnershipMatrix } from "@/components/mission-control/cmdb/ownership-matrix";
import { ConfigurationDriftPanel } from "@/components/mission-control/cmdb/configuration-drift-panel";
import { ImpactExplorer } from "@/components/mission-control/cmdb/impact-explorer";
import { ConfigurationTimeline } from "@/components/mission-control/cmdb/configuration-timeline";
import { SnapshotDashboard } from "@/components/mission-control/cmdb/snapshot-dashboard";
import { ExecutiveCmdbMetrics } from "@/components/mission-control/cmdb/executive-cmdb-metrics";
import { Loader2, Database } from "lucide-react";

export default function EnterpriseCMDBPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic CMDB payload
    setTimeout(() => {
      setData({
        inventory: {
          total: 14502,
          applications: 120,
          services: 450,
          databases: 85,
          clusters: 12,
          networks: 45,
          storage: 320,
          apis: 250
        },
        drift: {
          missing: 2,
          changed: 14,
          deleted: 0,
          orphaned: 5,
          severity: "LOW"
        },
        snapshots: {
          assets: 14502,
          relationships: 42150,
          services: 450,
          critical: 125,
          drift: 21,
          topologyHealth: "99.9%",
          availability: "99.99%"
        },
        metrics: {
          totalAssets: 14502,
          criticalAssets: 125,
          dependencies: 42150,
          drift: 21,
          ownership: 95,
          health: 98,
          maturity: "OPERATIONAL_CMDB_CIVILIZATION"
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
            <Database className="h-6 w-6 text-indigo-500" />
            Enterprise CMDB
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic configuration management and operational asset inventory.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ConfigurationInventory inventory={data?.inventory} />
          
          <div className="grid gap-4 grid-cols-2">
            <ServiceDependencyGraph />
            <OwnershipMatrix />
          </div>

          <ConfigurationDriftPanel drift={data?.drift} />
          
          <div className="grid gap-4 grid-cols-2">
            <ImpactExplorer />
            <ConfigurationTimeline />
          </div>
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveCmdbMetrics metrics={data?.metrics} />
          <SnapshotDashboard snapshots={data?.snapshots} />
        </div>
      </div>
    </div>
  );
}
