const app = require("./index");
const connect = require("./config/db");

app.listen(5901, async () => {
  try {
    await connect();
    console.log("listening to the port 5901");
  } catch (error) {
    console.log(err);
  }
});
