import reuseButtons from 'common/button.js'
import LoginPage from 'common/loginPage.js'
import asisHomePage from 'common/asisHomePage.js'
import sideNavBar from 'common/sideNavBar.js'
import WaitUntil from 'common/waitUntil.js'
import * as constant from '../../Constants/const'
import GeneralMaster from 'common/LLS/GeneralMaster.js'
import workGrpDetails from 'common/FEMS/workGrpDetails.js'
import assetGroupDetails from 'common/FEMS/assetGroupDetails.js'
import standardTaskDetails from 'common/FEMS/standardTaskDetails.js'
import typeCodeDetails from 'common/FEMS/typeCodeDetails.js'
import ReusablesComponents from 'common/reuse.js'
import heppmRegister from 'common/FEMS/heppmRegister.js'

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
            await WaitUntil.ElementIsVisible(3)
            await sideNavBar.clickSubModulesDropDown(constant.workGrpDetails)
            await workGrpDetails.clickAddIcon()
            await workGrpDetails.enterWorkGroupCode(constant.workGroupCode)
            await workGrpDetails.enterWorkgrpDesc(constant.WorkGroupDesc)
            await reuseButtons.clickSaveButton1()
            await sideNavBar.clickSubModulesDropDown(constant.assetGroupDetails)
            await reuseButtons.clickAddButton()
            await assetGroupDetails.enterAssetGroupCode(constant.assetGroupCode)
            await assetGroupDetails.enterAssetWorkDesc(constant.assetGroupDesc)
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(3)
            await ReusablesComponents.checkSuccessNotification(constant.assetGroupSuccessMessage)
        })

        it("Creating Standard Task Details and Type Code Details", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.standardTaskDetails)
            await reuseButtons.clickAddButton()
            await standardTaskDetails.enterWorkGroupCode(constant.workGroupCode)
            await standardTaskDetails.enterTaskCode(constant.taskCode)
            await standardTaskDetails.enterTaskDescription(constant.taskDesc)
            await standardTaskDetails.setStatus(constant.standardStatus)
            await WaitUntil.ElementIsVisible(2)
            await standardTaskDetails.selectEffectiveFrom(constant.standardEffectiveFrom)
            await reuseButtons.clickSaveButton2()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            

            // Type Code Details
            await sideNavBar.clickSubModulesDropDown(constant.typeCodeDetails)
            await reuseButtons.clickAddButton()
            await typeCodeDetails.enterAssetGroupCode(constant.assetGroupCode, constant.concatAssetGroupCode)
            await typeCodeDetails.selectAssetClarification(constant.assetClarification)
            await typeCodeDetails.selectAssetCategory(constant.assetCategory)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.enterAssetTypeCode(constant.assetTypeCode)
            await typeCodeDetails.enterAssetTypeDesc(constant.assetTypeDesc)

            //Asset Type Details 
            await typeCodeDetails.clickAssetTypeDetails()
            await typeCodeDetails.selectMaintenancesCategory(constant.maintenancesCategory)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.selectNominatedContractor(constant.nominatedContractor)
            await typeCodeDetails.selectAssetAuditType(constant.assetAuditType)
            await typeCodeDetails.selectMDAApplicable(constant.MDAApplicable)
            await typeCodeDetails.selectLicenseType(constant.licenseType)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.enterExpectedLifeSpan(constant.expectedLifeSpan)
            await typeCodeDetails.enterAgeLessThan5Yrs(constant.ageLessThan5Yrs)
            await typeCodeDetails.enterAgeGreaterThan5Yrs(constant.ageGreaterThan5Yrs)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.enterDuringWarrantyRate(constant.duringWarrantyRate)
            await typeCodeDetails.enterPostWarrantyRate(constant.postWarrantyRate)
            await typeCodeDetails.enterDuringWarrantyRateDate(constant.duringWarrantyRateDate)
            await WaitUntil.ElementIsVisible(2)
            await typeCodeDetails.enterPostWarrantyRateDate(constant.postWarrantyRateDate)
            await typeCodeDetails.clickQAPDetailsLabel()
            await reuseButtons.clickSaveButton2()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        })


        it("Creating Asset Type Details", async () => {
            await heppmRegister.enterAssetTypeCode(constant.assetTypeDesc, constant.concatAssetTypeCode)
            await heppmRegister.enterTaskCode(constant.taskDesc, constant.concatTaskCode)
            await heppmRegister.selectPPMFrequency(constant.selectFrequency)
            await heppmRegister.enterVersion(constant.version)
            await heppmRegister.enterEffectiveFrom(constant.effectiveFrom)
            await heppmRegister.uploadFile(constant.filepath)
            await heppmRegister.clickAddIcon()
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.waitForPleaseWaitNotificationToDisappear()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        })
    })
})