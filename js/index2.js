var productId = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'watercan', 'wineglass'];
var productSrc = ['images/bag.jpg', 'images/banana.jpg', 'images/boots.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];
var allProducts = [];
var totalClicks = 0;
var totalShown = 3;
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
  totalShown += 3;
  makeButton();
}
display1.addEventListener('click', handleClickDisplay1);
display2.addEventListener('click', handleClickDisplay2);
display3.addEventListener('click', handleClickDisplay3);

function makeButton() {
if(totalClicks != 0 && totalClicks % 3 == 0) {
  document.getElementById('footbutton1').style.display = 'block';
  document.getElementById('footbutton2').style.display = 'block';
  document.getElementById('resultsanddata').style.display = 'block';
  btn.addEventListener('click', hideButtons);
  btn1.addEventListener('click', makeChart);
}};

var btn = document.createElement('BUTTON');
var btntxt = document.createTextNode('Keep Going');
btn.appendChild(btntxt);
document.getElementById('footbutton1').appendChild(btn);
var btn1 = document.createElement('BUTTON');
var btntxt1 = document.createTextNode('Display Data');
btn1.appendChild(btntxt1);
document.getElementById('footbutton2').appendChild(btn1);
document.getElementById('footbutton1').style.display = 'none';
document.getElementById('footbutton2').style.display = 'none';
document.getElementById('resultsanddata').style.display = 'none';

function hideButtons() {
  document.getElementById('footbutton1').style.display = 'none';
  document.getElementById('footbutton2').style.display = 'none';
  document.getElementById('resultsanddata').style.display = 'none';
};

function displayData() {
   var ul = document.createElement('ul');
  for(var i = 0; i < allProducts.length; i++) {
    var li = document.createElement('li');
    li.textContent = 'You clicked the ' + allProducts[i].name + ' ' + allProducts[i].clicks + ' times, or ' + ((100/totalClicks)*allProducts[i].clicks).toFixed(2) + '% of the time. It was shown ' + allProducts[i].shown + ' times.';
    ul.appendChild(li);
    // var li = document.createElement('li');
    // li.textContet =
    // ul.appendChild(li);
  }
  document.getElementById('dataset').appendChild(ul);
}

// var taValues = [8 ,6, 2, 4];
//
// var kevin = [
//   {
//     value: taValues[0],
//     label: 'Hambella',
//     color: '#811BD6',
//     highlight: '#811B33'
//   },
//   {
//     value: taValues[1],
//     label: 'Kris',
//     color: '#9CBABA',
//     highlight: '#9CBA99'
//   },
//   {
//     value: taValues[2],
//     label: 'Benton',
//     color: '#D18177',
//     highlight: '#D18133'
//   },
//   {
//     value : taValues[3],
//     label: 'Dan',
//     color: '#6AE128',
//     highlight: '#6AE199'
//   }
// ];
//
// var context = document.getElementById('myChart').getContext('2d');
//
// var myNewChart = new Chart(context).PolarArea(kevin, {
//     //Number - Amount of animation steps
//     animationSteps : 225,
//     //String - Animation easing effect
//     animationEasing : "easeOutBounce",
//     //Boolean - Whether we animate the rotation of the Doughnut
//     animateRotate : true,
//     //Boolean - Whether we animate scaling the Doughnut from the centre
//     animateScale : true,
//     scaleShowLabelBackdrop : true
// });
//
// popularityChart.scale.yLabels = ['a-hole', 'bozo', 'chump', 'meh', 'tolerable', 'good', 'awesome', 'amazesauce'];
// document.getElementById('resultsanddata').appendChild(myNewChart);
// var ctx = document.getElementById('myChart').getContext('2d');
// var myNewChart = new Chart(ctx).Bar(data);
// var data = [
//   {
//     value: allProducts[0].clicked,
//     label: allProducts[0].name,
//     color: '#811BD6',
//     highlight: '#811B33'
//   },
//   {
//     value: allProducts[1].clicked,
//     label: allProducts[1].name,
//     color: '#9CBABA',
//     highlight: '#9CBA99'
//   }
// ];
// myNewChart.scale.yLabels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
// var ctx = document.getElementById("myChart").getContext("2d");
// var myBarChart = new Chart(ctx).Bar(data, options);
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
//  document.getElementById('resultsanddata').appendChild(myNewChart);
// var barData = {
//   labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
//   datasets: [
//       {
//         label: '2010 customers #',
//         fillColor: '#382765',
//         data: [2500, 1902, 1401, 610, 1245, 952]
//       },
//       {
//         label: '2014 customers #',
//         fillColor: '#7BC225',
//         data: [3104, 1689, 1318, 589, 1199, 1436]
//       }
//   ]
// };
// var context = document.getElementById('clients').getContext('2d');
// var clientsChart = new Chart(context).Bar(barData);
// document.getElementById('clients').appendChild(clientsChart);
document.getElementById('none').style.display = 'none';
    function makeChart(){
      document.getElementById('none').style.display = 'block';
             var barData = {
                   labels : [],
                   datasets : [
                       {
                         fillColor : 'white',
                         strokeColor : 'black',
                         labelColor : 'orange',
                         data : []
                       }
                 ]
             }

             for (var i = 0; i < allProducts.length; i++){
               barData.datasets[0].data.push(allProducts[i].clicks);
               //there is only one object within the array of datasets
               barData.labels.push(allProducts[i].name);
             }

             // get bar chart canvas
             var ctx = document.getElementById("productChart").getContext("2d");
             var newChart = new Chart(ctx).Bar(barData);
};
