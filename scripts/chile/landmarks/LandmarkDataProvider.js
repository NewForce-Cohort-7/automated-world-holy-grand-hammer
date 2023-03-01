const chile = {
    
    landmarks: [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1liPpwRsSSFnqLZ7PQDyV9_QuzSKHsuOszx0LLmFV5PKiQtlkz4YS5l3hlzwAjNamVBQoZFc5dh7xOS5RKcPwKQ",
            place: "Easter Island",
            history: "Halfway to Tahiti, far off in the Pacific Ocean, lies one of the most remote islands in the world — Chile’s Easter Island. The Polynesian island is filled with 887 towering, human-like statues called Moai. The largest of which is 33 feet tall and weighs 82 tons. The indigenous culture of the island became so obsessed with constructing larger and more impressive Moai statues that the island’s natural resources were eventually depleted. The population plummetted from a flourishing 15,000 in 1622 to just 2,000 a century later. This bountiful island offers beaches, hiking, and a look into an extremely inventive and dark past."
        },
        {
            image: "https://i0.wp.com/traveluto.com/wp-content/uploads/2017/06/Hand_of_the_Desert.jpg?w=810&ssl=1",
            place: "Hand of the Desert",
            history: "Chile’s Atacama Desert sits 3,600 feet above sea level and it is an alien landscape. The smooth, white sand dunes drift quietly without any visible creatures, plant life or human interference. You can experience the isolation by driving the Panamerican Highway that cuts through the heart of the sunbleached moonscape; hundreds of miles of desolation in each direction. But between the 1309 and 1310 km markers, about 47 miles south of the city of Antofagasta, stands a startling sight — the Hand of the Desert. The 36-foot-tall sculpture is a ghostly human hand ripping through the desert to reach for the stars. It’s as if a giant was flash-buried in a wave of moon dust. The lonely artwork was built in the early ’80’s by Chilean sculptor Mario Irarrázabal."
        },
        {
            image: "https://i0.wp.com/traveluto.com/wp-content/uploads/2017/06/Isla_Magdalena.jpg?w=810&ssl=1",
            place: "Isla Magdalena",
            history: "More than 120,000 penguins temporarily make their home on Isla Magdalena during the months of December, January and February. Those are the only three months the island is accessible. For about $30 USD, you can take a boat from Punta Arenas in Southern Chile. The boat ride takes about two and a half hours, but the payoff is worth it. Well-marked hiking trails take you to the colonies of friendly penguins that are eager to strut their stuff for you. Travelers often remark that Isla Magdalena is an experience closest to that of visiting Antarctica, but for a fraction of the price. Be warned: Penguin colonies are often pungent and dirty, but the experience cannot be duplicated."
            
        }
    ],
};

const getLandmarks = () => {
    return chile.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
};

const landmarkList = () => {
    const landmarks = getLandmarks()

    let htmlString = `<body><article class="landmarkList">`

    for (const singleLandmark of landmarks) {

        htmlString += `<section class="landmarkcard">
            <div><img  class="landmark__image image--card" src="${singleLandmark.image}" /></div>
            <div class="landmark__name">Landmark: ${singleLandmark.place}</div>
            <div class="landmark__location">Info: ${singleLandmark.history}</div>
            
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};

const allLandmarks = getLandmarks();

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
};

const parentHTMLElement = document.querySelector(".landmarks");

parentHTMLElement.innerHTML = landmarkList();
