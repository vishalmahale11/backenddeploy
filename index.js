const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.send("Backend Deploy");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
