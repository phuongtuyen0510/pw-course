import { test, expect } from "@playwright/test";

test("Add Produce to the basket", async ({ page }) => {
  await test.step("Truy cạp vao trang web chinh", async () => {
    await page.goto("https://material.playwrightvn.com/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("click Bài học 2: Product page.", async () => {
    await page.getByRole("link", { name: "Bài học 2: Product page" }).click();
    // Expects page to have a heading with the name of User Registration.
    await expect(
      page.getByRole("heading", { name: "Simple E-commerce" }),
    ).toBeVisible();
  });

  await test.step("add the produce to the basket", async () => {
    await page.locator("//button[@data-product-id='1']").click({clickCount:2}); // Chon 2 san pham 1
    await page.locator("//button[@data-product-id='2']").click({clickCount:3}); //Chon 3 san pham 2
    await page.locator("//button[@data-product-id='3']").click();  // chon 1 san pham 3
  });
});