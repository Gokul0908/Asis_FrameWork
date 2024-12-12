import { readExcelFile, insertDataIntoDb } from '../../utils/excelHelper.js';

describe('MySQL Integration with Excel', () => {



    it('should read data from Excel and insert it into the database', async () => {


        const data = readExcelFile('');  // Provide the correct path
        await insertDataIntoDb(data)


    });
});
