import { test } from '../fixtures'

test('Example Test', async ({ page, isMobile, examplePage, beforeTest, afterTest }) => {
    await examplePage.goToPage()
    await examplePage.search('This is during test.')
    await page.waitForTimeout(4000) //test
})
