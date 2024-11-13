import reusablecomponents from "../pageobjects/reuse"

class standardTaskDetails {

    getWorkGroupCode(workGroupCode) { return $(`//select[@id='WorkGroupCode']/option[.='${workGroupCode}']`) }
    get taskCode() { return $("//input[@id='TaskCode']") }
    get taskDescription() { return $("//input[@name='TaskDescription']") }
    getStatus(Status){ return $(`//select[@id='Status']/option[.='${Status}']`) }
    get effectiveFrom() { return $("//input[@id='EffectiveFrom']") }

    async enterWorkGroupCode(workGroupCode) {
        await reusablecomponents.waitAndClick(this.getWorkGroupCode(workGroupCode))
    }
    async enterTaskCode(taskCode) {
        await reusablecomponents.waitAndSetValue(this.taskCode, taskCode)
    }

    async enterTaskDescription(taskDescription) {
        await reusablecomponents.waitAndSetValue(this.taskDescription, taskDescription)
    }
    
    async setStatus(status) {
        await reusablecomponents.waitAndClick(this.getStatus(status))
    }
    async selectEffectiveFrom(effectiveFrom) {
        await reusablecomponents.waitAndSetValue(this.effectiveFrom, effectiveFrom)
    }

} export default new standardTaskDetails()