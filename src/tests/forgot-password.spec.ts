import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/forgot-password.page';
import { testConfig } from '../config/test-config';

test.describe('Forgot Password Flow', () => {
  let forgotPasswordPage: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    forgotPasswordPage = new ForgotPasswordPage(page);

    // Navegar a la página de inicio
    await page.goto(testConfig.baseUrl);

    // Navegar al flujo de Forgot Password
    await forgotPasswordPage.gotoForgotPassword();

    // Validar que el flujo está abierto
    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    await expect(resetBanner).toBeVisible();
  });

  test('ForgotPassword', async ({ page }) => {
    // Validar que el flujo de Forgot Password está abierto
    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    await expect(resetBanner).toBeVisible();
  });

  test('ResetPassword', async ({ page }) => {
    // Completar el formulario para resetear la contraseña
    await forgotPasswordPage.ResetPassword(testConfig.forgotPasswordUser.username);

    // Localizar el banner de "Reset Password"
    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');

    // Capturar el texto del banner
    const bannerText = await resetBanner.textContent();

    // Validar que el texto contiene el mensaje esperado
    expect(bannerText?.trim()).toContain('Reset Password link sent successfully');
  });

  test('CancelFlow', async ({ page }) => {
    // Locate the login button
    const LoginLink = page.locator('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
 });
  
  
});
