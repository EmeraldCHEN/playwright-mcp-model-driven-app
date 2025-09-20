import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/6d81227b-8855-458d-8135-4955fd7edfa6/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAABLEV92JsBHwpwEAIkjjRDZGSJ_2MATAe7RK-vTr6hKRCq2DXMETWpuisCzloHOrIQEAAAABAAAACS5yZWRpcmVjdFpodHRwczovL29yZzE2OTFmMTMyLmNybTYuZHluYW1pY3MuY29tL21haW4uYXNweD9hcHBpZD1iNjQ0NzdmMi0yYTg1LWYwMTEtYjRjYy0wMDBkM2FkMTgxZjY%26ReplyUrl%3DMAAAABLEV92JsBHwpwEAIkjjRDa3nNbhcz2RzA1PspDxYHIBm6NpQiMwj4W3ey%252fTvjY%252bmmh0dHBzOi8vc3lkLS1vY2Vjcm1saXZlc2c2MDIuY3JtNi5keW5hbWljcy5jb20v%26RedirectTo%3DMAAAABLEV92JsBHwpwEAIkjjRDa2ZT%252b38Flwl5mEgjotHVVwwDSNqC20GN3AfbcmuDOg%252fmh0dHBzOi8vb3JnMTY5MWYxMzIuY3JtNi5keW5hbWljcy5jb20v%26RedirectToForMcas%3Dhttps%253a%252f%252forg1691f132.crm6.dynamics.com%252fmain.aspx%253fappid%253db64477f2-2a85-f011-b4cc-000d3ad181f6&response_mode=form_post&nonce=638939420778885295.N2M0YjAzZjItZWY0My00ODYxLTk5MmUtZTY1ZDZkMmMyMDg1YTM5MzcxYWItMGQ0ZC00MjBjLTg4M2YtNGY2YjFlOWMxMTc3&redirect_uri=https%3A%2F%2Fsyd--ocecrmlivesg602.crm6.dynamics.com%2F&max_age=86400&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=ID_NET472&x-client-ver=8.14.0.0&sso_reload=true');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('');
  await page.getByRole('textbox', { name: 'Enter the password for' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.locator('iframe[title="AppLandingPage"]').contentFrame().getByRole('link', { name: 'Recruitment HR Recruiting App' }).click();
  await page.getByText('Label').click();
  await expect(page.locator('[id="Label - 4-Label - 4-Label1-component"]')).toContainText('Welcome');
  await page.locator('.powerapps-icon').click();
  await page.locator('#headerControlsList_1').getByText('Open').click();
  await expect(page.locator('#headerControlsList_1')).toContainText('Open');
  await page.getByRole('treeitem', { name: 'Applications' }).locator('div').nth(3).click();
  await page.getByRole('menuitem', { name: 'New', exact: true }).click();
  await page.getByRole('combobox', { name: 'Role, Lookup' }).click();
  await page.getByText('Sales Manager').click();
  await page.getByRole('combobox', { name: 'Role Status' }).click();
  await page.getByRole('option', { name: 'Open' }).click();
  await page.getByRole('combobox', { name: 'Candidate, Lookup' }).click();
  await page.getByText('Marilisa Beaty').click();
  await page.getByRole('menuitem', { name: 'Save (CTRL+S)' }).click();
  await page.getByRole('textbox', { name: 'Application Number' }).click();
  await expect(page.getByRole('textbox', { name: 'Application Number' })).toBeVisible();
  await page.getByRole('menuitem', { name: 'Save & Close' }).click();
  await page.getByRole('button', { name: 'Application Number' }).click();
  await page.getByRole('menuitemradio', { name: 'Z to A' }).click();
});