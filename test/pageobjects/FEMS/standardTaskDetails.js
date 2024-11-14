import ReusablesComponents from "../reuse"

class standardTaskDetails {

    getWorkGroupCode(workGroupCode) { return $(`//select[@id='WorkGroupCode']/option[.='${workGroupCode}']`) }
    get taskCode() { return $("//input[@id='TaskCode']") }
    get taskDescription() { return $("//input[@name='TaskDescription']") }
    getStatus(Status){ return $(`//select[@id='Status']/option[.='${Status}']`) }
    get effectiveFrom() { return $("//input[@id='EffectiveFrom']") }

    async enterWorkGroupCode(workGroupCode) {
        await ReusablesComponents.waitAndClick(this.getWorkGroupCode(workGroupCode))
    }
    async enterTaskCode(taskCode) {
        await ReusablesComponents.waitAndSetValue(this.taskCode, taskCode)
    }

    async enterTaskDescription(taskDescription) {
        await ReusablesComponents.waitAndSetValue(this.taskDescription, taskDescription)
    }
    
    async setStatus(status) {
        await ReusablesComponents.waitAndClick(this.getStatus(status))
    }
    async selectEffectiveFrom(effectiveFrom) {
        await ReusablesComponents.waitAndSetValue(this.effectiveFrom, effectiveFrom)
    }

} export default new standardTaskDetails()