import { prisma } from "@/lib/prisma";

export async function generateForecast(sloId: string) {
  return await prisma.reliabilityForecast.findFirst({
    where: { sloId },
    orderBy: { createdAt: 'desc' }
  });
}
