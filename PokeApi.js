async function getPkmn() {
    const i = Math.floor(Math.random() * 1025);
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

async function mi_peticion() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const pkmn = await getPkmn()
    const pkmn1 = await getPkmn()
    const pkmn2 = await getPkmn()
    const pkmn3 = await getPkmn()
    const pkmn4 = await getPkmn()
    
     console.log(pkmn.name)
     console.log(pkmn.species.name) 

    const { name } = pkmn
    const { front_default } = pkmn.sprites

    console.log(front_default)

    const imgElement = document.createElement('img');
    imgElement.src = front_default;

    container.innerHTML =
    `
    <input type="submit" value="${pkmn.name}">
    <p class="pokemon-card"></p>
    `;

    const pokemonCard = container.querySelector('.pokemon-card');
    console.log(pokemonCard)

    pokemonCard.appendChild(imgElement);

    // Create new input elements for the other four Pokémon
    const pkmn1Name = document.createElement('input');
    pkmn1Name.type = "submit";
    pkmn1Name.value = pkmn1.name;
    container.appendChild(pkmn1Name);

    const pkmn2Name = document.createElement('input');
    pkmn2Name.type = "submit";
    pkmn2Name.value = pkmn2.name;
    container.appendChild(pkmn2Name);

    const pkmn3Name = document.createElement('input');
    pkmn3Name.type = "submit";
    pkmn3Name.value = pkmn3.name;
    container.appendChild(pkmn3Name);

    const pkmn4Name = document.createElement('input');
    pkmn4Name.type = "submit";
    pkmn4Name.value = pkmn4.name;
    container.appendChild(pkmn4Name);

    console.log(pokemonCard.innerHTML)
}

mi_peticion();