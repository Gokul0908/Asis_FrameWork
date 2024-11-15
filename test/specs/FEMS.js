import reuseButtons from '../../test/pageobjects/button.js'
import LoginPage from '../../test/pageobjects/loginPage.js'
import asisHomePage from '../../test/pageobjects/asisHomePage.js'
import sideNavBar from '../../test/pageobjects/sideNavBar.js'
import WaitUntil from '../../test/pageobjects/waitUntil.js'
import * as constant from '../../Constants/const.js'
import GeneralMaster from '../../test/pageobjects/LLS/GeneralMaster.js'
import workGrpDetails from '../../test/pageobjects/FEMS/workGrpDetails.js'
import assetGroupDetails from '../../test/pageobjects/FEMS/assetGroupDetails.js'
import standardTaskDetails from '../../test/pageobjects/FEMS/standardTaskDetails.js'
import typeCodeDetails from '../../test/pageobjects/FEMS/typeCodeDetails.js'
import ReusablesComponents from '../../test/pageobjects/reuse.js'
import heppmRegister from '../../test/pageobjects/FEMS/heppmRegister.js'
import assetInformation from '../../test/pageobjects/FEMS/assetInformation.js'
import assetStandardization from '../../test/pageobjects/FEMS/assetStandardization.js'

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
            await asisHomePage.clickasisHeartIcon()
        })

        it("Creating Work Group Details and Asset Group Details", async () => {
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await sideNavBar.clickMasterDropDown(constant.femsSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.workGrpDetails)
            await workGrpDetails.clickAddIcon()
            await WaitUntil.ElementIsVisible(3)
            await workGrpDetails.enterWorkGroupCode(constant.workGroupCode)
            await workGrpDetails.enterWorkgrpDesc(constant.WorkGroupDesc)
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(3)
            await sideNavBar.clickSubModulesDropDown(constant.assetGroupDetails)
            await reuseButtons.clickAddButton()
            await assetGroupDetails.enterAssetGroupCode(constant.assetGroupCode)
            await assetGroupDetails.enterAssetWorkDesc(constant.assetGroupDesc)
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(3)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
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
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        })

        it("Creating HEPPM Register Details and Asset Information", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.heppmRegister)
            await reuseButtons.clickAddButton()
            await heppmRegister.enterAssetTypeCode(constant.assetTypeDesc, constant.concatAssetTypeCode)
            await heppmRegister.enterTaskCode(constant.taskDesc, constant.concatTaskCode)
            await heppmRegister.selectPPMFrequency(constant.selectFrequency)
            await heppmRegister.enterVersion(constant.version)
            await heppmRegister.enterEffectiveFrom(constant.effectiveFrom)
            await heppmRegister.uploadFile(constant.filepath)
            await heppmRegister.clickAddIcon()
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)

            //Asset Information
            await sideNavBar.clickSubModulesDropDown(constant.assetInformation)
            await reuseButtons.clickAddButton()

            //Manufacturer
            await assetInformation.selectType(constant.TypeManufacturer)
            await assetInformation.enterManufacturerName(constant.ManufacturerName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            await reuseButtons.clickAddNewButton()


            //Make
            await assetInformation.selectType(constant.TypeMake)
            await assetInformation.enterManufacturerName(constant.MakeName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            await reuseButtons.clickAddNewButton()

            //Brand
            await assetInformation.selectType(constant.TypeBrand)
            await assetInformation.enterManufacturerName(constant.BrandName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            await reuseButtons.clickAddNewButton()

            //Model
            await assetInformation.selectType(constant.TypeModel)
            await assetInformation.enterManufacturerName(constant.ModelName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        })

        it("Creating Asset Standardization Details", async () => {
            await sideNavBar.clickMasterSubModules(constant.femsSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.assetStandardization)
            await reuseButtons.clickAddButton()
            await assetStandardization.enterAssetTypeCode(constant.assetTypeCode, constant.concatAssetTypeCode1)
            await assetStandardization.enterManufacturer(constant.ManufacturerName, constant.concatManufacturer)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterMake(constant.MakeName, constant.concatMake)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterBrand(constant.BrandName, constant.concatBrand)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterModel(constant.ModelName, constant.concatModel)
            await assetStandardization.selectStatus(constant.selectStatus)
            await assetStandardization.clickServiceLabel()
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        })
    })
})