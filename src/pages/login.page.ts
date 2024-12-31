import { expect, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameInput = 'input[placeholder="Username"]'; // Selector del campo de usuario
  private passwordInput = 'input[name="password"]'; // Selector del campo de contraseña
  private loginButton = 'button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'; // Selector del botón de login
  private errorMessage = 'span.oxd-input-field-error-message'; 

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/'); // URL del login
  }

  /*async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.page.waitForTimeout(2000);
  }*/

    async loginEmpty() {
        // Hacer clic en el botón de login sin completar campos
        await this.page.click(this.loginButton);
    
        // Esperar a que los mensajes de error sean visibles
        const usernameError = this.page.locator(`${this.errorMessage}:nth-of-type(1)`);
        const passwordError = this.page.locator(`${this.errorMessage}:nth-of-type(2)`);
    
        await expect(usernameError).toBeVisible();
        await expect(passwordError).toBeVisible();
    
        // Validar los textos de error
        const usernameErrorText = await usernameError.textContent();
        const passwordErrorText = await passwordError.textContent();
    
        expect(usernameErrorText?.trim()).toBe('Required');
        expect(passwordErrorText?.trim()).toBe('Required');
      }
}
