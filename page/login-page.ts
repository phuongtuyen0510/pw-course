import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  //khai báo thuộc tính/expath chung của loginPage
  xpathUserName = "#username";
  xpathPassword = "#password";
  xpathButtonLogin = "#login";

  constructor(page: Page) {
    super(page);
  }
  //method đặc trưng của Login
  async navigateToLoginPage() {
    await this.navigateTo("url_login_in");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.xpathUserName).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.xpathPassword).fill(password);
  }

  async clickButtonLogin() {
    await this.page.locator(this.xpathButtonLogin).click();
  }

  async logIn(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickButtonLogin();
  }
}
