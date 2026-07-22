import { NextResponse } from "next/server";
import { ApplicationEngine } from "@/lib/topology/application-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const applications = await ApplicationEngine.getApplications(workspaceId);
    return NextResponse.json({ applications });
  } catch {
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
