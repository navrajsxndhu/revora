import { NextResponse } from "next/server";
import { RoleEngine } from "@/lib/identity/role-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123"; // Mocked workspace context
    const roles = await RoleEngine.getRoles(workspaceId);
    return NextResponse.json({ roles });
  } catch {
    return NextResponse.json({ error: "Failed to fetch roles" }, { status: 500 });
  }
}
