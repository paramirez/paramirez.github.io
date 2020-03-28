const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res, next) => {
  res.json({
    status: "ok"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`funcionando en ${port}`));
