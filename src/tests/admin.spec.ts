import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/admin.page';
import { LoginPage } from '../pages/login.page';
import { testConfig } from '../config/test-config';

// Function to generate random name
function generateRandomName(): string {
  const prefix = 'User_';
  const randomString = Math.random().toString(36).substring(2, 8);
  return '${prefix}${randomString}';
}

test.describe('AddNewUser', () => {
  let adminPage: AdminPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
     adminPage = new AdminPage(page);
     loginPage = new LoginPage(page);

    
     await loginPage.goto();
     await loginPage.login(testConfig.validUser.username, testConfig.validUser.password);

    });

   test('Add User Succesful', async({page}) => {
    //Navigate to the admin page to create a new user
    await adminPage.NavigateAdminSection();

    //Validate the Admin section screen is open 
    const UserText = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
    const Title = await UserText.textContent();
    expect(Title?.trim()).toContain('Save');

    const userRoleAdmin = 'Admin'; 
    
    const statusEnabled = 'Enabled'; 
    
    const randomEmployeeName = 'a';


    const randomUsername = generateRandomName();
    const password = testConfig.password.password;
    const confirmPassword = testConfig.confirmpassword.password;
    await adminPage.AddUser(randomEmployeeName, randomUsername, userRoleAdmin, statusEnabled, password, confirmPassword);
   

    });

});