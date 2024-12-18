
import ReusablesComponents from "../../pageobjects/reuse.js"

class TestingandCommissioning {

    get serviceRequestNo() { return $("//input[@name='ServiceReqNo']") }
    getServiceRequestDD(requestno) { return $(`//ul[@id='UlFetch1']/li/div/a[.='${requestno}']`) }
    get newTypeCodeRequest() { return $("//button[contains(.,'New Type Code Request')]") }
    gettndcType(type) { return $(`//select[@id='ddlTCType']/option[.='${type}']`) }
    get tndcDate() { return $("//input[@id='txtTCDate']") }

    async enterServiceRequestNo(requestno) {
        await ReusablesComponents.waitAndSetValue(this.serviceRequestNo, requestno)
        await ReusablesComponents.waitAndClick(this.getServiceRequestDD(requestno))
    }

    async ClickNewTypeCodeRequest() {
        await ReusablesComponents.waitAndClick(this.newTypeCodeRequest)
    }

    async selectTandCType(type) {

        await ReusablesComponents.waitAndClick(this.gettndcType(type))
    }

    async selectTandCDate(TodayDate){

        await ReusablesComponents.waitAndSetValue(this.tndcDate, TodayDate)
    }

}
export default new TestingandCommissioning()