import { getCurrentMonth, getCustomDate, getSystemTimeof10Minutes, getSystemTimeof15Minutes, getTodayDate } from "../Date_TimeFunction"
import utils from "./../utils/utilities"

export const asisURL = "http://172.16.0.60:7500/Account/Login?ReturnUrl=%2fGM%2fstandarduserdepartment%2fadd"
export const aUserName = "mohadmin"
export const aPassword = "Welcome@123"
export const gmServices = "GM"
export const fmsServices = "FMS"
export const company = "Radicare"
export const location = "Ampang"
export const masterSubModulesGeneral = "General"
export const subModuleValues = "Standard User Department"
export const masterLocationSubModule = "Location"
export const locationSubModule1 = "User Area Master"
export const locationSubModule2 = "User Location Master"

// Add User Area Master 
export const userDepartmentCode = "AM" + utils.getRandomNumbers(4)
export const userDepartmentName = "AMRIScan" + utils.getRandomNumbers(4)
export const concatCodeName = userDepartmentCode + ' ' + '-' + ' ' + userDepartmentName
export const fmsUserAreaCode = "AMARIScan" + utils.getRandomNumbers(4)
export const fmsUserAreaName = "AM" + utils.getRandomNumbers(4)
export const concatfmsUserAreaCode = fmsUserAreaCode + ' ' + '-' + ' ' + fmsUserAreaName
export const fmsMySpaCode = "ASPA" + utils.getRandomNumbers(4)
export const fmsCategoryOfArea = "General Area"
export const fmsLevel = "Level 04"
export const fmsWorkingHours = "8"
export const fmsStatus = "Active"  //  Inactive  Active
export const fmsTotalFloorArea = "1000"
export const fmsStartServiceDate = getTodayDate()
export const fmshospitalRepresentative = "Hospital Director"
export const fmsHospitalNumber = "869679"
export const concatHospitalRep = fmsHospitalNumber + ' ' + '-' + ' ' + fmshospitalRepresentative
export const fmsCompanyRep = "sep"
export const fmsCompanyNumber = "sep"
export const concatCompanyRep = fmsCompanyNumber + '-' + fmsCompanyRep
// export const fmscompanyRepresentative="STFEMP-123-Donald Duck"
export const fmsSuccessMessage = "Data saved successfully"
export const remarks = " Data Saved"


//Add User Location Master 
export const fmsUserLocationCode = "AScan" + utils.getRandomNumbers(4)
export const fmsUserLocationName = "ABodyScan" + utils.getRandomString(4)
export const concatfmsUserLocationCode = fmsUserLocationCode + ' ' + '-' + ' ' + fmsUserLocationName
export const status = "Active"  //  Inactive  Active
export const locationSpecificName = "ANearICU"
export const operatingHours = "24"
export const floorArea = "1000"
export const airCondArea = "500"
export const cleansingCategory = "Medical Area"
export const criticality = "Critical"  // Non-Critical
export const installedFacility = "Mobile"
export const ULMSuccessMessage = "Data saved successfully"


//LinenGroup
export const masterSubModulesLLS = "LLS"
export const subModuleLinenGroup = "Linen Group"
export const linenGrpCode = "AWC" + utils.getRandomString(4)
export const linenGrpDescription = "AWasteCloth" + utils.getRandomString(4)
export const concatlinen = linenGrpCode + ' ' + '-' + ' ' + linenGrpDescription + ' '
export const linenCode = "AWC" + utils.getRandomString(4)
export const linenDescription = "AWasteCloth" + utils.getRandomString(4)

//Linen Item detail
export const subModuleLinenItemDetail = "Linen Item Details"
export const hospitalSpecific = "No"   //No  //Yes
export const hospitalMaster = "Kuala Lumpur"
export const linenStatus = "Active"  //Inactive
export const linenCategory = "Ward Linen"
export const linenColor = "Apple Green"
export const dimensionvalue = "10*15"
export const linenEffectiveDate = getTodayDate()
export const selectMaterial = "100% Cotton Drill"
export const selectStandard = "MS2"
export const standardWeight = "7"
export const SuccessMessage = "Data saved successfully"

// LLS Linen Item Details
export const llsServiceIcon = "LLS"
export const masterDropDownLinenDetails = "Linen Details"
export const subModuleLinenItemDetails = "Linen Item Details"
export const submoduleLinenUnitPrice = "Linen Unit Price"
export const concatLinenCode = linenCode + ' ' + '-' + ' ' + linenDescription + ' '
export const fileType = "Manual"
export const fileName = "MyFiles" + utils.getRandomNumbers(4)
export const filepath = "./Data_Files/samplefile.pdf"
export const linenUnitPrice = utils.getRandomNumbers(3)
export const emptyLinenCode = " "
export const submoduleLinenParRequire = "Linen PAR Requirements"
export const pagesize = "20"
export const parvalue = utils.getRandomNumbers(4)

// LLS User Department and Area
export const submoduleUserDepartmentArea = "User Department/Area Details"
export const operatingDays = "7 days per week"
export const effectiveDate = getTodayDate()
export const bagpieces = utils.getRandomNumbers(2)
export const hospitalname = "hospital"
export const hospitalRepresentative = "Hospital Director - Hospital Director"
export const deliveryTime = getSystemTimeof10Minutes()
export const collectionTime = getSystemTimeof10Minutes()
export const linenTime = getSystemTimeof10Minutes()
export const furnishingItem = "3-Monthly"
export const SantizingDay = "Monday"
export const startingMonth = getCurrentMonth()
export const weekDay = "W1"
export const concatLinenCode1 = linenCode + '-' + ' ' + linenDescription
export const par1Require = utils.getRandomNumbers(3)
export const par2Require = utils.getRandomNumbers(3)
export const defaultIssue = "Yes"



// Laundry Plant  Vehicle Details 
export const laundryPlant = "Laundry Plant / Facility"
export const vvehicleDetails = "Vehicle Details"
export const vvehicleNo = "AutoVehicle" + utils.getRandomNumbers(4)
export const vmanufacturer = "AWebdriver" + utils.getRandomString(4)
export const veffectiveDate = getTodayDate()
export const vlicenseCode = "LPKP"
export const vlicenseDescription = "Commercial Vehicle License"
export const vconcatLicense = vlicenseCode + ' ' + '-' + ' ' + vlicenseDescription + ' '
export const vGrade = "A"
export const vlicenseNo = "ASE" + utils.getRandomNumbers(4)
export const vIssuedBy = "PUSPAKOM"
export const vissuedDate = getTodayDate()
export const vexpiryDate = getCustomDate(10)
export const vVehicleRemarks = "Today Date and Custom Date Confirmation Message ::" + vissuedDate + " and " + vexpiryDate


// Laundry Plant  Driver Details
export const ddriverDetails = "Driver Details"
// export const ddriverCode = "ADriver" + utils.getRandomNumbers(4)
export const ddriverName = "ADriverName" + utils.getRandomString(4)
export const ddriverCode = "126882-Naek Bin Ibrahim"     // need to elabrate 
export const vehicleNo = "TN28"   // need to elabrate 
export const deffectiveFrom = getTodayDate()
export const dlicenseCode = "DL"
export const dlicenseDescription = "Driving License"
export const dconcatLicense = dlicenseCode + ' ' + '-' + ' ' + dlicenseDescription + ' '
export const dGrade = "A"
export const dlicenseNo = "ASE" + utils.getRandomNumbers(4)
export const dIssuedBy = "PUSPAKOM"
export const dissuedDate = getTodayDate()
export const dexpiryDate = getCustomDate(10)
export const dVehicleRemarks = "Today Date and Custom Date Confirmation Message ::" + dissuedDate + " and " + dexpiryDate


//Transaction Module in LLS   Clean Linen Order
export const transactionSubModule = "Linen Shipment"
export const linenShipmentSubModule = "Clean Linen Order"
export const priority = "Emergency"  ///Normal  //Emergency
export const requestedQuantity = Math.floor(Math.random() * parseInt(par2Require)) // lessthan par2Require  i.e Store Balance
export const concatLinenCode2 = linenCode + ' ' + '-' + ' ' + linenDescription
export const laundryLocation = "Central Laundry Plant Teluk Panglima Garang"


// Clean Linen Despatch
export const linenDespatch = "Clean Linen Despatch"
export const receiverCode = "AReception" + utils.getRandomNumbers(4)
export const checkedBy = "Fauzi Bin Ismail"
export const totalWeight = utils.getRandomNumbers(3)
export const remarks1 = "Remarks"
export const dispatchedQuantity = utils.getRandomNumbers(3)
export const dispatchQuantity = Math.floor(Math.random() * (requestedQuantity - 1)) + 1  // less than requested quantity
export const orderType = "Automatic"
export const despatchDate = getTodayDate()
export const despatchTime = getSystemTimeof15Minutes()
export const noOfTrolleys = utils.getRandomNumbers(2)

// Clean Linen Request
export const transactionLinenAdequacyModule = "Linen Adequacy & Acceptance"
export const linenAdequacySubModule1 = "Clean Linen Request"
export const linenAdequacySubModule2 = "Clean Linen Issues"
export const requestedBy = "Asset Officer "
export const CLRPriority = "Normal"  ///Normal  //Emergency
export const clrFiletype = "Log Book"



// Clean linen Issue
export const requestedQuantity1 = Math.floor(Math.random() * (parseInt(par2Require) + 1)) // less than or equal to par2Require
export const issuedQuantity = requestedQuantity1 // assign requestedQuantity to issuedQuantity
export const QCTimeliness = 'QL11 - Manpower'
export const selectQuantity = requestedQuantity





/*  provide me legth.ts  file
 */


///FEMS
export const femsSubModule = "FEMS"
export const workGrpDetails = "Work Group Details"
export const workGroupCode = "AMF" + utils.getRandomNumbers(4)
export const WorkGroupDesc = "AMotorFitting" + utils.getRandomNumbers(4)


export const assetGroupCode = "A100WM" + utils.getRandomNumbers(4)
export const assetGroupDesc = "APowerMotor" + utils.getRandomNumbers(4)
export const assetGroupDetails = "Asset Group Details"

export const standardTaskDetails = "Standard Task Details"
export const taskCode = "AF" + utils.getRandomNumbers(4)
export const taskDesc = "AFitting" + utils.getRandomNumbers(4)
export const standardStatus = "Active"
export const standardEffectiveFrom = getTodayDate()
export const typeCodeDetails = "Type Code Details"
export const concatAssetGroupCode = assetGroupCode + '-' + assetGroupDesc
export const assetClarification = "Equipment"
export const assetCategory = "Electrical"
export const assetTypeCode = taskCode   ///taskDesc
export const assetTypeDesc = taskDesc
export const maintenancesCategory = "Specialized"
export const nominatedContractor = "Yes"
export const assetAuditType = "Yes"
export const licenseType = "Yes"
export const MDAApplicable = "Yes"
export const expectedLifeSpan = utils.getRandomNumbers(2)
export const ageLessThan5Yrs = utils.getRandomYearLessThan5()
export const ageGreaterThan5Yrs = utils.getRandomYearMoreThan5()
export const duringWarrantyRate = utils.getRandomNumbers(2)
export const postWarrantyRate = utils.getRandomNumbers(2)
export const duringWarrantyRateDate = getTodayDate()
export const postWarrantyRateDate = getTodayDate()

//HEPPM Register
export const heppmRegister = "HEPPM Register"
export const concatAssetTypeCode = assetTypeCode + ' ' + '-' + ' ' + assetTypeDesc
export const concatTaskCode = taskCode + ' ' + '-' + ' ' + taskDesc
export const selectFrequency = "Monthly"
export const version = utils.getRandomNumbers(2)
export const effectiveFrom = getTodayDate()

//Asset Information
export const assetInformation = "Asset Information"
export const TypeManufacturer = "Manufacturer"
export const ManufacturerName = "Steel" + utils.getRandomNumbers(4)
export const TypeMake = "Make"
export const MakeName = "Delphi" + utils.getRandomNumbers(4)
export const TypeBrand = "Brand"
export const BrandName = "TVS" + utils.getRandomNumbers(4)
export const TypeModel = "Model"
export const ModelName = "A79" + utils.getRandomNumbers(4)
export const selectStatus = "Active"


//Asset Standardization
export const assetStandardization = "Asset Standardization"
export const concatAssetTypeCode1 = assetTypeCode + ' ' + '-' + ' ' + assetTypeDesc + ' '
export const concatManufacturer = ManufacturerName + ' '
export const Make = MakeName
export const concatBrand = BrandName + ' '
export const Model = ModelName

//FEMS
export const FEMSServiceIcon = "FEMS"
export const masterLocations = "Locations"
export const addServiceRequest = "Add Service Request"
export const FEMSLocationSubModule1 = "User Area Master"
export const FEMSLocationSubModule2 = "User Location Master"



//Service Request
export const serviceRequest = "SR"
export const serviceRequest1 = "Service Request"
export const serviceType = "FEMS"
export const requestType = "T&C "
export const requestorName = "Asisuser"
export const requestorDesignation = "Hospital Director"
export const concatRequestorName = requestorName + ' ' + '-' + ' ' + requestorDesignation
export const userLocationCode = fmsUserLocationCode
export const concatUserLocationCode = fmsUserLocationCode + ' ' + '-' + fmsUserLocationName
export const details = "Demo Details"
export const TandC = 'T&C'
export const TestingandCommissioning = "Testing and Commissioning"
export const filter1 = "User Location Code"
export const filter2 = "equal"