import reuseButtons from '../../test/pageobjects/button.js'
import reuse from '../../with_Cursor/reuse.js'
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
import fmsUserLocationMaster from '../../test/pageobjects/LLS/fmsUserLocationMaster.js'
import fMSModule from '../pageobjects/LLS/fMSModule.js'
import userAreaMaster from '../pageobjects/FEMS/userAreaMaster.js'
import userLocationMaster from '../pageobjects/FEMS/userLocationMaster.js'
import serviceRequest from '../pageobjects/FEMS/serviceRequest.js'

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
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Standard User Department Code is successful")
            await asisHomePage.clickasisHeartIcon()
        })

        it("Creating Work Group Details and Asset Group Details", async () => {
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

        it("Creating Standard Task Details and Type Code Details", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.standardTaskDetails)
            await reuseButtons.clickAddButton()
            await standardTaskDetails.enterWorkGroupCode(constant.workGroupCode)
            await standardTaskDetails.enterTaskCode(constant.taskCode)
            await standardTaskDetails.enterTaskDescription(constant.taskDesc)
            await standardTaskDetails.setStatus(constant.standardStatus)
            await WaitUntil.ElementIsVisible(2)
            await standardTaskDetails.selectEffectiveFrom(constant.standardEffectiveFrom)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton2()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Standard Task Details is successful")

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
            console.log("Validation for Type Code Details is successful")
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
            console.log("Validation for HEPPM Register Details is successful")

            //Asset Information
            await sideNavBar.clickSubModulesDropDown(constant.assetInformation)
            await reuseButtons.clickAddButton()

            //Manufacturer
            await assetInformation.selectType(constant.TypeManufacturer)
            await assetInformation.enterManufacturerName(constant.ManufacturerName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Asset Information is successful")
            await reuseButtons.clickAddNewButton()


            //Make
            await assetInformation.selectType(constant.TypeMake)
            await assetInformation.enterManufacturerName(constant.MakeName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Asset Information is successful")
            await reuseButtons.clickAddNewButton()

            //Brand
            await assetInformation.selectType(constant.TypeBrand)
            await assetInformation.enterManufacturerName(constant.BrandName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Asset Information is successful")
            await reuseButtons.clickAddNewButton()

            //Model
            await assetInformation.selectType(constant.TypeModel)
            await assetInformation.enterManufacturerName(constant.ModelName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Asset Information is successful")
        })

        it("Creating Asset Standardization Details", async () => {

            //Asset Standardization Details            
            await asisHomePage.clickasisHeartIcon()
            await ReusablesComponents.refreshPage()
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickMasterDropDown(constant.femsSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.assetStandardization)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickAddButton()
            await assetStandardization.enterAssetTypeCode(constant.assetTypeCode, constant.concatAssetTypeCode1)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterManufacturer(constant.ManufacturerName, constant.concatManufacturer)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterMake(constant.MakeName, constant.Make)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.clickServiceLabel()
            await assetStandardization.enterBrand(constant.BrandName, constant.concatBrand)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.enterModel(constant.ModelName, constant.Model)
            await assetStandardization.selectStatus(constant.selectStatus)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.clickServiceLabel()
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Asset Standardization Details is successful")
        })


        it("Creating User Area Master in FMS", async () => {

            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.hoverOnServiceIcon(constant.fmsServices)
            await asisHomePage.selectServicesIcon(constant.fmsServices)
            await sideNavBar.clickMasterDropDown(constant.masterLocationSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.locationSubModule1)
            await reuseButtons.clickAddButton()
            await fMSModule.enterFMSUserAreaCode(constant.fmsUserAreaCode)
            await fMSModule.enterFMSUserAreaName(constant.fmsUserAreaName)
            await fMSModule.enterfmsUserDepartCode(constant.userDepartmentCode)
            await fMSModule.clickLabelUDC()
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.entermySPATACode(constant.fmsMySpaCode)
            await fMSModule.selectCategoryOfAreaDropDown(constant.fmsCategoryOfArea)
            await fMSModule.setStatus(constant.fmsStatus)
            await fMSModule.selectlevel(constant.fmsLevel)
            await fMSModule.setWorkingHours(constant.fmsWorkingHours)
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.setTotalFloorArea(constant.fmsTotalFloorArea)
            await fMSModule.clickLabelLevel()
            await fMSModule.setStartServiceDate(constant.fmsStartServiceDate)
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.clickLabelSSD()
            //await fMSModule.selectHospitalRepresentative(constant.fmshospitalRepresentative)
            await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.enterRemarks(constant.remarks)
            // await browser.pause()
            await fMSModule.clickLabelSSD()
            await fMSModule.clickLabelLevel()
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            await WaitUntil.ElementIsVisible(2)
            console.log("Validation for User Area Master in FMS is successful")
        })

        //User Location Master
        it("Creating User Location Master in FMS", async () => {

            await sideNavBar.clickSubModulesDropDown(constant.locationSubModule2)
            await reuseButtons.clickAddButton()
            await fmsUserLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode)
            await fmsUserLocationMaster.enterUserLocationName(constant.fmsUserLocationName)
            await fmsUserLocationMaster.selectUserAreaCodeDropDown(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await fmsUserLocationMaster.clickLabelUDC()
            await WaitUntil.ElementIsVisible(2)
            await fmsUserLocationMaster.setStartServiceDate(constant.fmsStartServiceDate)
            await fmsUserLocationMaster.enterLocationSpecificName(constant.locationSpecificName)
            await fmsUserLocationMaster.clickLabelUDC()
            await WaitUntil.ElementIsVisible(2)
            await fmsUserLocationMaster.clickLabelAuthorized()
            await fmsUserLocationMaster.setOperatingHours(constant.operatingHours)
            await fmsUserLocationMaster.setFloorArea(constant.floorArea)
            await fmsUserLocationMaster.setAirCondArea(constant.airCondArea)
            await fmsUserLocationMaster.selectCleansingCategory(constant.cleansingCategory)
            await fmsUserLocationMaster.selectCriticality(constant.criticality)
            await fmsUserLocationMaster.selectInstalledFacility(constant.installedFacility)
            await fmsUserLocationMaster.clickLabelDiscipline()
            await reuseButtons.clickfmsSaveButton()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for User Location Master in FMS is successful")
        })

        it("Mapping  user Area Master and User Location Master in FEMS  ", async () => {

            //User Area Master 
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.FEMSServiceIcon)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickMasterDropDown(constant.masterLocations)
            await sideNavBar.clickSubModulesDropDown(constant.FEMSLocationSubModule1)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(3)
            await userAreaMaster.enterUserAreaCode(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await WaitUntil.ElementIsVisible(3)
            await userAreaMaster.enterStartServiceDate(constant.fmsStartServiceDate)
            // await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            // await fMSModule.clickLabelDesignaton()
            // await WaitUntil.ElementIsVisible(3)
            // await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await fMSModule.enterRemarks(constant.remarks)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for user Area Master in FEMS is successful")
            await WaitUntil.ElementIsVisible(2)

            //User Location Master
            await sideNavBar.clickSubModulesDropDown(constant.FEMSLocationSubModule2)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await userLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode, constant.concatfmsUserLocationCode)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for User Location Master in FEMS is successful")
        })


        xit("Service Request For FEMS", async () => {

            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.serviceRequest)
            await serviceRequest.selectRequestType(constant.requestType)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickServiceRequestDropDown(constant.addServiceRequest)
            await WaitUntil.ElementIsVisible(2)
            await serviceRequest.selectServiceRequest(constant.serviceType)            
            await serviceRequest.selectRequestorName(constant.requestorName,constant.concatRequestorName)
        })
    })
})