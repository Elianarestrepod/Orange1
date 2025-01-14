import { test, expect } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/forgot-password.page';
import { testConfig } from '../config/test-config';


test('Navigate to Forgot Password page', async ({ page }) => {
    // Navegar al flujo de "Forgot Password"
    const forgotPasswordPage = new ForgotPasswordPage(page);

     // Catch the tag that containt the error message
     const ResetPassword = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
     
     // Validate the required word is visible
     expect(ResetPassword).toBeVisible;

  });

 test('ResetPassword', async ({ page }) => {
   const forgotPasswordPage = new ForgotPasswordPage(page);
 
   // Navigate to the login page
   await forgotPasswordPage.gotoForgotPassword();
 
   // Complete the login form
   await forgotPasswordPage.ResetPassword(testConfig.forgotPasswordUser.username);
 
   // Validate the "dashboard" text is visible in the pag
   const resetbanner = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
   await expect(resetbanner).toBeVisible();
    
    // Catch the error message
    const ResetTitle = await resetbanner.textContent();

    // Validate the required word is visible
    expect(ResetTitle?.trim()).toContain('Reset Password link sent successfully');
 
 });
  

