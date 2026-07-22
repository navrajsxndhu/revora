import { prisma } from "@/lib/prisma";

export async function createSLO(workspaceId: string, payload: unknown) {
  return await prisma.serviceLevelObjective.create({
    data: {
      workspaceId,
      serviceId: payload.serviceId,
      name: payload.name,
      availabilityTarget: payload.availabilityTarget,
      latencyTarget: payload.latencyTarget,
      errorRateTarget: payload.errorRateTarget,
      measurementWindow: payload.measurementWindow,
      status: "ACTIVE"
    }
  });
}
