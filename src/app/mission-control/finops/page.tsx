"use client";

import { useEffect, useState } from "react";
import { CloudSpendOverview } from "@/components/mission-control/finops/cloud-spend-overview";
import { BudgetGovernance } from "@/components/mission-control/finops/budget-governance";
import { ResourceOptimizationCenter } from "@/components/mission-control/finops/resource-optimization-center";
import { CloudCostExplorer } from "@/components/mission-control/finops/cloud-cost-explorer";
import { TreasuryDashboard } from "@/components/mission-control/finops/treasury-dashboard";
import { CostForecast } from "@/components/mission-control/finops/cost-forecast";
import { FinancialSimulator } from "@/components/mission-control/finops/financial-simulator";
import { ExecutiveFinOpsHealth } from "@/components/mission-control/finops/executive-finops-health";
import { Loader2, Coins } from "lucide-react";

export default function EnterpriseFinOpsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic FinOps payload
    setTimeout(() => {
      setData({
        spend: {
          totalMonthly: 125430.50,
          daily: 4181.01,
          distribution: {
            aws: 65, gcp: 25, azure: 10
          },
          allocation: {
            engineering: 70, product: 15, marketing: 10, it: 5
          }
        },
        budgets: [
          { name: "Global Engineering", limit: 100000, consumption: 85000, remaining: 15000, status: "HEALTHY" },
          { name: "Production K8s", limit: 40000, consumption: 39500, remaining: 500, status: "WARNING" },
          { name: "Staging Env", limit: 5000, consumption: 5500, remaining: 0, status: "VIOLATED" }
        ],
        optimizations: [
          { type: "Idle EC2 Instances", savings: 1250.00, risk: "LOW", resources: 14 },
          { type: "Unattached EBS Vols", savings: 450.00, risk: "NONE", resources: 22 },
          { type: "RDS Rightsizing", savings: 2100.00, risk: "MEDIUM", resources: 5 }
        ],
        treasury: {
          liquidity: 2500000,
          burnRate: 4181,
          stability: "HIGH",
          forecast: "STABLE"
        },
        forecast: {
          thirtyDay: 130000,
          ninetyDay: 400000,
          annual: 1650000
        },
        health: {
          efficiency: 92,
          budgetHealth: 88,
          optimizationProgress: 75,
          governance: 100,
          maturity: "ENTERPRISE_FINOPS"
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
            <Coins className="h-6 w-6 text-emerald-500" />
            Enterprise FinOps & Cloud Cost Governance
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic cloud economics and organizational treasury governance.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <CloudSpendOverview spend={data?.spend} />
          
          <div className="grid gap-4 grid-cols-2">
            <BudgetGovernance budgets={data?.budgets} />
            <ResourceOptimizationCenter optimizations={data?.optimizations} />
          </div>

          <CloudCostExplorer />
          
          <div className="grid gap-4 grid-cols-2">
            <TreasuryDashboard treasury={data?.treasury} />
            <CostForecast forecast={data?.forecast} />
          </div>
        </div>
        
        <div className="col-span-2 space-y-4">
          <ExecutiveFinOpsHealth health={data?.health} />
          <FinancialSimulator />
        </div>
      </div>
    </div>
  );
}
