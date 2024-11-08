import ReusablesComponents from "./reuse"


class cleanLinenOrderLLS {

    getTransactionSubModules(TransactionSubModules) { return $(`//span[.='${TransactionSubModules}']`) }
    getpriority(Priority) { return $(`//select[@id='Priority']/option[.='${Priority}']`) }
    getLinenCodeDropdown(concatLinenCode) { return $(`//ul[@id='UlFetch']/li/div/a[.='${concatLinenCode}']`) }
    getLinenShipmentSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get transactionDropDown() { return $("//a[.='Transaction']") }
    get addButton() { return $("//td[@id='Add']") }
    get linenCode() { return $("//input[@id='txtLinenCode0']") }
    get requestedQuantity() { return $("//input[@ng-required='Clean.Quantity']") }
    get storeBalance() { return $("//input[@id='Stockbalance']") }
    get savebutton() { return $("(//button[.='Save'])[1]") }
    get remarks() { return $("//textarea[@ng-model='CleanOrder.Remarks']") }
    get CLONo() { return $("//input[@name='CLONO']") }
    get gridCLONo() { return $("(//tr[@role='row']/td[@aria-describedby='grid_CLONO'])[1]") }
    getCLONoEditIcon(CLONo) { return $(`(//tr[@role='row']/td[.='${CLONo}']/following-sibling::td/following-sibling::td/following-sibling::td)[4]`) }
    getCLONoApproveIcon(CLONo) { return $(`(//tr[@role='row']/td[.='${CLONo}']/following-sibling::td/following-sibling::td/following-sibling::td)[5]`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get statusLabel() { return $("//label[.='Status ']") }
    get submitButton() { return $("//button[.='Submit']") }
    get approvedButton() { return $("//button[.='Approved']") }
    getorderType(orderType) { return $(`//select[@id='OrderType']/option[.='${orderType}']`) }
    get CLONoInput() { return $("//input[@id='txtCLONo']") }
    getCLONoDropdown(CLONo) { return $(`//ul[@id='UlFetchStaff']/li/div/a[.='${CLONo}']`) }
    get disabledField() { return $("//input[@id='Stockbalance' and @disabled='true']") }


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

    async selectPriority(Priority) {
        await ReusablesComponents.waitAndClick(this.getpriority(Priority))
    }
    async selectLinenCode(concatLinenCode, linenCode) {
        await ReusablesComponents.waitAndSetValue(this.linenCode, linenCode)
        await this.getLinenCodeDropdown(concatLinenCode).click()
    }

    async getStoreBalance() {
        const storeBalance = await ReusablesComponents.waitAndGetText(this.storeBalance)
        return storeBalance
    }

    async enterRequestedQuantity(requestedQuantity) {
        await ReusablesComponents.waitAndSetValue(this.requestedQuantity, requestedQuantity);

    }

    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.savebutton)
    }

    async enterRemarks(remarks) {
        await ReusablesComponents.waitAndSetValue(this.remarks, remarks)
    }

    // async getCLONo() {
    //     const CLONo = await ReusablesComponents.waitAndGetText(this.CLONo)
    //     console.log(":::::::::Clean Linen Order Number:::::::::" + CLONo)
    //     return CLONo
    // }

    async getCLONo() {
        const gridCLONo = await ReusablesComponents.waitAndGetText(this.gridCLONo)
        console.log(":::::::::Grid Clean Linen Order Number1:::::::::" + gridCLONo)
        return gridCLONo
    }

    async clickCLONoEditIcon() {
        const cloNo = await this.getCLONo()
        await ReusablesComponents.waitAndClick(this.getCLONoEditIcon(cloNo))
    }

    async getStatusLabel() {
        await ReusablesComponents.waitAndClick(this.statusLabel)
    }

    async clickSubmitButton() {
        await ReusablesComponents.waitAndClick(this.submitButton)
    }

    async clickCLONoApproveIcon() {
        const cloNo = await this.getCLONo()
        await ReusablesComponents.waitAndClick(this.getCLONoApproveIcon(cloNo))
    }

    async clickApprovedButton() {
        await ReusablesComponents.waitAndClick(this.approvedButton)
    }

    async selectOrderType(orderType) {
        await ReusablesComponents.waitAndClick(this.getorderType(orderType))
    }

    async enterCLONo() {
        const cloNo = await this.getCLONo()
        await ReusablesComponents.waitAndSetValue(this.CLONoInput, cloNo)
        await this.getCLONoDropdown(cloNo).click()
    }

} export default new cleanLinenOrderLLS()