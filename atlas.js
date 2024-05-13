const staty = document.getElementById('staty');

document.addEventListener('DOMContentLoaded', function() {
    const continentSelect = document.getElementById('continentSelect');
    const selectedContinent = continentSelect.value; // Získání hodnoty vybraného kontinentu
    getCountriesByContinent(selectedContinent); // Zavolání funkce pro načtení států na základě vybraného kontinentu

    // Event listener pro změnu hodnoty výběru kontinentu
    continentSelect.addEventListener('change', function() {
        const selectedContinent = continentSelect.value;
        getCountriesByContinent(selectedContinent);
    });
});

// Funkce pro získání států na základě vybraného kontinentu
function getCountriesByContinent(continent) {
    const apiUrl = `https://restcountries.com/v3.1/region/${continent}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            staty.innerHTML = ''; // Vyprázdnění seznamu států před novým načtením
            data.forEach(stat => {
                let blockCountry =
`<div class="col-xl-3 col-lg-3 col-md-6 col-sm-8 lol">
    <div class="card">
        <a href="${stat.maps.googleMaps}" target="_blank" rel="noopener noreferrer">
            <img src="${stat.flags.png}" alt="${stat.name.official}" class="card-img-top">
        </a>
        <div class="card-body">
            <h4 class="card-title">${stat.translations.ces.common}</h4>
            <p class="card-text"></p>
            <button class="btn btn-primary more-info-btn shadow-sm">Více...</button>
                <div class="more-info">
                    <p>Rozloha: <span class="area">${stat.area}</span> km<sup>2</sup></p>
                    <p>Počet obyvatel: <span class="population">${stat.population}</span></p>
                    <p>Hlavní město: <span class="capital">${stat.capital}</span></p>
                </div>
        </div>
    </div>
</div>`;
                staty.innerHTML += blockCountry;
            });
        });
}

// Odstranění event listeneru pro kliknutí na obrázek
 document.addEventListener('click', function(event) {
     const target = event.target;
     if (target.tagName === 'IMG' && target.parentElement.tagName === 'A') {
        window.open(target.parentElement.href, '_blank');
     }
 });
 // Přidání události kliknutí na tlačítko "Více..."
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('more-info-btn')) {
        const moreInfo = target.nextElementSibling;
        moreInfo.classList.toggle('show');
    }
});

