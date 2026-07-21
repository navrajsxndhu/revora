import { expect, type Locator, type Page } from '@playwright/test';

export class MissionControlPage {
  readonly page: Page;
  readonly sidebar: Locator;
  readonly mainContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = page.locator('nav');
    this.mainContent = page.locator('main');
  }

  async goto() {
    await this.page.goto('/mission-control');
    await expect(this.page).toHaveTitle(/Revora/i);
  }

  async navigateToModule(moduleName: string) {
    const link = this.page.getByRole('link', { name: moduleName });
    await link.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getTelemetryWidgets() {
    return this.page.locator('.bg-slate-900'); // Based on Revora v1.0 standard widget classes
  }
}
