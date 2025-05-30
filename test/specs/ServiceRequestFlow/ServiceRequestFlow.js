import ReusablesComponents from "../../pageobjects/reuse.js"
import LoginPage from "../../pageobjects/loginPage.js"
import asisHomePage from "../../pageobjects/asisHomePage.js"
import reuseButtons from "../../pageobjects/button.js"
import hooks from "../../../hooks.js"
import sideNavBar from "../../pageobjects/sideNavBar.js"
import ServiceRequestFlow from "../../pageobjects/ServiceRequestFlow/ServiceRequest.js"
import * as constant from '../../../Constants/const.js'

describe("Creating a Service request for Respective type", async () => {

    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })

    it("Creating a Service Request for Respective type", async () => {
        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
        await asisHomePage.chooseCompany(constant.company)
        await asisHomePage.chooseLocation(constant.location)
        await asisHomePage.selectServicesIcon(constant.SRservice)
        await sideNavBar.clickServiceRequestDropDown(constant.addServiceRequest)
        await ServiceRequestFlow.selectService(constant.serviceType)
        //await ServiceRequestFlow.selectServiceRequest(constant.serviceRequest)
        await ServiceRequestFlow.selectRequestType(constant.requestType)
        await ServiceRequestFlow.selectRequestorName(constant.requestorName, constant.concatRequestorName)
        await ServiceRequestFlow.selectUserLocationCode(constant.userLocationCode, constant.concatUserLocationCode)
        await ServiceRequestFlow.enterDetails(constant.details)
        await reuseButtons.clickSaveButton()
        await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
        console.log("Validation for creating a service request is successful")
    })
    // it("Creating a Service Request for Respective type", async () => {
    //     await sideNavBar.clickSubModulesDropDown(constant.serviceRequest)
    //     await reuseButtons.clickAddButton()
    //     await ServiceRequestFlow.selectService(constant.serviceName)
    //     await ServiceRequestFlow.selectServiceRequest(constant.serviceRequest)
    //     await ServiceRequestFlow.selectRequestType(constant.requestType)
    //     await ServiceRequestFlow.selectRequestorName(constant.requestorName, constant.concatRequestorName)
    //     await ServiceRequestFlow.selectUserLocationCode(constant.userLocationCode, constant.concatuserLocationCode)
    //     await ServiceRequestFlow.enterDetails(constant.details)
    //     await reuseButtons.clickSaveButton()
    //     await ReusablesComponents.checkSuccessNotification(constant.SuccessMessage)
    //     console.log("Validation for creating a service request is successful")
    // })
})
    