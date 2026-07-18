import { NextResponse } from "next/server";
import { WebhookEngine } from "@/lib/api-governance/webhook-engine";

export async function GET() {
  const webhooks = await WebhookEngine.getWebhooks("ws-1");
  return NextResponse.json({ success: true, webhooks });
}
