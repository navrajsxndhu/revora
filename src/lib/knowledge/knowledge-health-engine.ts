
export const KnowledgeHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return {
      status: "HEALTHY",
      score: 98,
      lastChecked: new Date()
    };
  }
};
