import { test, expect } from '@playwright/test';

test.describe('Revora Form Simulations', () => {
  test('should simulate creation of an enterprise record', async ({ request }) => {
    // Since the Revora UI uses generic telemetry widgets right now, 
    // we simulate the form POST workflow directly against the API tier.
    const response = await request.post('/api/constitutional/registry', {
      data: {
        workspaceId: 'e2e-workspace',
        action: 'CREATE_POLICY'
      }
    });
    
    // Assert the API accepts the form payload without a 500 error
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('processed');
    expect(body.evidence).toBe('immutable');
  });
});
