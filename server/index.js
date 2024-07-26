const express = require("express");
const router = require("./routers");
const cors = require("cors");
const { port } = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(port);
});