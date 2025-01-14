import { expect, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  // The field selectors 
  private usernameInput = 'input[placeholder="Username"]';
  private passwordInput = 'input[name="password"]'; 
  private loginButton = 'button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'; 
  private errorMessage = 'span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'; 

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/'); // login URL
  }

    async login(username: string, password: string) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
      await this.page.waitForTimeout(2000);
    }

    async loginEmpty() {
        // Click on the login button without filling the fields
        await this.page.click(this.loginButton);
        await this.page.waitForTimeout(2000);
    
        const errorElement = this.page.locator(this.errorMessage).first();
        await expect(errorElement).toBeVisible();
    
        // Catch the error message
        const errorText = await errorElement.textContent();

        // Validate the required word is visible
        expect(errorText?.trim()).toContain('Required'); 
   
      }

      async InvalidCredentials(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.page.waitForTimeout(2000);
      }
}
