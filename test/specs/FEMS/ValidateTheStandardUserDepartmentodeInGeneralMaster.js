import hooks from "../../../hooks"
import LoginPage from '../../pageobjects/loginPage.js'
import * as constant from "../../../Constants/const.js"
import asisHomePage from "../../pageobjects/asisHomePage"
import sideNavBar from "../../pageobjects/sideNavBar"
import GeneralMaster from "../../pageobjects/LLS/GeneralMaster"
import reuseButtons from "../../pageobjects/button.js"
import WaitUntil from "../../pageobjects/waitUntil"



describe("Validate Standard user Department code in General Master", async () => {



    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })



    it("Validate the asis login to the application", async () => {

        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
        await asisHomePage.headerVisible()
    })

    it("Creating Standard User Department Code in General Master", async () => {

        await asisHomePage.chooseCompany(constant.company)
        await asisHomePage.chooseLocation(constant.location)
        await asisHomePage.selectServicesIcon(constant.gmServices)
        await sideNavBar.clickMasterDropDown(constant.masterSubModulesGeneral)
        await sideNavBar.clickSubModulesDropDown(constant.subModuleValues)
        await reuseButtons.clickAddButton()
        await GeneralMaster.enterUserDepartmentCode(constant.userDepartmentCode)
        await GeneralMaster.enterUserDepartmentName(constant.userDepartmentName)
        await reuseButtons.clickSaveButton()
        await WaitUntil.ElementIsVisible(2)
        await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        console.log("Validation for Standard User Department Code is successful")
    })

})