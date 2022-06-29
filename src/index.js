const cardList = document.getElementsByClassName('cards')[0]

for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];
    let card, cardTitle, cardImage, cardStatsList, statsHp, statsAttack, statsDefense, statsSpAttack, statsSpDefense, statsSpeed, gameAppearances

    
    function createElements() {   
        card = document.createElement('li')
        
        cardTitle = document.createElement('h2')
        cardImage = document.createElement('img')

        cardStatsList = document.createElement('ul')

        statsHp = document.createElement('li')
        statsAttack = document.createElement('li')
        statsDefense = document.createElement('li')
        statsSpAttack = document.createElement('li')
        statsSpDefense = document.createElement('li')
        statsSpeed = document.createElement('li')
        gameAppearances = document.createElement('li')
    }
    
    function addElementsToDOM() {
        cardList.append(card)
        
        card.appendChild(cardTitle)
        card.appendChild(cardImage)
        card.appendChild(cardStatsList)
        
        cardStatsList.appendChild(statsHp)
        cardStatsList.appendChild(statsAttack)
        cardStatsList.appendChild(statsDefense)
        cardStatsList.appendChild(statsSpAttack)
        cardStatsList.appendChild(statsSpDefense)
        cardStatsList.appendChild(statsSpeed)
        cardStatsList.appendChild(gameAppearances)
    }
    
    function updateElements() {
        card.setAttribute('class', 'card')

        cardTitle.setAttribute('class', 'card--title')
        cardTitle.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
        
        cardImage.setAttribute('width', '256px')
        cardImage.setAttribute('id', `img${pokemon.id}`)
        cardImage.setAttribute('class', 'card--img')
        cardImage.setAttribute('src', `${pokemon.sprites.versions["generation-v"]["black-white"].front_default}`)
        
        cardStatsList.setAttribute('class', 'card--text')

        statsHp.textContent = `HP: ${pokemon.stats[0].base_stat}`
        statsAttack.textContent = `ATTACK: ${pokemon.stats[1].base_stat}`
        statsDefense.textContent = `DEFENSE: ${pokemon.stats[2].base_stat}`
        statsSpAttack.textContent = `SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}`
        statsSpDefense.textContent = `SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}`
        statsSpeed.textContent = `SPEED: ${pokemon.stats[5].base_stat}`
        gameAppearances.textContent = `APPEARS IN: ${pokemon.game_indices[0].version.name + ", " + pokemon.game_indices[1].version.name} and ${pokemon.game_indices.length - 2} more`
    }

    function styleElements() {
        cardList.style.listStyle = 'none'
        cardStatsList.style.listStyle = 'none'

        for (let j = 0; j < card.querySelectorAll('li').length; j++) {
            card.querySelectorAll('li')[j].style.marginBottom = '0.4rem'
        }

        cardImage.style.minHeight = '256px'
    }

    function run() {
        createElements()
        addElementsToDOM()
        updateElements()
        styleElements()
    }
    
    run()

    const cardImg = document.getElementById(`img${pokemon.id}`)
    function animate() {
        cardImg.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
    }

    function static() {
        cardImg.src = pokemon.sprites.versions["generation-v"]["black-white"].front_default
    }

    card.addEventListener('mouseover', animate)
    card.addEventListener('mouseout', static)
}