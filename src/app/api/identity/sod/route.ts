import { NextResponse } from "next/server";
import { SodEngine } from "@/lib/identity/sod-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const rules = await SodEngine.getRules(workspaceId);
    return NextResponse.json({ rules });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch sod rules" }, { status: 500 });
  }
}
