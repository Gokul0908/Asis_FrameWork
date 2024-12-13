import mysql from 'mysql2'

class MySQLHelper {


    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'Database@123',
            database: 'asis'   
        })
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) reject(err)
                resolve('Connected!')
            })
        })
    }

    executeQuery(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, results) => {
                if (err) reject(err)
                resolve(results)
            })
        })
    }

    closeConnection() {
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) reject(err)
                resolve('Connection closed!')
            })
        })
    }
}   export default MySQLHelper
