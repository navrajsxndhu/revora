import { prisma } from "@/lib/prisma";
import { CoordinationNodeDef } from "./coordination-graph";
import { ResourceLockDef } from "./resource-coordination";
import { ConflictResolutionDef } from "./conflict-resolution";

export async function recordCoordinationEvent(
  workspaceId: string,
  coordinationName: string,
  coordinationScore: number,
  nodes: CoordinationNodeDef[],
  conflicts: ConflictResolutionDef[],
  resources: ResourceLockDef[]
) {
  return await prisma.operationalCoordination.create({
    data: {
      workspaceId,
      coordinationName,
      coordinationScore,
      coordinationStatus: "SYNCHRONIZED",
      nodes: {
        create: nodes.map(n => ({
          nodeType: n.nodeType,
          nodeReference: n.reference,
          operationalRole: n.role
        }))
      },
      conflicts: {
        create: conflicts.map(c => ({
          conflictType: c.conflictType,
          severity: c.severity,
          resolutionStrategy: c.resolutionStrategy
        }))
      },
      resourceReservations: {
        create: resources.map(r => ({
          resourceType: r.resourceType,
          reservedCapacity: r.reservedCapacity,
          reservationWindow: r.reservationWindow
        }))
      }
    },
    include: {
      nodes: true,
      conflicts: true,
      resourceReservations: true
    }
  });
}

export async function getCoordinationLedger(workspaceId: string) {
  return await prisma.operationalCoordination.findMany({
    where: { workspaceId },
    include: {
      nodes: true,
      conflicts: true,
      resourceReservations: true
    },
    orderBy: { createdAt: 'desc' }
  });
}
