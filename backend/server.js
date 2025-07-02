const app = require("./app.js");
const dotenv = require("dotenv");
//reading the config.env;
dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT_NUMBER, () => {
  console.log("server launched");
});
