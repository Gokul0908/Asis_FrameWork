import Reusablecomponents from '../reuse.js'

class contractorVendorMaster {
    getcontractorType(Contractortype) { return (`//select[@id='ddlContractorType']/option[.='${Contractortype}']`) }
    get ssmRegistrationCode() { return ("(//input[@id='txtSSMRegistrationCode'])[1]") }
    get vendorName() { return ("//input[@id='Contractor/Vendor Name']") }
    getcontractorStatus(status) { return (`//select[@id='ddlContractorStatus']/option[.='${status}']`) }
    getStatus(status) { return (`//select[@id='ddlStatus']/option[.='${status}']`) }
    get specializationDetails() { return ("//button[@title='Select']") }
    get selectall() { return ("//input[@value='multiselect-all']") }
    getState(selectState) { return (`//select[@name='State']/option[contains(.,'${selectState}')]`) }
    get addressLine1() { return ("//input[@id='txtAddressLine1']") }
    get city() { return ("//input[@name='City']") }
    get postCode() { return ("//input[@name='PostCode']") }
    get ContactPerson() { return ("//input[@name='ContactPerson']") }
    get telePhone() { return ("//input[@name='TelephoneNo']") }
    get designation() { return ("//input[@name='Designation']") }
    get email() { return ("//input[@name='Email']") }


    
    async selectContractorType(contractrtype) {

        await Reusablecomponents.waitAndClick(this.getcontractorType(contractrtype))
    }

    async enterRegistrationCode(registrationcode) {

        await Reusablecomponents.waitAndSetValue(this.ssmRegistrationCode, registrationcode)
    }

    async enterVendorName(vendorName) {
        await Reusablecomponents.waitAndSetValue(this.vendorName, vendorName)
    }

    async selectContratorStatus(status) {
        await Reusablecomponents.waitAndClick(this.getcontractorStatus(status))
    }

    async selectStatus(status) {
        await Reusablecomponents.waitAndClick(this.getStatus(status))
    }

    async selectSpecializationDetails() {
        await Reusablecomponents.waitAndClick(this.specializationDetails)
        await Reusablecomponents.waitAndClick(this.selectall)
    }

    async selectState(state) {

        await Reusablecomponents.waitAndSetValue(this.getState(state))
    }

    async enterAddressLine1(addressLine1) {

        await Reusablecomponents.waitAndSetValue(this.addressLine1, addressLine1)
    }

    async enterCity(city) {

        await Reusablecomponents.waitAndSetValue(this.city, city)
    }

    async enterPostalCode(postCode) {

        await Reusablecomponents.waitAndSetValue(this.postCode, postCode)
    }

    async enterContactPerson(ContactPerson) {

        await Reusablecomponents.waitAndSetValue(this.ContactPerson, ContactPerson)
    }

    async enterTelephone(telePhone) {

        await Reusablecomponents.waitAndSetValue(this.telePhone, telePhone)
    }
    async enterDesignation(designation) {

        await Reusablecomponents.waitAndSetValue(this.designation, designation)
    }

    async enterEmail(email) {

        await Reusablecomponents.waitAndSetValue(this.email, email)
    }

} export default new contractorVendorMaster()