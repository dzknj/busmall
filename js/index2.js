var productId = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'watercan', 'wineglass'];
var productSrc = ['images/bag.jpg', 'images/banana.jpg', 'images/boots.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];
var allProducts = [];
var totalClicks = 0;
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicks = 0;
};

for(var i = 0; i < productId.length; i++) {
  allProducts.push(new Product(productId[i], productSrc[i]));
};

var display1 = document.getElementById('display1');
var display2 = document.getElementById('display2');
var display3 = document.getElementById('display3');

function handleClickDisplay1() {
  console.log('display1 was clicked');
  clickDisplay1();
  logAllClicks();
};

function handleClickDisplay2() {
  console.log('display2 was clicked');
  clickDisplay2();
  logAllClicks();
};

function handleClickDisplay3() {
  console.log('display3 was clicked');
  clickDisplay3();
  logAllClicks();
};

var n = allProducts.length;
function randomImages() {
  return Math.floor(Math.random()* n);
};

var random1;
var random2;
var random3;

 function initialImages() {
   random1 = randomImages();
   document.images['display1'].src = productSrc[random1];
   allProducts[random1].shown += 1;

  random2 = randomImages();
  while(random2 == random1) {
    random2 = randomImages();
  }
  document.images['display2'].src = productSrc[random2];
  allProducts[random2].shown += 1;

  random3 = randomImages();
  while((random3 == random1) || (random3 == random2)) {
    random3 = randomImages();
  }
  document.images['display3'].src = productSrc[random3];
  allProducts[random3].shown += 1;
 }
 initialImages();

function clickDisplay1() {
  allProducts[random1].clicks += 1;
  console.log(allProducts[random1].clicks + ' clicks for ' + allProducts[random1].name);
  initialImages();
};

function clickDisplay2() {
  allProducts[random2].clicks += 1;
  console.log(allProducts[random2].clicks + ' clicks for ' + allProducts[random2].name);
  initialImages();
};

function clickDisplay3() {
  allProducts[random3].clicks += 1;
  console.log(allProducts[random3].clicks + ' clicks for ' + allProducts[random3].name);
  initialImages();
};

function logAllClicks() {
  totalClicks += 1;
}
display1.addEventListener('click', handleClickDisplay1);
display2.addEventListener('click', handleClickDisplay2);
display3.addEventListener('click', handleClickDisplay3);
