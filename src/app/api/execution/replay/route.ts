import { NextRequest, NextResponse } from "next/server";
import { generateExecutionReplay } from "@/lib/execution/execution-replay";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { executionId } = await req.json();

    if (!executionId) {
      return NextResponse.json({ error: "Missing executionId" }, { status: 400 });
    }

    const replay = await generateExecutionReplay(executionId);
    return NextResponse.json(replay);
  } catch (error) {
    console.error("Error generating execution replay:", error);
    return NextResponse.json({ error: "Failed to generate replay" }, { status: 500 });
  }
}
