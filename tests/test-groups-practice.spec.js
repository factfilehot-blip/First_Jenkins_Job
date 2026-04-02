import {test} from '@playwright/test';
test.describe("Groups Practice", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com/")
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000)
    });

    
    test('title', async ({ page }) => {
         console.log(await page.title());
    });

    test("url", async ({ page }) => {
         console.log(await page.url());
    });
});