const staty = document.getElementById('staty');
 
fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry =
            `<div class="col-xl-1 col-lg-2 col-md-4 col-sm-6">
                <div class="card">
                    <a href="${stat.maps.googleMaps}"></a>
                    <img src="${stat.flags.png}" alt="${stat.name.official}" class="card-img-top">
                    <div class="card-body">
                        <h4 class="card-title">${stat.translations.ces.common}</h4>
                        <p class="card-text">Počet obyvatel: ${stat.population}
                            br>Rozloha: ${stat.area} km<sup>2</sup>
                        </p>
                    </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });
    });