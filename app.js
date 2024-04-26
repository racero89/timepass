const express = require("express");
const route = require("./middleware/route");
const app = express();

app.use("/", route);

app.listen(3000, () => {
  console.log("escuchando http://localhost:3000");
});
