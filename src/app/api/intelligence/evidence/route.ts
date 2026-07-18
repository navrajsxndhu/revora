import { NextResponse } from "next/server";
import { EvidenceEngine } from "@/lib/intelligence/evidence-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const evidence = await EvidenceEngine.getEvidence(workspaceId);
    return NextResponse.json({ evidence });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch evidence" }, { status: 500 });
  }
}
