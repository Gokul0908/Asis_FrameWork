import ReusablesComponents from '../reuse'

class cleanLinenRequest {

    get userDepartCode() { return ("//input[@id='txtUserDepartmentCode']") }
    getuserDepartCodeDropDown(userDepartCode) { return (`//ul[@id='UlUserAreaFetch']/li/div/a[contains(.,'${userDepartCode}')]`) }
    get requestedBy() { return ("//input[@id='txtRequestedBy']") }
    getRequestedByDD(RequestedBy) { return (`//a[.='${RequestedBy}']`) }
    get requestedQuantity() { return ("//input[@id='txtRequestedQuantity']") }
    getPriority(priority) { return (`//select[@id='ddlPriority']/option[.='${priority}']`) }
    get clrDocumentNo() { return ("(//td[@aria-describedby='grid_CliDocumentNo'])[1]") }
    get remarkInput() { return ("//textarea[@id='txtRemarks']") }
    get attachmentTab() { return ("//a[@id='AttachmentTab']") }
    get chooseFile() { return ("//input[@type='file']") }
    get attachmentSavebutton() { return ("//button[@id='saveUpdate']") }
    getFiletype(filetype) { return (`//select[@name='FileType']/option[.='${filetype}']`) }
    get fileName() { return ("//input[@id='fileName0']") }


    async enterUserDepartCode(userDepartCode) {
        await ReusablesComponents.waitAndSetValue(this.userDepartCode, userDepartCode)
        await ReusablesComponents.spotClick(this.getuserDepartCodeDropDown(userDepartCode))
    }

    async selectRequestedBy(RequestedBy) {
        await ReusablesComponents.waitAndSetValue(this.requestedBy, RequestedBy)
        await ReusablesComponents.spotClick(this.getRequestedByDD(RequestedBy))
    }

    async enterRequestedQuantity(value) {

        let textBoxes = await $$("//input[@id='txtRequestedQuantity']");
        console.log(`Total number of text boxes: ${textBoxes.length}`); // or use .size if length doesn't work


        for (let field of textBoxes) {
            await ReusablesComponents.waitAndSetValue(field, value);
        }
    }


    // async enterRequestedQuantity(number) {
    //     let requestedQuantity = await this.requestedQuantity.getSize()
    //     console.log("Requested Quantity is : " + requestedQuantity)
    //     for (let i = 0; i < requestedQuantity; i++) {
    //         await ReusablesComponents.waitAndSetValue(this.requestedQuantity, number);
    //     }
    // }

    async selectPriority(priority) {
        await ReusablesComponents.waitAndClick(this.getPriority(priority))
    }

    async getCLRDocumentNo() {
        return ReusablesComponents.waitAndGetText(this.clrDocumentNo)
    }

    async enterRemarks(remarks) {
        await ReusablesComponents.waitAndSetValue(this.remarkInput, remarks)
    }


    async clickAttachmentTab() {
        await ReusablesComponents.waitForDisplay(this.attachmentTab)
        await ReusablesComponents.waitForElementIsClickable(this.attachmentTab)
        await ReusablesComponents.waitAndClick(this.attachmentTab);
    }

    async uploadFile(filepath) {

        const remoteFilePath = await browser.uploadFile(filepath)
        await ReusablesComponents.waitForDisplay((this.chooseFile))
        await ReusablesComponents.waitAndSetValue(this.chooseFile, remoteFilePath)
    }

    async clickAttachmentSaveButton() {
        await ReusablesComponents.waitAndClick(this.attachmentSavebutton)
    }

    async selectFileType(filetype) {
        await ReusablesComponents.waitAndClick(this.getFiletype(filetype))
    }
    async enterFileName(fileName) {
        await ReusablesComponents.waitAndSetValue(this.fileName, fileName)
    }
}

export default new cleanLinenRequest()