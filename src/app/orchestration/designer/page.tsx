import React from "react";
import { PenTool, Workflow, Box, ShieldCheck, Library } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"wf":"Incident Escalation T1->T2","dept":"Security Ops","comp":"Medium (6 nodes)","human":"Required (SOC Lead)","state":"Active","trace":"DES-EV-101"},{"wf":"Vendor Marketplace Onboarding","dept":"Procurement","comp":"High (14 nodes)","human":"Required (Legal, CISO)","state":"Draft","trace":"DES-EV-102"},{"wf":"Automated IAM De-provisioning","dept":"IT","comp":"Low (3 nodes)","human":"Required (Manager)","state":"Active","trace":"DES-EV-103"}];

const METRICS = [
    { label: "Workflows Modeled", value: "1,402", icon: Workflow, iconColor: "text-indigo-500", desc: "Enterprise wide", descColor: "text-indigo-400" },
    { label: "Avg Blocks", value: "8.4", icon: Box, iconColor: "text-emerald-500", desc: "Per workflow" },
    { label: "Validation Rate", value: "99.8%", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Policy compliance" },
    { label: "Template Usage", value: "84%", icon: Library, iconColor: "text-emerald-500", desc: "Derived from library" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Visual Workflow Designer"
        description="A drag-and-drop constitutional workflow builder that models human approvals, policy checks, and execution paths."
        icon={PenTool}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Workflow Name", "Department", "Complexity", "Human Checkpoints", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.wf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.human}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
