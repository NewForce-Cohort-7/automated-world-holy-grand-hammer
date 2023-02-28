const italy = {
    cities: [ 
    
       {
        image:"https://ontheworldmap.com/italy/city/rome/rome-location-on-the-italy-map-min.jpg",
        name: "Rome",
        population: 2825077 ,
        region:"Lazio"}, 
  
        
       {image:"https://ontheworldmap.com/italy/city/milan/milan-location-on-the-italy-map-max.jpg",
        name: "Milan",
        population: 1303437,
        region:"Lombardy" },
        
           
        { image:"https://ontheworldmap.com/italy/city/naples/naples-location-on-the-italy-map-max.jpg",
          name: "Naples",
          population: 975139, 
          region:"Campania" }
      
        ]
                    
    };

    
const getCities = () => {
  return italy.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
};

const cityList = () => {
  const cities = getCities()

  let htmlString = `<body><article class="cityList">`

  for (const singleCity of cities) {

      htmlString += `<section class="citycard">
          <div><img  class="city__image image--card" src="${singleCity.image}" /></div>
          <div class="city__name">Name: ${singleCity.name}</div>
          <div class="city__region">Region: ${singleCity.region}</div>
          <div class="city__population">Population: ${singleCity.population}</div>
          
         
      </section>
`
  }
  htmlString += `</article>`

  return htmlString
};

const allcities = getCities();

for (const singleCity of allcities) {
  console.log(singleCity)
};

const parentHTMLElement = document.querySelector(".cities");

parentHTMLElement.innerHTML = cityList();