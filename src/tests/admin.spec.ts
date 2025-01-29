/*import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/admin.page';
import { testConfig } from '../config/test-config';


test('CreateUserSuccesful', async ({ page }) => {
  const AdminPage = new AdminPage(page);

  // Navigate to the login page
  await loginPage.goto();

  // Complete the login form
  await loginPage.login(testConfig.validUser.username, testConfig.validUser.password);

  // Validate the "dashboard" text is visible in the pag
  const dashboardLink = page.locator('a[href="/web/index.php/dashboard/index"]');

});*/