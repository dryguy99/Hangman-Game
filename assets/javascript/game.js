/* add jQuery to javascript*/

/* define varibles*/
var guessCounter = 12;
var winCounter = 0;
var lossCounter = 0;
var movieArray = ["Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The Kings Speach", "The Hurt Locker", "Slumdog Millionaire", "No Country for Old Men", "The Departed", "Crash", "Million Dollar Baby", "The Return of the King", "Chicago", "A Beautiful Mind", "Gladiator", "American Beauty", "Titanic", "Shakespeare in Love", "The English Patient", "Braveheart", "Forest Gump", "Schindlers List", "Unforgiven", "Dances With Wolves", "Driving Miss Daisy", "The Last Emperor", "Platoon", "Out of Aferica", "Amadeus", "Terms Of Endearment", "Ganghi", "Chariots Of Fire", "Ordinary People", "Kramer vs Kramer", "The Deer Hunter", "Annie Hall", "Rocky", "One Flew Over The Cuckoos Nest", "The Godfather Part 2", "The Sting", "The Godfather", "The French Connection", "Patton","Midnight Cowboy", "Oliver"];
var pressedButton = "";
var pressedButtonArray = [""];
var computerPick = "AMERICAN SNIPER";
var computerPickU = "American Sniper";
var movietitleWithBlanks = " ";
var guessList = "";
var inArray = 0;
var checkArray = [];
var indexN = 0;
var movieTitleArray = [];
var guessCorrect = "";




/* start game by picking  movie title at random and set spaces for words */
function initialize() {
	pressedButtonArray = [];
	guessCounter = 12;
	guessList = "";
	computerPickU = movieArray[Math.floor(Math.random() * movieArray.length)];
	computerPick = computerPickU.toUpperCase();
    console.log(computerPick);
    movietitleWithBlanks = computerPick.replace(/ /g,"9").replace(/\D/g, "_").replace(/9/g, '-');
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
    checkArray = computerPick.split("");
    movieTitleArray = movietitleWithBlanks.split("");
    document.getElementById("guesscount").innerHTML = guessCounter;
    document.getElementById("letters").innerHTML = guessList;

}
initialize();

/* print guessed letters to screen*/
function printLetters(){
  	guessList = "";
  		for(var i=0; i < pressedButtonArray.length; ++i){
      		guessList = (guessList + pressedButtonArray[i] + " ");
 			};
  	console.log("outside: " + guessList);
  	document.getElementById("letters").innerHTML = guessList;
}		
/* convert all letters to uppercase */
function myFunction() {
    var x = document.getElementById("letters");
    x.value = x.value.tolowerCase();
}
/* check to see if selected letter is unique */
function compareLetters(item) {
	
	if (!(pressedButtonArray.indexOf(item) > -1) ) {
		pressedButtonArray.push(item);
		};	
}

function correctGuess() {
		guessCorrect = "";
  			for(var i=0; i < movieTitleArray.length; ++i){
      			guessCorrect = (guessCorrect + movieTitleArray[i] + " ");
 			};
  		console.log("outside: " + guessCorrect);
  		document.getElementById("movie").innerHTML = guessCorrect;
}
 		

/* check to see if selected letter is in the title and display the letter in the correct place.*/
function findLetters(item) {

 	if (checkArray.indexOf(item) >=0) {
 		
 		var a = checkArray.indexOf(item);
 		movieTitleArray[a] = item;
 		a += 1;
 		correctGuess();
 		console.log("index: " + a + " " + item + " " + movieTitleArray);
 		while ((checkArray.length - 1) >= a) {
 			if ((checkArray.indexOf(item, a) > 0) && (checkArray.indexOf(item, a) < checkArray.length)) {
 				var b = checkArray.indexOf(item, a);
 				movieTitleArray[b] = item;
 				a = b + 1;
 				correctGuess();
 				console.log("WL - index: " + a + b + " " + item + " " + movieTitleArray);
 			}
 				else {a += 1;}
 		}
 		a = 0;
 	}
 	else {
 		guessCounter = guessCounter - 1;
 		document.getElementById("guesscount").innerHTML = guessCounter;
 	}
 	
 }
 function winorLose() {
 	if (movieTitleArray.indexOf("_") < 0) {
 		// you won message - update picture - update win count -
 		document.getElementById("answer").innerHTML = computerPickU;
 		if (confirm("YOU WON!\nPlay Again?")) {
 			initialize();
 		}
 	}
 	else if (guessCounter === 0) {
 		// you lost update picture - update loss count
 		
 	}
 }

document.onkeyup = function(event) {
	var pressedButtonL = event.key;
	pressedButton = pressedButtonL.toUpperCase();
	
	if (inArray === 0) {
		pressedButtonArray.push(pressedButton);
		inArray = 1;
		};
	findLetters(pressedButton);
	compareLetters(pressedButton);
	printLetters();
	winorLose();
} 
/* get keypress 
$("#letters").keydown (function (e) {
    alert ($(this).val());
}); */

/*$(document).ready(trackGuesses() {
    $("#letters").keypress(function(){
        $("span").text(guessCounter -= 1);
    });
    });*/
