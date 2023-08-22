const mysql = require("mysql");
const config = require("../config");
const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};
let connection;
const mysqlConnection = () => {
  connection = mysql.createConnection(dbconfig);
  connection.connect((err) => {
    if (err) {
      console.log("[db error - 1]", err);
      //setTimeout(mysqlConnection, 200);
    } else {
      console.log("Connection succesfull");
    }
  });
  connection.on("error", (err) => {
    console.log("[db error - 2]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      mysqlConnection();
    } else {
      throw err;
    }
  });
};
mysqlConnection();

const findAll = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
};
const findById = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE id=${id}`,
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
};
const insert = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
};
const update = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id = ?`,
      [data, data.id],
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
};
const save = (table, data) => {
  if (data && (data.id == 0 || data.id == null)) {
    return insert(table, data);
  } else {
    return update(table, data);
  }
};
const deleteData = (table, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM ${table} WHERE id = ?`,
      data.id,
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
};

module.exports = {
  findAll,
  findById,
  save,
  deleteData,
};
