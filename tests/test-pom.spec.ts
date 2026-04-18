import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login-page";

test("Test-POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const username = "phuongtuyen";
  const password = "Abcd@1234";

  await test.step("Navigate to login page and Login", async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.logIn(username, password);
    // await this.fillUsername(username);
    // await this.fillPassword(password);
    // await this.clickButtonLogin();
  });
});
