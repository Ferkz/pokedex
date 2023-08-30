function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
    <span class="number">001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
           <li class="type">grass</li>
        </ol>

        <img src="https://svgcrown.com/file/pokeball/1.png"
             alt="${pokemon.name}">
    </div>
    </li>`
}
const pokemonLi = document.querySelector('#pokemonList')
pokeApi.getPokemons()
    .then((pokemonList = []) => {        
        pokemonLi.innerHTML += pokemonList.map(convertPokemonToLi).join('')
    }) 