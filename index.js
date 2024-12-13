import { ExcelController } from './SQL_Connectivity_Test/controller/excelcontroller.js';

const filePath = './DemoExcel/testing.xlsx'; // Replace with your Excel file path

(async () => {
    const controller = new ExcelController(filePath);
    await controller.processExcelFile();
})();
