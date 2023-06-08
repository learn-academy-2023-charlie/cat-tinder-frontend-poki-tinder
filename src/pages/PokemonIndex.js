import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

<<<<<<< HEAD
const PokemonIndex = ({ pokemons }) => {
  console.log(pokemons)
  return(
    <main>
      {pokemons?.map((pokemon, index) => {
        return (
          <Card
          style={{
            width: "14rem",
          }}
          key={index}
        >
          <img alt={`profile of a pokemon named ${pokemon.name}`} src={pokemon.image} />
          <CardBody>
            <CardTitle tag="h5">{pokemon.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Species: {pokemon.species}
              <br/>
              Size: {pokemon.size}
              <br/>
              PokemonType: {pokemon.pokemon_type}
            </CardSubtitle>
            <Button>See More Details</Button>
          </CardBody>
        </Card>
      )
    })}
   </main>
  )
=======
const Index = () => {
    return(
        <>
         <h1> Index </h1>
        </>
    )
>>>>>>> cdaba0b (header and foot test coverage done, missing home and NotFound tests)
}

export default PokemonIndex