# Copilot Instructions for playwright-mcp-model-driven-app

## Project Overview
This project is a model-driven application built on top of Playwright MCP (Model Context Protocol) and Playwright Test. It is managed with `pnpm` and uses Node.js 18+.

## Architecture & Key Components
- **Playwright MCP**: Used for model-driven automation and advanced browser control. See `@playwright/mcp` in `package.json`.
- **Playwright Test**: For writing and running browser-based tests. See `@playwright/test` in `package.json`.
- **No custom source files** are present yet; the structure is ready for Playwright MCP and test scripts.

## Developer Workflows
- **Install dependencies**: `pnpm install`
- **Run tests**: No test scripts are defined yet. Add Playwright tests and update the `test` script in `package.json`.
- **Add Playwright MCP scripts**: Place model-driven scripts in the root or a `tests/` directory (create as needed).

## Conventions & Patterns
- Use Playwright MCP for model-driven automation tasks.
- Use Playwright Test for browser automation and assertions.
- Use `pnpm` for all package management tasks.
- Follow Playwright's recommended directory structure for tests (e.g., `tests/` or `e2e/`).

## Integration Points
- **External dependencies**: Managed via `pnpm` and specified in `package.json`.
- **Playwright MCP**: Integrate model-driven flows by importing from `@playwright/mcp`.
- **Playwright Test**: Import from `@playwright/test` for test authoring.

## Example: Adding a Test
1. Create a `tests/` directory.
2. Add a test file, e.g., `tests/example.spec.ts`:
   ```ts
   import { test, expect } from '@playwright/test';
   test('basic test', async ({ page }) => {
     await page.goto('https://playwright.dev');
     await expect(page).toHaveTitle(/Playwright/);
   });
   ```
3. Update the `test` script in `package.json` to:
   ```json
   "test": "playwright test"
   ```

## References
- [Playwright MCP documentation](https://www.npmjs.com/package/@playwright/mcp)
- [Playwright Test documentation](https://playwright.dev/docs/test-intro)

---

_If you add custom scripts, workflows, or conventions, update this file to help future AI agents and developers._
