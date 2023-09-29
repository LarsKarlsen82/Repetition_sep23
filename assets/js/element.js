// getElementById

// Her bruger vi JavaScript til at finde elementet med id'en "intro" og gemme det i variablen "element".
const element = document.getElementById("intro");

// Nu vil vi ændre indholdet af elementet med id'en "demo" ved at tilføje teksten fra "intro" afsnittet.
document.getElementById("demo").innerHTML = 
"Teksten fra intro afsnittet er: " + element.innerHTML;

// getElementsByTagName

// Først fortæller vi computeren at finde det element med id'en "main" i HTML-dokumentet.
const x = document.getElementById("main");

// Derefter beder vi computeren om at finde alle <p> afsnit inde i "main" elementet og gemme dem i "y".
const y = x.getElementsByTagName("p");

// Nu vil vi lave det første afsnit (y[0]) i blåt.
const contentOfInnerHTML = y[0].innerHTML; // Her henter vi teksten inden i det første afsnit.
const styledContentOfInnerHTML = '<span style="color: blue;">' + contentOfInnerHTML + '</span>'; // Her ændrer vi farven på teksten til blå.

// Til sidst viser vi det ændrede tekstindhold i elementet med id'en "Resultat".
document.getElementById("Resultat").innerHTML =
    'Det første afsnit (indeks 0) inde i "main" er: ' + styledContentOfInnerHTML;

// getElementsByClassName
// Hent alle afsnitselementer med class="paragraph"
const paragraphs = document.getElementsByClassName("paragraph");

// Tjek om der er elementer med klassen "paragraph"
if (paragraphs.length > 0) {
    console.log("Afsnit med class 'paragraph' blev fundet:", paragraphs);
} else {
    console.log("Ingen afsnit med class 'paragraph' blev fundet.");
}

// Hent alle <p> elementer på siden
const allParagraphs = document.getElementsByTagName("p");

// Tjek om der er <p> elementer på siden
if (allParagraphs.length > 0) {
    console.log("Alle <p> elementer blev fundet:", allParagraphs);
} else {
    console.log("Ingen <p> elementer blev fundet.");
}
