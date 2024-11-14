import ReusablesComponents from "common/reuse"


class cleanLinenOrderLLS {

    getpriority(Priority) { return $(`//select[@id='Priority']/option[.='${Priority}']`) }
    getLinenCodeDropdown(concatLinenCode) { return $(`//ul[@id='UlFetch']/li/div/a[.='${concatLinenCode}']`) }
    get linenCode() { return $("//input[@id='txtLinenCode0']") }
    get requestedQuantity() { return $("//input[@ng-required='Clean.Quantity']") }
    get storeBalance() { return $("//input[@id='Stockbalance']") }
    get remarks() { return $("//textarea[@ng-model='CleanOrder.Remarks']") }
    get CLONo() { return $("//input[@name='CLONO']") }
    get gridCLONo() { return $("(//tr[@role='row']/td[@aria-describedby='grid_CLONO'])[1]") }
    getCLONoEditIcon(CLONo) { return $(`(//tr[@role='row']/td[.='${CLONo}']/following-sibling::td/following-sibling::td/following-sibling::td)[4]`) }
    getCLONoApproveIcon(CLONo) { return $(`(//tr[@role='row']/td[.='${CLONo}']/following-sibling::td/following-sibling::td/following-sibling::td)[5]`) }    
    get statusLabel() { return $("//label[.='Status ']") }
    getorderType(orderType) { return $(`//select[@id='OrderType']/option[.='${orderType}']`) }
    get CLONoInput() { return $("//input[@id='txtCLONo']") }
    getCLONoDropdown(CLONo) { return $(`//ul[@id='UlFetchStaff']/li/div/a[.='${CLONo}']`) }
    get disabledField() { return $("//input[@id='Stockbalance' and @disabled='true']") }


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

    async clickStatusLabel() {
        await ReusablesComponents.waitAndClick(this.statusLabel)
    }

    async clickCLONoApproveIcon() {
        const cloNo = await this.getCLONo()
        await ReusablesComponents.waitAndClick(this.getCLONoApproveIcon(cloNo))
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