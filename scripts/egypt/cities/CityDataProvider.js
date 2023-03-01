const egypt = {
    cities: [
        {
            image: "https://media.istockphoto.com/id/1335426340/photo/cairo-aerial-view-and-nile-river.jpg?b=1&s=170667a&w=0&k=20&c=3gqndU9xoRN1GZp0dwVd4m5ZAk4404sdRgcdZodlRhM=",
            name: "Cairo",
            attractions: "The Egyptian Museum, Al-Azhar Park, and Cairo Tower",
            established: "969 CE",
            population: "10 Million",
        },
        {
            image: "https://www.girasoltours.com/wp-content/uploads/2022/04/Giza-City.webp",
            name: "Giza",
            attractions: "The Great Pyramid of Giza, Great Sphinx of Giza, and Pharaonic Village",
            established: "642 CE",
            population: "9.2 Million",
        },
        {
            image: "https://www.egypttoursportal.com/images/2017/11/Alexandria-City-Egypt-Egypt-Tours-Portal.jpg",
            name: "Alexandria",
            attractions: "Citadel of Qaitbay, Montaza Palace, and Royal Jewelry Museum",
            established: "331 BCE",
            population: "6 Million",
        }
    ]
};

const getCities = () => {
    return egypt.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
};

const citiesList = () => {
    const cities = getCities()

    let htmlString = `<body><article class="citiesList">`

    for (const singleCity of cities) {

        htmlString += `<section class="citycard">
            <div><img  class="city__image image--card" src="${singleCity.image}" /></div>
            <div class="city__name"><b>Name:</b> ${singleCity.name}</div>
            <div class="city__location"><b>Attractions:</b> ${singleCity.attractions}</div>
            <div class="city__constructed"><b>Established:</b> ${singleCity.established}</div>
            <div class="city__size"><b>Population:</b> ${singleCity.population}</div>
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

parentHTMLElement.innerHTML = citiesList();