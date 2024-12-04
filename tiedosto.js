// Funktio, joka käsittelee JSON-datan ja näyttää sen sivulla
function käsitteleData(data) {
    // Kohdistetaan sisältöalueeseen
    const contentDiv = document.getElementById("content");

    // Muodostetaan HTML-sisältö JSON-datan perusteella
    const htmlContent = `
        <h2>${data.yritys}</h2>
        <p><strong>Yhteystiedot:</strong></p>
        <p>Osoite: ${data.yhteystiedot.osoite}</p>
        <p>Puhelin: ${data.yhteystiedot.puhelin}</p>
        <p>Sähköposti: ${data.yhteystiedot.email}</p>
        <p><strong>Tuotteet:</strong> ${data.tuotteet.join(", ")}</p>
        <h3>Henkilökunta:</h3>
        <ul>
            ${data.henkilokunta
                .map(h => `<li>${h.nimi} - ${h.titteli}</li>`)
                .join("")}
        </ul>
    `;

    // Asetetaan sisältö HTML-sivulle
    contentDiv.innerHTML = htmlContent;
}

// Haetaan JSON-tiedosto GitHub Pages -sivustolta
fetch('https://juliahenrietta.github.io/ticocafe-json/data.json')
    // Muunnetaan vastaus JSON-muotoon
    .then(function (response) {
        return response.json();
    })
    // Kutsutaan käsittelyfunktiota JSON-datan kanssa
    .then(function (responseJson) {
        käsitteleData(responseJson); // JSON-datan käsittely
    })
    // Jos tuli jokin virhe, näytetään virheilmoitus
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
        console.error('Virhe tietojen lataamisessa:', error);
    });
