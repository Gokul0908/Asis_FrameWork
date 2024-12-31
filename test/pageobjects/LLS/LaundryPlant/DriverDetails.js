import ReusablesComponents from '../../reuse.js'


class DriverDetails {

    get drivercode() { return ("//input[@id='txtDriverCode']") }
    get driverName() { return ("//input[@name='DriverName']") }
    get effectiveFrom() { return ("//input[@ng-model='Driver.EffectiveFrom']") }
    get licenseCode() { return ("//input[@id='grdLicenseCode0']") }
    getLicenseDropDown(licenseCode) { return (`//ul[@id='UlFetchLicenseCode']/li/div/a[.='${licenseCode}']`) }
    get LicenseNo() { return ("//input[@id='txtLicenseNo']") }
    getClassGrade(Grade) { return (`//select[@id='txtClassGrade']/option[.='${Grade}']`) }
    getIssuedBy(IssuedBy) { return (`//select[@id='txtIssuedBy']/option[.='${IssuedBy}']`) }
    get issuedDate() { return ("//input[@name='IssuedDate']") }
    get expiryDate() { return ("//input[@ng-model='Position.ExpiryDate']") }
    get remarksField() { return ("//textarea[@name='Remarks']") }
    get loadLabel() { return ("//label[.='Load Weight BDM (Kg)']") }
    get ExpiryBox() { return ("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[9]") }


    async setDriverCode(driverCode) {
        await ReusablesComponents.waitAndSetValue(this.drivercode, driverCode)
    }

    async setDriverName(driverName) {
        await ReusablesComponents.waitAndSetValue(this.driverName, driverName)
    }

    async enterEffectiveFrom(effectiveFrom) {
        await ReusablesComponents.waitAndSetValue(this.effectiveFrom, effectiveFrom)
    }

    async clickLicenseDropDown(licenseCode, concatLicense) {
        await ReusablesComponents.waitAndSetValue(this.licenseCode, licenseCode)
        await ReusablesComponents.spotClick(this.getLicenseDropDown(concatLicense))
    }

    async setLicenseNo(licenseNo) {
        await ReusablesComponents.waitAndSetValue(this.LicenseNo, licenseNo)
    }


    async selectClassGrade(Grade) {
        await ReusablesComponents.waitAndClick(this.getClassGrade(Grade))
    }

    async selectIssuedBy(IssuedBy) {
        await ReusablesComponents.waitAndClick(this.getIssuedBy(IssuedBy))
    }

    async enterIssuedDate(issuedDate) {
        await ReusablesComponents.waitAndSetValue(this.issuedDate, issuedDate)
        console.log("::::::::Issued Date:::::::::::", issuedDate)
    }
    

    async checkExpiryBox() {
        await ReusablesComponents.waitForDisplay(this.ExpiryBox)
    }

    async enterExpiryDate(expiryDate) {
        await ReusablesComponents.waitAndClick(this.expiryDate)
        await ReusablesComponents.waitAndSetValue(this.expiryDate, expiryDate)
        await this.checkExpiryBox()
        console.log("::::::::Expiry Date:::::::::::", expiryDate)
    }


    async enterRemarks(remarks) {
        await ReusablesComponents.waitAndSetValue(this.remarksField, remarks)
    }

    async clickLoadLabel() {
        await ReusablesComponents.waitAndClick(this.loadLabel)
    }

}

export default new DriverDetails()