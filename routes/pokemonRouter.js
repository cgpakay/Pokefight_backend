const express = require("express");
const {
  getAllPokemons,
  getOnePokemon,
} = require("../controller/pokemonController");

const router = express.Router();

router.get("/", getAllPokemons);

router.get("/:id", getOnePokemon);

module.exports = router;
