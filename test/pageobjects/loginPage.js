import ReusablesComponents from './reuse'
import reuseButtons from './button'
import WaitUntil from './waitUntil'

class LoginPage {

    get asisUsername() { return ("//input[@id='LoginName']") }
    get asisPassword() { return ("//input [@id='Password']") }
    get forgotPasswordLink() { return ("//a[.='Forgot Password?']") }
    get signUpLink() { return ("//a[.='Sign Up!']") }
    get abiText() { return ("//p[.='ASIS Business Intelligence']") }
    get errorMsg() { return ("//span[@id='errMsgContent']") }


    async asisUserLoginToTheApplication(aUserName, aPassword) {
        await ReusablesComponents.waitAndSetValue(this.asisUsername, aUserName)
        await ReusablesComponents.waitAndSetValue(this.asisPassword, aPassword)
        await reuseButtons.ClicklogInButton()
    }



    async errormsgVisible(){

        await WaitUntil.ElementIsVisible(4)
        const ErrorMsg =await ReusablesComponents.isDisplayed(this.errorMsg)

        expect(ErrorMsg).toBe(true)
    }
    // async clickProfiieIcon(){
    //     await ReusablesComponents.waitAndClick(this.profileIcon)
    // }

    //  async clickLogOutButton(){
    //     await ReusablesComponents.waitAndClick(this.logOutButton)
    //  }


}
export default new LoginPage()