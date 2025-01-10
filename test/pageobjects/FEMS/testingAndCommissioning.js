
import ReusablesComponents from "../../pageobjects/reuse.js"

class TestingandCommissioning {

    get serviceRequestNo() { return ("//input[@name='ServiceReqNo']") }
    getServiceRequestDD(requestno) { return (`//ul[@id='UlFetch1']/li/div/a[.='${requestno}']`) }
    get newTypeCodeRequest() { return ("//button[contains(.,'New Type Code Request')]") }
    gettndcType(type) { return (`//select[@id='ddlTCType']/option[.='${type}']`) }
    get tndcDate() { return ("//input[@id='txtTCDate']") }
    get requestorDate() { return ("//input[@name='RequestorDate']") }
    get requestorName() { return ("//input[@name='RequestorName']") }
    getAssetClasification(selectClasification) { return (`//select[@name='AssetClassification']/option[.='${selectClasification}']`) }
    getAssetCategory(selectCategory) { return (`//select[@name='AssetCategory']/option[.='${selectCategory}']`) }
    getAssetGroupCode() { return ("//input[@name='AssetgroupCode']") }
    getMaintenancesCategory(selectCategory) { return (`//select[@name='MaintenanceCategory']/option[contains(.,'${selectCategory}')]`) }
    get assetTypeCode() { return ("(//input[@name='AssetTypeCode'])[2]") }



    async enterServiceRequestNo(requestno) {
        await ReusablesComponents.waitAndSetValue(this.serviceRequestNo, '')

        for (const char of requestno) {
            await $(this.serviceRequestNo).addValue(char)
            await browser.pause(500)
        }
        await ReusablesComponents.spotClick(this.getServiceRequestDD(requestno))
    }

    async ClickNewTypeCodeRequest() {
        await ReusablesComponents.waitAndClick(this.newTypeCodeRequest)
    }

    async selectTandCType(type) {

        await ReusablesComponents.waitAndClick(this.gettndcType(type))
    }

    async selectTandCDate(TodayDate) {

        await ReusablesComponents.waitAndSetValue(this.tndcDate, TodayDate)
        await browser.keys('Enter')
    }

    async EnterRequestorDate(requestordate) {

        await ReusablesComponents.waitAndSetValue(this.requestorDate, requestordate)

        for (const char of requestordate) {
            await $(this.requestorDate).addValue(char)
            await browser.pause(500)
        }
        await browser.keys('Enter')
    }

}
export default new TestingandCommissioning()