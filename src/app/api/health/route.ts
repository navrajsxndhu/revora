import { NextResponse } from "next/server";
import { getIntegrationHealth } from "@/lib/integrations/env";

export async function GET() {
  return NextResponse.json(getIntegrationHealth());
}
