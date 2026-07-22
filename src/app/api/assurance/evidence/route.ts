import { NextRequest, NextResponse } from "next/server";
import { getAssuranceEvidenceChain } from "@/lib/assurance/assurance-evidence";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const verificationId = searchParams.get('verificationId');

    if (!verificationId) {
      return NextResponse.json({ error: "Missing verificationId" }, { status: 400 });
    }

    const evidence = await getAssuranceEvidenceChain(verificationId);
    return NextResponse.json(evidence);
  } catch (error) {
    console.error("Error fetching assurance evidence:", error);
    return NextResponse.json({ error: "Failed to fetch evidence" }, { status: 500 });
  }
}
