import { NextResponse } from "next/server";
import { ServiceAccountEngine } from "@/lib/identity/service-account-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const accounts = await ServiceAccountEngine.getAccounts(workspaceId);
    return NextResponse.json({ accounts });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch service accounts" }, { status: 500 });
  }
}
