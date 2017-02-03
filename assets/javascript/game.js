/* add jQuery to javascript*/

/* define varibles*/
var guessCounter = 10;
var winCounter = 0;
var lossCounter = 0;
var movieArray = ["Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The Kings Speach", "The Hurt Locker", "Slumdog Millionaire", "No Country for Old Men", "The Departed", "Crash", "Million Dollar Baby", "The Return of the King", "Chicago", "A Beautiful Mind", "Gladiator", "American Beauty", "Titanic", "Shakespeare in Love", "The English Patient", "Braveheart", "Forest Gump", "Schindlers List", "Unforgiven", "Silence Of The Lambs", "Dances With Wolves", "Driving Miss Daisy", "Rainman", "The Last Emperor", "Platoon", "Out of Africa", "Amadeus", "Terms Of Endearment", "Ganghi", "Chariots Of Fire", "Ordinary People", "Kramer vs Kramer", "The Deer Hunter", "Annie Hall", "Rocky", "One Flew Over The Cuckoos Nest", "The Godfather Part 2", "The Sting", "The Godfather", "The French Connection", "Patton","Midnight Cowboy", "Oliver", "In The Heat Of THe Night", "A Man For All Seasons", "The Sound Of Music"];
var moviepicArray = ["http://www.filmsite.org/moviescreens/spotlight.jpg", "http://www.filmsite.org/pictures/birdman.jpg", "http://www.filmsite.org/credits/12yearsaslave.jpg", "http://www.filmsite.org/screens/argo.jpg", "http://www.filmsite.org/posters/artist-titlescreen.jpg", "http://www.filmsite.org/posters/kingsspeechtitle.jpg", "http://www.filmsite.org/posters/hurtlockertitle.jpg", "http://www.filmsite.org/titles/slumdogmill.jpg", "http://www.filmsite.org/filmfotos/nocountryforoldmen_title.jpg", "http://www.filmsite.org/filmfotos/departed.jpg", "http://www.filmsite.org/titles/crash2005.jpg", "http://www.filmsite.org/titles/milliondollarbaby-title.jpg", "http://www.filmsite.org/titles/lordofringsretofkingp2.jpg", "http://www.filmsite.org/titles/chicago.jpg", "http://www.filmsite.org/titles/beautifulmind-title.jpg", "http://www.filmsite.org/titles/gladiator-title.jpg", "http://www.filmsite.org/titles/americanbeauty-title.jpg", "http://www.filmsite.org/titles/titanic-title.jpg", "http://www.filmsite.org/titles/shakespeareinlove-title.jpg", "http://www.filmsite.org/titles/englishpatient-title.jpg", "http://www.filmsite.org/titles/braveheart-title.jpg", "http://www.filmsite.org/titles/forrestgump-title.jpg", "http://www.filmsite.org/titles/schindlerslist-title.jpg", "http://www.filmsite.org/titles/unforgiven-title.jpg", "http://www.filmsite.org/titles/silenceoflambs-title.jpg", "http://www.filmsite.org/titles/danceswithwolves-title.jpg", "http://www.filmsite.org/screens/drivingmissdaisy.jpg", "http://www.filmsite.org/titles/rainman-title.jpg", "http://www.filmsite.org/titles/lastemperor.jpg", "http://www.filmsite.org/titles/platoon-title.jpg", "http://www.filmsite.org/screens/outofafrica.jpg", "http://www.filmsite.org/titles/amadeus-title.jpg", "http://www.filmsite.org/titles/termsofendearment-title.jpg", "http://www.filmsite.org/titles/gandhi-title.jpg", "http://www.filmsite.org/filmfotos/chariotsfire.jpg", "http://www.filmsite.org/filmfotos/ordinarypeople6.jpg", "http://www.filmsite.org/filmfotos/kramer5.jpg", "http://www.filmsite.org/titles/deerhunter.jpg", "http://www.filmsite.org/titles/anniehall.jpg", "http://www.filmsite.org/titles/rocky-title.jpg", "http://www.filmsite.org/titles/oneflewovercuckoosnest-titl.jpg", "http://www.filmsite.org/titles/godfather1974-title.jpg", "http://www.filmsite.org/titles/sting-title.jpg", "http://www.filmsite.org/titles/godfather1972-title.jpg", "http://www.filmsite.org/titles/frenchconnection-title.jpg", "http://www.filmsite.org/titles/patton-title.jpg", "http://www.filmsite.org/titles/midnightcowboy-title.jpg", "http://www.filmsite.org/titles/oliver.jpg", "http://www.filmsite.org/titles/intheheatofnight-title.jpg", "http://www.filmsite.org/titles/manforallseasons.jpg", "http://www.filmsite.org/titles/soundofmusic-title.jpg"]
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
var win = "../Hangman-Game/assets/audio/applause"
var lose = "../Hangman-Game/assets/audio/sad-trombone"
var hgcounter = 1;
//for (i=0; i < movieArray.length; ++i) {
//	console.log(i + "=" + movieArray[i] + " - " + moviepicArray[i])
//}





/* start game by picking  movie title at random and set spaces for words */
function initialize() {
	pressedButtonArray = [];
	guessCounter = 10;
	/*reset hangman image for next game*/
	document.getElementById("hangman").src = ("assets/images/hg0.jpg");
	guessList = "";
	computerPickU = movieArray[Math.floor(Math.random() * movieArray.length)]; /*pick random movie*/
	computerPick = computerPickU.toUpperCase(); /*convert to all uppercase*/
    console.log(computerPick);/*print to console for testing*/
    /*create the correct blank lengths & display and later fill in*/
    movietitleWithBlanks = computerPick.replace(/ /g,"9").replace(/\D/g, "_").replace(/9/g, '-'); 
    document.getElementById("movie").innerHTML = movietitleWithBlanks;
    /*split the string up by letters into an array for comparison*/
    checkArray = computerPick.split("");
    /*create an array of blanks for replacing by index # later*/
    movieTitleArray = movietitleWithBlanks.split("");
    /* print the initial guess count to the screen & clear the guessed letters*/
    document.getElementById("guesscount").innerHTML = guessCounter;
    document.getElementById("letters").innerHTML = guessList;

} /* run initialize function*/
initialize();

/* print guessed letters to screen*/
function printLetters(){
  	guessList = "";
  		for(var i=0; i < pressedButtonArray.length; ++i){
      		guessList = (guessList + pressedButtonArray[i] + " ");
 			};
  	console.log("outside: " + guessList);
  	document.getElementById("letters").innerHTML = guessList;
  	console.log("captured");
}		

/* check to see if selected letter is unique & add unique to array*/
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
 				/*console.log("WL - index: " + a + b + " " + item + " " + movieTitleArray);*/
 			}
 				else {a += 1;}
 		}
 		a = 0;
 	}
 	else {
 		guessCounter--;
 		document.getElementById("guesscount").innerHTML = guessCounter;
 		document.getElementById("hangman").src = ("assets/images/hg" + hgcounter + ".jpg");
 		hgcounter++;
 	}
 	
 }

 function audioPlay(filename) {
 		document.getElementById("myaudio").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg"><embed hidden="true" autostart="true" loop="false" volume="0.7" src="' + filename +'.mp3"></audio>';

 }

 
 function delaywinAlert() {
 		if (confirm("YOU WON!\nPlay Again?")) {
 			initialize();
 			clearTimeout;
 		}
 		else { 
 			alert("GAME OVER!")
 			clearTimeout; }
 }

function delaylossAlert() {
		if (confirm("YOU LOST!\nPlay Again?")) {
 			initialize();
 			clearTimeout;
 		}
 		else { 
 			alert("GAME OVER!")
 			clearTimeout;}
 }


 function winorLose() {
 	console.log(winCounter)
 	if (movieTitleArray.indexOf("_") < 0) {
 		// you won message - update picture - update win count -
 		winCounter++;
 		var b = movieArray.indexOf(computerPickU)
 		document.getElementById("moviepic").src = moviepicArray[b];
 		audioPlay(win);
 		/*console.log("after increment: " + winCounter);*/
 		document.getElementById("wincount").innerHTML = (winCounter + " -");
 		document.getElementById("losscount").innerHTML = ("- " + lossCounter);
 		document.getElementById("answer").innerHTML = computerPickU;
 		guessList = "";
 		document.getElementById("letters").innerHTML = guessList;
console.log("yeti");
 		setTimeout(delaywinAlert, 3500);
 	}
 	else if (guessCounter <= 0) {
 		// you lost - update picture - update loss count
 		lossCounter++;
 		audioPlay(lose);
 		var b = movieArray.indexOf(computerPickU)
 		document.getElementById("moviepic").src = moviepicArray[b];
 		document.getElementById("wincount").innerHTML = (winCounter + " -");
 		document.getElementById("losscount").innerHTML = ("- " + lossCounter);
 		document.getElementById("answer").innerHTML = computerPickU;
 		setTimeout(delaylossAlert, 3000);
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
