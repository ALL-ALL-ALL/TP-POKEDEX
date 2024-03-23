 
const templatePokemon = document.querySelector("template").content;
const container = document.querySelector(".container");
async function chercherpokemons(){



    const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
    const response = await fetch ("https://pokebuildapi.fr/api/v1/pokemon/limit/100");

    
    console.log("la reponse est arrive");
    console.log(response);
    
    console.log("parsing du json pour obtenir un tableau js ");
    const pokemons = await response. json () ;
    console.log("parsing terminer");

    console.log("voici  votre tableaau de pokemons");
    console.log(pokemons);

    console. log (pokemons [100]) ;


    for (const pokemon of pokemons) {
        // Je clone un nouvel élément à partir du HTML ecrit dans le <template>
        const newElement = templatePokemon.cloneNode(true);
        // Je modifie le nouvel élément HTML
        newElement.querySelector(".name").innerText = pokemon.name;
        newElement.querySelector(".pokedexId").innerText = pokemon.pokedexId;
        newElement.querySelector("img").setAttribute("src",pokemon.image);
        // J'affiche ce nouvelle élément en le placant dans le container
        container.appendChild(newElement);
    }
}
chercherpokemons();



