const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

// Sets an initial port.
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Include js files
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Listens for input from user.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
