
// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.

// * There will be four crystals displayed as buttons on the page. X

// * The player will be shown a random number at the start of the game. X

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//   * Your game will hide this amount until the player clicks a crystal.

//   * When they do click one, update the player's score counter.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// initialize
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber ID in the html doc
    //
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

// set game variables
var wins = 0;
var losses = 0;
var startgame = false;
var userScore = 0;
$('#wins').text(wins);
$('#losses').text(losses);

// reset game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 
//adds the wins to the userTotal
function yay(){
    alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }
    //addes the losses to the userTotal
    function loser(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }
    //sets up click for jewels
      $('#one').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
              //sets win/lose conditions
            if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            }   
      })  
      $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
            if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            } 
      })  
      $('#three').on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
    //sets win/lose conditions
              if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            } 
      })  
      $('#four').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
          
              if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            }
      });   
    });     

// var rainbow = document.getElementById("rainbow");
// //rainbow.setAttribute("value", "5");
// console.log(rainbow.value);

// var green = document.getElementById("green");
// //green.setAttribute("value", "10");
// console.log(green.value);

// var green = document.getElementById("red");
// //red.setAttribute("value", "15");
// console.log(red.value);

// var blue = document.getElementById("blue");
// //blue.setAttribute("value", "20");
// console.log(blue.value);

// var userScore = document.getElementById('userScore');
// //var userScore = getElementById(rainbow, green, red, blue.onclick(math.sum));
// userScore.innerHTML = 0; //
// var computerScore = document.getElementById('computerScore');
// computerScore.innerHTML = getRandomValue(10, 4);

// function addToScore(val) {
//   var numberToAdd = parseInt(val);
//   var currentScore = parseInt(userScore.innerHTML);
//   userScore.innerHTML = numberToAdd + currentScore;
// }


// // add an event listener to elements
// rainbow.addEventListener('click', function() {
//   //this refers to rainbow
//   addToScore(this.value);
//   checkPlayerScore();
// });


// green.addEventListener('click', function() {
//   // this refers to green
//   addToScore(this.value);
//   checkPlayerScore();
// });

// red.addEventListener('click', function() {
//   // this refers to red
//   addToScore(this.value);
//   checkPlayerScore();
// });

// blue.addEventListener('click', function() {
//   // this refers to blue
//   addToScore(this.value);
//   checkPlayerScore();
// });

// //var sum = parseInt(rainbow.value) + parseInt(green.value) + parseInt(red.value) + parseInt(blue.value);
// // console.log (sum);

// function getRandomValue (a, b){
//   return Math.floor((Math.random() * a) + b);
// }

// function checkPlayerScore() {
//   //userScore, computerScore (parseFloat() is for decimals)
//   var playerInt = parseInt(userScore.innerHTML);
//   var targetInt = parseInt(computerScore.innerHTML);
//   if (playerInt === targetInt) {
//       alert('You win!');
//   } else if (playerInt > targetInt) {
//     alert('You lose!');
//   } 
// }

// console.log(getRandomValue(10, 4));