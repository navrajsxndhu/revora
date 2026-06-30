import { prisma } from "../prisma";

export type Role = 'OWNER' | 'OPERATOR' | 'VIEWER';

export const ROLE_HIERARCHY: Record<Role, number> = {
  VIEWER: 1,
  OPERATOR: 2,
  OWNER: 3
};

export async function checkPermission(userId: string, workspaceId: string, minimumRole: Role): Promise<boolean> {
  const membership = await prisma.workspaceMember.findFirst({
    where: { userId, workspaceId }
  });

  if (!membership) return false;

  const currentRoleLevel = ROLE_HIERARCHY[membership.role as Role] || 0;
  const requiredRoleLevel = ROLE_HIERARCHY[minimumRole];

  return currentRoleLevel >= requiredRoleLevel;
}
