// Mocking WorkOS integration to avoid tying directly to a paid identity provider 
// during this deployment, while maintaining the deterministic abstraction layer.

export const workos = {
  sso: {
    getAuthorizationURL: ({ clientId, redirectUri, provider }: any) => {
      return `https://mock-sso.workos.com/authorize?client_id=${clientId}&provider=${provider}&redirect_uri=${redirectUri}`;
    },
    getProfileAndToken: async ({ code, clientId }: any) => {
      return {
        profile: {
          id: 'mock_prof_123',
          email: 'admin@enterprise.com',
          first_name: 'Admin',
          last_name: 'User',
        },
        accessToken: 'mock_access_token'
      };
    }
  }
};
