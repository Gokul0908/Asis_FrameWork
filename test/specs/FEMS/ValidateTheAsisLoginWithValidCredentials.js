import hooks from "../../../hooks"
import LoginPage from '../../pageobjects/loginPage.js'
import * as constant from "../../../Constants/const.js"


describe("Validate the asis login with valid credentials", async () => {



    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })



    it("Validate the asis login with valid credentials", async () => {

        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)

    })
})