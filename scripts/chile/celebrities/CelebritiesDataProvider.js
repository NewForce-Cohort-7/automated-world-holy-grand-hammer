


const chile = {
    
    celebs: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pedro_Pascal_by_Gage_Skidmore.jpg/220px-Pedro_Pascal_by_Gage_Skidmore.jpg",
            name: "Pedro Pascal",
            birth: "1975",
            death: "null",
            birthplace: "Santiago, Chile"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cote_de_Pablo_retouch.jpg/220px-Cote_de_Pablo_retouch.jpg",
            name: "Cote de Pablo",
            birth: "1979",
            death: "null",
            birthplace: "Santiago, Chile"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHox2uU_F_pjka0hRxjWppjk8TVo2qXOoA9g&usqp=CAU",
            name: "Alexis Sanchez",
            birth: "1988",
            death: "null",
            birthplace: "Tocopilla, Chile"
        }
    ]
};

const getCelebs = () => {
    return chile.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
};

const celebList = () => {
    const celebs = getCelebs()

    let htmlString = `<body><article class="celebList">`

    for (const singleCeleb of celebs) {

        htmlString += `<section class="celebcard">
            <div><img  class="celeb__image image--card" src="${singleCeleb.image}" /></div>
            <div class="celeb__name">Name: ${singleCeleb.name}</div>
            <div class="celeb__location">Birth: ${singleCeleb.birth}</div>
            <div class="celeb__constructed">Death: ${singleCeleb.death}</div>
            <div class="celeb__size">Birthplace: ${singleCeleb.birthplace}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};

const allcelebs = getCelebs();

for (const singleCeleb of allcelebs) {
    console.log(singleCeleb)
};

const parentHTMLElement = document.querySelector(".celebs");

parentHTMLElement.innerHTML = celebList();
