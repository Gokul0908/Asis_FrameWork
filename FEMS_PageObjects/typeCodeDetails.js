import reusablecomponents from "../pageobjects/reuse"

class typeCodeDetails {

    get assetGroupCode() { return $("//input[@ng-model='AssetGroupCode']") }
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
    getlicenseType(licenseType) { return $(`//select[@ng-model='IsLicenceAndCertificateApplicable']/option[.='${licenseType}']`) }
    getMDAApplicable(MDAApplicable) { return $(`//select[@ng-model='IsMDAReq']/option[.='${MDAApplicable}']`) }
    get expectedLifeSpan() { return $("//input[@id='txtExpectedLifeSpan']") }
    get ageLessThan5Yrs() { return $("//input[@ng-model='AssetTypeMst.TRPILessThan5Yrs']") }
    get ageGreaterThan5Yrs() { return $("//input[@ng-model='AssetTypeMst.TRPIGreaterThan5Yrs']") }
    get duringWarrantyRate() { return $("(//input[@ng-model='VORateItem.VoRate'])[1]") }
    get postWarrantyRate() { return $("(//input[@ng-model='VORateItem.VoRate'])[2]") }
    get duringWarrantyRateDate() { return $("(//input[@ng-model='VORateItem.EffectiveFrom'])[1]") }
    get postWarrantyRateDate() { return $("(//input[@ng-model='VORateItem.EffectiveFrom'])[2]") }
    get qapDetailsLabel(){ return $("//h4[.='QAP Details']") }

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

    async selectMDAApplicable(MDAApplicable) {
        await reusablecomponents.waitAndClick(this.getMDAApplicable(MDAApplicable))
    }

    async selectLicenseType(licenseType) {
        await reusablecomponents.waitAndClick(this.getlicenseType(licenseType))
    }

    async enterExpectedLifeSpan(expectedLifeSpan) {
        await reusablecomponents.waitAndSetValue(this.expectedLifeSpan, expectedLifeSpan)
    }

    async enterAgeLessThan5Yrs(ageLessThan5Yrs) {
        await reusablecomponents.waitAndSetValue(this.ageLessThan5Yrs, ageLessThan5Yrs)
    }

    async enterAgeGreaterThan5Yrs(ageGreaterThan5Yrs) {
        await reusablecomponents.waitAndSetValue(this.ageGreaterThan5Yrs, ageGreaterThan5Yrs)
    }

    async enterDuringWarrantyRate(duringWarrantyRate) {
        await reusablecomponents.waitAndSetValue(this.duringWarrantyRate, duringWarrantyRate)
    }

    async enterPostWarrantyRate(postWarrantyRate) {
        await reusablecomponents.waitAndSetValue(this.postWarrantyRate, postWarrantyRate)
    }

    async enterDuringWarrantyRateDate(duringWarrantyRateDate) {
        await reusablecomponents.waitAndSetValue(this.duringWarrantyRateDate, duringWarrantyRateDate)
    }

    async enterPostWarrantyRateDate(postWarrantyRateDate) {
        await reusablecomponents.waitAndSetValue(this.postWarrantyRateDate, postWarrantyRateDate)
    }

    async clickQAPDetailsLabel() {
        await reusablecomponents.waitAndClick(this.qapDetailsLabel)
    }

} export default new typeCodeDetails()