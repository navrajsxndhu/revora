import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pir = await prisma.postIncidentReview.findUnique({
    where: { id }
  });

  if (!pir) {
    return NextResponse.json({ error: "PIR not found" }, { status: 404 });
  }

  const markdown = `# ${pir.title}

**Status:** ${pir.status}
**Generated At:** ${new Date(pir.generatedAt).toLocaleString()}
${pir.approvedBy ? `**Approved By:** ${pir.approvedBy}` : ''}

## Executive Summary
${pir.summary}

## Impact Analysis
${pir.impact}

## Root Cause
${pir.rootCause}

## Timeline Construction
${pir.timelineMarkdown}

## Resolution
${pir.resolutionMarkdown}

## Preventative Actions
${pir.preventativeActions}
`;

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      'Content-Disposition': `attachment; filename="PIR-${id}.md"`
    }
  });
}
