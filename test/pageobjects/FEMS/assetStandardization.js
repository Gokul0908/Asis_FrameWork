import ReusablesComponents from '../reuse'
import WaitUntil from '../waitUntil'

class assetStandardization {


    get assetTypeCode() { return ("//input[@id='AssetTypeCode']") }
    getAssetTypeCodeDropDown(assetTypeCode) { return (`//ul[@id='UlFetchAssetTypeCode']/li/div/a[contains(.,'${assetTypeCode}')]`) }
    get manufacturer() { return ("//input[@id='Manufacturer']") }
    getManufacturerDropDown(manufacturer) { return (`//ul[@id='UlFetchManufacturer']/li/div/a[contains(.,'${manufacturer}')]`) }
    get make() { return ("//input[@id='Make']") }
    getMakeDropDown(make) { return (`//ul[@id='UlFetchMake']/li/div/a[contains(.,'${make}')]`) }
    get brand() { return ("//input[@id='Brand']") }
    getBrandDropDown(brand) { return (`//ul[@id='UlFetchBrand']/li/div/a[contains(.,'${brand}')]`) }
    get model() { return ("//input[@id='Model']") }
    getModelDropDown(model) { return (`//ul[@id='UlFetchModel']/li/div/a[contains(.,'${model}')]`) }
    getStatus(selectStatus) { return (`//select[@id='Service']/option[.='${selectStatus}']`) }
    get serviceLabel() { return ("//label[.='Service ']") }


    async enterAssetTypeCode(assetTypeCode, concatAssetTypeCode) {
        await ReusablesComponents.waitAndSetValue(this.assetTypeCode, assetTypeCode)
        await ReusablesComponents.spotClick(this.getAssetTypeCodeDropDown(concatAssetTypeCode))
    }

    async enterManufacturer(manufacturer, concatManufacturer) {
        await ReusablesComponents.waitAndSetValue(this.manufacturer, manufacturer)
        await ReusablesComponents.spotClick(this.getManufacturerDropDown(concatManufacturer))
        await WaitUntil.ElementIsVisible(2)
    }

    async enterMake(make, concatMake) {
        await ReusablesComponents.waitAndSetValue(this.make, make)
        await ReusablesComponents.spotClick(this.getMakeDropDown(concatMake))
    }

    async enterBrand(brand, concatBrand) {
        await ReusablesComponents.waitAndSetValue(this.brand, brand)
        await ReusablesComponents.spotClick(this.getBrandDropDown(concatBrand))
    }

    async enterModel(model, concatModel) {
        await ReusablesComponents.waitAndSetValue(this.model, model)
        await ReusablesComponents.spotClick(this.getModelDropDown(concatModel))
    }

    async selectStatus(selectStatus) {
        await ReusablesComponents.waitAndClick(this.getStatus(selectStatus))
    }

    async clickServiceLabel() {
        await ReusablesComponents.waitAndClick(this.serviceLabel)
    }

} export default new assetStandardization()
