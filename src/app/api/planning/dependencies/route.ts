import { NextRequest, NextResponse } from "next/server";
import { generateDependencyGraph } from "@/lib/planning/dependency-planning";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { goalId } = await req.json();

    if (!goalId) {
      return NextResponse.json({ error: "Missing goalId" }, { status: 400 });
    }

    const dependencies = generateDependencyGraph(goalId);
    return NextResponse.json(dependencies);
  } catch (error) {
    console.error("Error generating dependencies:", error);
    return NextResponse.json({ error: "Failed to generate dependencies" }, { status: 500 });
  }
}
