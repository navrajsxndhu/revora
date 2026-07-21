import { test, expect } from '@playwright/test';
import { MissionControlPage } from './page-objects/MissionControlPage';

test.describe('Revora Mission Control Navigation', () => {
  test('should load the main dashboard', async ({ page }) => {
    const mcPage = new MissionControlPage(page);
    await mcPage.goto();
    
    // Verify it doesn't 500 and renders the Revora landing page structure
    await expect(page.locator('text=Mission Control').first()).toBeVisible();
    
    // Click the "Enter Mission Control" button if on landing
    const enterBtn = page.getByRole('link', { name: 'Enter Mission Control' });
    if (await enterBtn.isVisible()) {
      await enterBtn.click();
      await page.waitForLoadState('networkidle');
    }
  });

  test('should render telemetry widgets on constitutional page', async ({ page }) => {
    await page.goto('/mission-control/constitutional');
    await expect(page.locator('text=Enterprise Operating System v1.0')).toBeVisible();
    
    // Verify widgets loaded
    const widgets = page.locator('.bg-slate-900');
    expect(await widgets.count()).toBeGreaterThan(0);
  });
});
