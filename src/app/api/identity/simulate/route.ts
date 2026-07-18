import { NextResponse } from "next/server";
import { IdentitySimulator } from "@/lib/identity/identity-simulator";

export async function POST(request: Request) {
  try {
    const workspaceId = "ws-123";
    const { action, targetId } = await request.json();
    const result = await IdentitySimulator.simulate(workspaceId, action, targetId);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to run simulation" }, { status: 500 });
  }
}
