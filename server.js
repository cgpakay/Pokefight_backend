const express = require("express");
const cors = require("cors");
require("colors");
require("dotenv").config();
const connectDB = require("./dbinit");
const pokemon = require("./routes/pokemonRouter");
const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pokemons", pokemon);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(" Welcome to myAPI");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`.bold);
});
