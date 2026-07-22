import { NextResponse } from "next/server";
import { IdentityIndex } from "@/lib/identity/identity-index";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const summary = await IdentityIndex.getSummary(workspaceId);
    return NextResponse.json(summary);
  } catch {
    return NextResponse.json({ error: "Failed to fetch identity index" }, { status: 500 });
  }
}
