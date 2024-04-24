const express = require("express");
const { route } = require("./middleware/route");
const app = express();
const index = require("route/index");

app.use("/", index);

app.listen(3000, () => {
  console.log("escuchando 3000");
});
