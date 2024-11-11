import ReusablesComponents from "./../reuse"

class vehicle {

    get vehicleNo() { return $("//input[@id='txtVehicleNo']") }
    get manufacturer() { return $("//input[@name='Manufacturer']") }
    get effectiveDate() { return $("(//input[@name='EffectiveFrom'])[1]") }
    get licenseCode() { return $("//input[@id='grdLicenseCode0']") }
    getLicenseDropDown(licenseCode) { return $(`//ul[@id='UlFetchLicenseCode']/li/div/a[.='${licenseCode}']`) }
    get LicenseNo() { return $("//input[@id='txtLicenseNo']") }
    getClassGrade(Grade) { return $(`//select[@id='txtClassGrade']/option[.='${Grade}']`) }
    getIssuedBy(IssuedBy) { return $(`//select[@id='txtIssuedBy']/option[.='${IssuedBy}']`) }
    get issuedDate() { return $("//input[@name='IssuedDate']") }
    get expiryDate() { return $("//input[@ng-model='Position.ExpiryDate']") }
    get remarksField() { return $("//textarea[@name='Remarks']") }
    get loadLabel() { return $("//label[.='Load Weight BDM (Kg)']") }
    get ExpiryBox() { return $("(//div[@class='xdsoft_datepicker active'])[9]") }


    async setVehicleNo(vehicleNo) {
        await ReusablesComponents.waitAndSetValue(this.vehicleNo, vehicleNo)
    }

    async setManufacturer(manufacturer) {
        await ReusablesComponents.waitAndSetValue(this.manufacturer, manufacturer)
    }


    async enterEffectiveDate(effectiveDate) {
        await ReusablesComponents.waitAndSetValue(this.effectiveDate, effectiveDate)
    }

    async clickLicenseDropDown(licenseCode, concatLicense) {
        await ReusablesComponents.waitAndSetValue(this.licenseCode, licenseCode)
        await this.getLicenseDropDown(concatLicense).click()
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
        await this.ExpiryBox.waitForDisplayed()
    }

    async enterExpiryDate(expiryDate) {

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

} export default new vehicle()
