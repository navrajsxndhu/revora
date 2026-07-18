"use client";

import { useEffect, useState } from "react";
import { ActiveServiceRequests } from "@/components/mission-control/service-management/active-service-requests";
import { EnterpriseServiceCatalog } from "@/components/mission-control/service-management/enterprise-service-catalog";
import { OperationalQueueDashboard } from "@/components/mission-control/service-management/operational-queue-dashboard";
import { ApprovalCenter } from "@/components/mission-control/service-management/approval-center";
import { SLADashboard } from "@/components/mission-control/service-management/sla-dashboard";
import { FulfillmentTimeline } from "@/components/mission-control/service-management/fulfillment-timeline";
import { KnowledgeCenter } from "@/components/mission-control/service-management/knowledge-center";
import { ExecutiveServiceMetrics } from "@/components/mission-control/service-management/executive-service-metrics";
import { Loader2, ServerCog } from "lucide-react";

export default function ServiceManagementPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({
        requests: {
          open: 12,
          pending: 5,
          approved: 8,
          fulfilled: 1420,
          rejected: 14,
          escalated: 1
        },
        catalog: [
          { name: "Provision Kubernetes Namespace", category: "Platform", approvals: ["Platform Engineering"] },
          { name: "Production Database Access", category: "Security", approvals: ["Security", "Service Owner"] },
          { name: "Firewall Rule Exception", category: "Infrastructure", approvals: ["Networking", "Security"] }
        ],
        queues: [
          { name: "Platform Ops", active: 4, capacity: 10, sla: "4h", escalation: "Tier 2" },
          { name: "SecOps", active: 2, capacity: 5, sla: "1h", escalation: "CISO" }
        ],
        approvals: [
          { request: "REQ-901", role: "Security", approver: "Pending", status: "PENDING", evidence: "n/a" },
          { request: "REQ-900", role: "Service Owner", approver: "jdoe", status: "APPROVED", evidence: "evd-hash-12" }
        ],
        sla: {
          avgResponse: "12m",
          avgResolution: "2.4h",
          compliance: "99.8%",
          breaches: 0,
          escalations: 1,
          queueHealth: "GREEN"
        },
        timeline: [
          { step: "Request Created", status: "COMPLETED", time: "10:00 AM" },
          { step: "Security Approved", status: "COMPLETED", time: "10:15 AM" },
          { step: "Workflow Started", status: "COMPLETED", time: "10:16 AM" },
          { step: "Provisioned", status: "COMPLETED", time: "10:20 AM" }
        ],
        knowledge: [
          { title: "Emergency DB Access", category: "Security", version: "v2.1", workflow: "wf-db-access" },
          { title: "K8s Namespace Provisioning", category: "Platform", version: "v1.4", workflow: "wf-k8s-prov" }
        ],
        metrics: {
          totalRequests: 1455,
          resolutionRate: "98.5%",
          approvalRate: "92%",
          queueHealth: "OPTIMAL",
          slaCompliance: "99.8%",
          escalationRate: "0.5%",
          serviceAdoption: "95%",
          serviceMaturity: "SERVICE_MANAGEMENT_CIVILIZATION"
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
            <ServerCog className="h-6 w-6 text-sky-500" />
            Enterprise Service Management
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Constitutionally governed operational front door for all enterprise requests.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ActiveServiceRequests requests={data?.requests} />
          
          <div className="grid gap-4 grid-cols-2">
            <OperationalQueueDashboard queues={data?.queues} />
            <SLADashboard sla={data?.sla} />
          </div>

          <div className="grid gap-4 grid-cols-2">
            <ApprovalCenter approvals={data?.approvals} />
            <FulfillmentTimeline timeline={data?.timeline} />
          </div>
          
          <EnterpriseServiceCatalog catalog={data?.catalog} />
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveServiceMetrics metrics={data?.metrics} />
          <KnowledgeCenter knowledge={data?.knowledge} />
        </div>
      </div>
    </div>
  );
}
