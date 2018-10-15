
// * The random number shown at the start of the game should be between 19 - 120.
// * Each crystal should have a random hidden value between 1 - 12.
// * There will be four crystals displayed as buttons on the page. X
// * The player will be shown a random number at the start of the game. X
// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// * Your game will hide this amount until the player clicks a crystal.
// * When they do click one, update the player's score counter.
// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.
// * The game restarts whenever the player wins or loses.
// * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// initialize
$(document).ready(function(){

// Selects a random number (between 19-120) to be shown at the start of the game
var random = Math.floor(Math.random()*101+19)
// Appending random number to the randomNumber ID in the html doc
$('#randomNumber').text(Random);

// Set Crystal variable values
var rainbowGem = Math.floor(Math.random()*11+1)
var greenGem = Math.floor(Math.random()*11+1)
var redGem = Math.floor(Math.random()*11+1)
var blueGem = Math.floor(Math.random()*11+1)

// set game variables
var wins = 0;
var losses = 0;
var startgame = false;
var userScore = 0;
$('#wins').text(wins);
$('#losses').text(losses);

// reset game
function reset(){
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    rainbowGem = Math.floor(Math.random()*11+1);
    greenGem = Math.floor(Math.random()*11+1);
    redGem = Math.floor(Math.random()*11+1);
    blueGem = Math.floor(Math.random()*11+1);
    userScore = 0;
    $('#userScore').text("Play Again?");
    } 

// Add the wins to the userScore
function win(){
    alert("You won!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }

// Add the losses to the userScore
    function loss(){
    alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }
    
// Set up click for gems
      $('#rainbow').on ('click', function(){
        userScore = userScore + rainbowGem;
        console.log("New userScore = " + userScore);
        $('#userScore').text(userScore); 
// Set win/lose conditions
        if (userScore == Random){
            win();
            }
        else if (userScore > Random){
            loss();
            }   
      })

      $('#green').on ('click', function(){
        userScore = userScore + greenGem;
        console.log("New userScore = " + userScore);
        $('#userScore').text(userScore); 
        if (userScore == Random){
            win();
            }
        else if (userScore > Random){
            loss();
            } 
      }) 

      $('#red').on ('click', function(){
        userScore = userScore + redGem;
        console.log("New userScore = " + userScore);
        $('#userScore').text(userScore); 
        if (userScore == Random){
            win();
            }
        else if (userScore > Random){
            loss();
            } 
      }) 

      $('#blue').on ('click', function(){
        userScore = userScore + blueGem;
        console.log("New userScore = " + userScore);
        $('#userScore').text(userScore); 
        if (userScore == Random){
            win();
            }
        else if (userScore > Random){
            loss();
            } 
      }); 
    }) 

