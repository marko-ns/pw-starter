const base = require('@playwright/test')
import { ExamplePage } from './pages/ExamplePage'

export const test = base.test.extend({

    //an example of a page fixture
    examplePage: async ({ page, isMobile }, use) => {
        const examplePage = new ExamplePage(page, isMobile)
        await use(examplePage)
    },

    //an example of a beforeTest fixture
    //the code here goes to the Wiktionary free dictionary page before the test begins
    //basically anything you write BEFORE await use() will be run before the test
    beforeTest: async ({ page, isMobile }, use) => {
        console.log('Before test start. Dictionary')
        await page.goto('')
        await page.getByRole('link', { name: 'Wiktionary free dictionary' }).click()
        await page.locator('#searchInput').fill('This')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('is')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('before')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('test.')
        await page.waitForTimeout(2000)
        await use(page, isMobile) //all code before this line runs before the test has started
    },
    //an example of an afterTest fixture
    //the code here goes to the Wikibooks Free textbooks after the test has finished
    //basically anything you write AFTER await use() will be run after the test
    afterTest: async ({ page, isMobile }, use) => {
        await use(page, isMobile) //all code after this line runs after the test has completed
        console.log('After test finish. Free textbooks')
        await page.getByRole('link', { name: 'Wikibooks Free textbooks' }).click()
        await page.locator('#searchInput').fill('This')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('is')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('after')
        await page.waitForTimeout(500)
        await page.locator('#searchInput').fill('test.')
        await page.waitForTimeout(2000)
    },
    //an example of a login fixture, it makes it so that the user is logged in before the test starts
    //NOT USABLE FOR WIKIPEDIA, THIS IS JUST AN EXAMPLE USING LITTLEFARMS
    login: async ({ page, isMobile }, use) => {
        await page.goto('/')
        await page.waitForTimeout(2000)
        await accountPage.accButton.click()
        await accountPage.emailInput.fill(process.env.EMAIL)
        await accountPage.loginPasswordInput.fill(process.env.PASSWORD)
        if (isMobile) {
            await page.waitForTimeout(4000)
        }
        await accountPage.logInButton.click()
        await page.waitForTimeout(4000)
        await use(page)
    }
})