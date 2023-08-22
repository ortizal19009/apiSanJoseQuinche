const db = require("../../db/connection");
const table = "hoteles";
  const getAll = () => {
    return db.findAll(table);
  };
  const getById = (id) => {
    return db.findById(table, id);
  };
  const save = (body) => {
    return db.save(table, body);
  };
  const deleteData = (body) => {
    return db.deleteData(table, body);
  };
module.exports={
    getAll,
    getById,
    save,
    deleteData,
  };
