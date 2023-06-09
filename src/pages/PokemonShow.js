import React from "react"
import { useParams } from "react-router-dom"

const Show = ({ pokemons }) => {
  const { id } = useParams()
  let currentPokemon = pokemons.find((pokemon) => pokemon.id === +id)
  console.log(currentPokemon)

    return(
      <>
       <h3> Pokemon Show</h3>
       <main className="card">
       <h5>{currentPokemon.image}</h5>
       </main>
       <main className="card2"> 
       <h5>{currentPokemon.name}</h5>
       <h5>{currentPokemon.species}</h5>
       <h5>{currentPokemon.size}</h5>
       <h5>{currentPokemon.pokemon_type}</h5>
       </main>
      </>
    )
}
export default Show