const express = require("express");
const router = express.Router();
const {
  findAll,
  findById,
  save,
  deleteData,
} = require("../modules/media/routes");
router.get("/", findAll);
router.get("/:id", findById);
router.post("/", save);
router.delete("/", deleteData);
module.exports = router;
