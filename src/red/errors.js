const request = require("./request");
const errors = (err, req, res, next) => {
  console.error("[Error]", err);
  const message = err.message || "Error interno";
  const status = err.statusCode || 500;
  request.error(req, res, message, status);
};
module.exports = errors;
