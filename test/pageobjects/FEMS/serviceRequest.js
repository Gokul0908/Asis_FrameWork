import ReusablesComponents from '../reuse'

class serviceRequest {

    getSelectService(SelectService) { return $(`//select[@ng-model='ServiceRequestMst.Service']/option[.='${SelectService}']`) }
    getRequestType(RequestType) { return $(`//select[@name='TypeOfRequestname']/option[.='${RequestType} ']`) }

    async selectService(SelectService) {
        await ReusablesComponents.waitAndClick(this.getSelectService(SelectService))
    }

    async selectRequestType(RequestType) {
        await ReusablesComponents.waitAndClick(this.getRequestType(RequestType))
    }
} export default new serviceRequest()
