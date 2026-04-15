import { test, expect } from "@playwright/test";

test("Register Page", async ({ page }) => {
  await test.step("Truy cạp vao trang web chinh", async () => {
    await page.goto("https://material.playwrightvn.com/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Click the get started link.", async () => {
    await page.getByRole("link", { name: "Bài học 1: Register Page" }).click();
    // Expects page to have a heading with the name of User Registration.
    await expect(
      page.getByRole("heading", { name: "User Registration" }),
    ).toBeVisible();
  });
  
  await test.step("Input full data to register form", async () => {
    //Username
    await page.locator('//input[@id="username"]').fill("cappu");
    // email
    await page.locator('//input[@id="email"]').fill("cappu@yopmail.com");
    //gender
    await page.locator('//input[@id="female"]').check();
    //hobbies
    await page.locator('//input[@id="reading"]').click();
    await page.locator('//input[@id="cooking"]').click();
    //interests
    await page
      .locator('//select[@id="interests"]')
      .selectOption(["technology", "art", "music"]);
    //country
    await page
      .locator('//select[@id="country"]')
      .selectOption("United Kingdom");
    //DOB
    await page.locator('//input[@id="dob"]').fill("1990-05-10");
    //Profile Picture
    await page
      .locator('//input[@id="profile"]')
      .setInputFiles("image/image1.jpg");
    // Biography
    await page.locator('//textarea[@id="bio"]').fill("ahihihi ahuhu");
    //Rate us
    await page.locator('//input[@id="rating"]').fill("4");
    //Like color
    await page.locator('//input[@id="favcolor"]').fill("#00ff88");
    //Hover over me
    await page.locator('//div[@class="tooltip"]').hover();
    await expect;
    //subscribe
    await page.locator('//input[@id="newsletter"]').click();
    //Enable Feature
    // await page.locator('//input[@id="toggleOption"]').click();
    //Star rating
    // await page.locator('//div[@id="starRating"]').f
    //Custom date
  });

  await test.step('Click register button', async()=>{
  await page.locator('//button[@type="submit"]').click();
  })
});
