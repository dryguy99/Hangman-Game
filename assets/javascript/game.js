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


/* pick random movie from movieArray 
function shoot() {
    
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
 	};   */
/* pick movie title at random and set spaces */
function initialize() {
	computerPick = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(computerPick);
    movietitleWithBlanks = computerPick.replace(/\w/g,"_ ");
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
    checkArray = computerPick.split("");
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

function myFunction() {
    var x = document.getElementById("letters");
    x.value = x.value.tolowerCase();
}

function compareLetters(item) {
	
	if (!(pressedButtonArray.indexOf(item) > -1) ) {
		pressedButtonArray.push(item);
		console.log(pressedButtonArray);
		};	
}

function findLetters(item) {
	
 if (checkArray.indexOf(item) >=0) {
 	
 	};
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
