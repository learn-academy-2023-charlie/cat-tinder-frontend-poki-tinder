import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PokemonIndex from "./pages/PokemonIndex"
import PokemonShow from "./pages/PokemonShow"
import PokemonNew from "./pages/PokemonNew"
import PokemonEdit from "./pages/PokemonEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import mockPokemons from "./mockPokemons"
import "./App.css"

const App = () => {
  const [pokemons, setPokemons] = useState(mockPokemons)
  
  const createPokemon = (newPokemon) => {
    
  }

  const updatePokemon = ( pokemon, id ) =>
  {
    console.log("pokemon:", pokemon);
    console.log("id:", id);
  }

  return(
    <>
      <Header />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons} />} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons}/>} />
        <Route path="/pokemonnew" element={ <PokemonNew createPokemon={createPokemon} />} />
        <Route path="/pokemonedit/:id" element={ <PokemonEdit updatePokemon={updatePokemon}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App