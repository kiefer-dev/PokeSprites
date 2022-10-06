
document.querySelector('#pokemonDropdown').addEventListener('change', getFetch)
document.querySelector('#genDropdown').addEventListener('change', populatePokeList)
document.querySelector('#getPokemon').addEventListener('click', getFetchInput)


fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));




//When a user selects a generation, populate the select list
function populatePokeList() {
  let generationChoice = document.querySelector("#genDropdown").value;
  document.querySelector('#pokemonDropdown').innerHTML = "<option>Please select a Pokemon</option>";
  console.log(generationChoice);

  if (generationChoice == 1) {
    // GENERATION 1
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  } 
  //GENERATION 2
  else if (generationChoice == 2) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 3
  else if (generationChoice == 3) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 4
  else if (generationChoice == 4) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 5
  else if (generationChoice == 5) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=156&offset=493`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 6
  else if (generationChoice == 6) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=72&offset=649`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 7
  else if (generationChoice == 7) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=88&offset=721`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  }
  //GENERATION 8
  else if (generationChoice == 8) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=89&offset=809`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  } 
  //ALTERNATE FORMS
  else if (generationChoice == 9) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=228&offset=898`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.name;  //set option val for sending next fetch request
        option.textContent = pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1)); //set the capitalized name displayed to user
        document.querySelector('#pokemonDropdown').appendChild(option); //add each pokemon to the select element
      })
    })
    .catch(err => console.log(`error: ${err}`));
  } 
  
  
  
}

//When a user selects a Pokemon, populate the name/sprites
function getFetch(){
  const pokemon = document.querySelector('#pokemonDropdown').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        //Populate Pokemon's name
        document.querySelector("#pokemonName").innerText = data.name[0].toUpperCase().concat(data.name.slice(1))
        
        //Add front sprites
        document.querySelector("#normalFront").src = data.sprites["front_default"];
        document.querySelector("#shinyFront").src = data.sprites["front_shiny"];

        //Add back sprites
        if (data.sprites["back_default"] !== null) {
          document.querySelector("#normalBack").src = data.sprites["back_default"];
          document.querySelector("#shinyBack").src = data.sprites["back_shiny"];
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
  }); 
}

//When a user inputs a Pokemon name and clicks the get button, populate the name/sprites
function getFetchInput(){
  const pokemon = document.querySelector('#pokemonInput').value.trim().toLowerCase();
  const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon

  console.log(pokemon);

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        //Populate Pokemon's name
        document.querySelector("#pokemonName").innerText = data.name[0].toUpperCase().concat(data.name.slice(1))
        
        //Add front sprites
        document.querySelector("#normalFront").src = data.sprites["front_default"];
        document.querySelector("#shinyFront").src = data.sprites["front_shiny"];

        //Add back sprites
        if (data.sprites["back_default"] !== null) {
          document.querySelector("#normalBack").src = data.sprites["back_default"];
          document.querySelector("#shinyBack").src = data.sprites["back_shiny"];
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
  }); 
}