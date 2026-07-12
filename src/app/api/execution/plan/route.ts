import { NextRequest, NextResponse } from "next/server";
import { compileExecutionPlan } from "@/lib/execution/execution-plan";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { decisionId, strategy } = await req.json();

    if (!decisionId || !strategy) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const plan = compileExecutionPlan(decisionId, strategy);
    return NextResponse.json(plan);
  } catch (error) {
    console.error("Error compiling execution plan:", error);
    return NextResponse.json({ error: "Failed to compile execution plan" }, { status: 500 });
  }
}
