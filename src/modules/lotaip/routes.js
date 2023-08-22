const resp = require("../../red/request");
const controller = require("./controller");

const findAll = async (req, res, next) => {
  try {
    await controller.getAll().then((items) => {
      resp.success(req, res, items, 200);
    });
  } catch (err) {
    next(err);
  }
};
const findById = async (req, res, next) => {
  try {
    let items = await controller.getById(req.params.id);
    resp.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
};
const save = async (req, res, next) => {
  try {
    await controller.save(req.body);
    if (req.body.id == 0 || req.body.id == null) {
      message = "New item saved";
    } else {
      message = "Item updated";
    }
    resp.success(req, res, message, 201);
  } catch (err) {
    next(err);
  }
};
const deleteData = async (req, res, next) => {
  try {
    await controller.deleteData(req.body);
    resp.success(req, res, "Item delte success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  findById,
  save,
  deleteData,
};
