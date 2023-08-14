export class ExamplePage {
    constructor (page, isMob) {
        this.page = page
        this.isMob = isMob

        this.searchInput = this.page.locator('#searchInput')
    }

    async goToPage() {
        this.page.goto('')
    }

    async search(input) {
        this.searchInput.fill(input)
    }
}

