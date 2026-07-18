import { NextResponse } from "next/server";
import { DeliveryEngine } from "@/lib/event-streaming/delivery-engine";

export async function GET() {
  const delivery = await DeliveryEngine.getPolicies("ws-1");
  return NextResponse.json({ success: true, delivery });
}
