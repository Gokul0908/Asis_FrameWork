import ReusablesComponents from "../reuse"

class heppmRegister {

    get assetTypeCode() { return $("//input[@id='AssetTypeCode']") }
    getAssetTypeCodeDropDown(assetTypeCode) { return $(`//ul[@id='UlFetchAssetTypeCode']/li/div/a[.='${assetTypeCode}']`) }


    async enterAssetTypeCode(assetTypeCode, concatAssetTypeCode) {
        await ReusablesComponents.waitAndSetValue(this.assetTypeCode, assetTypeCode)
        await this.getAssetTypeCodeDropDown(concatAssetTypeCode).waitForDisplayed()
        await this.getAssetTypeCodeDropDown(concatAssetTypeCode).click()
    }
}

export default new heppmRegister()