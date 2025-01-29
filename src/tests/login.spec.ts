import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { testConfig } from '../config/test-config';

test('LoginSuccesful', async ({ page }) => {
  const loginPage = new LoginPage(page);

  
  await loginPage.goto();
  
  await loginPage.login(testConfig.validUser.username, testConfig.validUser.password);

  const dashboardLink = page.locator('a[href="/web/index.php/dashboard/index"]');

});


test('LoginEmpty', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
  
    await loginPage.loginEmpty();
  });


  test('InvalidUser', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    
    await loginPage.goto();
  
    
    await loginPage.login(testConfig.invalidUser.username, testConfig.invalidUser.password);

    
    const InvalidBanner = page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]');
    await expect(InvalidBanner).toBeVisible();
    
    const InvalidMessage = await InvalidBanner.textContent();

    expect(InvalidMessage?.trim()).toContain('Invalid credentials');

  });