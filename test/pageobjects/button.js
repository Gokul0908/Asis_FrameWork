import ReusablesComponents from './reuse'

class reuseButtons {

   get logOutButton() { return ("//a[.='Log Out']") }
   get profileIcon() { return ("//span[.='mohadmin']") }
   get loginButton() { return ("//button[@id='btnlogin']") }
   get addButton() { return ("//td[@id='Add']") }
   get saveButton() { return ("//button[@id='insert']") }
   get fmssaveButton() { return ("//button[@title='Save']") }
   get lidsaveButton() { return ("(//button[@id='saveTab'])[1]") }
   get vehicleSaveButton() { return ("(//button[@type='submit'])[1]") }
   get saveButton1() { return ("(//button[.='Save'])[1]") }
   get saveButton2() { return ("(//button[.='Save'])[2]") }
   get fms1saveButton() { return ("//button[@id='Add']") }
   get submitButton() { return ("//button[.='Submit']") }
   get approvedButton() { return ("//button[.='Approved']") }
   get clrsaveButton() { return ("//button[@id='AddRequest']") }
   get clisaveButton() { return ("//button[@id='Issuesave']") }
   get clisubmitButton() { return ("//button[@id='Issuesavesubmit']") }
   get attachmentSaveButton() { return ("(//button[@id='saveUpdate'])[2]") }
   get attachmentSaveButton2() { return ("(//button[@id='saveTab'])[2]") }
   get addNewButton() { return ("//button[.='Add New']") }
   get backButton() { return ("(//button[.='Back'])[1]") }
   get toggleSearchButton() { return ("(//a[@id='advanceSearch'])[1]") }
   get resetIconBtn() { return ("//a[@id='fbox_grid_reset']") }
   get editIcon() { return ("//a[@class='ui-icon ui-icon-pencil']") }


   async asisuserLogoutToTheApplication() {
      await ReusablesComponents.waitAndClick(this.profileIcon)
      await ReusablesComponents.waitAndClick(this.logOutButton)
   }

   async ClicklogInButton() {
      await ReusablesComponents.waitAndClick(this.loginButton)
   }
   async clickAddButton() {
      await ReusablesComponents.waitAndClick(this.addButton)
   }
   async clickSaveButton() {
      await ReusablesComponents.waitAndClick(this.saveButton)
   }

   async clickfmsSaveButton() {
      await ReusablesComponents.waitAndClick(this.fmssaveButton)
   }

   async clickLIDSaveButton() {
      await ReusablesComponents.waitAndClick(this.lidsaveButton)
   }
   async clickfms1SaveButton() {
      await ReusablesComponents.waitAndClick(this.fms1saveButton)
   }

   async clickSubmitButton() {
      await ReusablesComponents.waitAndClick(this.submitButton)
   }

   async clickApprovedButton() {
      await ReusablesComponents.waitAndClick(this.approvedButton)
   }


   async clickvehicleSaveButton() {
      await ReusablesComponents.waitAndClick(this.vehicleSaveButton)
   }

   async clickSaveButton1() {
      await ReusablesComponents.waitAndClick(this.saveButton1)
   }

   async clickSaveButton2() {
      await ReusablesComponents.waitAndClick(this.saveButton2)
   }

   async clickCLRSaveButton() {
      await ReusablesComponents.waitAndClick(this.clrsaveButton)
   }


   async clickCLISavebutton() {
      await ReusablesComponents.waitAndClick(this.clisaveButton)
   }

   async clickCLISubmitButton() {
      await ReusablesComponents.waitAndClick(this.clisubmitButton)
   }


   async clickAttachmentSaveButton() {
      await ReusablesComponents.waitAndClick(this.attachmentSaveButton)
   }
   async clickAttachmentSaveButton2() {
      await ReusablesComponents.waitAndClick(this.attachmentSaveButton2)
   }

   async clickAddNewButton() {
      await ReusablesComponents.waitAndClick(this.addNewButton)
   }

   async clickBackButton() {

      await ReusablesComponents.waitAndClick(this.backButton)
   }

   async clickToggleSearchBtn() {

      await ReusablesComponents.waitAndClick(this.toggleSearchButton)

      const resetIcon = await ReusablesComponents.isDisplayed(this.resetIconBtn)

      if (!resetIcon) {

         await ReusablesComponents.waitAndClick(this.toggleSearchButton)
      }
      else {
         console.log(" Toggle Search Icon is Visible")
      }
   }


   async clickEditIcon(){

      await ReusablesComponents.spotClick(this.editIcon)
   }
} export default new reuseButtons()