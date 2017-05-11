var chico = [
  {
    description: "Upper Bidwell",
    picture: "https://static1.squarespace.com/static/562826fde4b081f403bef1db/t/570d5bf01bbee0c64b390aa7/1460513881364/Upper+Bidwell+Park",
    from: "squarespace.com"
  },

  {
    description: "One Mile",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/49/50/09/495009d9dfcd788bad9d2af3e885d880.jpg",
    from: "pinterest.com"
  },

  {
    description: "Naked Lounge",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/8a/3d/ab/8a3dab8f7fa44d03e68ade8db74e9f4b.jpg",
    from: "pinterest.com"
  },

  {
    description: "Bear Hole",
    picture: "http://static.panoramio.com/photos/large/13056243.jpg",
    from: "panoramio.com"
  },

  {
    description: "Dutch Brothers",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/b8/78/3c/b8783c80a8984b1ec68aed55bc082400.jpg",
    from: "pinterest.com"
  }
];

var current = " ";
//declaration of global variables
function shuffleGallery()
{
  var rndm = Math.floor(Math.random() * (chico.length));
  while(current == chico[rndm])
  {
    rndm = Math.floor(Math.random() * (chico.length));
  }
  current = chico[rndm];
  document.getElementById("picture").src = chico[rndm].picture;
  document.getElementById("caption").innerHTML = chico[rndm].description;
  document.getElementById("source").innerHTML = chico[rndm].from;
  console.log(chico[rndm]);
}
