const mysql = require('mysql2/promise');
// import mysql from './mysql2/promise'


export const dbConfig = {
    host: 'localhost:3306',     // Replace with your DB host
    user: 'root',          // Replace with your DB user
    password: 'Database@123',  // Replace with your DB password
    database: 'jdbcdemo'    // Replace with your DB name
};

export async function executeQuery(query, params = []) {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(query, params);
    await connection.end();
    return results;
}

module.exports = { executeQuery };
