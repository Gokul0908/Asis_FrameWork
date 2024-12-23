import xlsx from 'xlsx';
import fs from 'fs';

class ExcelReader {
    constructor(filePath) {
        this.filePath = filePath;

        // Check if the file exists
        if (!fs.existsSync(this.filePath)) {
            console.error(`File does not exist: ${this.filePath}`);
            throw new Error('Excel file not found');
        }

        // Read the Excel file
        this.workbook = xlsx.readFile(this.filePath);
        this.sheetName = this.workbook.SheetNames[0]; // Assuming the first sheet
        this.sheet = this.workbook.Sheets[this.sheetName];
    }

    // Convert Excel sheet to JSON
    getSheetData() {
        return xlsx.utils.sheet_to_json(this.sheet);
    }

    // Helper function to check cell color
    getCellColor(cell) {
        return cell && cell.s && cell.s.fill ? cell.s.fill.fgColor.rgb : null;
    }

    // Check color for a specific cell
    getCellColorForRow(rowNumber, column) {
        const cell = this.sheet[`${column}${rowNumber}`];
        return this.getCellColor(cell);
    }
}

export default ExcelReader;
