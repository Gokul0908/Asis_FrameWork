import LoginPage from "../pageobjects/loginPage"
import * as constant from "../Constants/const"
import asisHomePage from "../pageobjects/asisHomePage"
import GeneralMaster from "../pageobjects/GeneralMaster"
import fMSModule from "../pageobjects/fMSModule"
import fmsUserLocationMaster from "./../pageobjects/fmsUserLocationMaster"
import gmLinenGroup from "../pageobjects/gmLinenGroup"
import linenItemDetails from "../pageobjects/linenItemDetails"
import lls from "../pageobjects/lls"
import cleanLinenOrderLLS from "../pageobjects/cleanLinenOrderLLS"
import vehicle from "../pageobjects/LaundryPlant/vehicle"
import cleanLinenDespatch from "../pageobjects/LaundryPlant/cleanLinenDespatch"
import driverDetails from "../pageobjects/LaundryPlant/DriverDetails"
import cleanLinenRequest from "../pageobjects/cleanLinenRequest"
import cleanLinenIssue from "../pageobjects/CleanLinenIssue"
import reuseButtons from "./../pageobjects/button"
import sideNavBar from "../pageobjects/sideNavBar"
import WaitUntil from "../pageobjects/waitUntil"

let clono
let clrDocumentNo

describe("Creating a full flow for Linen and Laundry Services", async () => {

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
        })


        it("Creating user Area Master in FMS", async () => {

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
            await fMSModule.checkSuccessNotification(constant.fmsSuccessMessage)
            await WaitUntil.ElementIsVisible(2)

        })


        it("Creating user Location Master in FMS", async () => {

            await sideNavBar.clickSubModulesDropDown(constant.locationSubModule2)
            await reuseButtons.clickAddButton()
            await fmsUserLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode)
            await fmsUserLocationMaster.enterUserLocationName(constant.fmsUserLocationName)
            await fmsUserLocationMaster.selectUserAreaCodeDropDown(constant.fmsUserAreaCode)
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
            await fmsUserLocationMaster.checkSuccessNotification(constant.ULMSuccessMessage)
        });
    })

    describe("Creating Linen Group Code and Creating linen Item Details in GM ", async () => {

        it("Linen Group Code nd linen Item Details", async () => {

            await GeneralMaster.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await sideNavBar.clickMasterDropDown(constant.masterSubModulesLLS)
            await sideNavBar.clickSubModulesDropDown(constant.subModuleLinenGroup)
            await reuseButtons.clickAddButton()
            await gmLinenGroup.enterlinengrpCode(constant.linenGrpCode)
            await gmLinenGroup.enterLinenGrpDescription(constant.linenGrpDescription)
            await reuseButtons.clickSaveButton()
            await WaitUntil.ElementIsVisible(2)

            //Creating Linen Item Details
            await sideNavBar.clickSubModulesDropDown(constant.subModuleLinenItemDetail)
            await reuseButtons.clickAddButton()
            await linenItemDetails.selectHospitalSpecific(constant.hospitalSpecific)
            await linenItemDetails.enterLinenGrpCode(constant.linenGrpCode, constant.concatlinen)
            await linenItemDetails.selectLinenCategory(constant.linenCategory)
            await linenItemDetails.enterLinenCode(constant.linenCode)
            await linenItemDetails.enterLinenDescription(constant.linenDescription)
            await linenItemDetails.setLinenStatus(constant.linenStatus)
            await linenItemDetails.enterDimesionInput(constant.dimensionvalue)
            await WaitUntil.ElementIsVisible(2)
            await linenItemDetails.enterEffectiveDate(constant.linenEffectiveDate)
            await linenItemDetails.selectLinenColor(constant.linenColor)
            await WaitUntil.ElementIsVisible(2)
            await linenItemDetails.selectMaterial(constant.selectMaterial)
            await linenItemDetails.selectStandard(constant.selectStandard)
            await WaitUntil.ElementIsVisible(2)
            await linenItemDetails.setStandardWeight(constant.standardWeight)
            await linenItemDetails.clickLabelRemarks()
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickLIDSaveButton()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await WaitUntil.ElementIsVisible(2)

        })
    })

    describe("Adding Linen Item Details , Linen Unit Price, User Department and Area Details in LLS", async () => {

        it("Linen Item Details in LLS", async () => {
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)
            await sideNavBar.clickMasterDropDown(constant.masterDropDownLinenDetails)
            await sideNavBar.clickSubModulesDropDown(constant.subModuleLinenItemDetails)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await lls.enterLinenGrpCode(constant.linenCode, constant.concatLinenCode)
            await reuseButtons.clickLIDSaveButton()
            await WaitUntil.ElementIsVisible(2)
            await lls.clickAttachmentsTab()
            await lls.selectFileType(constant.fileType)
            await lls.enterFileName(constant.fileName)
            await lls.uploadFile(constant.filepath)
            await WaitUntil.ElementIsVisible(2)
            // await lls.clickAttachmentSaveButton()
            await reuseButtons.clickAttachmentSaveButton2()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await WaitUntil.ElementIsVisible(2)
        })

        it("Linen Unit Price in LLS ", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.submoduleLinenUnitPrice)
            await lls.selectPageSize(constant.pagesize)
            await lls.enterUnitPriceRM(constant.linenUnitPrice)
            await lls.clickLinenUnitPriceSaveButton()
            await WaitUntil.ElementIsVisible(2)
        })

        it("Create UserDepartment and Area Details in lls", async () => {
            await sideNavBar.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await lls.selectUserDepartmentArea(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await WaitUntil.ElementIsVisible(2)
            await lls.clickLabelRemarks()
            await lls.selecthospital(constant.hospitalname, constant.hospitalRepresentative)
            await WaitUntil.ElementIsVisible(2)
            await lls.selectOperatingDays(constant.operatingDays)
            await WaitUntil.ElementIsVisible(2)
            await lls.enterEffectiveDate(constant.effectiveDate)
            await lls.enterBagpieces(constant.bagpieces)
            await lls.enterDeliveryTime(constant.deliveryTime)
            await WaitUntil.ElementIsVisible(2)
            await lls.clickLabelRemarks()
            await lls.enterCollectionTime(constant.collectionTime)
            await lls.enterLinenArrangementTime(constant.linenTime)
            await lls.selectCleansingAndSantizingDay(constant.SantizingDay)
            await lls.selectFurnishingItem(constant.furnishingItem)
            await lls.selectStartingMonth(constant.startingMonth)
            await lls.selectWeekDay(constant.weekDay)
            await WaitUntil.ElementIsVisible(2)
            await lls.enterLinencode(constant.linenCode, constant.concatLinenCode1)
            await lls.enterPar1Require(constant.par1Require)
            await lls.enterPar2Require(constant.par2Require)
            await WaitUntil.ElementIsVisible(2)
            await lls.selectDefaultIssue(constant.defaultIssue)
            await lls.clickUserDepartSaveButton()
            await WaitUntil.ElementIsVisible(2)
            await lls.checkSuccessNotification(constant.lIDSuccessMessage)
            await sideNavBar.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await WaitUntil.ElementIsVisible(2)
        })

    })

    describe("Creating Linen Order and Despatching in LLS", async () => {

        it("Clean Linen Order ", async () => {

            await sideNavBar.clickTransactionDropDown(constant.transactionSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.linenShipmentSubModule)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickAddButton()
            await cleanLinenOrderLLS.selectPriority(constant.priority)
            await cleanLinenOrderLLS.enterRemarks(constant.remarks)
            await cleanLinenOrderLLS.selectLinenCode(constant.concatLinenCode2, constant.linenCode)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenOrderLLS.enterRequestedQuantity(constant.requestedQuantity)
            await cleanLinenOrderLLS.getStatusLabel()
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
            await sideNavBar.clickSubModulesDropDown(constant.linenShipmentSubModule)
            clono = await cleanLinenOrderLLS.getCLONo()
            await cleanLinenOrderLLS.clickCLONoEditIcon()
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickSubmitButton()
            await sideNavBar.clickSubModulesDropDown(constant.linenShipmentSubModule)
            await cleanLinenOrderLLS.clickCLONoApproveIcon()
            await reuseButtons.clickApprovedButton()
            await WaitUntil.ElementIsVisible(2)
        })


        xit("Creating Vehicle Details in Laundry Plant", async () => {
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.laundryLocation)
            await WaitUntil.ElementIsVisible(2)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)
            await sideNavBar.clickMasterDropDown(constant.laundryPlant)
            await sideNavBar.clickSubModulesDropDown(constant.vvehicleDetails)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await vehicle.setVehicleNo(constant.vvehicleNo)
            await vehicle.setManufacturer(constant.vmanufacturer)
            await vehicle.enterEffectiveDate(constant.veffectiveDate)
            await WaitUntil.ElementIsVisible(2)
            await vehicle.clickLicenseDropDown(constant.vlicenseCode, constant.vconcatLicense)
            await vehicle.selectClassGrade(constant.vGrade)
            await vehicle.setLicenseNo(constant.vlicenseNo)
            await WaitUntil.ElementIsVisible(2)
            await vehicle.selectIssuedBy(constant.vIssuedBy)
            await vehicle.enterIssuedDate(constant.vissuedDate)
            await vehicle.clickLoadLabel()
            await WaitUntil.ElementIsVisible(2) ///issuedDate  expiryDate   effectiveDate
            await vehicle.enterExpiryDate(constant.vexpiryDate)
            await vehicle.enterRemarks(constant.vVehicleRemarks)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickvehicleSaveButton()
            await WaitUntil.ElementIsVisible(2)
        })


        xit("Creating Driver  Details in Laundry Plant", async () => {

            // await asisHomePage.clickasisHeartIcon()
            // await asisHomePage.chooseLocation(constant.laundryLocation)
            // await browser.pause(2567)
            // await asisHomePage.selectServicesIcon(constant.llsServiceIcon)

            await sideNavBar.clickMasterDropDown(constant.laundryPlant)
            await sideNavBar.clickSubModulesDropDown(constant.ddriverDetails)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await driverDetails.setDriverCode(constant.ddriverCode)
            await driverDetails.setDriverName(constant.ddriverName)
            await driverDetails.enterEffectiveFrom(constant.deffectiveFrom)
            await WaitUntil.ElementIsVisible(2)
            await driverDetails.clickLicenseDropDown(constant.dlicenseCode, constant.dconcatLicense)
            await driverDetails.selectClassGrade(constant.dGrade)
            await driverDetails.setLicenseNo(constant.dlicenseNo)
            await WaitUntil.ElementIsVisible(2)
            await driverDetails.selectIssuedBy(constant.dIssuedBy)
            await driverDetails.enterIssuedDate(constant.dissuedDate)
            await driverDetails.enterExpiryDate(constant.dexpiryDate)
            await WaitUntil.ElementIsVisible(2)
            await driverDetails.enterRemarks(constant.dVehicleRemarks)
            await reuseButtons.clickvehicleSaveButton()
            await WaitUntil.ElementIsVisible(2)
        })




        it("Despatching Clean Linen Order", async () => {


            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.laundryLocation)
            await WaitUntil.ElementIsVisible(2)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)


            await sideNavBar.clickTransactionDropDown(constant.transactionSubModule)
            await sideNavBar.clickSubModulesDropDown(constant.linenDespatch)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenDespatch.selectOrderType(constant.orderType)
            await cleanLinenDespatch.enterDespatchDate(constant.despatchDate, constant.despatchTime)
            await cleanLinenDespatch.enterCLONo(clono)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenDespatch.enterDriverCode(constant.ddriverCode)
            await cleanLinenDespatch.verifyCheckedByLabel()
            await cleanLinenDespatch.enterVehicleRegisterNo(constant.vehicleNo)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenDespatch.enterCheckedBy(constant.checkedBy)
            await cleanLinenDespatch.enterTotalWeight(constant.totalWeight)
            await cleanLinenDespatch.enterNoOfTrolleys(constant.noOfTrolleys)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenDespatch.clickRemarks()
            await cleanLinenDespatch.enterDespatchQuantity(constant.dispatchQuantity)
            await reuseButtons.clickSaveButton1()
            await WaitUntil.ElementIsVisible(2)
        })


        it("Creating Clean Linen Request", async () => {


            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.location)
            await WaitUntil.ElementIsVisible(2)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)


            await sideNavBar.clickTransactionDropDown(constant.transactionLinenAdequacyModule)
            await sideNavBar.clickSubModulesDropDown(constant.linenAdequacySubModule1)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenRequest.enterUserDepartCode(constant.fmsUserAreaCode)
            await cleanLinenRequest.selectRequestedBy(constant.requestedBy)
            await cleanLinenRequest.enterRemarks(constant.remarks)
            await cleanLinenRequest.selectPriority(constant.CLRPriority)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenRequest.enterRequestedQuantity(constant.requestedQuantity)
            await WaitUntil.ElementIsVisible(2)
            await reuseButtons.clickCLRSaveButton()
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenRequest.clickAttachmentTab()
            await cleanLinenRequest.selectFileType(constant.clrFiletype)
            await cleanLinenRequest.enterFileName(constant.fileName)
            await cleanLinenRequest.uploadFile(constant.filepath)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenRequest.clickAttachmentSaveButton()
            await sideNavBar.clickSubModulesDropDown(constant.linenAdequacySubModule1)
            await WaitUntil.ElementIsVisible(2)
            clrDocumentNo = await cleanLinenRequest.getCLRDocumentNo()
        })

        it("Creating Clean Linen Issues", async () => {

            await sideNavBar.clickSubModulesDropDown(constant.linenAdequacySubModule2)
            await reuseButtons.clickAddButton()
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenIssue.enterCLRDocumentNo(clrDocumentNo)
            await cleanLinenIssue.clickRequestLabel()
            await cleanLinenIssue.selectQCTimeliness(constant.QCTimeliness)
            await cleanLinenIssue.enterissuedQuantity(constant.issuedQuantity)
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenIssue.enterFirstDeliveryQuantity(constant.selectQuantity)
            await reuseButtons.clickCLISavebutton()
            await reuseButtons.clickCLISubmitButton()
            await WaitUntil.ElementIsVisible(2)
            await cleanLinenIssue.clickYesPopUp()
            await WaitUntil.ElementIsVisible(2)
        })
    })
})