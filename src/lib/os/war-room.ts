import { prisma } from "../prisma";

export async function provisionWarRoom(incidentId: string) {
  return await prisma.warRoom.upsert({
    where: { incidentId },
    create: { incidentId, status: 'ACTIVE' },
    update: { status: 'ACTIVE' },
    include: { participants: { include: { member: { select: { userId: true, role: true } } } } }
  });
}

export async function getActiveWarRooms(workspaceId: string) {
  return await prisma.warRoom.findMany({
    where: { status: 'ACTIVE', incident: { workspaceId } },
    include: { incident: { select: { title: true, severity: true } }, participants: true }
  });
}
