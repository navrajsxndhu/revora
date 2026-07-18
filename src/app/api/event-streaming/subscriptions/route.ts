import { NextResponse } from "next/server";
import { SubscriptionEngine } from "@/lib/event-streaming/subscription-engine";

export async function GET() {
  const subscriptions = await SubscriptionEngine.getSubscriptions("ws-1");
  return NextResponse.json({ success: true, subscriptions });
}
