import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { testConfig } from '../config/test-config';

/*test('Flujo de login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navegar a la página de login
  await loginPage.goto();

  // Completar el formulario de login
  await loginPage.login(testConfig.validUser.username, testConfig.validUser.password);

  // Validar que el texto "Dashboard" sea visible
  const dashboardLink = page.locator('a[href="/web/index.php/dashboard/index"]');

});*/


test('LoginEmpty', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    // Navegar a la página de login
    await loginPage.goto();
  
    // Intentar login con campos vacíos y validar mensajes de error
    await loginPage.loginEmpty();
  });