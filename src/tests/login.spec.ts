import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { testConfig } from '../config/test-config';

test('LoginSuccesful', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.goto();

  // Complete the login form
  await loginPage.login(testConfig.validUser.username, testConfig.validUser.password);

  // Validate the "dashboard" text is visible in the pag
  const dashboardLink = page.locator('a[href="/web/index.php/dashboard/index"]');

});


test('LoginEmpty', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    /// Navigate to the login page
    await loginPage.goto();
  
    // Try to login with empty fields
    await loginPage.loginEmpty();
  });


  test('InvalidUser', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    /// Navigate to the login page
    await loginPage.goto();
  
    // Complete the login form
    await loginPage.login(testConfig.invalidUser.username, testConfig.invalidUser.password);

    // Catch the tag that containt the error message
    const InvalidBanner = page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]');
    await expect(InvalidBanner).toBeVisible();
    
    // Catch the error message
    const InvalidMessage = await InvalidBanner.textContent();

    // Validate the required word is visible
    expect(InvalidMessage?.trim()).toContain('Invalid credentials');

  });