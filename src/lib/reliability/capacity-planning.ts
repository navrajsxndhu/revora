import { prisma } from "@/lib/prisma";

export async function checkCapacity() {
  return { computeHeadroom: 45.2, storageHeadroom: 60.1 };
}
