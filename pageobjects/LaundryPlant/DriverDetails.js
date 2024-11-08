import ReusablesComponents from "./../reuse"


class DriverDetails {

    get masterDropDown() { return $("//a[.='Master']") }
    getMasterSubModules(MasterSubModules) { return $(`//span[.='${MasterSubModules}']`) }
    getLinenPlantSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get addButton() { return $("//td[@id='Add']") }
    get drivercode() { return $("//input[@id='txtDriverCode']") }
    get driverName() { return $("//input[@name='DriverName']") }
    get effectiveFrom() { return $("//input[@ng-model='Driver.EffectiveFrom']") }
    get licenseCode() { return $("//input[@id='grdLicenseCode0']") }
    getLicenseDropDown(licenseCode) { return $(`//ul[@id='UlFetchLicenseCode']/li/div/a[.='${licenseCode}']`) }
    get LicenseNo() { return $("//input[@id='txtLicenseNo']") }
    getClassGrade(Grade) { return $(`//select[@id='txtClassGrade']/option[.='${Grade}']`) }
    get saveButton() { return $("(//button[@type='submit'])[1]") }
    getIssuedBy(IssuedBy) { return $(`//select[@id='txtIssuedBy']/option[.='${IssuedBy}']`) }
    get issuedDate() { return $("//input[@name='IssuedDate']") }
    get expiryDate() { return $("//input[@ng-model='Position.ExpiryDate']") }
    get remarksField() { return $("//textarea[@name='Remarks']") }
    get loadLabel() { return $("//label[.='Load Weight BDM (Kg)']") }
    get ExpiryBox() { return $("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[9]") }


    async clickMasterDropDown(LaundryPlant) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(LaundryPlant))
    }

    async clickSubModulesDropDown(VehicleDetails) {
        await ReusablesComponents.waitAndClick(this.getLinenPlantSubModuleDropDown(VehicleDetails))
    }

    async clickaddButton() {
        await ReusablesComponents.waitAndClick(this.addButton)
    }

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
        await this.getLicenseDropDown(concatLicense).click()
    }

    async setLicenseNo(licenseNo) {
        await ReusablesComponents.waitAndSetValue(this.LicenseNo, licenseNo)
    }


    async selectClassGrade(Grade) {
        await ReusablesComponents.waitAndClick(this.getClassGrade(Grade))
    }


    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
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