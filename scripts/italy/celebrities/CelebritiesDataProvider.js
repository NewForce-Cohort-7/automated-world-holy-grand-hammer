const italy = {
    
    
    celebs: [ 
        {
            image: "https://www.thefamouspeople.com/profiles/thumbs/leonardo-da-vinci-1.jpg",
            name:"Leonardo Da Vinci",
            profession:"Artist",
           location:"Anchiano",
            birth:"April 15, 1452",
            death:"May 2, 1519"
        },
    
    
     
        {
            image: "https://www.thefamouspeople.com/profiles/thumbs/galileo-galilei-18.jpg",
            name:"Galileo Galilei",
            profession:"Scientists",
           location:"Pisa",
            birth:"February 15, 1564",
            death:"January 8, 1642"
        },
    
    
        {
            image: "https://www.thefamouspeople.com/profiles/thumbs/michelangelo-1.jpg",
            name:"Michelangelo",
            profession:"Architect, not the ninja turtle",
           location:"Caprese Michelangelo",
            birth:"March 6, 1475",
            death:"February 18, 1564"
        }
         ]


}; 

const getCelebs = () => {
    return italy.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
  };
  
  const celebList = () => {
    const celebs = getCelebs()
  
    let htmlString = `<body><article class="celebList">`
  
    for (const singleCeleb of celebs) {
  
        htmlString += `<section class="landmarkcard">
            <div><img  class="landmark__image image--card" src="${singleCeleb.image}" /></div>
            <div class="landmark__name">Name: ${singleCeleb.name}</div>
            <div class="landmark__location">Location: ${singleCeleb.location}</div>
            <div class="landmark__profession">Profession: ${singleCeleb.profession}</div>
            <div class="landmark__birth">Birth: ${singleCeleb.birth}</div>
            <div class="landmark__death">Death: ${singleCeleb.death}</div>
           
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








