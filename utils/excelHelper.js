import xlsx from 'xlsx';
import MySQLHelper from './mysqlHelper';

const GREEN_COLOR_CODE = '00FF00'; // Hex code for green
const RED_COLOR_CODE = 'FF0000'; // Hex code for red


    let sqlHelper = new MySQLHelper()


// Read Excel and identify cells with specific colors
export const readColoredData = (filePath) => {
    const workbook = xlsx.readFile(filePath, { cellStyles: true });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = [];
    const range = xlsx.utils.decode_range(sheet['!ref']);

    for (let R = range.s.r; R <= range.e.r; ++R) {
        const row = {};
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = xlsx.utils.encode_cell({ r: R, c: C });
            const cell = sheet[cellAddress];

            if (cell && cell.s && cell.s.fgColor) {
                const color = cell.s.fgColor.rgb;

                if (color === GREEN_COLOR_CODE) {
                    row.operation = 'update';
                    row[C] = cell.v; // Store green cell value
                } else if (color === RED_COLOR_CODE) {
                    row.operation = 'delete';
                    row[C] = cell.v; // Store red cell value
                }
            }
        }
        if (Object.keys(row).length > 0) data.push(row); // Push only rows with color
    }

    return data;
};

// Insert, update, or delete based on cell colors
export const processColoredData = async (coloredData) => {
    for (const row of coloredData) {
        try {
            if (row.operation === 'delete') {
                // Delete operation
                const deleteQuery = 'DELETE FROM AssetDetails WHERE AssetNo = ?';
                await sqlHelper.executeQuery(deleteQuery, [row.AssetNo]);
                console.log(`Deleted row with AssetNo ${row.AssetNo}`);
            } else if (row.operation === 'update') {
                // Update operation
                for (const [colName, value] of Object.entries(row)) {
                    if (colName !== 'operation' && colName !== 'AssetNo') {
                        const updateQuery = `UPDATE AssetDetails SET ${colName} = ? WHERE AssetNo = ?`;
                        const params = [value, row.AssetNo];
                        await sqlHelper.executeQuery(updateQuery, params);
                        console.log(`Updated row ${row.AssetNo}, column ${colName} with value ${value}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Error processing row ${row.AssetNo}:`, error.message);
        }
    }
};
