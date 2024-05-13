// COIN FLIP SIMULATOR

// HTML Variables
var outputEl = document.getElementById("output");
var headsEl = document.getElementById("heads-out1");
var tailsEl = document.getElementById("tails-out1");

// Count Variables
var numHeads = 0;
var numTails = 0;

// Button Event Listener
document.getElementById("btnCoin").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.src = "img/heads.png";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.src = "img/tails.png";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// Dice-simulator

// HTML Variables
var btnDice = document.getElementById("btnDice");
var outputEl1 = document.getElementById("output1");
var outputEl2 = document.getElementById("output2");
var sum = document.getElementById("sum");

var num1 = document.getElementById("digit1");
var num2 = document.getElementById("digit2");
var num3 = document.getElementById("digit3");
var num4 = document.getElementById("digit4");
var num5 = document.getElementById("digit5");
var num6 = document.getElementById("digit6");

// Count Variables
var num1Result = 0;
var num2Result = 0;
var num3Result = 0;
var num4Result = 0;
var num5Result = 0;
var num6Result = 0;

// Button Event Listener
btnDice.addEventListener("click", btnDiceClicked);

function btnDiceClicked() {
  // Simulating

  // Add the first cube
  // Create the random number 1
  let random1 = Math.random() * 6;
  random1 = Math.floor(random1);
  random1 = random1 + 1;

  if (random1 == 1) {
    // Show image (cube 1)
    outputEl1.src = "img/1.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num1Result = num1Result + 1;
    num1.innerHTML = num1Result + " times";
  } else if (random1 == 2) {
    // Show image (cube 2)
    outputEl1.src = "img/2.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num2Result = num2Result + 1;
    num2.innerHTML = num2Result + " times";
  } else if (random1 == 3) {
    // Show image (cube 3)
    outputEl1.src = "img/3.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num3Result = num3Result + 1;
    num3.innerHTML = num3Result + " times";
  } else if (random1 == 4) {
    // Show image (cube 4)
    outputEl1.src = "img/4.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num4Result = num4Result + 1;
    num4.innerHTML = num4Result + " times";
  } else if (random1 == 5) {
    // Show image (cube 5)
    outputEl1.src = "img/5.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num5Result = num5Result + 1;
    num5.innerHTML = num5Result + " times";
  } else if (random1 == 6) {
    // Show image (cube 6)
    outputEl1.src = "img/6.png";
    outputEl1.style.background = "black";
    outputEl1.style.width = "150px";

    num6Result = num6Result + 1;
    num6.innerHTML = num6Result + " times";
  }

  // Add the second cube
  // Create the random number 2
  let random2 = Math.random() * 6;
  random2 = Math.floor(random2);
  random2 = random2 + 1;

  if (random2 == 1) {
    // Show image (cube 1)
    outputEl2.src = "img/1.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num1Result = num1Result + 1;
    num1.innerHTML = num1Result + " times";
  } else if (random2 == 2) {
    // Show image (cube 2)
    outputEl2.src = "img/2.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num2Result = num2Result + 1;
    num2.innerHTML = num2Result + " times";
  } else if (random2 == 3) {
    // Show image (cube 3)
    outputEl2.src = "img/3.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num3Result = num3Result + 1;
    num3.innerHTML = num3Result + " times";
  } else if (random2 == 4) {
    // Show image (cube 4)
    outputEl2.src = "img/4.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num4Result = num4Result + 1;
    num4.innerHTML = num4Result + " times";
  } else if (random2 == 5) {
    // Show image (cube 5)
    outputEl2.src = "img/5.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num5Result = num5Result + 1;
    num5.innerHTML = num5Result + " times";
  } else if (random2 == 6) {
    // Show image (cube 6)
    outputEl2.src = "img/6.png";
    outputEl2.style.background = "black";
    outputEl2.style.width = "150px";

    num6Result = num6Result + 1;
    num6.innerHTML = num6Result + " times";
  }

  console.log("random1: " + random1);
  console.log("random2: " + random2);

  // The sum of two numbers after after tossing two dice
  let sumResult = random1 + random2;
  sum.innerHTML = sumResult;
}
