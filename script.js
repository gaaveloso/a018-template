const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
// Com o array de pokémons do template, faça o seguinte:
// const squirtle = { nome: 'Squirtle', tipo: 'água', vida: 45 }
function trataPokemon(pokemon){
  pokemon.vida = 100
}
// console.log("antes do médico", squirtle)
// trataPokemon(squirtle)
// console.log("depois do médico",squirtle)

// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
const copiaPokemons = [...pokemons]
const pokemonsVidaCheia = copiaPokemons.map((elemento)=>{
  trataPokemon(elemento)
  return elemento
})
console.log(copiaPokemons)
console.log(pokemons)
console.log(pokemonsVidaCheia)

// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback
// const pokemonsDeFogo = pokemons.filter((pokemon)=> pokemon.tipo === "fogo")
// console.log("filter pokemon fogo", pokemonsDeFogo)
//-----------//
const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === "fogo"
})

console.log("filter pokemon fogo", pokemonsDeFogo)