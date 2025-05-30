import ReusablesComponents from '../reuse'

class serviceRequest {

    getSelectService(SelectService) { return $(`//select[@ng-model='ServiceRequestMst.Service']/option[.='${SelectService}']`) }
    getRequestType(RequestType) { return (`//select[@name='TypeOfRequestname']/option[.='${RequestType}']`) }
    getServiceRequest(serviceRequest) { return (`//select[@name='Service']/option[.='${serviceRequest}']`) }
    get requestorName() { return (`//input[@name='RequestorName']`) }
    getRequestorDD(RequestorDD) { return (`(//ul[@id='UlFetchhospital']/li/div/a[.='${RequestorDD}[1]`) }
    get userLocationCode() { return ("//input[@id='UserLocationCode']") }
    getUserLocationDD(userLocation) { return (`//ul[@id='UlFetchUserLocationCode']/li/div/a[contains(.,'${userLocation}')]`) }
    get details() { return ("//textarea[@name='Details']") }
    getFilterDD(filterdd) { return (`//select/option[.='${filterdd}']`) }
    getFilterDD2(filter2) { return (`//select[@class='selectopts']/option[.='${filter2}']`) }
    get editIcon() { return ("//a[@class='ui-icon ui-icon-pencil']") }
    get requestNo() { return ("//td[@aria-describedby='grid_RequestNo']") }
    get resetIcon() { return ("//a[.='Reset']") }


    async selectService(SelectService) {
        await ReusablesComponents.waitAndClick(this.getSelectService(SelectService))
    }

    async selectServiceRequest(serviceRequest) {
        await ReusablesComponents.waitAndClick(this.getServiceRequest(serviceRequest))
    }

    async selectRequestType(RequestType) {
        await ReusablesComponents.waitAndClick(this.getRequestType(RequestType))
    }

    async selectRequestorName(RequestorName, concatRequestorName) {
        await ReusablesComponents.waitAndSetValue(this.requestorName, RequestorName)
        await ReusablesComponents.spotClick(this.getRequestorDD(concatRequestorName))
    }

    async selectUserLocationCode(userLocationCode, concatuserLocationCode) {

        await ReusablesComponents.waitAndSetValue(this.userLocationCode, '')

        for (const char of userLocationCode) {
            await $(this.userLocationCode).addValue(char)
            await browser.pause(500)
        }

        await ReusablesComponents.spotClick(this.getUserLocationDD(concatuserLocationCode))
    }

    async enterDetails(details) {

        await ReusablesComponents.waitAndSetValue(this.details, details)
    }

    async selectFilter(filterdd) {

        const icon = await ReusablesComponents.waitForDisplay(this.resetIcon)
        if (icon == true) {
            await ReusablesComponents.waitAndClick(this.resetIcon)
        }
        await ReusablesComponents.spotClick(this.getFilterDD(filterdd))
    }
    async selectFilter2(filter2) {
        await ReusablesComponents.waitAndClick(this.getFilterDD2(filter2))
    }

    async clickEditIcon() {
        await ReusablesComponents.spotClick(this.editIcon)
    }

    async getRequestNo() {
        const requestNo = await ReusablesComponents.waitAndGetText(this.requestNo)
        console.log("RequestNo Printed Successfully" + requestNo)
        return requestNo
    }

} export default new serviceRequest()
