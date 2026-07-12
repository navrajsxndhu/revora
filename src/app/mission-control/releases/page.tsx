"use client";

import { useEffect, useState } from "react";
import { ActiveReleases } from "@/components/mission-control/releases/active-releases";
import { ReleaseReadiness } from "@/components/mission-control/releases/release-readiness";
import { ApprovalMatrix } from "@/components/mission-control/releases/approval-matrix";
import { ConstitutionalValidation } from "@/components/mission-control/releases/constitutional-validation";
import { ReleaseTimeline } from "@/components/mission-control/releases/release-timeline";
import { RollbackReadiness } from "@/components/mission-control/releases/rollback-readiness";
import { ReleaseEvidence } from "@/components/mission-control/releases/release-evidence";
import { ReleaseHistory } from "@/components/mission-control/releases/release-history";
import { Loader2, Rocket } from "lucide-react";

export default function EnterpriseReleasesPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/releases and related routes
    setTimeout(() => {
      setData({
        activeReleases: [
          { releaseName: "Production Release v1.1.0", status: "EXECUTING", readinessScore: 92.5, governanceStatus: "VALID" }
        ],
        readiness: {
          score: 92.5,
          planningComplete: true,
          assuranceVerified: true,
          integrationHealthy: true,
          rollbackAvailable: true
        },
        approvals: [
          { approverRole: "Engineering Lead", status: "APPROVED" },
          { approverRole: "Security Officer", status: "APPROVED" }
        ],
        checkpoints: [
          { milestone: "PLANNING_STARTED", status: "COMPLETED", reachedAt: new Date(Date.now() - 172800000).toISOString() },
          { milestone: "GOVERNANCE_VALIDATION", status: "COMPLETED", reachedAt: new Date(Date.now() - 86400000).toISOString() },
          { milestone: "EXECUTION", status: "COMPLETED", reachedAt: new Date(Date.now() - 3600000).toISOString() },
          { milestone: "VERIFICATION", status: "PENDING", reachedAt: null }
        ],
        evidence: [
          { evidenceType: "COMMIT_PUSH", referenceId: "sha-9a8b7c6d5e", validationHash: "b3f4d5c6", recordedAt: new Date(Date.now() - 4000000).toISOString() }
        ],
        history: [
          { releaseName: "Production Release v1.0.5", status: "COMPLETED", readinessScore: 95.0, governanceStatus: "VALID" },
          { releaseName: "Emergency Patch v1.0.4", status: "COMPLETED", readinessScore: 82.5, governanceStatus: "VALID" }
        ]
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
            <Rocket className="h-6 w-6 text-emerald-400" />
            Deterministic Enterprise Release Management
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Constitutionally governed operational releases and execution tracking.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <ActiveReleases releases={data?.activeReleases} />
          <div className="grid gap-4 grid-cols-2">
            <ReleaseReadiness readiness={data?.readiness} />
            <ConstitutionalValidation status="VALID" />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <ApprovalMatrix approvals={data?.approvals} />
            <RollbackReadiness />
          </div>
        </div>
        <div className="col-span-3 space-y-4">
          <ReleaseTimeline checkpoints={data?.checkpoints} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="col-span-1">
          <ReleaseEvidence evidence={data?.evidence} />
        </div>
        <div className="col-span-1">
          <ReleaseHistory history={data?.history} />
        </div>
      </div>
    </div>
  );
}
