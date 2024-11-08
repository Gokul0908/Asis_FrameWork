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

let clono
let clrDocumentNo

describe("Creating a full flow for Linen and Laundry Services", async () => {

    before(async () => {
        await browser.url(constant.asisURL)
        await browser.maximizeWindow()
    })

    // after(async () => {
    //     await asisHomePage.asisuserLogoutToTheApplication()
    // })


    describe("Asis User Login to the Application and Creating User Area Master and User Location Master", async () => {


        it("Asis User Login to the Application and Creating Standard User Department Code  for LLS ", async () => {
            await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
            await asisHomePage.chooseCompany(constant.company)
            await asisHomePage.chooseLocation(constant.location)
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await GeneralMaster.clickMasterDropDown(constant.masterSubModulesGeneral)
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleValues)
            await GeneralMaster.clickSUDAddButton()
            await GeneralMaster.enterUserDepartmentCode(constant.userDepartmentCode)
            await GeneralMaster.enterUserDepartmentName(constant.userDepartmentName)
            await GeneralMaster.clickSaveButton()
            await GeneralMaster.clickasisHeartIcon()
        })


        it("Creating user Area Master in FMS", async () => {

            await asisHomePage.hoverOnServiceIcon(constant.fmsServices)
            await asisHomePage.selectServicesIcon(constant.fmsServices)
            await fMSModule.clickMasterDropDown(constant.masterLocationSubModule)
            await fMSModule.clickSubModulesDropDown(constant.locationSubModule1)
            await fMSModule.clickUserAreaMasterAddButton()
            await fMSModule.enterFMSUserAreaCode(constant.fmsUserAreaCode)
            await fMSModule.enterFMSUserAreaName(constant.fmsUserAreaName)
            await fMSModule.enterfmsUserDepartCode(constant.userDepartmentCode)
            await fMSModule.clickLabelUDC()
            await browser.pause(2567)
            await fMSModule.entermySPATACode(constant.fmsMySpaCode)
            await fMSModule.selectCategoryOfAreaDropDown(constant.fmsCategoryOfArea)
            await fMSModule.setStatus(constant.fmsStatus)
            await fMSModule.selectlevel(constant.fmsLevel)
            await fMSModule.setWorkingHours(constant.fmsWorkingHours)
            await browser.pause(2567)
            await fMSModule.setTotalFloorArea(constant.fmsTotalFloorArea)
            await fMSModule.clickLabelLevel()
            await fMSModule.setStartServiceDate(constant.fmsStartServiceDate)
            await browser.pause(2567)
            await fMSModule.clickLabelSSD()
            //await fMSModule.selectHospitalRepresentative(constant.fmshospitalRepresentative)
            await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            await browser.pause(2567)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await browser.pause(2567)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.enterRemarks(constant.remarks)
            // await browser.pause(2567)
            await fMSModule.clickLabelSSD()
            await fMSModule.clickLabelLevel()
            await browser.pause(2567)
            await fMSModule.clickSaveButton()
            await fMSModule.checkSuccessNotification(constant.fmsSuccessMessage)
            await browser.pause(2567)

        })


        it("Creating user Location Master in FMS", async () => {

            await fMSModule.clickSubModulesDropDown(constant.locationSubModule2)
            await fmsUserLocationMaster.clickULMAddButton()
            await fmsUserLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode)
            await fmsUserLocationMaster.enterUserLocationName(constant.fmsUserLocationName)
            await fmsUserLocationMaster.selectUserAreaCodeDropDown(constant.fmsUserAreaCode)
            await fmsUserLocationMaster.clickLabelUDC()
            await browser.pause(2567)
            await fmsUserLocationMaster.setStartServiceDate(constant.fmsStartServiceDate)
            await fmsUserLocationMaster.enterLocationSpecificName(constant.locationSpecificName)
            await fmsUserLocationMaster.clickLabelUDC()
            await browser.pause(2567)
            await fmsUserLocationMaster.clickLabelAuthorized()
            await fmsUserLocationMaster.setOperatingHours(constant.operatingHours)
            await fmsUserLocationMaster.setFloorArea(constant.floorArea)
            await fmsUserLocationMaster.setAirCondArea(constant.airCondArea)
            await fmsUserLocationMaster.selectCleansingCategory(constant.cleansingCategory)
            await fmsUserLocationMaster.selectCriticality(constant.criticality)
            await fmsUserLocationMaster.selectInstalledFacility(constant.installedFacility)
            await fmsUserLocationMaster.clickLabelDiscipline()
            await fmsUserLocationMaster.clickSaveButton()
            await fmsUserLocationMaster.checkSuccessNotification(constant.ULMSuccessMessage)
        });
    })

    describe("Creating Linen Group Code and Creating linen Item Details in GM ", async () => {

        it("Linen Group Code nd linen Item Details", async () => {

            await GeneralMaster.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await GeneralMaster.clickMasterDropDown(constant.masterSubModulesLLS)
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleLinenGroup)
            await gmLinenGroup.clicklinenGroupaddButton()
            await gmLinenGroup.enterlinengrpCode(constant.linenGrpCode)
            await gmLinenGroup.enterLinenGrpDescription(constant.linenGrpDescription)
            await gmLinenGroup.clickSaveButton()
            await browser.pause(2567)

            //Creating Linen Item Details
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleLinenItemDetail)
            await linenItemDetails.clickAddButton()
            await linenItemDetails.selectHospitalSpecific(constant.hospitalSpecific)
            await linenItemDetails.enterLinenGrpCode(constant.linenGrpCode, constant.concatlinen)
            await linenItemDetails.selectLinenCategory(constant.linenCategory)
            await linenItemDetails.enterLinenCode(constant.linenCode)
            await linenItemDetails.enterLinenDescription(constant.linenDescription)
            await linenItemDetails.setLinenStatus(constant.linenStatus)
            await linenItemDetails.enterDimesionInput(constant.dimensionvalue)
            await browser.pause(2567)
            await linenItemDetails.enterEffectiveDate(constant.linenEffectiveDate)
            await linenItemDetails.selectLinenColor(constant.linenColor)
            await browser.pause(2567)
            await linenItemDetails.selectMaterial(constant.selectMaterial)
            await linenItemDetails.selectStandard(constant.selectStandard)
            await browser.pause(2567)
            await linenItemDetails.setStandardWeight(constant.standardWeight)
            await linenItemDetails.clickLabelRemarks()
            await browser.pause(2567)
            await linenItemDetails.clickSaveButton()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await browser.pause(2567)

        })
    })

    describe("Adding Linen Item Details , Linen Unit Price, User Department and Area Details in LLS", async () => {

        it("Linen Item Details in LLS", async () => {
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)
            await lls.clickMasterDropDown(constant.masterDropDownLinenDetails)
            await lls.clickSubModulesDropDown(constant.subModuleLinenItemDetails)
            await lls.clickaddButton()
            await browser.pause(2567)
            await lls.enterLinenGrpCode(constant.linenCode, constant.concatLinenCode)
            await lls.clickSaveButton()
            await browser.pause(2567)
            await lls.clickAttachmentsTab()
            await lls.selectFileType(constant.fileType)
            await lls.enterFileName(constant.fileName)
            await lls.uploadFile(constant.filepath)
            await browser.pause(2567)
            // await lls.clickAttachmentSaveButton()
            await lls.clickAttachmentSaveButton2()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await browser.pause(2567)
        })

        it("Linen Unit Price in LLS ", async () => {
            await lls.clickSubModulesDropDown(constant.submoduleLinenUnitPrice)
            await lls.selectPageSize(constant.pagesize)
            await lls.enterUnitPriceRM(constant.linenUnitPrice)
            await lls.clickLinenUnitPriceSaveButton()
            await browser.pause(2567)
        })

        it("Create UserDepartment and Area Details in lls", async () => {
            await lls.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await lls.clickaddButton()
            await browser.pause(2567)
            await lls.selectUserDepartmentArea(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await browser.pause(2567)
            await lls.clickLabelRemarks()
            await lls.selecthospital(constant.hospitalname, constant.hospitalRepresentative)
            await browser.pause(2567)
            await lls.selectOperatingDays(constant.operatingDays)
            await browser.pause(2567)
            await lls.enterEffectiveDate(constant.effectiveDate)
            await lls.enterBagpieces(constant.bagpieces)
            await lls.enterDeliveryTime(constant.deliveryTime)
            await browser.pause(2567)
            await lls.clickLabelRemarks()
            await lls.enterCollectionTime(constant.collectionTime)
            await lls.enterLinenArrangementTime(constant.linenTime)
            await lls.selectCleansingAndSantizingDay(constant.SantizingDay)
            await lls.selectFurnishingItem(constant.furnishingItem)
            await lls.selectStartingMonth(constant.startingMonth)
            await lls.selectWeekDay(constant.weekDay)
            await browser.pause(2567)
            await lls.enterLinencode(constant.linenCode, constant.concatLinenCode1)
            await lls.enterPar1Require(constant.par1Require)
            await lls.enterPar2Require(constant.par2Require)
            await browser.pause(2567)
            await lls.selectDefaultIssue(constant.defaultIssue)
            await lls.clickUserDepartSaveButton()
            await browser.pause(2567)
            await lls.checkSuccessNotification(constant.lIDSuccessMessage)
            await lls.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await browser.pause(2567)
        })

    })

    describe("Creating Linen Order and Despatching in LLS", async () => {

        it("Clean Linen Order ", async () => {

            await cleanLinenOrderLLS.clickTransactionDropDown(constant.transactionSubModule)
            await cleanLinenOrderLLS.clickSubModulesDropDown(constant.linenShipmentSubModule)
            await browser.pause(2567)
            await cleanLinenOrderLLS.clickaddButton()
            await cleanLinenOrderLLS.selectPriority(constant.priority)
            await cleanLinenOrderLLS.enterRemarks(constant.remarks)
            await cleanLinenOrderLLS.selectLinenCode(constant.concatLinenCode2, constant.linenCode)
            await browser.pause(2567)
            await cleanLinenOrderLLS.enterRequestedQuantity(constant.requestedQuantity)
            await cleanLinenOrderLLS.getStatusLabel()
            await cleanLinenOrderLLS.clickSaveButton()
            await browser.pause(2567)
            await cleanLinenOrderLLS.clickSubModulesDropDown(constant.linenShipmentSubModule)
            clono = await cleanLinenOrderLLS.getCLONo()
            await cleanLinenOrderLLS.clickCLONoEditIcon()
            await browser.pause(2567)
            await cleanLinenOrderLLS.clickSubmitButton()
            await cleanLinenOrderLLS.clickSubModulesDropDown(constant.linenShipmentSubModule)
            await cleanLinenOrderLLS.clickCLONoApproveIcon()
            await cleanLinenOrderLLS.clickApprovedButton()
            await browser.pause(2567)
        })


        xit("Creating Vehicle Details in Laundry Plant", async () => {
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.laundryLocation)
            await browser.pause(2567)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)
            await vehicle.clickMasterDropDown(constant.laundryPlant)
            await vehicle.clickSubModulesDropDown(constant.vvehicleDetails)
            await vehicle.clickaddButton()
            await browser.pause(2567)
            await vehicle.setVehicleNo(constant.vvehicleNo)
            await vehicle.setManufacturer(constant.vmanufacturer)
            await vehicle.enterEffectiveDate(constant.veffectiveDate)
            await browser.pause(2567)
            await vehicle.clickLicenseDropDown(constant.vlicenseCode, constant.vconcatLicense)
            await vehicle.selectClassGrade(constant.vGrade)
            await vehicle.setLicenseNo(constant.vlicenseNo)
            await browser.pause(2567)
            await vehicle.selectIssuedBy(constant.vIssuedBy)
            await vehicle.enterIssuedDate(constant.vissuedDate)
            await vehicle.clickLoadLabel()
            await browser.pause(3500) ///issuedDate  expiryDate   effectiveDate
            await vehicle.enterExpiryDate(constant.vexpiryDate)
            await vehicle.enterRemarks(constant.vVehicleRemarks)
            await browser.pause(10000)
            await vehicle.clickSaveButton()
            await browser.pause(2567)
        })


        xit("Creating Driver  Details in Laundry Plant", async () => {

            // await asisHomePage.clickasisHeartIcon()
            // await asisHomePage.chooseLocation(constant.laundryLocation)
            // await browser.pause(2567)
            // await asisHomePage.selectServicesIcon(constant.llsServiceIcon)

            await vehicle.clickMasterDropDown(constant.laundryPlant)
            await vehicle.clickSubModulesDropDown(constant.ddriverDetails)
            await vehicle.clickaddButton()
            await browser.pause(2567)
            await driverDetails.setDriverCode(constant.ddriverCode)
            await driverDetails.setDriverName(constant.ddriverName)
            await driverDetails.enterEffectiveFrom(constant.deffectiveFrom)
            await browser.pause(2567)
            await driverDetails.clickLicenseDropDown(constant.dlicenseCode, constant.dconcatLicense)
            await driverDetails.selectClassGrade(constant.dGrade)
            await driverDetails.setLicenseNo(constant.dlicenseNo)
            await browser.pause(2567)
            await driverDetails.selectIssuedBy(constant.dIssuedBy)
            await driverDetails.enterIssuedDate(constant.dissuedDate)
            await driverDetails.enterExpiryDate(constant.dexpiryDate)
            await browser.pause(2567)
            await driverDetails.enterRemarks(constant.dVehicleRemarks)
            await driverDetails.clickSaveButton()
            await browser.pause(2567)
        })




        it("Despatching Clean Linen Order", async () => {


            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.laundryLocation)
            await browser.pause(2567)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)


            await cleanLinenDespatch.clickTransactionDropDown(constant.transactionSubModule)
            await cleanLinenDespatch.clickSubModulesDropDown(constant.linenDespatch)
            await cleanLinenDespatch.clickaddButton()
            await browser.pause(2567)
            await cleanLinenDespatch.selectOrderType(constant.orderType)
            await cleanLinenDespatch.enterDespatchDate(constant.despatchDate, constant.despatchTime)
            await cleanLinenDespatch.enterCLONo(clono)
            await browser.pause(2567)
            await cleanLinenDespatch.enterDriverCode(constant.ddriverCode)
            await cleanLinenDespatch.verifyCheckedByLabel()
            await cleanLinenDespatch.enterVehicleRegisterNo(constant.vehicleNo)
            await browser.pause(2567)
            await cleanLinenDespatch.enterCheckedBy(constant.checkedBy)
            await cleanLinenDespatch.enterTotalWeight(constant.totalWeight)
            await cleanLinenDespatch.enterNoOfTrolleys(constant.noOfTrolleys)
            await browser.pause(2567)
            await cleanLinenDespatch.clickRemarks()
            await cleanLinenDespatch.enterDespatchQuantity(constant.dispatchQuantity)
            await cleanLinenDespatch.clickSaveButton()
            await browser.pause(2567)
        })


        it("Creating Clean Linen Request", async () => {


            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.chooseLocation(constant.location)
            await browser.pause(2567)
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)


            await cleanLinenRequest.clickTransactionDropDown(constant.transactionLinenAdequacyModule)
            await cleanLinenRequest.clickSubModulesDropDown(constant.linenAdequacySubModule1)
            await cleanLinenRequest.clickaddButton()
            await browser.pause(2567)
            await cleanLinenRequest.enterUserDepartCode(constant.fmsUserAreaCode)
            await cleanLinenRequest.selectRequestedBy(constant.requestedBy)
            await cleanLinenRequest.enterRemarks(constant.remarks)
            await cleanLinenRequest.selectPriority(constant.CLRPriority)
            await browser.pause(2567)
            await cleanLinenRequest.enterRequestedQuantity(constant.requestedQuantity)
            await browser.pause(2567)
            await cleanLinenRequest.clickSaveButton()
            await browser.pause(2567)
            await cleanLinenRequest.clickAttachmentTab()
            await cleanLinenRequest.selectFileType(constant.clrFiletype)
            await cleanLinenRequest.enterFileName(constant.fileName)
            await cleanLinenRequest.uploadFile(constant.filepath)
            await browser.pause(2567)
            await cleanLinenRequest.clickAttachmentSaveButton()
            await cleanLinenRequest.clickSubModulesDropDown(constant.linenAdequacySubModule1)
            await browser.pause(2567)
            clrDocumentNo = await cleanLinenRequest.getCLRDocumentNo()
        })

        it("Creating Clean Linen Issues", async () => {
            
            await cleanLinenIssue.clickSubModulesDropDown(constant.linenAdequacySubModule2)
            await cleanLinenIssue.clickaddButton()
            await browser.pause(2567)
            await cleanLinenIssue.enterCLRDocumentNo(clrDocumentNo)
            await cleanLinenIssue.clickRequestLabel()
            await cleanLinenIssue.selectQCTimeliness(constant.QCTimeliness)
            await cleanLinenIssue.enterissuedQuantity(constant.issuedQuantity)
            await browser.pause(2567)
            await cleanLinenIssue.enterFirstDeliveryQuantity(constant.selectQuantity)
            await cleanLinenIssue.clickSavebutton()
            await cleanLinenIssue.clickSubmitButton()
            await browser.pause(2567)
            await cleanLinenIssue.clickYesPopUp()
            await browser.pause(2567)
        })
    })
})