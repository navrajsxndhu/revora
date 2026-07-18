"use client";

import { useEffect, useState } from "react";
import { ReliabilityOverview } from "@/components/mission-control/reliability/reliability-overview";
import { ServiceLevelObjectives } from "@/components/mission-control/reliability/service-level-objectives";
import { ServiceLevelIndicators } from "@/components/mission-control/reliability/service-level-indicators";
import { ErrorBudgetDashboard } from "@/components/mission-control/reliability/error-budget-dashboard";
import { CapacityPlanning } from "@/components/mission-control/reliability/capacity-planning";
import { ReliabilityForecast } from "@/components/mission-control/reliability/reliability-forecast";
import { ReliabilityLedger } from "@/components/mission-control/reliability/reliability-ledger";
import { ExecutiveReliabilityMetrics } from "@/components/mission-control/reliability/executive-reliability-metrics";
import { ReliabilitySimulator } from "@/components/mission-control/reliability/reliability-simulator";
import { Loader2, Activity } from "lucide-react";

export default function EnterpriseReliabilityPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic extraction payload
    setTimeout(() => {
      setData({
        overview: {
          globalScore: 99.98,
          status: "STABLE",
          activeIncidents: 0,
          budgetAtRisk: false
        },
        slos: [
          { name: "Core API Availability", target: 99.99, current: 99.995, deviation: "+0.005", status: "HEALTHY" },
          { name: "Payment Processing Latency", target: 99.9, current: 99.91, deviation: "+0.01", status: "HEALTHY" },
          { name: "Data Ingestion Throughput", target: 99.5, current: 99.1, deviation: "-0.40", status: "AT_RISK" }
        ],
        slis: [
          { metric: "Availability", value: "99.995%", timestamp: new Date().toISOString() },
          { metric: "API Latency (p99)", value: "112ms", timestamp: new Date().toISOString() },
          { metric: "Request Success", value: "99.98%", timestamp: new Date().toISOString() },
          { metric: "Deployment Success", value: "100%", timestamp: new Date().toISOString() }
        ],
        budgets: [
          { name: "Core Infrastructure", remaining: "85%", burnRate: "0.2x", status: "HEALTHY" },
          { name: "Payments Gateway", remaining: "42%", burnRate: "1.5x", status: "ACCELERATED_BURN" }
        ],
        capacity: {
          computeUtilization: "62%",
          computeHeadroom: "38%",
          storageUtilization: "78%",
          storageHeadroom: "22%",
          growthRate: "+4.2%/mo"
        },
        forecast: {
          sevenDay: "99.98%",
          thirtyDay: "99.95%",
          ninetyDay: "99.90%",
          trend: "STABLE"
        },
        ledger: [
          { event: "SLI Recalculation", impact: "+0.01%", date: new Date(Date.now() - 3600000).toISOString() },
          { event: "Capacity Auto-Scale", impact: "0.00%", date: new Date(Date.now() - 7200000).toISOString() },
          { event: "Minor Latency Spike", impact: "-0.02%", date: new Date(Date.now() - 86400000).toISOString() }
        ],
        metrics: {
          sloCompliance: "99.95%",
          availability: "99.99%",
          mttr: "14m",
          mttd: "3m",
          deploymentSuccess: "99.2%",
          recoverySuccess: "100%",
          errorBudgetHealth: "STABLE",
          capacityHealth: "OPTIMAL"
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
            <Activity className="h-6 w-6 text-emerald-500" />
            Enterprise Reliability Engineering
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministically define, monitor, protect, and continuously improve service reliability.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ReliabilityOverview overview={data?.overview} />
          
          <div className="grid gap-4 grid-cols-2">
            <ServiceLevelObjectives slos={data?.slos} />
            <ServiceLevelIndicators slis={data?.slis} />
          </div>

          <div className="grid gap-4 grid-cols-2">
            <ErrorBudgetDashboard budgets={data?.budgets} />
            <CapacityPlanning capacity={data?.capacity} />
          </div>
          
          <ReliabilityForecast forecast={data?.forecast} />
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveReliabilityMetrics metrics={data?.metrics} />
          <ReliabilitySimulator />
          <ReliabilityLedger ledger={data?.ledger} />
        </div>
      </div>
    </div>
  );
}
