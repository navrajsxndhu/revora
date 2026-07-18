import { NextResponse } from "next/server";
import { RoutingEngine } from "@/lib/event-streaming/routing-engine";

export async function GET() {
  const routing = await RoutingEngine.getRoutes("ws-1");
  return NextResponse.json({ success: true, routing });
}
