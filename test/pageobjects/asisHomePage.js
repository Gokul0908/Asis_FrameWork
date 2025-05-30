import ReusablesComponents from './reuse'
import WaitUntil from './waitUntil'

class asisHomePage {

   get asisFullForm() { return ("//p[.='Asset and Services Information System']") }
   get chooseCompanyDropDown() { return ("//select[@name='Company']") }
   get chooseLocationDropDown() { return ("//select[@name='Hospital']") }
   getServicesIcon(serviceName) { return (`//p[.='${serviceName}']/../a/div[@class='icon']`) }
   getIconExpansion(serviceName) { return (`//p[text()='${serviceName}']/preceding-sibling::div//p[contains(@ng-show,'${serviceName}')]`) }
   get serviceText() { return ("//h3[@class='panel-title']") }
   get profileIcon() { return ("//span[.='mohadmin']") }
   get logOutButton() { return ("//a[.='Log Out']") }
   getcompanys(selectCompany) { return (`//select[@id='Company']/option[.='${selectCompany}']`) }
   getlocation(selectLocation) { return (`//select[@id='Hospital']/option[.='${selectLocation}']`) }
   get asisHeartIcon() { return ("//img[@alt='Ministry of Health']") }
   get asisheader() { return ("//header[@id='dashboard-header']") }


   async hoverOnServiceIcon(serviceName) {
      await ReusablesComponents.moveToTheElement(this.getServicesIcon(serviceName))
      await ReusablesComponents.waitForDisplay(this.getIconExpansion(serviceName))
      const iconExpansion = await ReusablesComponents.isDisplayed(this.getIconExpansion(serviceName))
      await expect(iconExpansion).toBe(true)
   }

   async asisuserLogoutToTheApplication() {
      await ReusablesComponents.waitAndClick(this.profileIcon)
      await ReusablesComponents.waitAndClick(this.logOutButton)
   }
   async clickasisHeartIcon() {
      await ReusablesComponents.waitAndClick(this.asisHeartIcon)
   }

   async selectServicesIcon(serviceName) {
      await ReusablesComponents.moveToTheElement(this.getServicesIcon(serviceName))
      await ReusablesComponents.waitForDisplay(this.getIconExpansion(serviceName))
      await ReusablesComponents.waitAndClick(this.getServicesIcon(serviceName))
   }
   async chooseCompany(selectCompany) {
      await ReusablesComponents.waitAndClick(this.chooseLocationDropDown)
      await ReusablesComponents.waitAndClick(this.getcompanys(selectCompany))
   }
   async chooseLocation(selectLocation) {
      await ReusablesComponents.waitAndClick(this.chooseLocationDropDown);
      await ReusablesComponents.waitAndClick(this.getlocation(selectLocation));
   }
   async headerVisible() {
      await WaitUntil.ElementIsVisible(5)
      const header = await ReusablesComponents.isDisplayed(this.asisheader)
      expect(header).toBe(true)
   }


}

export default new asisHomePage()