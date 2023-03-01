

const france = {
    landmarks: [
        {
            name: "Eiffel Tower",
            location: "Located in Paris",
            bestKnownFor: "This wrought-iron lattice tower on the Champ de Mars, designed by Gustave Eiffel, was built from 1887-1889.Also nicknamed 'La dame de fer'.",
            image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRiyM_gi8iSo2DRpE7a5DlVpidzDy8PEqPToxV4NgYcyslR8QafJX0RrpG5UIMzdVV_YdSStPYsKpbBJdEhyh1dRg",

        },
        {
            name: "Louvre Museum",
            location: "Located in Paris",
            bestKnownFor: "The world's most-visited museum and a historic landmark. In 2022, there was 7.8 million visitors!",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZ-I6EFBQAb_3uVrWxzU7D8jEKEHgorvIb0djgKDRjVnWJtCaDsglbCw_dxs1WR9PHDMtTk0E8B5MnqOVAWMCTAw",

        },
        {
            name: "Pallace of Versailles",
            location: "Located in the city of Versailles",
            bestKnownFor: "Former royal residence built by King Louis XIV, currently owned by the French Republic and has about 15 million visitors each year!",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrvw6NK4HccllXc65k4eJ7Xca9XDwcc5HFq3YYYL0Ng95-lLw7DMVhxdebUie5MELPYTgswqjjqEHbnNMsMnZmhg",
            
        },
        
        
    ]
} ;


const getLandmarks = () => {
    return france.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
};

const landmarkList = () => {
    const landmarks = getLandmarks()

    let htmlString = `<body><article class="landmarkList">`

    for (const singleLandmark of landmarks) {

        htmlString += `<section class="landmarkcard">
            <div><img  class="landmark__image image--card" src="${singleLandmark.image}" /></div>
            <div class="landmark__name">Name: ${singleLandmark.name}</div>
            <div class="landmark__location">Location: ${singleLandmark.location}</div>
            <div class="landmark__constructed">Best Known For: ${singleLandmark.bestKnownFor}</div>
            
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


