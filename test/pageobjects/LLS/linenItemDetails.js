import ReusablesComponents from '../reuse'
class linenItemDetails {

    // getHospitalSpecific(selectSpecification) { return $(`//select[@name='hospitalspecific']/option[.='${selectSpecification}']`) }
    get linenGrpCode() { return ("//input[@id='LinenGroup']") }
    getlinengrpCodeDropDown(grpCode) { return (`//ul[@id='UlFetch']/li/div/a[.='${grpCode}']`) }
    get linenCode() { return ("//input[@name='LinenCode']") }
    get linenDescription() { return ("//input[@name='LinenDescription']") }
    getSelectStatus(status) { return (`//select[@id='ddlStatus']/option[.='${status}']`) }    
    getHospitalSpecific(hospitalSpecific) { return (`//select[@name='hospitalspecific']/option[.='${hospitalSpecific}']`) }
    getHospitalMaster(hospitalMaster){ return (`//select[@name='HospitalMaster']/option[.='${hospitalMaster}']`)}
    getLinenCategory(selectLinenCategory){ return (`//select[@name='linenCategory']/option[.='${selectLinenCategory}']`)}
    getLinenStatus(linenStatus) { return (`//select[@ng-model='LinenItem.Status']/option[.='${linenStatus}']`) }
    getLinenColor(linencolor){ return (`//select[@name='Color']/option[.='${linencolor}']`)}
    get dimensionInput(){ return ("//input[@name='Dimension']")}
    get effectiveDate(){ return ("//input[@name='Effectivedate']")}
    getMaterial(selectMaterial){ return (`//select[@name='material']/option[.='${selectMaterial}']`)}
    getStandard(selectStandard){ return (`//select[@name='standard']/option[.='${selectStandard}']`)}
    get standardWeight(){ return ("//input[@name='standardWeight']")}
    get labelRemark(){ return ("//label[.='Remarks ']")}
    get labelInput(){ return ("//textarea[@name='Remarks']")}

    async enterLinenGrpCode(linenGrpCode, concatlinen) {
        await ReusablesComponents.waitAndSetValue(this.linenGrpCode,linenGrpCode)
        await ReusablesComponents.spotClick(this.getlinengrpCodeDropDown(concatlinen))
    }

    async enterLinenCode(linenCode) {
        await ReusablesComponents.waitAndSetValue(this.linenCode, linenCode)
    }
    async enterLinenDescription(linenDescription) {
        await ReusablesComponents.waitAndSetValue(this.linenDescription, linenDescription)
    }

    async selectStatus(selectStatus) {
        await ReusablesComponents.waitAndClick(this.getSelectStatus(selectStatus))
    }
    async selectHospitalSpecific(hospitalSpecific) {
        await ReusablesComponents.waitAndClick(this.getHospitalSpecific(hospitalSpecific))
    }

    async selecthospitalMaster(hospitalMaster){
        await ReusablesComponents.waitAndClick(this.getHospitalMaster(hospitalMaster))
    }
    async selectLinenCategory(selectLinenCategory){
        await ReusablesComponents.waitAndClick(this.getLinenCategory(selectLinenCategory))
    }

    async setLinenStatus(linenStatus) {
        await ReusablesComponents.waitAndClick(this.getLinenStatus(linenStatus))
    }
    async selectLinenColor(linenColor){
        await ReusablesComponents.waitAndClick(this.getLinenColor(linenColor))
    }
    async enterDimesionInput(dimensionvalue){
        await ReusablesComponents.waitAndSetValue(this.dimensionInput, dimensionvalue)
    }
    async enterEffectiveDate(effectiveDate){
        await ReusablesComponents.waitAndSetValue(this.effectiveDate, effectiveDate)
    }
    async selectMaterial(selectMaterial){
        await ReusablesComponents.waitAndClick(this.getMaterial(selectMaterial))
    }
   
    async selectStandard(selectStandard){
        await ReusablesComponents.waitAndClick(this.getStandard(selectStandard))
    }
    async setStandardWeight(standardWeight){
        await ReusablesComponents.waitAndSetValue(this.standardWeight, standardWeight)
    }
    async clickLabelRemarks(){
        await ReusablesComponents.waitAndClick(this.labelRemark)
    }
}
export default new linenItemDetails