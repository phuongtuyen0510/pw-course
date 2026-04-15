import { test, expect } from "@playwright/test";

test("ADVANCE:ADD PERSONAL NOTES", async ({ page }) => {
  let titles, contents;
  await test.step("go to vnexpress get data", async () => {
    await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", {
      waitUntil: "domcontentloaded",
    });
    titles = await page
      .locator("//h2[@class='title-news']/a")
      .allTextContents();
    contents = await page
      .locator("//p[@class='description']/a")
      .allTextContents();
    console.log(titles);
  });
  await test.step("Truy cập trang home", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("click to: Bài học 4: Personal Notes ", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });

  await test.step("Them moi 10 notes", async () => {
    for (let i = 0; i < 10; i++) {
      await page.locator('//input[@id="note-title"]').fill(`title${i}`);
        await page.locator("//textarea[@id='note-content']").fill(`contents${i}`);
      await page.locator("//button[@id='add-note']").click();
    }
  });
});
