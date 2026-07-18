import { NextResponse } from "next/server";
import { EndpointEngine } from "@/lib/api-governance/endpoint-engine";

export async function GET() {
  const endpoints = await EndpointEngine.getEndpoints("ws-1");
  return NextResponse.json({ success: true, endpoints });
}
