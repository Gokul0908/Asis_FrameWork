import ReusablesComponents from "../reuse";

class gmLinenGroup {

    get linenGroupRefreshIcon() { return $("//span[@class='ui-icon ui-icon-refresh']") }
    get linenGrpCodeTextBox(){ return $("//input[@ng-model='LinenGroup.LinenGroupCode']")}
    get linenGrpDescription(){ return $("//input[@ng-model='LinenGroup.LinenGroupDescription']")}
    get addNewButton() { return $("//button[@title='Add New']") }
    get backButton() { return $("(//button[.='Back'])[1]") }

    async enterlinengrpCode(linenGrpCode){
        await ReusablesComponents.waitAndSetValue(this.linenGrpCodeTextBox, linenGrpCode)
    }
    async enterLinenGrpDescription(linenGrpDescription){
        await ReusablesComponents.waitAndSetValue(this.linenGrpDescription, linenGrpDescription)
    }
}
export default new gmLinenGroup()

