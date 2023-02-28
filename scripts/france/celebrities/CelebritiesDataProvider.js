const france = {
    celebrities: [
        {
            name: "Coco Chanel",
            age: "Died on January 10, 1971(aged 87)",
            bestKnownFor: "Revolutionized the fashion industry.",
            image: "https://cdn.britannica.com/53/32253-050-4E051288/Coco-Chanel-1960.jpg?w=400&h=300&c=crop"

        },
        {
            name: "Emma Watson",
            age: "32 years old",
            bestKnwonFor: "Made first famous by her role as Harmiony in the Harry Potter film series.",
            image: "https://www.thefamouspeople.com/profiles/thumbs/emma-watson-4.jpg"
        },
        {
            name: "Andre the Giant",
            age: "Died on January, 27 1993(aged 46",
            bestKnownFor: "French Professional Wrestler known for his giant size, reaching over 7 ft tall! Most popular French wrestler to appear in WWF."
        },
        
        
    ]
}

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



