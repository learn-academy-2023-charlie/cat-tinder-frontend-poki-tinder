import { render } from "@testing-library/react"
import PokemonShow from "../pages/PokemonShow"

describe("<PokemonShow />", () => {
  it("renders without crashing", () => {
    const { id } = useParams()
let currentPokemon = pokemons?.find((pokemon) => pokemon.id === +id)

return (
  <main className="pokemon-show-cards">
    {currentPokemon && (
      <>
        <img
          alt={`profile of a pokemon named ${currentPokemon.name}`}
          src={currentPokemon.image}
          className="pokemon-show-img"
        />
        // additional pokemon code here
      </>
    )}
  </main>
)
  })
})