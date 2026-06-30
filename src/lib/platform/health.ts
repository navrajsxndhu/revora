import { prisma } from "@/lib/prisma";

export type HealthStatus = "GREEN" | "YELLOW" | "RED";

export type PlatformHealth = {
  database: HealthStatus;
  redis: HealthStatus;
  webhooks: HealthStatus;
  overall: HealthStatus;
};

export async function checkPlatformHealth(): Promise<PlatformHealth> {
  let dbStatus: HealthStatus = "GREEN";
  try {
    // Simple query to verify DB connectivity
    await prisma.user.count();
  } catch (err) {
    dbStatus = "RED";
  }

  // Mocking Redis for this demo as Revora relies on BullMQ which expects Redis
  const redisStatus: HealthStatus = "GREEN"; 
  
  // Mocking Webhook ingestion status
  const webhooksStatus: HealthStatus = "GREEN";

  let overall: HealthStatus = "GREEN";
  if (dbStatus === "RED" || redisStatus === "RED" || webhooksStatus === "RED") {
    overall = "RED";
  } else if (dbStatus === "YELLOW" || redisStatus === "YELLOW" || webhooksStatus === "YELLOW") {
    overall = "YELLOW";
  }

  return {
    database: dbStatus,
    redis: redisStatus,
    webhooks: webhooksStatus,
    overall
  };
}
