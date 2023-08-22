const app = require("./src/app");
const appPort = app.get("port");
app.listen(appPort, () => {
  console.log("Server listen on port: ", appPort);
});
