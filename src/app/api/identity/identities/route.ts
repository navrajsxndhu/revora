import { NextResponse } from "next/server";
import { IdentityEngine } from "@/lib/identity/enterprise-identity-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123"; // Mocked workspace context
    const identities = await IdentityEngine.getIdentities(workspaceId);
    return NextResponse.json({ identities });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch identities" }, { status: 500 });
  }
}
