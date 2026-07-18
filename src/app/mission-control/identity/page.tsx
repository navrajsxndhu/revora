import React from "react";
import { Fingerprint, Activity, ShieldCheck } from "lucide-react";
import { IdentityOverview } from "@/components/mission-control/identity/identity-overview";
import { ExecutiveIdentityDashboard } from "@/components/mission-control/identity/executive-identity-dashboard";
import { EnterpriseDirectory } from "@/components/mission-control/identity/enterprise-directory";
import { RoleManagement } from "@/components/mission-control/identity/role-management";
import { PermissionMatrix } from "@/components/mission-control/identity/permission-matrix";
import { AccessRequestCenter } from "@/components/mission-control/identity/access-request-center";
import { ApprovalWorkflows } from "@/components/mission-control/identity/approval-workflows";
import { PrivilegedAccessCenter } from "@/components/mission-control/identity/privileged-access-center";
import { ServiceAccountRegistry } from "@/components/mission-control/identity/service-account-registry";
import { ApiCredentialCenter } from "@/components/mission-control/identity/api-credential-center";
import { IdentityProviderStatus } from "@/components/mission-control/identity/identity-provider-status";
import { IdentityRiskRegister } from "@/components/mission-control/identity/identity-risk-register";
import { SeparationOfDutyMatrix } from "@/components/mission-control/identity/separation-of-duty-matrix";
import { AccessReviewTimeline } from "@/components/mission-control/identity/access-review-timeline";
import { IdentitySimulator } from "@/components/mission-control/identity/identity-simulator";

export const metadata = {
  title: "Identity Command | Revora Mission Control",
};

export default function IdentityCommandCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-300 font-sans p-4 space-y-4">
      {/* Telemetry Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          <Fingerprint className="w-5 h-5 text-indigo-400" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Identity & Access Command Center</h1>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              SYSTEM STATE: DETERMINISTIC | V 2026.4
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">ENFORCEMENT</div>
            <div className="text-sm font-bold text-indigo-400 flex items-center justify-end">
              <ShieldCheck className="w-3 h-3 mr-1" /> STRICT
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-500 font-mono">IDENTITY INDEX</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center justify-end">
              <Activity className="w-3 h-3 mr-1" /> 99.2%
            </div>
          </div>
        </div>
      </header>

      {/* Row 1: Top Level KPI and Providers */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-8 h-[140px]">
          <IdentityOverview />
        </div>
        <div className="col-span-12 xl:col-span-4 h-[140px]">
          <IdentityProviderStatus />
        </div>
      </div>

      {/* Row 2: Identity Core and Roles */}
      <div className="grid grid-cols-12 gap-4 h-[400px]">
        <div className="col-span-12 xl:col-span-6 h-full">
          <EnterpriseDirectory />
        </div>
        <div className="col-span-12 xl:col-span-6 h-full">
          <RoleManagement />
        </div>
      </div>

      {/* Row 3: Matrices and Permissions */}
      <div className="grid grid-cols-12 gap-4 h-[400px]">
        <div className="col-span-12 xl:col-span-8 h-full">
          <PermissionMatrix />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <SeparationOfDutyMatrix />
        </div>
      </div>

      {/* Row 4: Requests & Approvals */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-6 h-full">
          <AccessRequestCenter />
        </div>
        <div className="col-span-12 xl:col-span-6 h-full">
          <ApprovalWorkflows />
        </div>
      </div>

      {/* Row 5: Machine Identity & Privileged Access */}
      <div className="grid grid-cols-12 gap-4 h-[350px]">
        <div className="col-span-12 xl:col-span-4 h-full">
          <PrivilegedAccessCenter />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <ServiceAccountRegistry />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <ApiCredentialCenter />
        </div>
      </div>

      {/* Row 6: Risk, Timeline, and Sim */}
      <div className="grid grid-cols-12 gap-4 h-[450px]">
        <div className="col-span-12 xl:col-span-4 h-full flex flex-col space-y-4">
          <div className="flex-1">
            <IdentityRiskRegister />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <AccessReviewTimeline />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full">
          <IdentitySimulator />
        </div>
      </div>

      {/* Executive Footer */}
      <div className="pt-4 border-t border-slate-800">
        <ExecutiveIdentityDashboard />
      </div>
    </div>
  );
}
