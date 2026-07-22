import React from "react";
import { Database, TableProperties, Network, DatabaseBackup, FileJson, ActivitySquare, ShieldAlert, ShoppingBag, PieChart, Scale, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Data Catalog", path: "/data-fabric/catalog", icon: TableProperties, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Lineage Explorer", path: "/data-fabric/lineage", icon: Network, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Master Data", path: "/data-fabric/master-data", icon: DatabaseBackup, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Metadata Engine", path: "/data-fabric/metadata", icon: FileJson, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Quality Governance", path: "/data-fabric/quality", icon: ActivitySquare, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Privacy Center", path: "/data-fabric/privacy", icon: ShieldAlert, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Data Marketplace", path: "/data-fabric/marketplace", icon: ShoppingBag, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Data Analytics", path: "/data-fabric/analytics", icon: PieChart, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/data-fabric/governance", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/data-fabric/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Enterprise Data Fabric (REDFIGP)"
      description="The constitutional foundation ensuring all enterprise information is discoverable, trusted, and governed."
      icon={Database}
      iconColor="text-indigo-400"
      modules={modules}
    />
  );
}
