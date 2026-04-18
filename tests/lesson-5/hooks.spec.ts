import { test } from "@playwright/test";

test.describe("Hooks", () => {
//   test.describe.configure({ mode: "serial" }); // 👈 thêm dòng này 
  test.beforeAll(async () => {
    console.log("Before all");
  });

  test.afterAll(async () => {
    console.log("After all");
  });

  test.beforeEach(async () => {
    console.log("Before each");
  });

  test.afterEach(async () => {
    console.log("After each");
  });

  test("test1", async ({}) => {
    console.log("test 1");
  });

  test("test2", async ({}) => {
    console.log("test 2");
  });

  test("test3", async ({}) => {
    console.log("test 3");
  });
});
