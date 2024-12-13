import hooks from "../../../hooks"
import LoginPage from '../../pageobjects/loginPage.js'
import * as constant from "../../../Constants/const.js"
import loginPage from "../../pageobjects/loginPage.js"


describe("Validate the asis login with Invalid credentials", async () => {



    before(async () => {
        await hooks.beforeTest()
    })

    after(async () => {
        await hooks.afterTest()
    })
    

    it("Validate the asis login with Invalid credentials", async () => {

        await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aInvalidPassword)
        await loginPage.errormsgVisible()
    })
})