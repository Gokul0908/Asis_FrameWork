import ReusablesComponents from '../reuse'

class heppmRegister {

    get assetTypeCode() { return ("//input[@id='AssetTypeCode']") }
    getAssetTypeCodeDropDown(assetTypeCode) { return (`//ul[@id='UlFetchAssetTypeCode']/li/div/a[.='${assetTypeCode}']`) }
    get taskCode() { return ("//input[@id='TaskCode']") }
    getTaskCodeDropDown(taskCode) { return (`//ul[@id='UlFetchTaskCode']/li/div/a[.='${taskCode}']`) }
    getppmFrequency(selectfrequency) { return (`//select[@id='PPMFrequency']/option[.='${selectfrequency}']`) }
    get version() { return ("//input[@ng-model='HEPPMRegister.Version']") }
    get effectiveFrom() { return ("//input[@name='EffectiveDate']") }
    get chooseFile() { return ("//input[@id='fileAttached']") }
    get addIcon() { return ("//a[@ng-click='VersionHistory()']") }

    async enterAssetTypeCode(assetTypeCode, concatAssetTypeCode) {

        await ReusablesComponents.waitAndSetValue(this.assetTypeCode, '')

        for (const char of assetTypeCode) {
            await $(this.assetTypeCode).addValue(char)
            await browser.pause(500)
        }

        await ReusablesComponents.spotClick(this.getAssetTypeCodeDropDown(concatAssetTypeCode))
    }

    async enterTaskCode(taskCode, concatTaskCode) {

        await ReusablesComponents.waitAndSetValue(this.taskCode, '')

        for (const char of taskCode) {

            await $(this.taskCode).addValue(char)
            await browser.pause(500)
        }
        await ReusablesComponents.spotClick(this.getTaskCodeDropDown(concatTaskCode))
    }

    async selectPPMFrequency(selectfrequency) {
        await ReusablesComponents.waitAndClick(this.getppmFrequency(selectfrequency))
    }

    async enterVersion(version) {
        await ReusablesComponents.waitAndSetValue(this.version, version)
    }

    async enterEffectiveFrom(effectiveFrom) {
        await ReusablesComponents.waitAndSetValue(this.effectiveFrom, effectiveFrom)
    }

    async uploadFile(filepath) {
        const remoteFilePath = await browser.uploadFile(filepath)
        await ReusablesComponents.waitForDisplay(this.chooseFile)
        await ReusablesComponents.waitAndSetValue(this.chooseFile, remoteFilePath)
    }

    async clickAddIcon() {
        await ReusablesComponents.waitAndClick(this.addIcon)
    }
}

export default new heppmRegister()