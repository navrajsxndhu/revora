import React from "react";
import { History, Database, ShieldCheck, Zap, Download } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"DES-E-6601","time":"2026-07-22T10:05:00Z","init":"Lead Designer","act":"Updated --color-emerald-500 contrast ratio","gov":"Policy: WCAG AAA Contrast","trace":"EV-D-6601"},{"id":"DES-E-6602","time":"2026-07-22T10:02:15Z","init":"Frontend Architect","act":"Released PremiumTable v2.4","gov":"Policy: Component Versioning","trace":"EV-D-6602"},{"id":"DES-E-6603","time":"2026-07-22T09:55:00Z","init":"CI/CD Pipeline","act":"Blocked PR: Hardcoded font-size (px)","gov":"Policy: Token Enforcement","trace":"EV-D-6603"}];

const METRICS = [
    { label: "Design Commits", value: "4.2K", icon: Database, iconColor: "text-orange-500", desc: "Cryptographically signed", descColor: "text-orange-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Token Updates", value: "14", icon: Zap, iconColor: "text-blue-500", desc: "Global variable changes" },
    { label: "Figma Syncs", value: "142", icon: Download, iconColor: "text-indigo-500", desc: "Design-to-code imports" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Design Evidence Ledger"
        description="Immutable ledger for design evolution, proving that every visual change was constitutionally approved."
        icon={History}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Event ID", "Timestamp", "Initiator", "Design Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.init}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
