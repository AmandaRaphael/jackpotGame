// Sound on the button 1 whenever it's clicked
var bleep = new Audio();
bleep.src = 'audio/mixkit-arcade-game-jump-coin-216.wav';

// Sound on the = button 2 whenever its's clicked
var bleep2 = new Audio();
bleep2.src = 'audio/mixkit-quick-win-video-game-notification-269.wav';

// 
let arrayOfRandomNumbers = [];

/*******Defining*the*times*you*can*play********/
let y = 0 // connected to times you can play

let noOfTries = 0; // number of tries

/********Button*Generator*Function**************/
function generator() {

    if (noOfTries<=10) { // times you can play
       imgReset()
        for (let index = 0; index < 3; index++) { // number of  images that can appear on the screen at a time

            var x = Math.floor((Math.random() * 31) + 1) // creating random numbers of images inserted in the game

            // getting the images thru the link
            document.getElementById('divImage').innerHTML += `
            <img src="images/fruit${x}.jpeg" style="width: 230px; height: 300px; border-radius: 10%;">
            
            `
            arrayOfRandomNumbers.push(x)
        }
        noOfTries++ // times you can play
        console.log(arrayOfRandomNumbers);

    }

    /* for (let index = 0; index < 3; index++) {

        var x = Math.floor((Math.random() * 6) + 1)

        document.getElementById('divImage').innerHTML += `
        <img src="images/fruit${x}.jpeg" style="width: 230px; height: 300px; border-radius: 10%;">
        `
    } */

}
/***************Reset*Function*****************/
function imgReset() {
    // document.getElementsById("divImage").reset();
    document.getElementById('divImage').innerHTML = ""
    // noOfTries=0;
    // connected with time you can play
}

const btn = document.querySelectorAll('button')


/**********Button*Clicked*Function*With*CSS***********/
for (let index = 0; index < btn.length; index++) {

    btn[index].addEventListener('click', function (e) {

        btn[index].classList.toggle('button-clicked');

        // no icon inserted yet

        // btn[index].firstElementChild.classList.toggle('icon-clicked')
    })
}



/*****************MY THOUGHT*********************/
// function three_numbers(x, y, z) {
//     if (x === y && y === z) {
//       return `Jackpot! you've won the game`;
//     }

//     if (x === y || y === z || z === x) {
//       return `You're almost there, try again`;
//     }

//     return `You lost out`;
//   }
//   console.log(three_numbers(8, 8, 8));
//   console.log(three_numbers(8, 8, 18));
//   console.log(three_numbers(8, 7, 18));
//////////////////////////////////////////////////


// FROM AMANDA -------array[0]
// function three_numbers(array) {
//     [num1, num2, num3] = [...array];
//     if (num1 === num2 && num2 === num3) {
//         return `Jackpot! you've won the game`;
//     } else if (num1 === num2 || num2 === num3|| num3 === num1) {
//         imgReset()
//         generator()
//         return `You're almost there, try again`;
//     } else{
//         imgReset()
//         generator()
//         return `try again, ${noOfTries} more tries`
//     }


// }
// console.log(three_numbers(arrayOfRandomNumbers));
// console.log(three_numbers(8, 8, 18));
// console.log(three_numbers(8, 7, 18));

// function checkFunction() {
//     if (noOfTries <= 10) {
//        return three_numbers(array);

//     }
//     return `You lost out`;

// }