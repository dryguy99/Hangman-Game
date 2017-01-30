/* define varibles*/
var guessCounter = 12;
var winCounter = 0;
var lossCounter = 0;
var movieArray = ["Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The Kings Speach", "The Hurt Locker", "Slumdog Millionaire", "No Country for Old Men", "The Departed", "Crash", "Million Dollar Baby", "The Return of the King", "Chicago", "A Beautiful Mind", "Gladiator", "American Beauty", "Titanic", "Shakespeare in Love", "The English Patient", "Braveheart", "Forest Gump", "Schindlers List", "Unforgiven", "Dances With Wolves", "Driving Miss Daisy", "The Last Emperor", "Platoon", "Out of Aferica", "Amadeus", "Terms Of Endearment", "Ganghi", "Chariots Of Fire", "Ordinary People", "Kramer vs Kramer", "The Deer Hunter", "Annie Hall", "Rocky", "One Flew Over The Cuckoos Nest", "The Godfather Part 2", "The Sting", "The Godfather", "The French Connection", "Patton","Midnight Cowboy", "Oliver"];
var pressedButtonArray = [""];
var computerPick = "American Sniper";
var movietitleWithBlanks = " ";



/* pick random movie from movieArray 
function shoot() {
    
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
 	};   */
/* pick movie title at random and set spaces */
(function initialize() {
	computerPick = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(computerPick);
    movietitleWithBlanks = computerPick.replace(/\w/g,"_ ");
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
})();

function shoot() {
	document.getElementById("letters").addEventListener("keyup", myFunction);

function myFunction() {
    var x = document.getElementById("letters");
    x.value = x.value.tolowerCase();
}
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
