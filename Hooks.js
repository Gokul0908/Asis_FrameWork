import { config } from "./wdio.conf";
import fs from 'fs';


class hooks {


    async beforeTest() {

        // await browser.deleteCookies()
        await browser.url(config.QA_Url)
        await browser.maximizeWindow()
    }

    // async beforeSuite() {
    //     await config.beforeSuite()
    // }

    async afterTest() {
        await config.afterTest()
        await browser.closeWindow()
    }

    async afterSuite() {
        await config.afterSuite()
    }
}

export default new hooks()
