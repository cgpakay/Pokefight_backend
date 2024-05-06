//Save all the pokemons and images in MongoDB

// const mongoose = require("mongoose");
// const { pokemonsToSave } = require("./pokemons");
// const Pokemon = require("./schemas/PokemonSchema");

// // Function to save Pokémon data to MongoDB
// async function savePokemons() {
//   try {
//     for (const pokemon of pokemonsToSave) {
//       const newPokemon = new Pokemon(pokemon);
//       await newPokemon.save();
//     }
//     console.log("All Pokémon data has been added to the database");
//   } catch (error) {
//     console.error("Failed to save Pokémon data:", error);
//   }
// }

// // Function to connect to MongoDB and save the Pokémon data
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");
//     await savePokemons();
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//   } finally {
//     // Close the MongoDB connection once all data is saved.
//     mongoose.connection.close();
//     console.log("Connection to MongoDB closed");
//   }
// }

// // Export the connectDB function
// module.exports = connectDB;
