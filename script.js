//create event listener for when user clicks submit button 
document.getElementById('submit').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    //define HTML element with id 'charName' (user's text input) as 'submittedChar'
    const submittedChar = document.getElementById("charName").value.toLowerCase(); 

    //print the character's name
    console.log(submittedChar);

    //define 'response' as the data we get from the fetchData function, wait for that data to be returned
    //use async function (fetchData) to pull the data from PokeAPI
    const response = await fetchData(submittedChar);

    //print data when it is returned
    console.log(response);

    //use id to target the HTML div section where we want to display the returned data
    const container = document.getElementById("pokemonRetrieved")

    // Check if there is an error or no response
    if (!response) {
        container.innerHTML = `<p>Error: Could not retrieve character data. Please try again.</p>`;
        return;
    }

    //print the returned data to elements in the targeted HTML container
    container.innerHTML = `
       <div>
           <h2>Name: ${response.name}</h2>
           <img src="${response.characterImage}" alt="">
       </div>
   `
});

//create an async function that retrieves: name of character, image of character
async function fetchData(submittedChar) {
    try{
        //define the data retrieved from the API as 'pokemonData' 
        // pull specific character information using text input (submittedChar) from user
        //access sprites object and get key to display
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${submittedChar}`);
        //convert JSON data to JavaScript
        const result = await pokemonData.json();
        return {
            name: result.name, //return character's name 
            characterImage: result.sprites.front_default //return image of character
        }
   } catch(error) {
        console.log("error", error); //if error, print error message
        return null
   }
}