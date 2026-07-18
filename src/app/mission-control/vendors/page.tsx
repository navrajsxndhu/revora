import React from 'react';
import { EnterpriseVendorOverview } from "@/components/mission-control/vendors/enterprise-vendor-overview";
import { VendorRegistry } from "@/components/mission-control/vendors/vendor-registry";
import { SupplierDirectory } from "@/components/mission-control/vendors/supplier-directory";
import { ProcurementOperationsCenter } from "@/components/mission-control/vendors/procurement-operations-center";
import { ContractGovernanceCenter } from "@/components/mission-control/vendors/contract-governance-center";
import { VendorAssessmentDashboard } from "@/components/mission-control/vendors/vendor-assessment-dashboard";
import { VendorRiskMatrix } from "@/components/mission-control/vendors/vendor-risk-matrix";
import { ComplianceAndCertificationCenter } from "@/components/mission-control/vendors/compliance-and-certification-center";
import { ServicePerformanceDashboard } from "@/components/mission-control/vendors/service-performance-dashboard";
import { ContractRenewalCenter } from "@/components/mission-control/vendors/contract-renewal-center";
import { VendorRelationshipMap } from "@/components/mission-control/vendors/vendor-relationship-map";
import { VendorValidationCenter } from "@/components/mission-control/vendors/vendor-validation-center";
import { ConstitutionalVendorLedger } from "@/components/mission-control/vendors/constitutional-vendor-ledger";
import { ThirdPartyHealthDashboard } from "@/components/mission-control/vendors/third-party-health-dashboard";
import { ExecutiveVendorGovernanceDashboard } from "@/components/mission-control/vendors/executive-vendor-governance-dashboard";

export default function VendorsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Vendor, Supplier & Third-Party Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise vendors</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">SUPPLY CHAIN: SECURE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveVendorGovernanceDashboard />
        <EnterpriseVendorOverview />
        <VendorValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VendorRegistry />
        <SupplierDirectory />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProcurementOperationsCenter />
        <ContractGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VendorAssessmentDashboard />
        <VendorRiskMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceAndCertificationCenter />
        <ServicePerformanceDashboard />
        <ThirdPartyHealthDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContractRenewalCenter />
        <VendorRelationshipMap />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalVendorLedger />
      </div>
    </div>
  );
}
