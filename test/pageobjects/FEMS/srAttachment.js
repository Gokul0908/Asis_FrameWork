import ReusablesComponents from '../reuse.js'

class srAttachment {

    get attachmentTab() { return ("//a[.='Attachments']") }
    get fileType() { return ("//select[@name='FileType']/option[contains(.,'Others')]") }
    get fileName() { return ("//input[@name='FileName0']") }
    get chooseFile() { return ("//input[@name='file']") }

    async clickAttachment() {
        await ReusablesComponents.spotClick(this.attachmentTab)
    }

    async enterFileName(FileName) {
        await ReusablesComponents.waitAndSetValue(this.fileName, FileName)
    }

    async uploadFile(filepath) {
        const remoteFilePath = await browser.uploadFile(filepath)
        await ReusablesComponents.waitForDisplay(this.chooseFile)
        await ReusablesComponents.waitAndSetValue(this.chooseFile, remoteFilePath)
    }


} export default new srAttachment()