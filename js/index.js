var images = new Array('images/bag.jpg', 'images/banana.jpg', 'images/boots.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg');

function preLoadImages() {
  images1 = new Array();
  images1[0] = new Image();
  images1[0].src = 'images/bag.jpg';
  images1[1] = new Image();
  images1[1].src = 'images/banana.jpg';
  images1[2] = new Image();
  images1[2].src = 'images/boots.jpg';
  images1[3] = new Image();
  images1[3].src = 'images/chair.jpg';
  images1[4] = new Image();
  images1[4].src = 'images/cthulhu.jpg';
  images1[5] = new Image();
  images1[5].src = 'images/dragon.jpg';
  images1[6] = new Image();
  images1[6].src = 'images/pen.jpg';
  images1[7] = new Image();
  images1[7].src = 'images/scissors.jpg';
  images1[8] = new Image();
  images1[8].src = 'images/shark.jpg';
  images1[9] = new Image();
  images1[9].src = 'images/sweep.png';
  images1[10] = new Image();
  images1[10].src = 'images/unicorn.jpg';
  images1[11] = new Image();
  images1[11].src = 'images/usb.gif';
  images1[12] = new Image();
  images1[12].src = 'images/water-can.jpg';
  images1[13] = new Image();
  images1[13].src = 'images/wine-glass.jpg';
}
preLoadImages();
function myRandom() {
event.preventDefault();
var n = images1.length - 1;
var randomNumber = Math.floor(Math.random()*(n+1));
var o = images1.length - 1;
var randomNumber1 = Math.floor(Math.random()*(o+1));
var p = images1.length - 1;
var randomNumber2 = Math.floor(Math.random()*(p+1));
document.images['display1'].src = images1[randomNumber].src;
document.images['display2'].src = images1[randomNumber1].src;
document.images['display3'].src = images1[randomNumber2].src;
}
var changePics = document.getElementById('changePic');
changePics.addEventListener('submit', myRandom);
