import xlsx from 'xlsx';
import { executeQuery } from './mysqlHelper';  // Assuming you already have this for MySQL interaction

export const readExcelFile = (filePath) => {
    // Read the Excel file

    const workbook = xlsx.readFile(filePath)
    const sheetName = workbook.SheetNames[0]   // Get the first sheet
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet) // Convert the sheet to JSON

    return data; // Return the JSON data


}

export const insertDataIntoDb = async (data) => {
    // Insert data into the database


    for (const row of data) {
        const query = 'INSERT INTO your_table_name (column1, column2) VALUES (?, ?)';  // Modify as per your columns
        const params = [row.column1, row.column2]; // Ensure the keys match your Excel file
        await executeQuery(query, params);
    }


}
