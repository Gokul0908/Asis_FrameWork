import mysql from 'mysql2/promise';  // Use promise-based API of mysql2

class MySQLHandler {
  constructor(dbConfig) {
    this.connection = mysql.createConnection(dbConfig);
  }

  async handleRecord(color, data) {
    try {
      // Based on color, decide whether to insert, update, or delete
      if (color === 'green') {
        return this.updateRecord(data);
      } else if (color === 'red') {
        return this.deleteRecord(data);
      } else {
        return this.insertRecord(data);
      }
    } catch (err) {
      throw new Error(`Error processing record: ${err.message}`);
    }
  }

  async insertRecord(data) {
    const query = 'INSERT INTO AssetDetails (col1, col2, assetno) VALUES (?, ?, ?)';
    const [result] = await this.connection.execute(query, [data.column1, data.column2, data.assetNumber]);
    return result;
  }

  async updateRecord(data) {
    const query = 'UPDATE AssetDetails SET col2 = ? WHERE assetno = ?';
    const [result] = await this.connection.execute(query, [data.column2, data.assetNumber]);
    return result;
  }

  async deleteRecord(data) {
    const query = 'DELETE FROM AssetDetails WHERE assetno = ?';
    const [result] = await this.connection.execute(query, [data.assetNumber]);
    return result;
  }

  async closeConnection() {
    await this.connection.end();
  }
}

export default MySQLHandler;
