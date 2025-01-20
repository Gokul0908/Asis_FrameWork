import mysql from 'mysql2/promise'
// import dbConfig from '../../config/db.config'


class DbHelper {
    constructor() {
        this.connection = null;
    }

    async connect() {
        this.connection = await mysql.createConnection(dbConfig = {
            host: 'localhost',
            port: '3306',   // Replace with your DB host
            user: 'root',          // Replace with your DB user
            password: 'Database@123',  // Replace with your DB password
            database: 'asis' // Replace with your DB name
        });
    }

    async upsert(tableName, data, uniqueKey) {
        const keys = Object.keys(data);
        const values = Object.values(data);

        const insertQuery = `
            INSERT INTO ${tableName} (${keys.join(', ')})
            VALUES (${keys.map(() => '?').join(', ')})
            ON DUPLICATE KEY UPDATE
            ${keys.map(key => `${key} = VALUES(${key})`).join(', ')}
        `;

        return this.connection.execute(insertQuery, values);
    }

    async delete(tableName, condition) {
        const query = `DELETE FROM ${tableName} WHERE ${condition}`;
        return this.connection.execute(query);
    }

    async close() {
        if (this.connection) {
            await this.connection.end();
        }
    }
}
export default DbHelper