const carousel = document.querySelector('.carousel');
const htmlelement = document.querySelector("#htmlElement");
const htmlelement2 = document.querySelector("#htmlElement2");
let device = new Device("cloud.arest.io/akasol");

document.addEventListener('click', function(){
  console.log("element_clicked");
  let background = htmlelement.style.background
  if (background == 'green'){
    device.digitalWrite(4, 1);
    htmlelement.style.background = "red"
  } else {
    device.digitalWrite(4, 0);
    htmlelement.style.background = "green"
  }
});

document.addEventListener('click', function(){
  console.log("element_clicked");
  let background2 = htmlelement2.style.background
  if (background2 == 'green'){
    device.digitalWrite(0, 0);
    htmlelement2.style.background = "red"
  } else {
    device.digitalWrite(0, 1);
    htmlelement2.style.background = "green"
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  //console.log('DOM event listener')
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});

  var images = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(images,  {
    // fullWidth: true,
    // indicators: true
  });
});

// render carousel data
const renderCarousel = (data, id) => {

  //perhaps I can put a userID in front of the data-id?
  const html = `
    <a class="carousel-item" href="#${id}" data-id="a${id}">
      <img src="/img/dish.png">
      <div class="recipe-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </a>
  `;
  carousel.innerHTML += html;
  var images = document.querySelectorAll('.carousel');
  M.Carousel.init(images,  {});

};

// remove character from carousel
const removeCarousel = (id) => {

  //querySelector id has to start with a letter!!
  const character = document.querySelector(`.carousel-item[data-id=a${id}]`);
  character.remove();
  //var images = document.querySelectorAll('.carousel');
  //var instance = M.Carousel.getInstance(carousel);
  //instance.destroy();
  var images = document.querySelectorAll('.carousel');
  M.Carousel.init(images,  {});
  console.log('character removed');
  
};