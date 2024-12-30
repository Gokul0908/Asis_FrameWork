import ReusablesComponents from '../reuse'

class assetGroupDetails {

    get assetGroupCode() { return ("//input[@id='AssetGroupCode']") }
    get assetGroupDesc() { return ("//input[@id='AssetGroupDescription']") }


    async enterAssetGroupCode(assetGroupCode) {
        await ReusablesComponents.waitAndSetValue(this.assetGroupCode, assetGroupCode)
    }

    async enterAssetWorkDesc(assetGroupDesc){
        await ReusablesComponents.waitAndSetValue(this.assetGroupDesc, assetGroupDesc)
    }

} export default new assetGroupDetails