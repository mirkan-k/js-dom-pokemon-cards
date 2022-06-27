//
const cardList = document.getElementsByClassName('cards')[0]

for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];
    const card = document.createElement('li')
    cardList.append(card)
    card.setAttribute('class', 'card')
    card.setAttribute('onclick', 'animateToggle()')
    
    card.innerHTML = `
    
    <h2 class="card--title">
    ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    </h2>

    <img
    width="256px"
    class="card--img"
    src= ${pokemon.sprites.versions["generation-v"]["black-white"].front_default}
    />
    
    <ul class="card--text">
    <li>HP: ${pokemon.stats[0].base_stat}</li>
    <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
    <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
    <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
    <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
    <li>SPEED: ${pokemon.stats[5].base_stat}</li>
    <li>APPEARS IN: ${pokemon.game_indices[0].version.name + ", " + pokemon.game_indices[1].version.name} and ${pokemon.game_indices.length - 2} more</li>
    </ul>
    `;
    const cardImg = document.getElementsByClassName('card--img')[i]
    function animateToggle() {
        if (cardImg.src == pokemon.sprites.versions["generation-v"]["black-white"].front_default) {
            cardImg.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
        } else {
            cardImg.src = pokemon.sprites.versions["generation-v"]["black-white"].front_default
        }
    }
}


const pokeCard = document.getElementsByClassName('card')[0]
// console.log(data[0]);