import ReusablesComponents from "./reuse"


class CleanLinenIssue {


    get transactionDropDown() { return $("//a[.='Transaction']") }
    getTransactionSubModules(TransactionSubModules) { return $(`//span[.='${TransactionSubModules}']`) }
    getLinenShipmentSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get addButton() { return $("//td[@id='Add']") }
    get CLRDocumentNo() { return $("//input[@id='txtCliDocumentNo']") }
    getCLRDDropdown(CLRDocumentNo) { return $(`//ul[@id='UlCliDocNoFetch']/li/div/a[.='${CLRDocumentNo}']`) }
    getQCTimelinesss(selectQCTime) { return $(`//select[@ng-model='LinenIssues.QcTimeliness']/option[.='${selectQCTime}']`) }
    get issuedQuantity() { return $("//input[@id='txtIssuesIssuedQuantity']") }
    get firstDelivertQuantity() { return $("//input[@id='txtIssues1stDeliveryIssuedQty0']") }
    get saveButton() { return $("//button[@id='Issuesave']") }
    get submitButton() { return $("//button[@id='Issuesavesubmit']") }
    get yesPopUp() { return $("//button[@data-bb-handler='confirm']") }
    get requestLabel() { return $("//label[.='Requested By']") }



    async clickTransactionDropDown(TransactionSubModules) {
        await ReusablesComponents.waitAndClick(this.transactionDropDown)
        await ReusablesComponents.waitAndClick(this.getTransactionSubModules(TransactionSubModules))
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getLinenShipmentSubModuleDropDown(subModuleValues))
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }

    async clickaddButton() {
        await ReusablesComponents.waitAndClick(this.addButton)
    }

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

    async clickSavebutton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
    }
    async clickSubmitButton() {
        await ReusablesComponents.waitAndClick(this.submitButton)
    }

    async clickYesPopUp() {
        await ReusablesComponents.waitAndClick(this.yesPopUp)
    }

    async clickRequestLabel() {
        await ReusablesComponents.waitAndClick(this.requestLabel)
    }

}

export default new CleanLinenIssue()