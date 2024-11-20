

class userLocationMaster {


    get userLocationCode() { return $("//input[@id='UserLocationCode']") }
    getUserLocationCodeDD(userLocationCode) { return $(`//ul[@id='UlFetchUserAreaCode']/li/div/a[.='${userLocationCode}']`) }

}
export default new userLocationMaster()
