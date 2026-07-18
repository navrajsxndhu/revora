import { NextResponse } from "next/server";
import { LineageEngine } from "@/lib/topology/lineage-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const lineage = await LineageEngine.getLineage(workspaceId);
    return NextResponse.json({ lineage });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch lineage" }, { status: 500 });
  }
}
