import { prisma } from "@/lib/prisma";

export async function getReliabilityTrends() {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgo = new Date(sevenDaysAgo.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [currentIncidents, previousIncidents] = await Promise.all([
    prisma.incident.findMany({
      where: { createdAt: { gte: sevenDaysAgo }, isSymptom: false },
      include: { childIncidents: true }
    }),
    prisma.incident.findMany({
      where: { createdAt: { gte: fourteenDaysAgo, lt: sevenDaysAgo }, isSymptom: false },
      include: { childIncidents: true }
    })
  ]);

  const calcMTTR = (incs: any[]) => {
    let total = 0;
    let count = 0;
    for (const inc of incs) {
      if (inc.resolvedAt && inc.createdAt) {
        total += (inc.resolvedAt.getTime() - inc.createdAt.getTime());
        count++;
      }
    }
    return count > 0 ? (total / count) / 60000 : 0;
  };

  const calcBlast = (incs: any[]) => {
    if (incs.length === 0) return 0;
    return incs.reduce((acc, i) => acc + i.childIncidents.length, 0) / incs.length;
  };

  const currentMTTR = calcMTTR(currentIncidents);
  const prevMTTR = calcMTTR(previousIncidents);
  const currentBlast = calcBlast(currentIncidents);
  const prevBlast = calcBlast(previousIncidents);

  return {
    mttr: {
      current: currentMTTR,
      previous: prevMTTR,
      trend: prevMTTR === 0 ? 'NEUTRAL' : (currentMTTR > prevMTTR * 1.1 ? 'DEGRADING' : (currentMTTR < prevMTTR * 0.9 ? 'IMPROVING' : 'STABLE'))
    },
    blastRadius: {
      current: currentBlast,
      previous: prevBlast,
      trend: prevBlast === 0 ? 'NEUTRAL' : (currentBlast > prevBlast * 1.1 ? 'DEGRADING' : (currentBlast < prevBlast * 0.9 ? 'IMPROVING' : 'STABLE'))
    },
    incidentCount: {
      current: currentIncidents.length,
      previous: previousIncidents.length
    }
  };
}
