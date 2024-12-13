import { readColoredData, processColoredData } from '../../utils/excelHelper.js';
import MySQLHelper from '../../utils/mysqlHelper.js';
// import { expect } from 'chai'

describe('SQL Connectivity Test', async () => {


    let db;

    before(async () => {

        db = new MySQLHelper();
        await db.connect();
    })

    after(async () => {
        
        await db.closeConnection();
    })


    it('should connect to the database and fetch data', async () => {

        // const result = await db.executeQuery('select * from AssetDetails');
        // // expect(result).to.be.an('array');

        // console.log( result)


        const filePath = './DemoExcel/testing.xlsx';
        const coloredData = readColoredData(filePath);
        await processColoredData(coloredData);
    })


})