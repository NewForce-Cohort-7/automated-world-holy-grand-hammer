const egypt = {
    landmarks: [
        {
            image: "https://c4.wallpaperflare.com/wallpaper/374/1005/261/pyramid-egypt-desert-architecture-wallpaper-preview.jpg",
            name: "The Great Pyramid of Giza",
            location: "West of Cairo",
            constructed: "2560 BCE",
            size: "754 feet x 474 feet",
        },
        {
            image: "https://images.pexels.com/photos/262786/pexels-photo-262786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "The Great Sphinx of Giza",
            location: "West of Cario, near The Great Pyramid of Giza",
            constructed: "2500 BCE",
            size: "238 feet x 68 feet",
        },
        {
            image: "https://media.istockphoto.com/id/1196246029/photo/hatshpsut-temple-with-colorfull-sky-luxor-egypt.jpg?b=1&s=170667a&w=0&k=20&c=U2mtPcKFoDE-o__BIRSa4FiV3B3IQy8N6DOpZDDMxpM=",
            name: "Valley of the Kings",
            location: "Nile's West Bank near Luxor",
            constructed: "1600 BCE - 1100 BCE",
            size: "Stretches over 1000 feet",
        }
    ]
};

const getLandmarks = () => {
    return egypt.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
};

const landmarkList = () => {
    const landmarks = getLandmarks()

    let htmlString = `<body><article class="landmarkList">`

    for (const singleLandmark of landmarks) {

        htmlString += `<section class="landmarkcard">
            <div><img  class="landmark__image image--card" src="${singleLandmark.image}" /></div>
            <div class="landmark__name">Name: ${singleLandmark.name}</div>
            <div class="landmark__location">Location: ${singleLandmark.location}</div>
            <div class="landmark__constructed">Constructed: ${singleLandmark.constructed}</div>
            <div class="landmark__size">Size: ${singleLandmark.size}</div>
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