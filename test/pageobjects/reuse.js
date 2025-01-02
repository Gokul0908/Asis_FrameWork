import * as Constants from '../../Constants/const.js'

class ReusablesComponents {


    get succesLabel() { return ("//div[@class='notify success']") }
    get pleaseWaitLabel() { return ("(//h4[@class='modal-title'])[1]") }
    get searchicon() { return ("(//a[@id='advanceSearch'])[1]") }
    get resetIcon() { return ("//a[@id='fbox_grid_reset']") }
    get enterText() { return ("(//input[@role='textbox'])[1]") }
    get findButton() { return ("//a[@id='fbox_grid_search']") }
    get UnSavedChanges() { return ("//div[@class='bootbox-body']") }
    get noButton() { return ("//div[@class='modal-footer']/button[.='No']") }

    async waitAndClick(selector) {
        await $(selector).waitForDisplayed({ timeout: 60000 })
        await $(selector).click()
    }

    async spotClick(selector) {
        await $(selector).click()
    }

    async getSize(selector) {
        return await $(selector).getSize()
    }

    async waitAndSetValue(selector, value) {
        // await $(selector).waitForDisplayed({ timeout: 60000 })
        await $(selector).setValue(value)
    }

    async waitScrollAndClick(selector) {
        await $(selector).scrollIntoView({ block: 'end' })
        await $(selector).waitForDisplayed({ timeout: 60000 })
        await $(selector).click()
    }

    async waitAndGetText(selector) {
        await $(selector).waitForDisplayed({ timeout: 60000 })
        return await $(selector).getText()
    }

    async waitAndGetValue(selector) {
        await $(selector).waitForDisplayed({ timeout: 60000 })
        return await $(selector).getValue()
    }

    async moveToTheElement(selector) {
        await $(selector).moveTo()
    }

    async waitForDisplay(selector) {
        await $(selector).waitForDisplayed({ timeout: 60000 })
    }

    async isDisplayed(selector) {
        return await $(selector).isDisplayed()
    }

    async waitForElementIsClickable(selector) {

        await $(selector).waitForClickable()
    }
    // async waitForPageToLoad(timeout = 60000) {
    //     await browser.waitUntil(
    //         async () => (await browser.execute(() => document.readyState)) === 'complete',
    //         {
    //             timeout,
    //             timeoutMsg: 'Page did not load completely within the given time'
    //         }
    //     );
    // }


    async waitForPageToLoad(timeout = 60000) {
        await browser.waitUntil(
            async () => {
                const readyState = await browser.execute(() => document.readyState);
                return readyState === 'complete';
            },
            {
                timeout,
                timeoutMsg: 'Page did not load completely within the given time'
            }
        );

        // Ensure all network requests are complete
        await browser.waitUntil(
            async () => {
                const pendingRequests = await browser.execute(() => {
                    return window.performance.getEntriesByType('resource')
                        .filter(resource => resource.initiatorType === 'xmlhttprequest' || resource.initiatorType === 'fetch')
                        .some(resource => resource.responseEnd === 0);
                });
                return !pendingRequests;
            },
            {
                timeout,
                timeoutMsg: 'Some network requests are still pending after page load'
            }
        );

        console.log('Page and all DOM elements are fully loaded!');
    }


    async waitForPendingRequests(msTimeout = 30000, acceptablePendingRequests = 7) {
        try {
            await browser.waitUntil(
                async () => {
                    const pendingRequests = await browser.execute(() => {
                        return window.performance.getEntriesByType('resource')
                            .filter(resource =>
                                resource.initiatorType === 'xmlhttprequest' ||
                                resource.initiatorType === 'fetch'
                            ).length;
                    });
                    return pendingRequests <= acceptablePendingRequests;
                },
                {
                    timeout: msTimeout,
                    timeoutMsg: 'Failed to wait for all pending requests to complete!'
                }
            );

            console.log('All pending requests have been completed or are within acceptable limits.');
        } catch (error) {
            if (error.message.includes('timeout')) {
                console.error(`Timeout waiting for pending requests: ${error.message}`);
            } else {
                console.error(`An error occurred while waiting for pending requests: ${error.message}`);
            }
            throw error;
        }
    }




    async waitUnSavedChanges() {

        const Text = await this.waitAndGetText(this.UnSavedChanges)
        if (Text == Constants.OriginalText) {

            await this.waitAndClick(this.noButton)
        }
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

            await this.waitForDisplay(this.succesLabel)
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
        await this.waitForDisplay(this.pleaseWaitLabel)
        await this.waitForDisplay(this.pleaseWaitLabel, { timeout: 20000, reverse: true })
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
        await this.waitAndSetValue(this.enterText, '')

        for (const char of entertext) {
            await $(this.enterText).addValue(char)
            await browser.pause(500)
        }
    }

    async clickFindButton() {
        await this.waitAndClick(this.findButton)
    }
}
export default new ReusablesComponents()