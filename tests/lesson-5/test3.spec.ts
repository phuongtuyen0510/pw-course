import { test, expect } from "@playwright/test";

test("Add new 100 todo task", async ({ page }) => {
  await test.step("truy cap vao trang web", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("click to: Bài học 3: Todo page ", async () => {
    // await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
    await expect(
      page.getByRole("heading", { name: "To-Do List" }),
    ).toBeVisible();
  });

  await test.step("Add new 100 todo task", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  await test.step(" Xoa todo la so le ", async () => {
    page.on("dialog", async (dialog) => await dialog.accept()); // confirmation dialog
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        await page.locator(`//button[@id="todo-${i}-delete"]`).click();
      }
    }
  });
});
