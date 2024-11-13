import reuseButtons from "./../pageobjects/button"
import LoginPage from "../pageobjects/loginPage"
import asisHomePage from "../pageobjects/asisHomePage"
import sideNavBar from "../pageobjects/sideNavBar"
import WaitUntil from "../pageobjects/waitUntil"
import * as constant from "../Constants/const"
import GeneralMaster from "../pageobjects/GeneralMaster"
import workGrpDetails from "../FEMS_PageObjects/workGrpDetails"
import assetGroupDetails from "../FEMS_PageObjects/assetGroupDetails"
import standardTaskDetails from "../FEMS_PageObjects/standardTaskDetails"
import typeCodeDetails from "../FEMS_PageObjects/typeCodeDetails"

describe("Creating a full flow for FEMS", async () => {

    before(async () => {
        await browser.url(constant.asisURL)
        await browser.maximizeWindow()
    })

    after(async () => {
        await reuseButtons.asisuserLogoutToTheApplication()
    })


    describe("Asis User Login to the Application and Creating User Area Master and User Location Master", async () => {


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
            await GeneralMaster.clickasisHeartIcon()
            await WaitUntil.ElementIsVisible(2)
        })

        it("Creating Work Group Details and Asset Group Details", async () => {
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await sideNavBar.clickMasterDropDown(constant.femsSubModule)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickSubModulesDropDown(constant.workGrpDetails)
            await workGrpDetails.clickAddIcon()
            await workGrpDetails.enterWorkGroupCode(constant.workGroupCode)
            await WaitUntil.ElementIsVisible(2)
            await workGrpDetails.enterWorkgrpDesc(constant.WorkGroupDesc)
            await reuseButtons.clickSaveButton1()
            await sideNavBar.clickSubModulesDropDown(constant.assetGroupDetails)
            await reuseButtons.clickAddButton()
            await assetGroupDetails.enterAssetGroupCode(constant.assetGroupCode)
            await assetGroupDetails.enterAssetWorkDesc(constant.assetGroupDesc)
            await reuseButtons.clickSaveButton1()
        })

        it("Creating Standard Task Details and Type Code Details", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.standardTaskDetails)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await standardTaskDetails.enterWorkGroupCode(constant.workGroupCode)
            await standardTaskDetails.enterTaskCode(constant.taskCode)
            await standardTaskDetails.enterTaskDescription(constant.taskDesc)
            await standardTaskDetails.setStatus(constant.standardStatus)
            await standardTaskDetails.selectEffectiveFrom(constant.standardEffectiveFrom)
            await reuseButtons.clickSaveButton2()
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickSubModulesDropDown(constant.typeCodeDetails)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.enterAssetGroupCode(constant.assetGroupCode, constant.concatAssetGroupCode)
            await typeCodeDetails.selectAssetClarification(constant.assetClarification)
            await typeCodeDetails.selectAssetCategory(constant.assetCategory)
            await typeCodeDetails.enterAssetTypeCode(constant.assetTypeCode)
            await typeCodeDetails.enterAssetTypeDesc(constant.assetTypeDesc)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.clickAssetTypeDetails()
            await typeCodeDetails.selectMaintenancesCategory(constant.maintenancesCategory)
            await typeCodeDetails.selectNominatedContractor(constant.nominatedContractor)
            await typeCodeDetails.selectAssetAuditType(constant.assetAuditType)            
        })
    })
})