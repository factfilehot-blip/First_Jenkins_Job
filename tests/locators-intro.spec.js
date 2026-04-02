import { test } from '@playwright/test';

test('', async ({ page }) => {
    // navigate to https://www.google.com
    await page.goto("https://www.google.com")
    // wait for 3 seconds
    await page.waitForTimeout(3000)

    let searchInput = page.locator("//textarea[@class = 'gLFyf']");
    await searchInput.fill("CYDEO");
    await page.waitForTimeout(3000)
    await searchInput.press("Enter");
    await page.waitForTimeout(3000)


});

//textarea[@class = 'gLFyf']