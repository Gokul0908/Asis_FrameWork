import ReusablesComponents from "../../reuse"
import cleanLinenOrderLLS from "../cleanLinenOrderLLS"


class cleanLinenDespatch {


    // CLONo = cleanLinenOrderLLS.getCLONo()
    getordertype(orderType) { return $(`//select[@name='OrderType']/option[.='${orderType}']`) }
    get CLONo() { return $("//input[@id='txtCLONo']") }
    getCLONoDropdown(CLONo) { return $(`//ul[@id='UlFetchStaff']/li/div/a[contains(.,'${CLONo}')]`) }
    get driverCode() { return $("//input[@ng-model='CleanDispatch.DriverCode']") }
    getdriverCodeDD(driverCode) { return $(`//ul[@id='UlDriverFetch']/li/div/a[.='${driverCode}']`) }
    get vehicleRegisterNo() { return $("//input[@id='VehicleRegistrationNo']") }
    getvehicleRegisterNoDD(VehicleRegister) { return $(`//ul[@id='UlvehicleFetch']/li/div/a[.='${VehicleRegister}']`) }
    get ReceiverCode() { return $("//input[@ng-model='CleanDispatch.ReceiverCode']") }
    getReceiverCodeDD(ReceiverCode) { return $(`//ul[@id='UlReceiverFetch']/li/div/a[.='${ReceiverCode}']`) }
    get CheckedBy() { return $("//input[@id='StaffName']") }
    getCheckedByDD(CheckedBy) { return $(`//div[@class='ng-scope']/a[.='${CheckedBy}']`) }
    get totalWeight() { return $("//input[@id='TotalWeight']") }
    get remarksLabel() { return $("//label[.='Remarks']") }
    get despatchQuantity() { return $("//input[@id='DespatchedQuantity0']") }
    get despatchDateAndTime() { return $("//input[@id='DateDespatch']") }
    get despatchTimeDropDown() { return $("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[1]") }
    gettime(despatchTime) { return $(`(//div[@class='xdsoft_time_box xdsoft_scroller_box'])[1]/div/div[.='${despatchTime}']`) }
    get noOfTrolleys() { return $("//input[@name='NoofTrolley']") }
    get checkedByLabel(){ return $("//label[text()='Checked By ']") }


    async selectOrderType(orderType) {
        await ReusablesComponents.waitAndClick(this.getordertype(orderType))
    }

    async enterCLONo(CLONo) {        
        await ReusablesComponents.waitAndSetValue(this.CLONo, CLONo)
        console.log(":::::::::CLONo in Clean Linen Despatch:::::::::" + CLONo)
        await this.getCLONoDropdown(CLONo).click()
    }

    //     async function getCLONoSafely() {
    //     const CLONo = await cleanLinenOrderLLS.getCLONo();
    //     return CLONo || ""; // Returns an empty string if CLONo is undefined
    // }

    // Usage in your method
    // async enterCLONo() {
    //     await browser.pause(2000);
    //     const CLONo = await getCLONoSafely();
    //     console.log(":::::::::CLONo in Clean Linen Despatch:::::::::" + CLONo);

    //     if (CLONo) {
    //         await ReusablesComponents.waitAndSetValue(this.CLONo, CLONo);
    //         await this.getCLONoDropdown(CLONo).click();
    //     } else {
    //         console.log("CLONo is not available, skipping entry.");
    //     }
    // }


    async enterDriverCode(driverCode) {
        await ReusablesComponents.waitAndSetValue(this.driverCode, driverCode)
        await this.getdriverCodeDD(driverCode).click()
    }

    async enterVehicleRegisterNo(VehicleRegister) {
        await ReusablesComponents.waitAndSetValue(this.vehicleRegisterNo, VehicleRegister)
        await this.getvehicleRegisterNoDD(VehicleRegister).click()
    }

    async enterReceiverCode(ReceiverCode) {
        await ReusablesComponents.waitAndSetValue(this.ReceiverCode, ReceiverCode)
        await this.getReceiverCodeDD(ReceiverCode).click()
    }

    async enterCheckedBy(CheckedBy) {
        await ReusablesComponents.waitAndSetValue(this.CheckedBy, CheckedBy)
        await this.getCheckedByDD(CheckedBy).click()
    }

    async enterTotalWeight(TotalWeight) {
        await ReusablesComponents.waitAndSetValue(this.totalWeight, TotalWeight)
    }

    async clickRemarks() {
        await ReusablesComponents.waitAndClick(this.remarksLabel)
    }

    async enterDespatchQuantity(DespatchedQuantity) {
        await ReusablesComponents.waitAndSetValue(this.despatchQuantity, DespatchedQuantity)
    }
    async verifyDespatchTimeDropDown() {
        await this.despatchTimeDropDown.waitForDisplayed()
    }

    // async enterDespatchTime(DespatchTime) {
    //     await ReusablesComponents.waitAndClick(this.despatchTimeDropDown)
    //     await this.verifyDespatchTimeDropDown()
    //     await this.gettime(DespatchTime).click()
    // }

    async enterDespatchDate (DespatchDate, DespatchTime) {
        await ReusablesComponents.waitAndClick(this.despatchDateAndTime)
        await this.verifyDespatchTimeDropDown()
        await ReusablesComponents.waitAndSetValue(this.despatchDateAndTime, DespatchDate)
        await this.gettime(DespatchTime).click()      
    }

    async enterNoOfTrolleys(NoofTrolley) {
        await ReusablesComponents.waitAndSetValue(this.noOfTrolleys, NoofTrolley)
    }

    async verifyCheckedByLabel() {
        await ReusablesComponents.waitAndClick(this.checkedByLabel)
    }
}

export default new cleanLinenDespatch()