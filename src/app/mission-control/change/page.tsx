"use client";

import { useEffect, useState } from "react";
import { ActiveChanges } from "@/components/mission-control/change/active-changes";
import { ChangeCalendar } from "@/components/mission-control/change/change-calendar";
import { ImpactAssessment } from "@/components/mission-control/change/impact-assessment";
import { ApprovalCenter } from "@/components/mission-control/change/approval-center";
import { ConstitutionalValidation } from "@/components/mission-control/change/constitutional-validation";
import { ConflictDetection } from "@/components/mission-control/change/conflict-detection";
import { ChangeHistory } from "@/components/mission-control/change/change-history";
import { ChangeSimulator } from "@/components/mission-control/change/change-simulator";
import { ExecutiveMetrics } from "@/components/mission-control/change/executive-metrics";
import { Loader2, ArrowRightLeft } from "lucide-react";

export default function EnterpriseChangePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic extraction payload
    setTimeout(() => {
      setData({
        active: [
          { title: "K8s Control Plane Upgrade", category: "Infrastructure", owner: "Platform Eng", priority: "HIGH", status: "PENDING_APPROVAL" },
          { title: "Rotate Core Auth Secrets", category: "Security", owner: "SecOps", priority: "CRITICAL", status: "VALIDATING" }
        ],
        calendar: [
          { title: "Auth DB Maintenance", type: "MAINTENANCE", start: "2026-07-13T02:00:00Z", end: "2026-07-13T04:00:00Z" },
          { title: "Global Freeze Q3", type: "BLACKOUT", start: "2026-07-15T00:00:00Z", end: "2026-07-17T00:00:00Z" }
        ],
        impact: {
          services: ["Auth", "Payments", "API Gateway"],
          infrastructure: ["us-east-1", "eu-central-1", "rds-cluster-core"],
          treasury: 1450.50,
          reliabilityHit: 0.02,
          dependencies: 14,
          recoveryComplexity: "HIGH"
        },
        approvals: [
          { role: "Platform Engineering", status: "APPROVED", approver: "System (Auto)", timestamp: new Date(Date.now() - 3600000).toISOString() },
          { role: "Security", status: "PENDING", approver: "-", timestamp: null },
          { role: "SRE", status: "PENDING", approver: "-", timestamp: null }
        ],
        validation: [
          { rule: "Treasury Safe", passed: true },
          { rule: "Release Window Valid", passed: true },
          { rule: "No Active Freeze", passed: false },
          { rule: "Capacity Available", passed: true },
          { rule: "Assurance Threshold Met", passed: true }
        ],
        conflicts: [
          { type: "Overlapping Maintenance", target: "Auth DB Maintenance", severity: "HIGH" },
          { type: "Resource Contention", target: "eu-central-1 scaling event", severity: "MEDIUM" }
        ],
        history: [
          { title: "Migrate Redis to Elasticache", status: "EXECUTED", date: new Date(Date.now() - 86400000 * 2).toISOString() },
          { title: "Update CDN TLS Certs", status: "EXECUTED", date: new Date(Date.now() - 86400000 * 5).toISOString() }
        ],
        metrics: {
          successRate: "99.1%",
          failed: 2,
          emergency: 14,
          avgApprovalTime: "2.1h",
          rollbackRate: "0.9%",
          leadTime: "18.2h"
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
            <ArrowRightLeft className="h-6 w-6 text-indigo-500" />
            Enterprise Change Management
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministically govern operational change across execution, assurance, and release subsystems.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ActiveChanges changes={data?.active} />
          
          <div className="grid gap-4 grid-cols-2">
            <ImpactAssessment impact={data?.impact} />
            <ApprovalCenter approvals={data?.approvals} />
          </div>

          <div className="grid gap-4 grid-cols-2">
            <ConstitutionalValidation validation={data?.validation} />
            <ConflictDetection conflicts={data?.conflicts} />
          </div>
          
          <ChangeCalendar calendar={data?.calendar} />
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveMetrics metrics={data?.metrics} />
          <ChangeSimulator />
          <ChangeHistory history={data?.history} />
        </div>
      </div>
    </div>
  );
}
