import { readColoredData , processColoredData} from '../../utils/excelHelper.js';

describe('MySQL Integration with Excel', () => {



    it('should read data from Excel and insert it into the database', async () => {


        // const data = readExcelFile('./DemoExcel/testing.xlsx');  // Provide the correct path
        // await processDataIntoDb(data)

        // console.log(data)
        const filePath = './DemoExcel/testing.xlsx';
        const coloredData = readColoredData(filePath);
        await processColoredData(coloredData);
        
    });
});
