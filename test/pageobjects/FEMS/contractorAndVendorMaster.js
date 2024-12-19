import { status } from 'Constants/const.js'
import Reusablecomponents from '../reuse.js'

class contractorVendorMaster {
    getcontractorType(Contractortype) { return $(`//select[@id='ddlContractorType']/option[.='${Contractortype}']`) }
    get ssmRegistrationCode() { return $("(//input[@id='txtSSMRegistrationCode'])[1]") }
    get vendorName() { return $("//input[@id='Contractor/Vendor Name']") }
    getcontractorStatus(status) { return $(`//select[@id='ddlContractorStatus']/option[.='${status}']`) }
    getStatus(status) { return $(`//select[@id='ddlStatus']/option[.='${status}']`) }
    get specializationDetails() { return $("//button[@title='Select']") }
    get selectall() { return $("//input[@value='multiselect-all']") }

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

} export default new contractorVendorMaster()