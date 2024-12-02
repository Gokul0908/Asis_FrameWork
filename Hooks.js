import { config }from './wdio.conf.js'

class Hooks {
    // This hook runs before the entire suite starts
    static async beforeSuite(suite) {
        console.log(`Starting Suite: ${suite.title}`);
    }

    // This hook runs before each individual test
    static async beforeTest(test, context) {
        console.log(`Starting Test: ${test.title}`);
        // Make sure the browser session is open before trying to navigate
        await browser.url(config.baseUrl);  // This will navigate to the base URL before each test
    }

    // This hook runs after each individual test
    static async afterTest(test, context, { error }) {
        if (error) {
            const screenshotPath = `./screenshots/${test.title.replace(/ /g, '_')}.png`;
            await browser.saveScreenshot(screenshotPath);
            console.log(`Screenshot captured for failed test: ${screenshotPath}`);
        } else {
            console.log(`Test Passed: ${test.title}`);
        }
    }

    // This hook runs after the entire suite finishes
    static async afterSuite(suite) {
        console.log(`Finished Suite: ${suite.title}`);
    }

    // This hook runs after all tests finish
    static async afterAll() {
        console.log('All tests finished, closing the browser.');
        await browser.deleteSession();
    }
}

export default new Hooks()
