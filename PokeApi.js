async function getPkm() {
    const i = Math.floor(Math.random() * 1025);
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

async function mi_peticion() {
    const pkmn = await getPkmn()
    const pkmn1 = await getPkmn()
    const pkmn2 = await getPkmn()
    const pkmn3 = await getPkmn()
    const pkmn4 = await getPkmn()
    
     console.log(pkmn.name)
     console.log(pkmn.species.name) 

    const { name } = pkmn
    const { front_default } = pkmn.sprites

    const imgElement = document.createElement('img');
    imgElement.src = front_default;

    document.body.innerHTML =
    `
    <input type="submit" value="${pkmn.name}">
    <p class="pokemon-card"></p>
    `

    const pokemonCard = document.querySelector('.pokemon-card');
    pokemonCard.appendChild(imgElement);

    // Create new input elements for the other four Pokémon
    const pkmn1Name = document.createElement('input');
    pkmn1Name.type = "submit";
    pkmn1Name.value = pkmn1.name;
    document.body.appendChild(pkmn1Name);

    const pkmn2Name = document.createElement('input');
    pkmn2Name.type = "submit";
    pkmn2Name.value = pkmn2.name;
    document.body.appendChild(pkmn2Name);

    const pkmn3Name = document.createElement('input');
    pkmn3Name.type = "submit";
    pkmn3Name.value = pkmn3.name;
    document.body.appendChild(pkmn3Name);

    const pkmn4Name = document.createElement('input');
    pkmn4Name.type = "submit";
    pkmn4Name.value = pkmn4.name;
    document.body.appendChild(pkmn4Name);
}

mi_peticion()
