import React from 'react';
import { ExecutiveCommerceOverview } from "@/components/mission-control/commerce/executive-commerce-overview";
import { CommerceOperationsCenter } from "@/components/mission-control/commerce/commerce-operations-center";
import { MarketplaceIntegrationDashboard } from "@/components/mission-control/commerce/marketplace-integration-dashboard";
import { ProductCatalogMatrix } from "@/components/mission-control/commerce/product-catalog-matrix";
import { OrderOperationsCenter } from "@/components/mission-control/commerce/order-operations-center";
import { ShoppingCartDashboard } from "@/components/mission-control/commerce/shopping-cart-dashboard";
import { PricingGovernanceCenter } from "@/components/mission-control/commerce/pricing-governance-center";
import { PromotionComplianceDashboard } from "@/components/mission-control/commerce/promotion-compliance-dashboard";
import { SubscriptionOperationsCenter } from "@/components/mission-control/commerce/subscription-operations-center";
import { PaymentGovernanceDashboard } from "@/components/mission-control/commerce/payment-governance-dashboard";
import { FulfillmentOperationsCenter } from "@/components/mission-control/commerce/fulfillment-operations-center";
import { CommerceAuditDashboard } from "@/components/mission-control/commerce/commerce-audit-dashboard";
import { ConstitutionalCommerceLedger } from "@/components/mission-control/commerce/constitutional-commerce-ledger";
import { RevenueOperationsDashboard } from "@/components/mission-control/commerce/revenue-operations-dashboard";
import { ExecutiveDigitalCommerceCommandCenter } from "@/components/mission-control/commerce/executive-digital-commerce-command-center";

export default function CommerceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Digital Commerce Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing storefronts, transactions, and fulfillment</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">COMMERCE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveDigitalCommerceCommandCenter />
        <ExecutiveCommerceOverview />
        <CommerceOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MarketplaceIntegrationDashboard />
        <ProductCatalogMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OrderOperationsCenter />
        <ShoppingCartDashboard />
        <FulfillmentOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PricingGovernanceCenter />
        <PromotionComplianceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SubscriptionOperationsCenter />
        <PaymentGovernanceDashboard />
        <RevenueOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommerceAuditDashboard />
        <ConstitutionalCommerceLedger />
      </div>
    </div>
  );
}
