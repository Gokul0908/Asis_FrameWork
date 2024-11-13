// utils/WaitUtil.js
class WaitUntil {
    /**
     * Pauses execution for a specified time
     * @param {number} ms - Time in milliseconds to pause
     */
    static async ElementIsVisible(second) {
        await browser.pause(second * 1000);
    }
} export default WaitUntil;