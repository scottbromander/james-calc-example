const express = require("express");
const app = express();

app.use(express.static("server/public"));

app.listen(5000, () => {
  console.log("App started on port 5000!");
});
