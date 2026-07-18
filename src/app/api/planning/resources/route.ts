import { NextResponse } from "next/server";
import { ResourceEngine } from "@/lib/planning/resource-engine";

export async function GET() {
  const resources = await ResourceEngine.getResources("ws-1");
  return NextResponse.json({ success: true, resources });
}
