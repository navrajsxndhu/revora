import { prisma } from "../prisma";
import crypto from "crypto";

export async function createSession(userId: string, userAgent?: string, ip?: string) {
  const token = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const fingerprint = crypto.createHash('sha256').update(`${userAgent || ''}-${ip || ''}`).digest('hex');

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

  await prisma.authSession.create({
    data: {
      userId,
      tokenHash,
      fingerprint,
      expiresAt
    }
  });

  return token;
}

export async function validateSession(token: string, userAgent?: string, ip?: string) {
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const currentFingerprint = crypto.createHash('sha256').update(`${userAgent || ''}-${ip || ''}`).digest('hex');

  const session = await prisma.authSession.findUnique({
    where: { tokenHash },
    include: { user: true }
  });

  if (!session) return null;
  
  if (new Date() > session.expiresAt) {
    await prisma.authSession.delete({ where: { id: session.id } });
    return null;
  }

  // Session hijacking protection
  if (session.fingerprint !== currentFingerprint) {
    // Aggressive revocation on mismatch
    await prisma.authSession.delete({ where: { id: session.id } });
    return null;
  }

  await prisma.authSession.update({
    where: { id: session.id },
    data: { lastActiveAt: new Date() }
  });

  return session.user;
}
