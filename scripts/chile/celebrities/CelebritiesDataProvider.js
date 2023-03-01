


const chile = {
    
    celebs: [
        {
            image: "https://i.pinimg.com/474x/85/15/a8/8515a8bacf03cb81a211edd0a33ce306.jpg",
            name: "Pedro Pascal",
            birth: "1975",
            death: "NEVER",
            birthplace: "Santiago, Chile"
        },
        {
            image: "https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1OTMyOTEzNTU4NjUz/ncis.jpg",
            name: "Cote de Pablo",
            birth: "1979",
            death: "no",
            birthplace: "Santiago, Chile"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHox2uU_F_pjka0hRxjWppjk8TVo2qXOoA9g&usqp=CAU",
            name: "Alexis Sanchez",
            birth: "1988",
            death: "alive",
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
