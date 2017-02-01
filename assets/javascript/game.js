/* add jQuery to javascript*/

/* define varibles*/
var guessCounter = 12;
var winCounter = 0;
var lossCounter = 0;
var movieArray = ["Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The Kings Speach", "The Hurt Locker", "Slumdog Millionaire", "No Country for Old Men", "The Departed", "Crash", "Million Dollar Baby", "The Return of the King", "Chicago", "A Beautiful Mind", "Gladiator", "American Beauty", "Titanic", "Shakespeare in Love", "The English Patient", "Braveheart", "Forest Gump", "Schindlers List", "Unforgiven", "Dances With Wolves", "Driving Miss Daisy", "The Last Emperor", "Platoon", "Out of Aferica", "Amadeus", "Terms Of Endearment", "Ganghi", "Chariots Of Fire", "Ordinary People", "Kramer vs Kramer", "The Deer Hunter", "Annie Hall", "Rocky", "One Flew Over The Cuckoos Nest", "The Godfather Part 2", "The Sting", "The Godfather", "The French Connection", "Patton","Midnight Cowboy", "Oliver"];
var pressedButton = "";
var pressedButtonArray = [""];
var computerPick = "American Sniper";
var movietitleWithBlanks = " ";
var guessList = " ";
var inArray = 0;
var checkArray = [];
var indexN = 0;
var movieTitleArray = [];


/* pick random movie from movieArray 
function shoot() {
    
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
 	};   */
/* start game by picking  movie title at random and set spaces for words */
function initialize() {
	computerPick = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(computerPick);
    movietitleWithBlanks = computerPick.replace(/\w/g,"_ ");
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
    checkArray = computerPick.split("");
    movieTitleArray = movietitleWithBlanks.split("");
}
initialize();

/* print guessed letters to screen*/
function printLetters(){
  	guessList = "";
  		for(var i=1; i < pressedButtonArray.length; ++i){
      		guessList = (guessList + pressedButtonArray[i] + " ");
      		console.log("inside: " + guessList)
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
/* check to see if selected letter is in the title and display the letter in the correct place.*/
function findLetters(item) {

 	if (checkArray.indexOf(item) >=0) {
 		
 		var a = checkArray.indexOf(item);
 		movieTitleArray[a] = item;
 		a += 1;
 		console.log("index: " + a + " " + item + " " + movieTitleArray);
 		while ((checkArray.length - 1) >= a) {
 			if ((checkArray.indexOf(item, a) > 0) && (checkArray.indexOf(item, a) < checkArray.length)) {
 				var b = checkArray.indexOf(item, a);
 				movieTitleArray[b] = item;
 				a = b + 1;
 				console.log("WL - index: " + a + " " + item + " " + movieTitleArray);
 			}
 				else {a += 1;}
 		}
 	}
 }
 

document.onkeyup = function(event) {
	pressedButton = event.key;
	alert(pressedButton);
	
	if (inArray === 0) {
		pressedButtonArray.push(pressedButton);
		inArray = 1;
		};
	findLetters(pressedButton);
	compareLetters(pressedButton);
	printLetters();
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
