export const StreamHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return { status: "HEALTHY", score: 100 };
  }
};
