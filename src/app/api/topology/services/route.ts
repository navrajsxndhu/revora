import { NextResponse } from "next/server";
import { ServiceMapEngine } from "@/lib/topology/service-map-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const services = await ServiceMapEngine.getServices(workspaceId);
    return NextResponse.json({ services });
  } catch {
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}
