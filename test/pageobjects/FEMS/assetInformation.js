import ReusablesComponents from '../reuse'

class assetInformation {

    getType(selectType) { return $(`//select[@id='Service']/option[.='${selectType}']`) }
    get ManufacturerName() { return $("//input[@id='AssetInfoValue']") }

    async selectType(selectType) {
        await ReusablesComponents.waitAndClick(this.getType(selectType))
    }
    async enterManufacturerName(ManufacturerName) {
        await ReusablesComponents.waitAndSetValue(this.ManufacturerName, ManufacturerName)
    }
}

export default new assetInformation()