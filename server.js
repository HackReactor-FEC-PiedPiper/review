const express = require("express");
const app = express();
const path = require("path");
const PORT = 3555;

app.use(express.static(path.join(__dirname, "./client/dist")));

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
