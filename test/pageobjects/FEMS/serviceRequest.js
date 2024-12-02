import ReusablesComponents from '../reuse'

class serviceRequest {

    getSelectService(SelectService) { return $(`//select[@ng-model='ServiceRequestMst.Service']/option[.='${SelectService}']`) }
    getRequestType(RequestType) { return $(`//select[@name='TypeOfRequestname']/option[.='${RequestType} ']`) }
    getServiceRequest(serviceRequest) { return $(`//select[@name='Service']/option[.='${serviceRequest}']`) }
    get requestorName() { return $(`//input[@name='RequestorName']`) }
    getRequestorDD(RequestorDD) { return $(`//ul[@id='UlFetchhospital']/li/div/a[.='${RequestorDD}']`) }
    get userLocationCode() { return $("//input[@id='UserLocationCode']") }
    getUserLocationDD(userLocation) { return $(`//ul[@id='UlFetchUserLocationCode']/li[@class='table-responsive tableFixedHeight']/div/a[contains(.,'${userLocation}')`) }
    get details() { return $("//textarea[@name='Details']") }



    async selectService(SelectService) {
        await ReusablesComponents.waitAndClick(this.getSelectService(SelectService))
    }

    async selectRequestType(RequestType) {
        await ReusablesComponents.waitAndClick(this.getRequestType(RequestType))
    }

    async selectServiceRequest(serviceRequest) {
        await ReusablesComponents.waitAndClick(this.getServiceRequest(serviceRequest))
    }

    async selectRequestorName(RequestorName, concatRequestorName) {
        await ReusablesComponents.waitAndSetValue(this.requestorName, RequestorName)
        await this.getRequestorDD(concatRequestorName).click()
    }

    async selectUserLocationCode(userLocationCode, concatuserLocationCode) {

        await ReusablesComponents.waitAndSetValue(this.userLocationCode, userLocationCode)
        await this.getUserLocationDD(concatuserLocationCode).click()
    }

    async enterDetails(details) {

        await ReusablesComponents.waitAndSetValue(this.details, details)
    }




} export default new serviceRequest()
