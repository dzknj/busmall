var allImages1 = [];
//var images = new Array('images/bag.jpg', 'images/banana.jpg', 'images/boots.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg');



function allImages(name, src) {
  this.name = name;
  this.src = 'images/' + src;
  this.clicked = 0;
  this.shown = 0;
  allImages1.push(this);
}
var bag = new allImages('bag', 'bag.jpg');
var banana = new allImages('banana', 'banana.jpg');
var boots =  new allImages('boots', 'boots.jpg');
var chair =  new allImages('chair', 'chair.jpg');
var cthulhu = new allImages('cthulhu', 'cthulhu.jpg');
var dragon = new allImages('dragon', 'dragon.jpg');
var pen = new allImages('pen', 'pen.jpg');
var scissors = new allImages('scissors', 'scissors.jpg');
var shark = new allImages('shark', 'shark.jpg');
var sweep = new allImages('sweep', 'sweep.png');
var unicorn = new allImages('unicorn', 'unicorn.jpg');
var usb = new allImages('usb', 'usb.gif');
var watercan = new allImages('watercan', 'water-can.jpg');
var wineglass = new allImages('wineglass', 'wine-glass.jpg');

var n = allImages1.length;
var randomNumber = Math.floor(Math.random()*n);
var randomNumber1 = Math.floor(Math.random()*n);
var randomNumber2 = Math.floor(Math.random()*n);
// function preLoadImages() {
//   images1 = new Array();
//   images1[0] = new Image();
//   images1[0].src = 'images/bag.jpg';
//   images1[1] = new Image();
//   images1[1].src = 'images/banana.jpg';
//   images1[2] = new Image();
//   images1[2].src = 'images/boots.jpg';
//   images1[3] = new Image();
//   images1[3].src = 'images/chair.jpg';
//   images1[4] = new Image();
//   images1[4].src = 'images/cthulhu.jpg';
//   images1[5] = new Image();
//   images1[5].src = 'images/dragon.jpg';
//   images1[6] = new Image();
//   images1[6].src = 'images/pen.jpg';
//   images1[7] = new Image();
//   images1[7].src = 'images/scissors.jpg';
//   images1[8] = new Image();
//   images1[8].src = 'images/shark.jpg';
//   images1[9] = new Image();
//   images1[9].src = 'images/sweep.png';
//   images1[10] = new Image();
//   images1[10].src = 'images/unicorn.jpg';
//   images1[11] = new Image();
//   images1[11].src = 'images/usb.gif';
//   images1[12] = new Image();
//   images1[12].src = 'images/water-can.jpg';
//   images1[13] = new Image();
//   images1[13].src = 'images/wine-glass.jpg';
// }
// preLoadImages();

function myRandom() {
event.preventDefault();
var n = allImages1.length;
var randomNumber = Math.floor(Math.random()*n);
var randomNumber1 = Math.floor(Math.random()*n);
var randomNumber2 = Math.floor(Math.random()*n);
document.images['display1'].src = allImages1[randomNumber].src;
document.images['display2'].src = allImages1[randomNumber1].src;
document.images['display3'].src = allImages1[randomNumber2].src;
}


//
// var one = document.getElementById('one');
//
// //one.addEventListener('click', clickOnOne);
//
var clickedPics = [];
var allClicks = 0;
var clickedArray = [];
//one.addEventListener('click', function() {
  //clickOnOne(allImages1[randomNumber]);
//});
one.addEventListener('click', clickOnOne);

function clickOnOne() {

    clickedArray.push(document.getElementById('display1').clicked);

//  allImages1[event.target.className].clicked += 1;
  allImages1[document.getElementById('display1').className].clicked += 1;
  console.log(document.getElementById('display1').className);
  var n = allImages1.length;
  var randomNumber = Math.floor(Math.random()*n);
  var randomNumber1 = Math.floor(Math.random()*n);
  var randomNumber2 = Math.floor(Math.random()*n);
//  whichPic.clicked += 1;
  console.log(display1.src);
  clickedPics.push(display1.src);
  allClicks += 1;

  document.images['display1'].src = allImages1[randomNumber].src;
  document.images['display1'].className = randomNumber;
  document.images['display2'].src = allImages1[randomNumber1].src;
  document.images['display2'].className = randomNumber1;
  document.images['display3'].src = allImages1[randomNumber2].src;
  document.images['display3'].className = randomNumber2;
}

// two.addEventListener('click', function() {
//   clickOnTwo(allImages1[randomNumber]);
// });
two.addEventListener('click', clickOnTwo);

function clickOnTwo() {
  if((allClicks % 15 != 0) || (allClicks == 0)){
  allImages1[document.getElementById('display2').className].clicked += 1;
  console.log(document.getElementById('display2').className);
  var n = allImages1.length;
  var randomNumber = Math.floor(Math.random()*n);
  var randomNumber1 = Math.floor(Math.random()*n);
  var randomNumber2 = Math.floor(Math.random()*n);
  //whichPic.clicked += 1;
  console.log(display2.src);
  clickedPics.push(display2.src);
  allClicks += 1;
  document.images['display1'].src = allImages1[randomNumber].src;
  document.images['display1'].className = randomNumber;
  document.images['display2'].src = allImages1[randomNumber1].src;
  document.images['display2'].className = randomNumber1;
  document.images['display3'].src = allImages1[randomNumber2].src;
  document.images['display3'].className = randomNumber2;
}}

three.addEventListener('click', clickOnThree);

function clickOnThree() {
  if((document.images['display1'].src === document.images['display2'].src) || (document.images['display1'].src === document.images['display3'].src ) || (document.images['display2'].src === document.images['display3'].src)) {
    document.images['display1'].src = allImages1[randomNumber].src;
    document.images['display1'].className = randomNumber;
    document.images['display2'].src = allImages1[randomNumber1].src;
    document.images['display2'].className = randomNumber1;
    document.images['display3'].src = allImages1[randomNumber2].src;
    document.images['display3'].className = randomNumber2;
  }
  if((allClicks % 15 != 0) || (allClicks == 0)){
  allImages1[document.getElementById('display3').className].clicked += 1;
  console.log(document.getElementById('display3').className);
  var n = allImages1.length - 1;
  var randomNumber = Math.floor(Math.random()*(n+1));
  var randomNumber1 = Math.floor(Math.random()*(n+1));
  var randomNumber2 = Math.floor(Math.random()*(n+1));
  console.log(display3.src);
  clickedPics.push(display2.src);
  allClicks += 1;
  document.images['display1'].src = allImages1[randomNumber].src;
  document.images['display1'].className = randomNumber;
  document.images['display2'].src = allImages1[randomNumber1].src;
  document.images['display2'].className = randomNumber1;
  document.images['display3'].src = allImages1[randomNumber2].src;
  document.images['display3'].className = randomNumber2;
}
  else {
    var btn = document.createElement('BUTTON');
    var btntxt = document.createTextNode('Keep Going');
    btn.appendChild(btntxt);
    document.getElementById('footer').appendChild(btn);
    btn.addEventListener('click', myRandom);
}}
