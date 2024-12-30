
import ReusablesComponents from '../reuse'
class userLocationMaster {


    get userLocationCode() { return ("//input[@id='UserLocationCode']") }
    getUserLocationCodeDD(userLocationCode) { return (`//ul[@id='UlFetch']/li/div/a[.='${userLocationCode}']`) }


    async enterUserLocationCode(userLocationCode, concatfmsUserLocationCode) {
        await ReusablesComponents.waitAndSetValue(this.userLocationCode, userLocationCode)        
        await this.getUserLocationCodeDD(concatfmsUserLocationCode).click()
    }
}
export default new userLocationMaster()
