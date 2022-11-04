const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/", (req, res) => {
  res.send("Backend Deploy");
});

app.use("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
