import { Page } from "@playwright/test";

export class BasePage {
  //thuoc tinh
  page: Page;
//   xpathDashboard = "#dashboard";

  // hàm khởi tạo
  constructor(page: Page) {
    this.page = page;
  }
  // method
  async navigateTo(url: String) {
    await this.page.goto(url);
  }
}
