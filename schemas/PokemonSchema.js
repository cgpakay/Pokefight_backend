const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: [String], required: true },
  base: {
    HP: { type: Number, required: true },
    Attack: { type: Number, required: true },
    Defense: { type: Number, required: true },
    SpAttack: { type: Number, required: true },
    SpDefense: { type: Number, required: true },
    Speed: { type: Number, required: true },
  },
  images: {
    imageUrl: { type: String, required: true },
    frontImg: { type: String, required: true },
    backImg: { type: String, required: true },
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
