import { Page } from '@playwright/test';

export class AdminPage {
  private page: Page;
  private AddButton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'; 
 

  constructor(page: Page) {
    this.page = page;
  }

  /*async gotoForgotPassword() {
    // Navigate to the forgot password link
    await this.page.click(this.forgotPasswordLink);
    await this.page.waitForTimeout(2000);
  }*/


}
