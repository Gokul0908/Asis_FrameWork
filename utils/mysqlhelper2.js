import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306' ,   // Replace with your DB host
    user: 'root',          // Replace with your DB user
    password: 'Database@123',  // Replace with your DB password
    database: 'asis'
});

export const executeQuery = async (query, params) => {
    const [results] = await pool.execute(query, params);
    return results;
};

function convertNumericToDate(num) {
    const baseDate = new Date(1900, 0, 1); // Excel's base date is January 1, 1900
    const milliseconds = (num - 1) * 86400000; // Convert the numeric value to milliseconds
    const date = new Date(baseDate.getTime() + milliseconds); // Add milliseconds to base date
    return date.toISOString().split('T')[0]; // Return the date in 'YYYY-MM-DD' format
}
