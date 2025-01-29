import { Page } from '@playwright/test';

export class AdminPage {
  private page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  private AddButton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'; 
  private AdminSection = 'a[href="/web/index.php/admin/viewAdminModule"]';
  private EmployeeName = 'input[placeholder="Type for hints..."]';
  private AutocompleteOptions = 'div[role="listbox"]';
  private UserRoleA = 'div[class="oxd-select-text-input"]';
  private StatusE = 'div[class="oxd-select-text-input"]';

  private get Username(){
    return this.page.locator('input[class="oxd-input oxd-input--active"]').nth(0);
  }

  private get Password(){
    return this.page.locator('input[class="oxd-input oxd-input--active"]').nth(1);
  }

  private get ConfirmPassword(){
    return this.page.locator('input[class="oxd-input oxd-input--active"]').nth(2);
  }

  private get UserRoleAdmin(){
    return this.page.locator('div[class="oxd-select-text oxd-select-text--active"]').nth(0);
  }

  private get StatusEnabled(){
    return this.page.locator('div[class="oxd-select-text oxd-select-text--active"]').nth(1);
  }


  async NavigateAdminSection(){
    await this.page.click(this.AdminSection);
    await this.page.click(this.AddButton);
  }

  async AddUser(EmployeeName: string, Username: string, UserRoleAdmin: string, StatusEnabled: string, Password: string, ConfirmPassword: string){
    //Select the user role field
    const userrolea = this.page.locator(this.UserRoleA);
    await userrolea.first().click();
    await this.page.waitForTimeout(6000);


    //Select the status field
    const statuse = this.page.locator(this.StatusE);
    await statuse.nth(0).click();
    

    //Fill the password field
    await this.Password.fill(Password);
   

    //Fill employee name 
    await this.page.fill(this.EmployeeName, EmployeeName);
    const autocompleteOptions = this.page.locator(this.AutocompleteOptions);
    await autocompleteOptions.first().click();
    

    //Fill username
    await this.Username.fill(Username);
  ;


    //Fill the confirm password field
    await this.ConfirmPassword.fill(ConfirmPassword);
  
    
  }


}
