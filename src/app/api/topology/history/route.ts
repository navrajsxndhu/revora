import { NextResponse } from "next/server";
import { TopologyLedger } from "@/lib/topology/topology-ledger";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const history = await TopologyLedger.getLedger(workspaceId);
    return NextResponse.json({ history });
  } catch {
    return NextResponse.json({ error: "Failed to fetch topology history" }, { status: 500 });
  }
}
