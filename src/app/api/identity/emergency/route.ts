import { NextResponse } from "next/server";
import { EmergencyAccessEngine } from "@/lib/identity/emergency-access-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const emergencyAccesses = await EmergencyAccessEngine.getEmergencyAccesses(workspaceId);
    return NextResponse.json({ emergencyAccesses });
  } catch {
    return NextResponse.json({ error: "Failed to fetch emergency access" }, { status: 500 });
  }
}
