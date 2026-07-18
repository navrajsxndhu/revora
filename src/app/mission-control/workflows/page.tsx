"use client";

import { useEffect, useState } from "react";
import { WorkflowCatalog } from "@/components/mission-control/workflows/workflow-catalog";
import { ActiveExecutions } from "@/components/mission-control/workflows/active-executions";
import { WorkflowTimeline } from "@/components/mission-control/workflows/workflow-timeline";
import { ValidationCenter } from "@/components/mission-control/workflows/validation-center";
import { RollbackCenter } from "@/components/mission-control/workflows/rollback-center";
import { WorkflowEvidence } from "@/components/mission-control/workflows/workflow-evidence";
import { SimulationCenter } from "@/components/mission-control/workflows/simulation-center";
import { ExecutiveWorkflowMetrics } from "@/components/mission-control/workflows/executive-workflow-metrics";
import { Loader2, Workflow } from "lucide-react";

export default function EnterpriseWorkflowsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic Workflow payload
    setTimeout(() => {
      setData({
        catalog: [
          { id: "wf-1", name: "Incident Response", category: "Incidents", version: "1.2", owner: "SRE", status: "ACTIVE" },
          { id: "wf-2", name: "Blue Green Release", category: "Releases", version: "2.0", owner: "Platform", status: "ACTIVE" }
        ],
        executions: {
          running: 3,
          waiting: 1,
          failed: 0,
          completed: 142,
          rolledBack: 2
        },
        timeline: [
          { trigger: "RELEASE_APPROVED", step: "Deploy Canary", duration: "45s", validation: "PASSED", completion: "SUCCESS" },
          { trigger: "INCIDENT_CREATED", step: "Quarantine Service", duration: "12s", validation: "PASSED", completion: "SUCCESS" }
        ],
        validation: {
          constitution: "PASSED",
          security: "PASSED",
          reliability: "PASSED",
          treasury: "PASSED",
          release: "PASSED",
          change: "PASSED",
          maintenanceWindow: "ACTIVE",
          status: "READY"
        },
        rollback: {
          readiness: "HIGH",
          checkpoints: 4,
          recoveryDuration: "120s",
          recoverySuccess: "99.9%"
        },
        evidence: [
          { trigger: "SECURITY_FINDING", evidence: "CVE-2026-101", validation: "VALIDATED", timestamp: "10 mins ago", result: "ISOLATED" }
        ],
        metrics: {
          totalWorkflows: 45,
          executionSuccess: 99.8,
          rollbackSuccess: 100,
          averageDuration: "42s",
          workflowCoverage: 85,
          automationAdoption: 92,
          governanceCompliance: 100,
          workflowMaturity: "OPERATIONAL_WORKFLOW_CIVILIZATION"
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
            <Workflow className="h-6 w-6 text-indigo-500" />
            Enterprise Workflows
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Constitutionally governed operational procedure automation and runbook orchestration.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ActiveExecutions executions={data?.executions} />
          
          <div className="grid gap-4 grid-cols-2">
            <WorkflowCatalog catalog={data?.catalog} />
            <ValidationCenter validation={data?.validation} />
          </div>

          <WorkflowTimeline timeline={data?.timeline} />
          
          <div className="grid gap-4 grid-cols-2">
            <RollbackCenter rollback={data?.rollback} />
            <WorkflowEvidence evidence={data?.evidence} />
          </div>
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveWorkflowMetrics metrics={data?.metrics} />
          <SimulationCenter />
        </div>
      </div>
    </div>
  );
}
