const express = require("express");
const cors = require("cors");
require("colors");
require("dotenv").config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ entended: true }));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
