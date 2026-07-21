import { test, expect } from '@playwright/test';

test.describe('Revora API Network Validation', () => {
  test('Constitutional APIs should return 200 OK', async ({ request }) => {
    // Test the registry endpoint
    const response = await request.get('/api/constitutional/registry');
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body).toHaveProperty('status', 'governance_active');
    expect(body).toHaveProperty('evidence', 'immutable');
  });

  test('UI should not trigger network failures', async ({ page }) => {
    const failedRequests: string[] = [];
    page.on('response', response => {
      if (response.status() >= 400 && response.status() !== 404) { // Ignore 404s for missing static assets in dev
        failedRequests.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.goto('/mission-control/constitutional');
    await page.waitForLoadState('networkidle');

    // Assert no 500s were triggered during load
    expect(failedRequests, `Failed network requests: ${failedRequests.join(', ')}`).toHaveLength(0);
  });
});
