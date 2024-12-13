import hooks from "../../../hooks"
import LoginPage from '../../pageobjects/loginPage.js'
import * as constant from "../../../Constants/const.js"
import asisHomePage from "../../pageobjects/asisHomePage"


describe("Validate the asis login to the Application  with valid credentials", async () => {



    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })



    it("Validate the asis login to the Application with valid credentials", async () => {

        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
        await asisHomePage.headerVisible()
    })
})