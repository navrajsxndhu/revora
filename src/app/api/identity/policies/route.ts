import { NextResponse } from "next/server";
import { AccessPolicyEngine } from "@/lib/identity/access-policy-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123"; // Mocked workspace context
    const policies = await AccessPolicyEngine.getPolicies(workspaceId);
    return NextResponse.json({ policies });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch policies" }, { status: 500 });
  }
}
