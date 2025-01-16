import { Page } from '@playwright/test';

export class ForgotPasswordPage {
  private page: Page;
  private forgotPasswordLink = 'p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'; 
  private usernameInput = 'input[placeholder="Username"]'; 
  private resetButton = 'button[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]';
  private cancelButton = 'button[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]'; 

  constructor(page: Page) {
    this.page = page;
  }

  async gotoForgotPassword() {
    // Navigate to the forgot password link
    await this.page.click(this.forgotPasswordLink);
    await this.page.waitForTimeout(2000);
  }

  async ResetPassword(username: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.click(this.resetButton);
    await this.page.waitForTimeout(2000);
  }

  async CancelFlow() {
    await this.page.click(this.cancelButton);
    await this.page.waitForTimeout(2000);
  }

}
