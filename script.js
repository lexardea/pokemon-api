//create event listener for submit button click
document.getElementById('submit').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    const submittedChar = document.getElementById("charName").value;
    console.log(submittedChar);
    const response = await fetchData(submittedChar);
    console.log(response);

    const container = getElementById("pokemonRetrieved")
    container.innerHTML += ```
        <div>
            <h2>${response.name}</h2>
            <img src="${response.characterImage}" alt="">
        </div>
    
    ```

});

//create an async function that retrieves: name of character, image of character
async function fetchData(submittedChar) {
    try{
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${submittedChar}`);
        //access sprites object and get key to display
        const result = await pokemonData.json();
        return {
            name: result.name,
            characterImage: result.sprites.front_default
        }
        // const submittedCharImg = await fetch(`https://pokeapi.co/api/v2/${submittedChar`);
        const charImg = await submittedCharImg.json();
   } catch(error) {
        console.log("error", error);
   }
}



// async function fetchImage();

//return the name of character to the h2 element id returnedName
const nameText = document.querySelector("h2");
nameText.innerHTML = `${submittedChar}`

// return the image to the img src element in html doc, need to use a function to return it to the html doc
function img_return() {
    const characterImage = document.createElement("img")
    document.pokemonRetrieved.appendChild(characterImage)
}

// original thoughts:
// const.newCharImg = document.querySelector("img");
//newCharImg.innerHTML = src=...

 //remove whitespace from input and declare charNameClean????

//  ///suggestion from elif
//  // Function to fecht data from PokeAPI
// async function fetchPokemon() {
//     const input = document.getElementById('js-pokemonInput').value.toLowerCase();
//     const container = document.getElementById('js-pokemonContainer');

//     // Error handling
//     if (!input) {
//         container.innerHTML = '<p> Please enter a Pokémon name or ID. </p>';
//         return;
//     }

//     try {
//         // Fetch data from API
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
//         // Error handling
//         if (!response.ok) {
//             throw new Error('Pokémon not found');
//         }

//         const data = await response.json() // js object

//         // Update DOM 

//     } catch (error) {
//         // Error handling
//         container.innerHTML = `<p style="color:red;"> Pokémon not found. Please try again. </p>`
//     }
// }

// // Function to search by enter key
// function handleKeyDown (event) {
//     if (event.key === 'Enter') {
//         fetchPokemon();
//     }
// }

// -> mine if it helps.
// // Update DOM 
//         container.innerHTML = `
//             <div class="pokemon-images">
//                 <img src="${data.sprites.front_default}" alt="${data.name}"> 
//                 <img src="${data.sprites.back_default}" alt="${data.name}">
//             </div>
//             <div class="pokemon-images">
//                 <img src="${data.sprites.front_shiny}" alt="${data.name}">
//                 <img src="${data.sprites.back_shiny}" alt="${data.name}">
//             </div>
//             <div class="stats">
//                 <h2>${data.name.toUpperCase()}</h2>
//                 <p>Type: ${data.types.map(typeOfPokemon => typeOfPokemon.type.name.charAt(0).toUpperCase() + typeOfPokemon.type.name.slice(1)).join(', ')}</p>
//                 <p>ID: ${data.id}</p>
//                 <p>HP: ${data.stats[0].base_stat}</p>
//                 <p>Attack: ${data.stats[1].base_stat}</p>
//                 <p>Defense: ${data.stats[2].base_stat}</p>
//             </div>
//         `;