import React from "react";
import { RefreshCw, Smartphone, Tablet, WifiOff, Monitor, Bell, Keyboard, LineChart, ShieldCheck, History } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  const modules = [
    { name: "Cross-Device Sessions", path: "/continuity/sessions", icon: RefreshCw, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Mobile Experience", path: "/continuity/mobile", icon: Smartphone, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Tablet Productivity", path: "/continuity/tablets", icon: Tablet, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Offline Operations", path: "/continuity/offline", icon: WifiOff, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Device Intelligence", path: "/continuity/devices", icon: Monitor, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Smart Notifications", path: "/continuity/notifications", icon: Bell, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Universal Input", path: "/continuity/input", icon: Keyboard, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Continuity Analytics", path: "/continuity/analytics", icon: LineChart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/continuity/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/continuity/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ]

  return (
    <ModuleGrid
      title="Continuity & Multi-Device OS (RMDCOS)"
      description="Executive dashboard governing cross-device workflows, offline syncing, and mobile accessibility."
      icon={RefreshCw}
      iconColor="text-indigo-500"
      modules={modules}
    />
  );
}
