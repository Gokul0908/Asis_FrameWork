import MySQLHelper from '../../utils/mysqlHelper.js';
// import { expect } from 'chai'

describe('SQL Connectivity Test', async () => {


    let db = new MySQLHelper()

    before(async () => {        
        await db.connect()
    })

    after(async () => {
        await  db.closeConnection()
    })

    it('should connect to the database and fetch data', async () => {

        const result = await db.executeQuery('select * from actor');
        // expect(result).to.be.an('array');

        console.log( result)
    })
})