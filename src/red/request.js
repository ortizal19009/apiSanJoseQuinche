exports.success = (req, res, message, status) => {
    const statusCode = status || 200;
    const defaultMessage = message || "";
    res.status(statusCode).send({
      error: false,
      status: statusCode,
      body: defaultMessage,
    });
  };
  exports.error = (req, res, message, status) => {
    const statusCode = status || 500;
    const defaultMessage = message || "ERROR INTERNO";
    res.status(statusCode).send({
      error: true,
      status: statusCode,
      body: defaultMessage,
    });
  };
  