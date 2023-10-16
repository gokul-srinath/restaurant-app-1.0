const bodyParser = require("body-parser");
const express = require("express");
const FoodRoute = require("./Routes/Foods");
const cors = require("cors");
const { connect } = require("./db/connect");

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/foods", FoodRoute);

app.listen(PORT, () => {
  connect();
  console.log("Server listening on Port:", PORT);
});
