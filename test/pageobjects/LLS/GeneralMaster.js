import ReusablesComponents from '../reuse.js'

class generalmaster {

    get standardUserDeptRefreshIcon() { return ("//span[@class='ui-icon ui-icon-refresh']") }
    get standardUserDeptUserAreaCodeaddButton() { return ("//td[@id='Add']") }
    get userDepartmentCode() { return ("//input[@name='UserDepartmentCode']") }
    get userDepartmentName() { return ("//input[@name='UserDepartmentName']") }
    get addNewButton() { return ("//button[@id='addnew']") }
    get backButton() { return ("(//button[.='Back'])[1]") }
    get asisHeartIcon() { return ("//img[@alt='Ministry of Health']") }


    async clickasisHeartIcon() {
        await ReusablesComponents.waitAndClick(this.asisHeartIcon)
    }
    async enterUserDepartmentCode(userDepartmentCode) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)

        // for (let i = 0; i < 1; i++) {
        //     await browser.keys('Backspace');
        // }
        await browser.pause(2)
        // await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)
    }

    async enterUserDepartmentName(userDepartmentName) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentName, userDepartmentName)
    }

} export default new generalmaster()