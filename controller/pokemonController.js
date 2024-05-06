const Pokemon = require("../schemas/PokemonSchema");

//Get all pokemons
const getAllPokemons = async (req, res) => {
  //Request page and limit from query, page set default to 1 or number from query limit set to 50
  const page = req.query.page || 1;
  const limit = 50;
  const search = req.query.search || "";

  const query = search ? { name: { $regex: search, $options: "i" } } : {};
  //Calcuate how much to skip, page-1 = 0 it is for the first page
  const skip = (page - 1) * limit; // Eg. (2-1) * 50 = 50 => would skip 50 pokemons for the 2nd page
  try {
    const pokemons = await Pokemon.find(query).skip(skip).limit(limit);
    if (pokemons.length < 1) {
      res.status(404).json({ message: "Sorry, Pokemons not found" });
    } else {
      const totalPokemons = await Pokemon.countDocuments();
      const totalPages = Math.ceil(totalPokemons / limit); // => 809/50 => 16.18 => Math.ceil = 17
      res.status(200).json({
        pokemons,
        totalPokemons,
        currentPage: page,
        totalPages,
        limit,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get 1 pokemon
const getOnePokemon = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await Pokemon.findOne({ id: parseInt(id) });
    if (pokemon) {
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ message: "Sorry, Pokemon not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPokemons,
  getOnePokemon,
};
