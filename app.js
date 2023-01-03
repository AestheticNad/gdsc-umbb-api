const express = require("express");
const app = express();
const ROUTES = require("./api/routes/router");
const cors = require("cors");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use("/api/v1", ROUTES);

try {
  connectDB().then(() =>
    app.listen(300, () => console.log("DB and Server working"))
  );
} catch (error) {
  console.log(error);
}
