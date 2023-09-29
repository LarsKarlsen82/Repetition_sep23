//<!-- Section 2 -->

const FirstName = 'Louis';
const LastName = 'Andersen';
const workYearTotal = '<strong>5</strong>';
let spacer = ' ';

let myGreeting = 'Hej';
let myMessage = myGreeting.concat(spacer, `<strong>${FirstName}</strong>`, spacer, `<strong>${LastName}</strong>`);

let besked = `${myMessage}` + ` , du har nu arbejdet i vores virksomhed i ${workYearTotal} år.`;

let myElement = document.getElementById('message');

myElement.innerHTML = besked;


// <!-- Section 3 -->


const myData = [
    { 
        "navn": "T-shirt",
        "beskrivelse": "En t-shirt lavet af bomuld",
        "pris": `Kr. ${99}`,
        "billede": "./assets/Images/T-shirt.png"
    },
    { 
        "navn": "Jeans",
        "beskrivelse": "Blå denim jeans med straight fit",
        "pris": `Kr. ${299}`,
        "billede": "./assets/Images/mensjeans.webp"
    },
    { 
        "navn": "Hættetrøje",
        "beskrivelse": "En grå hættetrøje med lynlås",
        "pris": `Kr. ${199}`,
        "billede": "./assets/Images/haette.jpg"
    }
];

function buildStudentView(myStudentList) {
    let myInfoElement = document.getElementById('produktListe');

    myStudentList.forEach((myProduct) => {
        // Create an image element with the source attribute set to the product's image URL.
        let imageElement = `<img src="${myProduct.billede}" alt="${myProduct.navn}">`;

        let myInfoTemplate = `
            <div class="product">
                ${imageElement}
                <div class="product-details">
                    <h2>${myProduct.navn}</h2>
                    <p>${myProduct.beskrivelse}</p>
                    <p>${myProduct.pris}</p>
                </div>
            </div>
        `;

        myInfoElement.innerHTML += myInfoTemplate;
    });
}

buildStudentView(myData);

// <!-- Section 3 form -->

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

      // Vi tilføjer en klikbegivenhedslytter til knappen
      submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Forhindrer formularen i at blive sendt, så siden ikke genindlæses

        // Her finder vi inputfelterne i formularen
        const myFormFields = myForm.querySelectorAll('input');

        // Vi tilføjer værdierne fra inputfelterne til vores liste med personer
        myPersons.push({
            navn: myFormFields[0].value,
            alder: myFormFields[1].value,
        });

        // Vi sorterer listen efter alder og viser den på siden
        const sorteretMyPersons = sorterEfterAlder(myPersons);
        visListe(sorteretMyPersons);
    });

    // Denne funktion viser listen med personer på websiden
    function visListe(sorteretMyPersons) {
        let html = '';
        sorteretMyPersons.forEach((person) => {
            // Vi opretter et HTML-skabelon for hver person i listen
            html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        });
        personList.innerHTML = html; // Vi opdaterer HTML-indholdet i vores liste-element
    }

    // Denne funktion sorterer listen med personer efter alder
    function sorterEfterAlder(myPersons) {
        return myPersons.sort((a, b) => a.alder - b.alder);
    }



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
