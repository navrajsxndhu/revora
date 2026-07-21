# End-to-End Testing Documentation

Revora uses **Playwright** as its official end-to-end (E2E) testing framework to enforce constitutional determinism across the browser lifecycle. Playwright provides cross-browser automation, network interception, and visual testing capabilities out of the box.

## Getting Started

### 1. Installation

To ensure you have the latest Playwright binaries and dependencies installed, run:

```bash
npm install
npx playwright install
```

### 2. Running Tests Locally

Playwright is configured to automatically launch the Next.js local development server (`npm run dev`) before executing the test suites. 

Run the entire test suite in headless mode:
```bash
npm run test:e2e
```

To run tests visually (headed mode) for debugging:
```bash
npx playwright test --headed
```

To run a specific test file:
```bash
npx playwright test navigation.spec.ts
```

### 3. Reviewing Reports

Upon a test failure, Playwright is configured to automatically capture a screenshot, record a video of the failure sequence, and generate an HTML report.

To view the detailed HTML report:
```bash
npx playwright show-report
```

## Test Structure

- `tests/e2e/page-objects/`: Contains encapsulated Page Object Models (POM) for key Revora interfaces (like the Mission Control dashboard).
- `tests/e2e/navigation.spec.ts`: Validates that Mission Control pages load successfully without throwing 500 errors.
- `tests/e2e/forms.spec.ts`: Validates that form submissions correctly interact with the API layer and generate immutable evidence.
- `tests/e2e/api-validation.spec.ts`: Inspects the browser's raw network traffic to catch silent failures and timeouts.

## CI/CD Integration

Playwright tests are automatically executed on every push to the `main` branch via GitHub Actions (`.github/workflows/playwright.yml`). The HTML test report is uploaded as an artifact for 30 days.
