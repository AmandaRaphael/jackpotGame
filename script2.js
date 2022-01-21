var bleep = new Audio();
bleep.src = "audio/mixkit-arcade-game-jump-coin-216.wav";

var bleep2 = new Audio();
bleep2.src = "audio/mixkit-quick-win-video-game-notification-269.wav";

let arrayOfRandomNumbers = [];

let noOfTries = 1;
let tryVal = "";
const h1 = document.querySelector("h1");
/********Button*Generator*Function**************/
function generator() {
  if (noOfTries < 11) { //change 1
    arrayOfRandomNumbers = []; //change 2
    imgReset();
    for (let index = 0; index < 3; index++) {
      var x = Math.floor(Math.random() * 31 + 1);
      document.getElementById("divImage").innerHTML += `
            <img src="images/fruit${x}.jpeg" style="width: 230px; height: 300px; border-radius: 10%;">
            `;
      arrayOfRandomNumbers.push(x);
      }
      console.log(noOfTries);

    check_three_numbers(arrayOfRandomNumbers);//changed function name and called it
    noOfTries++;
 
  
  }
//change 4
  else {
    reset();
  }
}
/***************Reset*Function*****************/
function imgReset() {
  document.getElementById("divImage").innerHTML = "";
}
function reset() { //change 5 in(html too)
  h1.innerText = "Play again..";
  noOfTries = 1;
  arrayOfRandomNumbers = [];
  imgReset();
}

//change 5: changes to the function
function check_three_numbers(array) {
  [num1, num2, num3] = array;
  if (noOfTries <= 9) {
    checker();
  } else {
    if (num1 === num2 && num2 === num3) {
      h1.innerText = `Jackpot! you've won the game`;
      
    } else {
      h1.innerText = `You lost out!`;
     
    }
  }
}
//change 6 : new variable


//change 7: new function
function checker() {
  tryVal = noOfTries === 9 ?  "try" :  "tries";
  if (num1 === num2 && num2 === num3) {
    h1.innerText = `Jackpot! you've won the game`;
    imgReset();
  } else if (num1 === num2 || num2 === num3 || num3 === num1) {
    h1.innerText = `You're almost there, ${10 - noOfTries} more ${tryVal}`;
  } else {
    h1.innerText = `try again, ${10 - noOfTries} more ${tryVal}`;
  }
}
