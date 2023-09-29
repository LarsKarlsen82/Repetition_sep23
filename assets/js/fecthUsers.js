
console.group("opgave 1");


// Function to initialize the code for Opgave 1
function initializeOpgave1() {
    console.group("opgave 1");
// Fetch data og håndter det med en forEach-løkke
function getUsers() {
    fetch('https://dummyjson.com/users')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            displayUserNames(res.users);
        });
}

// Vis brugernavne i elementet med id "opgave1"
function displayUserNames(userData) {
    const opgave1Element = document.getElementById("opgave1");

    userData.forEach(function (user) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${user.firstName} ${user.lastName} <button class="show-button">Vis</button>`;
        
        // Tilføj en eventlistener til knappen for at vise brugeroplysningerne
        listItem.querySelector(".show-button").addEventListener("click", function () {
            displayUserInfo(user); // Vis yderligere oplysninger om brugeren
        });

        opgave1Element.appendChild(listItem);
    });
}

// Vis yderligere oplysninger om en bruger
function displayUserInfo(user) {
    const opgave2Element = document.getElementById("opgave2");

    // Opret et HTML-element for brugeroplysningerne
    const userDetailElement = document.createElement("div");
    userDetailElement.innerHTML = `<h2>${user.name}</h2><p>${user.shortDescription}</p>`;
    
    // Tjek om opgave2Element eksisterer, før du forsøger at tilføje noget til det
    if (opgave2Element) {
        // Fjern tidligere vist brugeroplysninger, hvis der er nogen
        while (opgave2Element.firstChild) {
            opgave2Element.removeChild(opgave2Element.firstChild);
        }
        // Tilføj de nye brugeroplysninger
        opgave2Element.appendChild(userDetailElement);
    }
}

// Kald getUsers() for at hente og behandle data
getUsers(); }
console.groupEnd();

function getData() {





    const myData = [

        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    return myData

}

// Opgave 2
// Function to initialize the code for Opgave 1
function initializeOpgave1() {
    console.group("opgave 1");
  
    // Fetch data and handle it with a forEach loop
    function getUsers() {
      fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((res) => {
          displayUserNames(res.users);
        });
    }
  
    // Display user names in the element with id "opgave1"
    function displayUserNames(userData) {
      const opgave1Element = document.getElementById("opgave1");
  
      userData.forEach(function (user) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${user.firstName} ${user.lastName} <button class="show-button">Vis</button>`;
        
        // Add an event listener to the "Vis" button to show user details
        listItem.querySelector(".show-button").addEventListener("click", function () {
          displayUserInfo(user); // Display additional user information
        });
  
        opgave1Element.appendChild(listItem);
      });
    }
  
    // Display additional user information
    function displayUserInfo(user) {
      const opgave2Element = document.getElementById("opgave2");
  
      // Create an HTML element for user details
      const userDetailElement = document.createElement("div");
    //   userDetailElement.innerHTML = `<h2>${user.firstName} ${user.lastName}</h2><p>${user.phone}</p><p>${user.company}</p>`;
    userDetailElement.innerHTML = `
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>Phone:${user.phone}</p>
    <h3>Company Information</h3>
    <p>Company Name: ${user.company.name}</p>
    <p>Company Address: ${user.company.address.address}, ${user.company.address.city}, ${user.company.address.state} ${user.company.address.postalCode}</p>
    <p>Coordinates: Lat ${user.company.address.coordinates.lat}, Lng ${user.company.address.coordinates.lng}</p>
  `;
      // Clear any previous user details
      opgave2Element.innerHTML = "";
  
      // Add the new user details
      opgave2Element.appendChild(userDetailElement);
  
      // Show a "Tilbage" (Back) button to go back to the user list
      const backButton = document.createElement("button");
      backButton.textContent = "Tilbage";
      backButton.addEventListener("click", function () {
        opgave2Element.innerHTML = ""; // Clear user details
        opgave1Element.style.display = "block"; // Show the user list
      });
      opgave2Element.appendChild(backButton);
    }
  
    // Call getUsers() to fetch and process data
    getUsers();
  
    console.groupEnd();
  }
  
  // Call the initialization function for Opgave 1
  initializeOpgave1();
  console.info('test');