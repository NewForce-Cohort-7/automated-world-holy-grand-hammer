const italy = {
    landmarks: [ 
    
        { image:"https://travel2next.com/wp-content/uploads/famous-monument-in-italy.jpg",
          name: "The Colosseum",
          location: "in Rome", }, 
     
           
         { image:"https://travel2next.com/wp-content/uploads/famous-Italian-landmarks-roman-forum.jpg",
           name: "Roman Forum",
           location: "also in Rome", },
           
              
           { image:"https://travel2next.com/wp-content/uploads/italy-landmarks-pantheon.jpg",
             name: "The Pantheon",
             location: "once again, in Rome" ,}
             
           ]
   
};

const getLandmarks = () => {
  return italy.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
};

const landmarkList = () => {
  const landmarks = getLandmarks()

  let htmlString = `<body><article class="landmarkList">`

  for (const singleLandmark of landmarks) {

      htmlString += `<section class="landmarkcard">
          <div><img  class="landmark__image image--card" src="${singleLandmark.image}" /></div>
          <div class="landmark__name">Name: ${singleLandmark.name}</div>
          <div class="landmark__location">Location: ${singleLandmark.location}</div>
         
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