import ReusablesComponents from "../reuse"

class userAreaMaster {


    get userAreaCode() { return ("//input[@id='UserAreaCode']") }
    getUserAreaCodeDD(userAreaCode) { return (`//ul[@id='UlFetchCode']/li/div/a[.='${userAreaCode}']`) }
    get startServiceDate() { return ("//input[@id='StartServiceDate']") }


    async enterUserAreaCode(userAreaCode, concatfmsUserAreaCode) {
        await ReusablesComponents.waitAndSetValue(this.userAreaCode, userAreaCode)        
        await this.getUserAreaCodeDD(concatfmsUserAreaCode).click()
    }

    async enterStartServiceDate(startServiceDate) {
        await ReusablesComponents.waitAndSetValue(this.startServiceDate, startServiceDate)
    }
}

export default new userAreaMaster()