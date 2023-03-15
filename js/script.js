var h1 = document.querySelector('h1');
var button = document.querySelector('button');
var body = document.body;
// Create a variable that tracks if dark mode is active
var darkmodeActive = false;
var h3 = document.querySelector('h3');
var count = 10;

function setHeaderText() {
  h1.innerText = 'JS Next Level';
}

function toggleDarkMode() {
  if (darkmodeActive === false) {
    // Switch to dark mode
    body.classList.add('darkmode');
    button.innerText = 'Light Mode';
    darkmodeActive = true;
  } else {
    // Switch to light mode
    body.classList.remove('darkmode');
    button.innerText = 'Dark Mode';
    darkmodeActive = false;
  }
}

function colorBlast() {
  body.classList.add('splash');
}

function countdown() {
  var timer = setInterval(function () {
    count--;
    h3.innerText = 'Count: ' + count;

    // check count and if equal to zero, clear interval
    if (count === 0) {
      clearInterval(timer);
      colorBlast();
    }
  }, 1000);
}

// On page load initialize event listeners and run any functions that need to process when the page first loads
function init() {
  setHeaderText();
  countdown();
  button.addEventListener('click', toggleDarkMode);
}

// Initialize our app
init();var h1 = document. querySelector('h1')








// setTimeout(function() {
//     console.log('run this');
// }, 3000);

// setInterval(function() {
//     console.log('run this');
// }, 1000);


// button.addEventListener('click', function() {
//     // body.style.cssText = 'background-color: #777; color: #fff;';
//     // body.addAttribute('class', 'darkmode')
//     body.classList.add('class', 'darkmode')
//     // You can aslo do .remove to remove, and .set to set a class
// });


// function addEventListener(str, callback) {

// }


// function newStuff(num,str, callback) {
//     callback('make me console out..... tricky tricky');
//     // console.log('whatAmI');
// }

// function someFunc(someVal) {
//     console.log(someVal);
// }

// newStuff(10, 'some string', someFunc);

// newStuff(18, 'some string', function(someVal) {
//     console.log(someVal);
// })\;

// function mtFunc() {
//     console.log('call me');
// }

// myFunc();