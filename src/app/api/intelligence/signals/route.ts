import { NextRequest, NextResponse } from "next/server";
import { extractOperationalSignals } from "@/lib/intelligence/operational-signals";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const signals = extractOperationalSignals();
    return NextResponse.json(signals);
  } catch {
    console.error("Error extracting signals:", error);
    return NextResponse.json({ error: "Failed to extract signals" }, { status: 500 });
  }
}
