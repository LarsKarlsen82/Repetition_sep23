
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
  console.info('test fetchUSers!');