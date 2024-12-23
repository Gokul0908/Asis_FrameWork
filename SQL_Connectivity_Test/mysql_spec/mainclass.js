import xlsx from 'xlsx';
import MySQLHandler from './mysqlHandler.js';

// Read the Excel file and extract data
function readExcelFile(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Assuming data is in the first sheet
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  return data.slice(1).map((row) => {
    return {
      column1: row[0],
      column2: row[1],
      assetNumber: row[2],
      color: row[3],  // Assuming color is in the 4th column
    };
  });
}

const filePath = './DemoExcel/testing.xlsx';
const excelData = readExcelFile(filePath);

const mysqlHandler = new MySQLHandler({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database',
});

// Process each record from the Excel file
async function processRecords() {
  for (const record of excelData) {
    const color = record.color;
    const data = {
      column1: record.column1,
      column2: record.column2,
      assetNumber: record.assetNumber,
    };

    try {
      const result = await mysqlHandler.handleRecord(color, data);
      console.log('Operation successful:', result);
    } catch (err) {
      console.error('Error processing record:', err);
    }
  }

  // Close the MySQL connection after all records are processed
  await mysqlHandler.closeConnection();
}

processRecords();
