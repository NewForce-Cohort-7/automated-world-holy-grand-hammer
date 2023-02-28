const chile = {
    
    cities: [
        {
            image: "https://www.tripsavvy.com/thmb/Zd8spX2ZMZHZiElPIojyVg1n6S4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-153096756-58ac851b3df78c345b70eee1.jpg",
            city: "Santiago",
            info: "The capital of Chile, Santiago is a cosmopolitan city, with ample restaurants, bars, hotes, and shopping from the tiny boutique and craft fairs to giant shopping malls. There are cultrual attractions such as art galleries, museums, theaters, opera and ballet, lively nightlife, plus parks, tree-lined streets, and distinct neighborhoods."
            
        },
        {
            image: "https://www.tripsavvy.com/thmb/t1ZkVU1ewGS731N1QeuaYtgQESE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-87337286-58ac85b03df78c345b7100b3.jpg",
            city: "Viña del Mar",
            info: "Chile's premmier resort on the Chilean Riviera attracts Chileans and international visitors to the beaches, the casino, the elegant hotels and restaurants, the musems, and spritely nightlife."
            
        },
        {
            image: "https://www.tripsavvy.com/thmb/1ZuJcst9PYGxLt6qyd2b7xL1JCk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-541232844-58ac86e53df78c345b7101f2.jpg",
            city: "Arica",
            info: "Called the City of the Eternal Spring, Arica is Chile's northermost city, a duty-free oasis, and the gateway to archaeological and natural wonders in Lauca National Park, the geoglyphs at Putre, and the high altitude Lake Chungara."
            
        }
    ]
};

const getCities = () => {
    return chile.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
};

const cityList = () => {
    const cities = getCities()

    let htmlString = `<body><article class="cityList">`

    for (const singleCity of cities) {

        htmlString += `<section class="citycard">
            <div><img  class="city__image image--card" src="${singleCity.image}" /></div>
            <div class="city__name">City: ${singleCity.city}</div>
            <div class="city__location">Info: ${singleCity.info}</div>
           
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



