import { prisma } from "../prisma";
import { publishFederatedEvent } from "../network/federation-engine";
import { generateStressForecast } from "./regional-forecast";

export async function evaluateLoadMigration(workspaceId: string, serviceName: string, originRegion: string) {
  const forecast = await generateStressForecast(workspaceId, originRegion);

  if (forecast.stressScore > 75) {
    const targetRegion = originRegion === "us-east-1" ? "eu-west-1" : "us-east-1"; // Fallback logic
    
    const migration = await prisma.migrationExecution.create({
      data: {
        workspaceId,
        serviceName,
        sourceRegion: originRegion,
        targetRegion,
        reason: `Stress score critical (${forecast.stressScore}). Predicted saturation: ${forecast.predictedSaturation}`,
        status: "RECOMMENDED" // Simulated / Recommended for prototype
      }
    });

    await publishFederatedEvent(workspaceId, originRegion, "MIGRATION_RECOMMENDED", {
      serviceName,
      sourceRegion: originRegion,
      targetRegion,
      reason: migration.reason
    });

    return migration;
  }
  return null;
}

export async function getActiveMigrations(workspaceId: string) {
  return await prisma.migrationExecution.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });
}
