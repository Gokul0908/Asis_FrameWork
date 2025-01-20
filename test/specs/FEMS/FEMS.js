import reuseButtons from '../../pageobjects/button.js'
import LoginPage from '../../pageobjects/loginPage.js'
import asisHomePage from '../../pageobjects/asisHomePage.js'
import sideNavBar from '../../pageobjects/sideNavBar.js'
import WaitUntil from '../../pageobjects/waitUntil.js'
import * as constant from '../../../Constants/const.js'
import GeneralMaster from '../../pageobjects/LLS/GeneralMaster.js'
import workGrpDetails from '../../pageobjects/FEMS/workGrpDetails.js'
import assetGroupDetails from '../../pageobjects/FEMS/assetGroupDetails.js'
import standardTaskDetails from '../../pageobjects/FEMS/standardTaskDetails.js'
import typeCodeDetails from '../../pageobjects/FEMS/typeCodeDetails.js'
import ReusablesComponents from '../../pageobjects/reuse.js'
import heppmRegister from '../../pageobjects/FEMS/heppmRegister.js'
import assetInformation from '../../pageobjects/FEMS/assetInformation.js'
import assetStandardization from '../../pageobjects/FEMS/assetStandardization.js'
import fmsUserLocationMaster from '../../pageobjects/LLS/fmsUserLocationMaster.js'
import fMSModule from '../../pageobjects/LLS/fMSModule.js'
import userAreaMaster from '../../pageobjects/FEMS/userAreaMaster.js'
import userLocationMaster from '../../pageobjects/FEMS/userLocationMaster.js'
import serviceRequest from '../../pageobjects/FEMS/serviceRequest.js'
import hooks from '../../../hooks.js'
import testingAndCommissioning from '../../pageobjects/FEMS/testingAndCommissioning.js'
import contractorAndVendorMaster from '../../pageobjects/FEMS/contractorAndVendorMaster.js'
import srAttachment from '../../pageobjects/FEMS/srAttachment.js'



let requestno;


describe("Creating a full flow for FEMS", async () => {


    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
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
            await WaitUntil.ElementIsVisible(3)
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
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
            await typeCodeDetails.enterPostWarrantyRateDate(constant.postWarrantyRateDate)
            await reuseButtons.clickSaveButton2()
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Type Code Details is successful")
        })

        it("Creating HEPPM Register Details and Asset Information", async () => {


            await sideNavBar.clickSubModulesDropDown(constant.heppmRegister)
            await ReusablesComponents.refreshPage()
            await reuseButtons.clickAddButton()
            await heppmRegister.enterAssetTypeCode(constant.assetTypeCode, constant.concatAssetTypeCode)
            await heppmRegister.enterTaskCode(constant.taskDesc, constant.concatTaskCode)
            await WaitUntil.ElementIsVisible(2)
            await heppmRegister.selectPPMFrequency(constant.selectFrequency)
            await heppmRegister.enterVersion(constant.version)
            await WaitUntil.ElementIsVisible(2)
            await heppmRegister.enterEffectiveFrom(constant.effectiveFrom)
            await heppmRegister.uploadFile(constant.filepath)
            await WaitUntil.ElementIsVisible(2)
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
            console.log("Validation for Manufacturer Asset Information is successful")
            await reuseButtons.clickAddNewButton()

            //Make
            await assetInformation.selectType(constant.TypeMake)
            await assetInformation.enterManufacturerName(constant.MakeName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Make Asset Information is successful")
            await reuseButtons.clickAddNewButton()

            //Brand
            await assetInformation.selectType(constant.TypeBrand)
            await assetInformation.enterManufacturerName(constant.BrandName)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Brand Asset Information is successful")
            await reuseButtons.clickAddNewButton()

            //Model
            await assetInformation.selectType(constant.TypeModel)
            await assetInformation.enterManufacturerName(constant.ModelName)
            // await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for Model Asset Information is successful")
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
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(5)
            // await ReusablesComponents.waitForPendingRequests()
            await assetStandardization.enterAssetTypeCode(constant.assetTypeCode, constant.concatAssetTypeCode1)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.enterManufacturer(constant.ManufacturerName, constant.concatManufacturer)
            await assetStandardization.clickServiceLabel()
            await ReusablesComponents.waitForPageToLoad()
            await assetStandardization.enterMake(constant.MakeName, constant.Make)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.enterBrand(constant.BrandName, constant.concatBrand)
            await WaitUntil.ElementIsVisible(2)
            await assetStandardization.enterModel(constant.ModelName, constant.Model)
            await assetStandardization.selectStatus(constant.selectStatus)
            await WaitUntil.ElementIsVisible(5)
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
            await WaitUntil.ElementIsVisible(2)
            await fMSModule.entermySPATACode(constant.fmsMySpaCode)
            await fMSModule.selectCategoryOfAreaDropDown(constant.fmsCategoryOfArea)
            await fMSModule.setStatus(constant.fmsStatus)
            await fMSModule.selectlevel(constant.fmsLevel)
            await fMSModule.setWorkingHours(constant.fmsWorkingHours)
            await fMSModule.setTotalFloorArea(constant.fmsTotalFloorArea)
            await fMSModule.clickLabelLevel()
            await fMSModule.setStartServiceDate(constant.fmsStartServiceDate)
            //await fMSModule.selectHospitalRepresentative(constant.fmshospitalRepresentative)
            await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            await fMSModule.clickLabelLevel()
            await fMSModule.clickRemarks()
            await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await fMSModule.clickLabelLevel()
            await fMSModule.enterRemarks(constant.remarks)
            await WaitUntil.ElementIsVisible(5)
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
            await fmsUserLocationMaster.clickLabelUDC()
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

        it("Mapping user Area Master and User Location Master in FEMS  ", async () => {

            //User Area Master 
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.FEMSServiceIcon)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickMasterDropDown(constant.masterLocations)
            await sideNavBar.clickSubModulesDropDown(constant.FEMSLocationSubModule1)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(3)
            await userAreaMaster.enterUserAreaCode(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await userAreaMaster.enterStartServiceDate(constant.fmsStartServiceDate)
            // await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            // await fMSModule.clickLabelDesignaton()
            // await WaitUntil.ElementIsVisible(3)
            // await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await fMSModule.enterRemarks(constant.remarks)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for user Area Master in FEMS is successful")

            //User Location Master
            await sideNavBar.clickSubModulesDropDown(constant.FEMSLocationSubModule2)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await userLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode, constant.concatfmsUserLocationCode)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            console.log("Validation for User Location Master in FEMS is successful")
        })


        it("Creating Service Request For FEMS", async () => {

            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.serviceRequestIcon)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickServiceRequestDD()
            await reuseButtons.clickAddButton()
            // await serviceRequest.selectService(constant.serviceType)
            await WaitUntil.ElementIsVisible(3)
            await serviceRequest.selectServiceRequest(constant.serviceType)
            await serviceRequest.selectRequestType(constant.requestType)
            await serviceRequest.selectRequestorName(constant.requestorName, constant.concatRequestorName)
            await serviceRequest.selectUserLocationCode(constant.userLocationCode, constant.concatUserLocationCode)
            await serviceRequest.enterDetails(constant.details)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
            await reuseButtons.clickBackButton()
            // await ReusablesComponents.clickRestIcon()
            await reuseButtons.clickToggleSearchBtn()
            // await ReusablesComponents.resetIconVisible()
            await WaitUntil.ElementIsVisible(3)
            await ReusablesComponents.clickResetIcon()
            await WaitUntil.ElementIsVisible(3)
            await serviceRequest.selectFilter(constant.filter1)
            // await serviceRequest.selectFilter2(constant.filter2)
            await ReusablesComponents.enterValue(constant.fmsUserLocationCode)
            await WaitUntil.ElementIsVisible(3)
            await ReusablesComponents.clickFindButton()
            requestno = await serviceRequest.getRequestNo()
            await reuseButtons.clickEditIcon()
            await srAttachment.enterFileName(constant.fileName)
            await srAttachment.uploadFile(constant.filepath)
            await reuseButtons.clickSaveButton2()


        })

        it("Creating SSM Registration code for T and C ", async () => {

            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.fmsServices)
            await sideNavBar.clickMasterDropDown(constant.contractndContractor)
            await sideNavBar.clickSubModulesDropDown(constant.contractorndVendor)
            await reuseButtons.clickAddButton()
            await contractorAndVendorMaster.selectContractorType(constant.contractType)
            await contractorAndVendorMaster.enterRegistrationCode(constant.registrationcode)
            await contractorAndVendorMaster.selectContratorStatus(constant.contractorStatus)
            await contractorAndVendorMaster.selectStatus(constant.vendorStatus)
            await contractorAndVendorMaster.selectSpecializationDetails()
            await contractorAndVendorMaster.selectState(constant.state)
            await contractorAndVendorMaster.enterAddressLine1(constant.addressLine1)
            await contractorAndVendorMaster.enterCity(constant.city)
            await contractorAndVendorMaster.enterPostalCode(constant.postCode)
            await contractorAndVendorMaster.enterContactPerson(constant.contactPerson)
            await contractorAndVendorMaster.enterTelephone(constant.telephone)
            await contractorAndVendorMaster.enterDesignation(constant.designation)
            await contractorAndVendorMaster.enterEmail(constant.email)
            await reuseButtons.clickSaveButton1()
            await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)

        })

        it("Creating Testing and Commissioning in FEMS", async () => {

            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.FEMSServiceIcon)
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickTransactionDropDown(constant.TandC)
            await sideNavBar.clickSubModulesDropDown(constant.TestingandCommissioning)
            await reuseButtons.clickAddButton()
            await testingAndCommissioning.enterServiceRequestNo(requestno)
            await testingAndCommissioning.selectTandCType(constant.type)
            await testingAndCommissioning.selectTandCDate(constant.currentDate)

            await testingAndCommissioning.ClickNewTypeCodeRequest()
            await testingAndCommissioning.EnterRequestorDate(constant.currentDate)

        })

    })
})