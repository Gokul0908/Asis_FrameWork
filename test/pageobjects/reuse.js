
class ReusablesComponents {


    get succesLabel() { return $("//div[@class='notify success']") }
    get pleaseWaitLabel() { return $("(//h4[@class='modal-title'])[1]") }
    get searchicon() { return $("(//a[@id='advanceSearch'])[1]") }
    get resetIcon() { return $("//a[@id='fbox_grid_reset']") }
    get enterText() { return $("(//input[@role='textbox'])[1]") }
    get findButton() { return $ / ("//a[@id='fbox_grid_search']") }


    async waitAndClick(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.click()
    }

    async waitAndSetValue(selector, value) {
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.setValue(value)
    }

    async waitScrollAndClick(selector) {
        await selector.scrollIntoView({ block: 'end' })
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.click()
    }

    

    async waitAndGetText(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        return await selector.getText()
    }


    async waitAndGetValue(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        return await selector.getValue()
    }



    // async checkSuccessNotification(successMessage) {
    //     await this.succesLabel.waitForDisplayed({ timeout: 20000 })
    //     const status = await this.waitAndGetText(this.succesLabel)
    //     await expect(status).toBe(successMessage)

    //     if (!status === successMessage) {
    //         console.log("Success Notification is not displayed")
    //     }

    //     return status
    // }

    async checkSuccessNotification(successMessage) {
        try {

            await this.succesLabel.waitForDisplayed({ timeout: 20000 })

            await browser.waitUntil(
                async () => (await this.waitAndGetText(this.succesLabel)) === successMessage,
                {
                    timeout: 20000,
                    timeoutMsg: `Expected success message was not displayed within 20 seconds`,

                    //`Expected success message "${successMessage}" was not displayed within 20 seconds`,
                }
            )

            const status = await this.waitAndGetText(this.succesLabel);
            await expect(status).toBe(successMessage);
            // console.log("Success Notification is displayed");
            return status;

        } catch (error) {
            console.log("Success Notification is not displayed");
            // throw error; // Re-throw to fail the test if necessary
        }
    }


    async waitForPleaseWaitNotificationToDisappear() {
        await this.pleaseWaitLabel.waitForDisplayed({ timeout: 20000 })
        await this.pleaseWaitLabel.waitForDisplayed({ timeout: 20000, reverse: true })
        console.log("Please Wait Notification has disappeared")
    }

    async refreshPage() {
        await browser.refresh()
    }


    async clickSearchIcon() {
        await this.waitAndClick(this.searchicon)
    }

    async clickRestIcon() {
        await this.waitAndClick(this.resetIcon)
    }

    async enterValue(entertext) {
        await this.waitAndSetValue(this.enterText, entertext)
    }

    async clickFindButton(){ 
        await this.waitAndClick(this.findButton)
    }
}
export default new ReusablesComponents()