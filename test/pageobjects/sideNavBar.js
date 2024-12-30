import ReusablesComponents from '../pageobjects/reuse'


class sideNavBar {

    get masterDropDown() { return ("//a[.='Master']") }
    get serviceRequestDropDown() { return ("(//a[.='Service Request'])[1]") }
    getServiceRequestSubModules(ServiceRequestSubModules) { return (`//a[.='${ServiceRequestSubModules}']`) }
    getMasterSubModules(MasterSubModules) { return (`//span[.='${MasterSubModules}']`) }
    getSubModuleDropDown(subModuleValues) { return (`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get transactionDropDown() { return ("//a[.='Transaction']") }
    getTransactionSubModules(TransactionSubModules) { return (`//span[.='${TransactionSubModules}']`) }
    get serviceRequestDD() { return ("(//a[.='Service Request'])[2]") }


    async clickMasterDropDown(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }

    async clickServiceRequestDropDown(ServiceRequestSubModules) {
        await ReusablesComponents.waitAndClick(this.serviceRequestDropDown)
        await ReusablesComponents.waitAndClick(this.getServiceRequestSubModules(ServiceRequestSubModules))
    }

    async clickServiceRequestDD() {
        await ReusablesComponents.waitAndClick(this.serviceRequestDropDown)
        await ReusablesComponents.waitAndClick(this.serviceRequestDD)
    }
    async clickMasterSubModules(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }

    async clickTransactionDropDown(TransactionSubModules) {
        await ReusablesComponents.waitAndClick(this.transactionDropDown)
        await ReusablesComponents.waitAndClick(this.getTransactionSubModules(TransactionSubModules))
    }

} export default new sideNavBar()
