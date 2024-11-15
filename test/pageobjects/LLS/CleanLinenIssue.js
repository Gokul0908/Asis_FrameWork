import ReusablesComponents from '../reuse'


class CleanLinenIssue {

    get CLRDocumentNo() { return $("//input[@id='txtCliDocumentNo']") }
    getCLRDDropdown(CLRDocumentNo) { return $(`//ul[@id='UlCliDocNoFetch']/li/div/a[.='${CLRDocumentNo}']`) }
    getQCTimelinesss(selectQCTime) { return $(`//select[@ng-model='LinenIssues.QcTimeliness']/option[.='${selectQCTime}']`) }
    get issuedQuantity() { return $("//input[@id='txtIssuesIssuedQuantity']") }
    get firstDelivertQuantity() { return $("//input[@id='txtIssues1stDeliveryIssuedQty0']") }
    get yesPopUp() { return $("//button[@data-bb-handler='confirm']") }
    get requestLabel() { return $("//label[.='Requested By']") }


    async enterCLRDocumentNo(CLIDocumentNo) {
        await ReusablesComponents.waitAndSetValue(this.CLRDocumentNo, CLIDocumentNo)
        await this.getCLRDDropdown(CLIDocumentNo).click()

    }

    async selectQCTimeliness(selectQCTime) {
        await ReusablesComponents.waitAndClick(this.getQCTimelinesss(selectQCTime))
    }

    async enterissuedQuantity(issuedQuantity) {

        let IssuedQuantityTextBox = this.issuedQuantity.getSize()
        for (let i = 0; i <= IssuedQuantityTextBox; i++) {
            await ReusablesComponents.waitAndSetValue(IssuedQuantityTextBox, issuedQuantity)
        }
    }

    async enterFirstDeliveryQuantity(firstDelivertQuantity) {
        await ReusablesComponents.waitAndSetValue(this.firstDelivertQuantity, firstDelivertQuantity)
    }
    async clickYesPopUp() {
        await ReusablesComponents.waitAndClick(this.yesPopUp)
    }

    async clickRequestLabel() {
        await ReusablesComponents.waitAndClick(this.requestLabel)
    }

}

export default new CleanLinenIssue()