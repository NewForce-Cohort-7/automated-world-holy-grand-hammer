const france = {
    celebs: [
        {
            name: "Coco Chanel",
            age: "Died on January 10, 1971(aged 87)",
            bestKnownFor: "Revolutionized the fashion industry.",
            image: "https://cdn.britannica.com/53/32253-050-4E051288/Coco-Chanel-1960.jpg?w=400&h=300&c=crop"

        },
        {
            name: "Emma Watson",
            age: "32 years old",
            bestKnownFor: "Made first famous by her role as Harmiony in the 'Harry Potter film series'.",
            image: "https://www.thefamouspeople.com/profiles/thumbs/emma-watson-4.jpg"
        },
        {
            name: "Andre the Giant",
            age: "Died on January, 27 1993(aged 46",
            bestKnownFor: "French Professional Wrestler known for his giant size, reaching over 7 ft tall! Most popular French wrestler to appear in WWF.",
            image: "https://staticg.sportskeeda.com/editor/2021/12/603bc-16403862196141-1920.jpg"
        },
        
        
    ]
}

const getCelebs = () => {
    return france.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
};

const celebList = () => {
    const celebs = getCelebs()

    let htmlString = `<body><article class="celebList">`

    for (const singleCeleb of celebs) {

        htmlString += `<section class="celebcard">
            <div><img  class="celeb__image image--card" src="${singleCeleb.image}" /></div>
            <div class="celeb__name">Name: ${singleCeleb.name}</div>
            <div class="celeb__age">Age : ${singleCeleb.age}</div>
            <div class="celeb__bestKnownFor">Best Known For: ${singleCeleb.bestKnownFor}</div>
            
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};

const allCelebs = getCelebs();

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
};

const parentHTMLElement = document.querySelector(".celebs");

parentHTMLElement.innerHTML = celebList();



