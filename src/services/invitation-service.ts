import { prisma } from "@/lib/prisma";
import { recordAuditEvent } from "@/audit/audit-service";
import crypto from "crypto";

export class InvitationService {
  /**
   * Generates a secure invitation token for a user to join a workspace.
   */
  static async createInvitation(workspaceId: string, email: string, role: string, inviterId: string) {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiration

    const invite = await prisma.workspaceInvite.create({
      data: {
        workspaceId,
        email,
        role,
        token,
        expiresAt,
        invitedBy: inviterId,
      }
    });

    await recordAuditEvent({
      workspaceId,
      actor: inviterId,
      eventType: 'ROLE_ASSIGNED',
      message: `Invited ${email} to join workspace as ${role}`
    });

    return invite;
  }

  /**
   * Redeems an invitation and provisions the WorkspaceMember record.
   */
  static async redeemInvitation(token: string, userId: string) {
    const invite = await prisma.workspaceInvite.findUnique({
      where: { token },
      include: { workspace: true }
    });

    if (!invite) throw new Error("Invalid invitation token.");
    if (invite.acceptedAt) throw new Error("Invitation already accepted.");
    if (new Date() > invite.expiresAt) throw new Error("Invitation expired.");

    // Validate the user claiming matches the invite email
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.email !== invite.email) {
      throw new Error("This invitation was issued to a different email address.");
    }

    const member = await prisma.workspaceMember.create({
      data: {
        workspaceId: invite.workspaceId,
        userId: user.id,
        role: invite.role,
      }
    });

    await prisma.workspaceInvite.update({
      where: { id: invite.id },
      data: { acceptedAt: new Date() }
    });

    await recordAuditEvent({
      workspaceId: invite.workspaceId,
      actor: user.id,
      eventType: 'ROLE_ASSIGNED',
      message: `User ${user.email} accepted invitation and joined as ${invite.role}`
    });

    return member;
  }
}
