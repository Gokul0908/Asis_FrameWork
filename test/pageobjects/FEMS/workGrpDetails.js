import ReusablesComponents from "../reuse"

class WorkGrpDetails {

    get addicon() { return $("//a[@ng-click='addNewRow()']") }
    get workGroupCode() { return $("(//input[@aria-required='true'])[1]") }
    get workGroupDescription() { return $("(//input[@aria-required='true'])[1]") }



    async clickAddIcon() {
        await ReusablesComponents.waitAndClick(this.addicon)
    }

    async getattributeforWorkGroupCode() {

        const wGC = this.workGroupCode
        const WGCAttribute = await wGC.getAttribute("aria-invalid")
        console.log(WGCAttribute)

    }


    // async enterWorkGroupCode(workGroupCode) {

    //     const rows = this.workGroupCode;
    //     const rowsize = rows.getSize()
    //     console.log("the size of wGC is" + rowsize)
    //     for (let i = 0; i < rows.getSize; i++) {

    //         const attributeValue = await rows[i].getAttribute
    //         if (attributeValue === "true") {
    //             await ReusablesComponents.waitAndSetValue(this.workGroupCode, workGroupCode)
    //         } else {
    //             console.log(`Row ${i + 1} has aria-invalid attribute set to false.`);
    //         }
    //     }
    // }

    async enterWorkGroupCode(workGroupCode) {
         await ReusablesComponents.waitAndSetValue(this.workGroupCode, workGroupCode)
    }
    

    async enterWorkgrpDesc(workGroupDescription) {
        await ReusablesComponents.waitAndSetValue(this.workGroupDescription, workGroupDescription)
    }

} export default new WorkGrpDetails()