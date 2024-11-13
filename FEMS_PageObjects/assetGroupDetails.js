import reusablecomponents from './../pageobjects/reuse'

class assetGroupDetails {

    get assetGroupCode() { return $("//input[@id='AssetGroupCode']") }
    get assetGroupDesc() { return $("//input[@id='AssetGroupDescription']") }


    async enterAssetGroupCode(assetGroupCode) {
        await reusablecomponents.waitAndSetValue(this.assetGroupCode, assetGroupCode)
    }

    async enterAssetWorkDesc(assetGroupDesc){
        await reusablecomponents.waitAndSetValue(this.assetGroupDesc, assetGroupDesc)
    }

} export default new assetGroupDetails