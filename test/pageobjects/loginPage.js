import ReusablesComponents from "./reuse"
import reuseButtons from "./button"

class LoginPage {

    get asisUsername() { return $("//input[@id='LoginName']") }
    get asisPassword() { return $("//input [@id='Password']") }
    get forgotPasswordLink() { return $("//a[.='Forgot Password?']") }
    get signUpLink() { return $("//a[.='Sign Up!']") }
    get abiText() { return $("//p[.='ASIS Business Intelligence']") }    


    async asisUserLoginToTheApplication(aUserName,aPassword) {
        await ReusablesComponents.waitAndSetValue(this.asisUsername, aUserName)
        await ReusablesComponents.waitAndSetValue(this.asisPassword,aPassword)
        await reuseButtons.AsislogInButton()
    }
    // async clickProfiieIcon(){
    //     await ReusablesComponents.waitAndClick(this.profileIcon)
    // }
    
    //  async clickLogOutButton(){
    //     await ReusablesComponents.waitAndClick(this.logOutButton)
    //  }
   
     
}
export default new LoginPage()