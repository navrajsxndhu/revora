import { NextResponse } from "next/server";
import { checkPlatformHealth } from "@/lib/platform/health";

export async function GET() {
  try {
    const health = await checkPlatformHealth();
    return NextResponse.json(health);
  } catch {
    return NextResponse.json({
      database: "RED",
      redis: "RED",
      webhooks: "RED",
      overall: "RED"
    }, { status: 500 });
  }
}
