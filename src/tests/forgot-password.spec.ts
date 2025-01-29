import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/forgot-password.page';
import { testConfig } from '../config/test-config';

test.describe('Forgot Password Flow', () => {
  let forgotPasswordPage: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    forgotPasswordPage = new ForgotPasswordPage(page);

    
    await page.goto(testConfig.baseUrl);

    
    await forgotPasswordPage.gotoForgotPassword();

    
    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    await expect(resetBanner).toBeVisible();
  });

  test('ForgotPassword', async ({ page }) => {
    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    await expect(resetBanner).toBeVisible();
  });

  test('ResetPassword', async ({ page }) => {
    await forgotPasswordPage.ResetPassword(testConfig.forgotPasswordUser.username);

    const resetBanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    const bannerText = await resetBanner.textContent();

    expect(bannerText?.trim()).toContain('Reset Password link sent successfully');
  });


  test('CancelFlow', async ({ page }) => {
    const LoginLink = page.locator('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');

  });


});
