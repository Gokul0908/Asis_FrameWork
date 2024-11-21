
class ReusablesComponents {


    get succesLabel() { return $("//div[@class='notify success']") }
    get pleaseWaitLabel() { return $("(//h4[@class='modal-title'])[1]") }

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



    async checkSuccessNotification(successMessage) {
        await this.succesLabel.waitForDisplayed({ timeout: 20000 })
        const status = await this.waitAndGetText(this.succesLabel)
        await expect(status).toBe(successMessage)

        if (!status === successMessage) {
            console.log("Success Notification is not displayed")
        }

        return status
    }

    async waitForPleaseWaitNotificationToDisappear() {
        await this.pleaseWaitLabel.waitForDisplayed({ timeout: 20000 })
        await this.pleaseWaitLabel.waitForDisplayed({ timeout: 20000, reverse: true })
        console.log("Please Wait Notification has disappeared")
    }

    async refreshPage() {
        await browser.refresh()
    }
}
export default new ReusablesComponents()