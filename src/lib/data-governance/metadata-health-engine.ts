export const MetadataHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return { status: "HEALTHY", score: 100 };
  }
};
