
import ReusablesComponents from '../reuse'
class userLocationMaster {


    get userLocationCode() { return ("//input[@id='UserLocationCode']") }
    getUserLocationCodeDD(userLocationCode) { return (`//ul[@id='UlFetch']/li/div/a[.='${userLocationCode}']`) }


    async enterUserLocationCode(userLocationCode, concatfmsUserLocationCode) {
        // await ReusablesComponents.waitAndSetValue(this.userLocationCode, userLocationCode)
        await ReusablesComponents.waitAndSetValue(this.userLocationCode, '')

        for (const char of userLocationCode) {

            await $(this.userLocationCode).addValue(char)
            await browser.pause(500)
        }
        await ReusablesComponents.spotClick(this.getUserLocationCodeDD(concatfmsUserLocationCode))
    }
}
export default new userLocationMaster()
