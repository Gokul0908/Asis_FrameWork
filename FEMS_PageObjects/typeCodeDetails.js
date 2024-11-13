import reusablecomponents from "../pageobjects/reuse"

class typeCodeDetails {

    get assetGroupCode() { return $("//input[@ng-model='AssetGroupCode']']") }
    getAssetDropDown(asset) { return $(`//div[@ng-repeat='E in FetchResultTable']/a[.='${asset}']`) }
    getAssetClarification(assetclarification) { return $(`//select[@id='AssetClassification']/option[.='${assetclarification}']`) }
    getAssetCategory(assetcategory) { return $(`//select[@id='AssetCategory']/option[.='${assetcategory}']`) }
    get assetTypeCode() { return $("//input[@ng-model='TypeCodeDetailsItem.AssetTypeCode']") }
    get assetTypeDesc() { return $("//input[@ng-model='TypeCodeDetailsItem.AssetTypeDescription']") }
    get assetTypeDetails() { return $("//button[@id='btnAssetTypeMaster']") }

    //AssetTypeDetails
    getmaintenancesCategory(selectCategory) { return $(`//select[@id='MaintenanceCategory']/option[.='${selectCategory}']`) }
    getNominatedContractor(selectContractor) { return $(`//select[@id='NominatedContractor']/option[.='${selectContractor}']`) }
    getAssetAuditType(assetAuditType) { return $(`//select[@id='AuditApplicable']/option[.='${assetAuditType}']`) }

    async enterAssetGroupCode(assetGroupCode, concatAssetGroupCode) {
        await reusablecomponents.waitAndSetValue(this.assetGroupCode, assetGroupCode)
        await this.getAssetDropDown(concatAssetGroupCode).click()
    }

    async selectAssetClarification(assetclarification) {
        await reusablecomponents.waitAndClick(this.getAssetClarification(assetclarification))
    }

    async selectAssetCategory(assetcategory) {
        await reusablecomponents.waitAndClick(this.getAssetCategory(assetcategory))
    }

    async enterAssetTypeCode(assetTypeCode) {
        await reusablecomponents.waitAndSetValue(this.assetTypeCode, assetTypeCode)
    }

    async enterAssetTypeDesc(assetTypeDesc) {
        await reusablecomponents.waitAndSetValue(this.assetTypeDesc, assetTypeDesc)
    }

    async clickAssetTypeDetails() {
        await reusablecomponents.waitAndClick(this.assetTypeDetails)
    }

    async selectMaintenancesCategory(selectCategory) {
        await reusablecomponents.waitAndClick(this.getmaintenancesCategory(selectCategory))
    }

    async selectNominatedContractor(selectContractor) { 
        await reusablecomponents.waitAndClick(this.getNominatedContractor(selectContractor))
    }

    async selectAssetAuditType(assetAuditType) {
        await reusablecomponents.waitAndClick(this.getAssetAuditType(assetAuditType))
    }

    


} export default new typeCodeDetails()