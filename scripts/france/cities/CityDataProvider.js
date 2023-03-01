const france = {
    cities: [
        {
            name: "Paris",
            population: "Population of 2.2 million",
            bestKnownFor: "Serves as the capital of France and a global center for art, fashion, gastronomy and culture.",
            image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/01/Paris-2.jpg?fit=1600%2C1000&ssl=1",

        },
        {
            name: "Nice",
            population: "Population of 720,000.",
            bestKnownFor: "Founded by the Greeks, then a retreat for 19th century European elite.",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR8q918CPDSFfwH7ZgRzjv73vZF26P_WpwR71x1Rd1spgHFJ0URrBRJZOQZXwmoJBrd",

        },
        {
            name: "Marseille",
            population: "Population of 2.2 million.",
            bestKnownFor: "Port city in southern France, crossroads of immigration and trade since its founding by the Greeks circa 600 B.C.",
            image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTIi5K10mQZwC6liz2kWNikaOdPWdfAlOwQOXoHqvR97T-Os5meeOo4buSRXindUz60",

        },
        
        
    ]
}

const getCities = () => {
    return france.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
};

const cityList = () => {
    const cities = getCities()

    let htmlString = `<body><article class="cityList">`

    for (const singleCity of cities) {

        htmlString += `<section class="citycard">
            <div><img  class="city__image image--card" src="${singleCity.image}" /></div>
            <div class="city__name">Name: ${singleCity.name}</div>
            <div class="city__population">Population: ${singleCity.population}</div>
            <div class="city__bestKnownFor">Best Known For: ${singleCity.bestKnownFor}</div>
            
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};

const allCities = getCities();

for (const singleCity of allCities) {
    console.log(singleCity)
};

const parentHTMLElement = document.querySelector(".cities");

parentHTMLElement.innerHTML = cityList();



