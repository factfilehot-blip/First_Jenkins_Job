import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test("@env-test", async ({ page }) => {
    

    console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);

  });

  test("Test 2", async ({ page }) => {

  });

  test("Test 3", async ({ page }) => {

  });
});
test("Bypass authentication by encoding the credentials as base64", async ({
  page,
}) => {
  let credentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${credentials}` });
  page.goto("https://the-internet-5chk.onrender.com/basic_auth");

  await page.waitForTimeout(3000)
});