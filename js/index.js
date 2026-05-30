
var pile = document.querySelector(".pile");
var images = pile.querySelectorAll(".gauche");

// pour chaque image
images.forEach( image => {
    // applique une rotation aléatoire
    image.style.transform = `rotate(${ r(-15, 15) }deg)`;  
    // applique un centre de rotation aléatoire 
    image.style.transformOrigin = `${ 80 - r(0, 80) }% ${ 80 - r(0, 80) }%`;    
  });

  // au click sur la pile
pile.addEventListener ("click", function(){
    // sélectionne la dernière image
    let lastimage = pile.querySelector(":scope > :last-child");
    // injecte la dernière image en première place
    pile.prepend(lastimage);
    // modifie la transformation
    lastimage.style.transform = `rotate(${ r(-20, 20) }deg)`;      
  });
  
  // utilitaire qui renvoie un nombre entier entre min et max
  function r(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }