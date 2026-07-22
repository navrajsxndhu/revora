import { NextResponse } from "next/server";
import { CloudResourceEngine } from "@/lib/topology/cloud-resource-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const accounts = await CloudResourceEngine.getAccounts(workspaceId);
    return NextResponse.json({ accounts });
  } catch {
    return NextResponse.json({ error: "Failed to fetch cloud resources" }, { status: 500 });
  }
}
