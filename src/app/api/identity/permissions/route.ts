import { NextResponse } from "next/server";
import { PermissionEngine } from "@/lib/identity/permission-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123"; // Mocked workspace context
    const permissions = await PermissionEngine.getPermissions(workspaceId);
    return NextResponse.json({ permissions });
  } catch {
    return NextResponse.json({ error: "Failed to fetch permissions" }, { status: 500 });
  }
}
