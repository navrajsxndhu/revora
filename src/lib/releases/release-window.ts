import { prisma } from "@/lib/prisma";

export interface WindowValidationResult {
  isValid: boolean;
  violations: string[];
}

export async function validateReleaseWindow(workspaceId: string, releaseId: string): Promise<WindowValidationResult> {
  const activeWindows = await prisma.releaseWindow.findMany({
    where: {
      workspaceId,
      startTime: { lte: new Date().toISOString() },
      endTime: { gte: new Date().toISOString() }
    } as any
  });

  const violations: string[] = [];
  
  for (const win of activeWindows) {
    if (win.data === "true") {
      violations.push(`Release blocked by active blackout window: ${win.data}`);
    }
  }

  return {
    isValid: violations.length === 0,
    violations
  };
}
