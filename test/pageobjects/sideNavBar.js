import ReusablesComponents from '../pageobjects/reuse'


class sideNavBar {

    get masterDropDown() { return $("//a[.='Master']") }
    getMasterSubModules(MasterSubModules) { return $(`//span[.='${MasterSubModules}']`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get transactionDropDown() { return $("//a[.='Transaction']") }
    getTransactionSubModules(TransactionSubModules) { return $(`//span[.='${TransactionSubModules}']`) }

    async clickMasterDropDown(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }

    async clickMasterSubModules(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }

    async clickTransactionDropDown(TransactionSubModules) {
        await ReusablesComponents.waitAndClick(this.transactionDropDown)
        await ReusablesComponents.waitAndClick(this.getTransactionSubModules(TransactionSubModules))
    }

} export default new sideNavBar()
