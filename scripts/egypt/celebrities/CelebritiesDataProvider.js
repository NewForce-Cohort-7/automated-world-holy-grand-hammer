const egypt = {
    celebs: [
        {
            image: "https://e0.365dm.com/22/01/1600x900/skysports-mohamed-salah-liverpool_5638215.jpg?20220111105345",
            name: "Mohamed Salah",
            profession: "Captain of Egypt National Football Team",
            knownFor: "One of the best football players in the world. Also set the record for most Premier League goals scored in a 38-game season.",
            birth: 1992,
            death: null,
        },
        {
            image: "https://i.guim.co.uk/img/media/fc234e96d3baa28db89e86b8dad0ec57ea61fc45/0_0_3900_4447/master/3900.jpg?width=380&quality=85&dpr=1&s=none",
            name: "Umm Kulthum",
            profession: "Professional Singer, Songwriter, and Acctress",
            knownFor: "Considered one of the strongest female voices in music and received the title 'Planet of the Orient' (Kawkab  el-charq).",
            birth: 1898,
            death: 1975,
        },
        {
            image: "https://www.motivation.africa/wp-content/uploads/2019/11/Gamal-Abdel-Nasser-1.jpg",
            name: "Gamal Abdel Nasser Hussein",
            profession: "President of Egypt",
            knownFor: "Leading the Egyptian revolution of 1952 and enacting a series of major socialist measures and modernaization reforms in Egypt.",
            birth: 1918,
            death: 1970,
        }
    ]
};

const getCelebs = () => {
    return egypt.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
};

const celebsList = () => {
    const celebs = getCelebs()

    let htmlString = `<body><article class="celebsList">`

    for (const singleCeleb of celebs) {

        htmlString += `<section class="celebcard">
            <div><img  class="celeb__image image--card" src="${singleCeleb.image}" /></div>
            <div class="celeb__name"><b>Name:</b> ${singleCeleb.name}</div>
            <div class="celeb__profession"><b>Profession:</b> ${singleCeleb.profession}</div>
            <div class="celeb__knownFor"><b>Most Known For:</b> ${singleCeleb.knownFor}</div>
            <div class="celeb__born"><b>Born:</b> ${singleCeleb.birth}</div>
            <div class="celeb__death"><b>Died:</b> ${singleCeleb.death}</div>
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

parentHTMLElement.innerHTML = celebsList();