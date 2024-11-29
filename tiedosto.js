fetch('https://raw.githubusercontent.com/your-repo-path/tico-cafe-data.json')
    .then(function(response) {
        return response.json(); 
    })
    .then(function(responseJson) {
     
        kerro(responseJson); 
    })
    .catch(function(error) {
        // Jos tulee virhe
        document.getElementById("vastaus").innerHTML =
        "<p>Tietoa ei pystytä hakemaan</p>";
    });

function kerro(data) {
    var teksti = "";  // Muuttuja tiedon keräämiseen
    
    // Yrityksen nimi
    teksti += "<h2>" + data.yritys + "</h2>";
    
    // Yhteystiedot
    teksti += "<h3>Yhteystiedot</h3>";
    teksti += "<p>Osoite: " + data.yhteystiedot.osoite + "</p>";
    teksti += "<p>Puhelin: " + data.yhteystiedot.puhelin + "</p>";
    teksti += "<p>Email: " + data.yhteystiedot.email + "</p>";

    // Tuotteet 
    teksti += "<h3>Tuotteet:</h3><ul>";
    for (var i = 0; i < data.tuotteet.length; i++) {
        teksti += "<li>" + data.tuotteet[i] + "</li>";
    }
    teksti += "</ul>";

    // Henkilökunta 
    teksti += "<h3>Henkilökunta:</h3><ul>";
    for (var i = 0; i < data.henkilokunta.length; i++) {
        teksti += "<li>" + data.henkilokunta[i].nimi + " - " + data.henkilokunta[i].titteli + "</li>";
    }
    teksti += "</ul>";

    // Tulostetaan kerätty teksti div-elementtiin
    document.getElementById("vastaus").innerHTML = teksti;
}
