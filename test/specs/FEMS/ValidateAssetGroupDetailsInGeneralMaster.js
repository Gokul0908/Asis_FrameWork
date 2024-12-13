import reuseButtons from '../../pageobjects/button.js'
import LoginPage from '../../pageobjects/loginPage.js'
import asisHomePage from '../../pageobjects/asisHomePage.js'
import sideNavBar from '../../pageobjects/sideNavBar.js'
import WaitUntil from '../../pageobjects/waitUntil.js'
import * as constant from '../../../Constants/const.js'
import GeneralMaster from '../../pageobjects/LLS/GeneralMaster.js'
import workGrpDetails from '../../pageobjects/FEMS/workGrpDetails.js'
import assetGroupDetails from '../../pageobjects/FEMS/assetGroupDetails.js'
import ReusablesComponents from '../../pageobjects/reuse.js'
import hooks from '../../../hooks.js'

describe("Creating a full flow for FEMS", async () => {

    // before(async () => {
    //     await browser.url(constant.asisURL)
    //     await browser.maximizeWindow()
    // })

    // after(async () => {
    //     await reuseButtons.asisuserLogoutToTheApplication()
    // })

    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })





    it("Asis User Login to the Application and Creating Standard User Department Code  for LLS ", async () => {
        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
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
        await asisHomePage.clickasisHeartIcon()
    })

    it("Creating Work Group Details in General Master ", async () => {
        await asisHomePage.selectServicesIcon(constant.gmServices)
        await sideNavBar.clickMasterDropDown(constant.femsSubModule)
        await sideNavBar.clickSubModulesDropDown(constant.workGrpDetails)
        await WaitUntil.ElementIsVisible(3)
        await workGrpDetails.clickAddIcon()
        await workGrpDetails.enterWorkGroupCode(constant.workGroupCode)
        await workGrpDetails.enterWorkgrpDesc(constant.WorkGroupDesc)
        await reuseButtons.clickSaveButton1()
        await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        console.log("Validation for Work Group Details is successful")
    })


    it("Validating Asset Group Details in General Master", async () => {

        await WaitUntil.ElementIsVisible(3)
        await sideNavBar.clickSubModulesDropDown(constant.assetGroupDetails)
        await reuseButtons.clickAddButton()
        await assetGroupDetails.enterAssetGroupCode(constant.assetGroupCode)
        await assetGroupDetails.enterAssetWorkDesc(constant.assetGroupDesc)
        await reuseButtons.clickSaveButton1()
        await WaitUntil.ElementIsVisible(3)
        await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        console.log("Validation for Asset Group Details is successful")

    })

})